#!/usr/bin/env node
/**
 * SEO baseline audit (Phase 0 of the SEO/AEO/GEO plan). Read-only.
 *
 * Usage:
 *   node scripts/seo-audit.mjs [baseUrl] [outDir]
 *   baseUrl defaults to http://localhost:3006 (a `next start` production build).
 *   Sitemap URLs on the canonical host are fetched from baseUrl, so a local
 *   production build and the live site produce the same report.
 *
 * Writes <outDir>/baseline.json and <outDir>/baseline.csv (outDir defaults to ./audit).
 */
import fs from "node:fs";
import path from "node:path";

const BASE = (process.argv[2] || "http://localhost:3006").replace(/\/$/, "");
const OUT = process.argv[3] || "audit";
const CANON = "https://www.funnelsthatprint.com";
const toBase = (u) => u.replace(CANON, BASE);
const toPath = (u) => u.replace(CANON, "").replace(BASE, "") || "/";

async function get(url, init = {}) {
  const t0 = Date.now();
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { redirect: "manual", ...init });
      return { r, ms: Date.now() - t0, body: r.status === 200 ? await r.text() : "" };
    } catch {
      await new Promise((s) => setTimeout(s, 400));
    }
  }
  return { r: null, ms: Date.now() - t0, body: "" };
}

async function chain(url) {
  const hops = [];
  let u = url;
  for (let i = 0; i < 6; i++) {
    const { r, ms, body } = await get(u);
    if (!r) return { hops, status: 0, ms, body: "" };
    if (r.status >= 300 && r.status < 400 && r.headers.get("location")) {
      hops.push(`${r.status} ${toPath(u)}`);
      u = new URL(r.headers.get("location"), u).href;
      continue;
    }
    return { hops, status: r.status, ms, body, headers: r.headers, final: u };
  }
  return { hops, status: 0, ms: 0, body: "" };
}

const strip = (h) =>
  h
    .replace(/<(script|style|noscript|svg)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
const one = (h, re) => (h.match(re) || [])[1] ?? null;
const all = (h, re) => [...h.matchAll(re)].map((m) => m[1]);
const words = (s) => (s ? s.split(" ").filter(Boolean).length : 0);

function mainText(h) {
  const m = h.match(/<main[\s\S]*?<\/main>/i);
  const main = m ? m[0] : h;
  return strip(main.replace(/<nav[\s\S]*?<\/nav>/gi, " "));
}

function shingles(text, n = 5) {
  const w = text.toLowerCase().replace(/[^a-z0-9$%. ]/g, " ").split(/\s+/).filter(Boolean);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(" "));
  return s;
}
function jaccard(a, b) {
  let inter = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const x of small) if (big.has(x)) inter++;
  const uni = a.size + b.size - inter;
  return uni ? inter / uni : 0;
}
const section = (p) => {
  if (p === "/") return "home";
  const s = p.split("/")[1];
  if (["case-studies", "case-leadgen", "case-ecom", "milliondollarcasestudy", "scalelowticket"].includes(s)) return "case-studies";
  if (["blog"].includes(s)) return "blog";
  if (["funnels-for"].includes(s)) return "industries";
  if (["locations", "lead-generation-agency-dubai", "ai-voice-agent-dubai"].includes(s)) return "locations";
  if (["compare", "glossary", "templates", "tools"].includes(s)) return s;
  return "core";
};

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  // Sitemaps: index + children.
  const idx = (await get(BASE + "/sitemap.xml")).body;
  const kids = all(idx, /<loc>([^<]+)<\/loc>/g);
  let urls = [];
  const sitemaps = {};
  for (const k of kids) {
    const x = (await get(toBase(k))).body;
    const locs = all(x, /<loc>([^<]+)<\/loc>/g).filter((u) => !/\.(jpe?g|png|webp|gif|mp4)$/i.test(u));
    sitemaps[toPath(k)] = locs.length;
    urls.push(...locs);
  }
  urls = [...new Set(urls)];
  const extras = {};
  for (const f of ["/robots.txt", "/llms.txt", "/llms-full.txt", "/feed.xml"]) {
    const { r, body } = await get(BASE + f);
    extras[f] = { status: r?.status ?? 0, bytes: body.length, words: words(body.replace(/\s+/g, " ").trim()) };
  }

  // Nav/footer links from the home page.
  const home = (await get(BASE + "/")).body;
  const chrome = (home.match(/<header[\s\S]*?<\/header>/i)?.[0] ?? "") + (home.match(/<footer[\s\S]*?<\/footer>/i)?.[0] ?? "");
  const navLinks = [...new Set(all(chrome, /href="(\/[^"#?]*)"/g))];
  const paths = [...new Set([...urls.map(toPath), ...navLinks])];

  const rows = [];
  const linksIn = Object.fromEntries(paths.map((p) => [p, 0]));
  const shingleMap = {};
  const q = [...paths];
  await Promise.all(
    Array.from({ length: 6 }, async () => {
      while (q.length) {
        const p = q.shift();
        const c = await chain(BASE + p);
        const h = c.body || "";
        const head = h.match(/<head[\s\S]*?<\/head>/i)?.[0] ?? h;
        const title = one(head, /<title[^>]*>([^<]*)<\/title>/i);
        const desc = one(head, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
        const canonical = one(head, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
        const robots = one(head, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i);
        const ld = all(h, /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi);
        const types = new Set();
        let ldErrors = 0;
        for (const j of ld) {
          try {
            const walk = (o) => {
              if (Array.isArray(o)) return o.forEach(walk);
              if (o && typeof o === "object") {
                if (o["@type"]) [].concat(o["@type"]).forEach((t) => types.add(t));
                Object.values(o).forEach(walk);
              }
            };
            walk(JSON.parse(j));
          } catch {
            ldErrors++;
          }
        }
        const imgs = all(h, /(<img\b[^>]*>)/gi);
        const noAlt = imgs.filter((t) => !/\balt=/.test(t)).length;
        const emptyAltVisible = imgs.filter((t) => /\balt=""/.test(t) && !/aria-hidden="true"/.test(t)).length;
        const out = [...new Set(all(h, /href="(\/[^"#?]*)"/g))].filter((x) => x !== p);
        for (const o of out) if (o in linksIn) linksIn[o]++;
        const mt = mainText(h);
        shingleMap[p] = shingles(mt);
        rows.push({
          path: p,
          status: c.status,
          redirects: c.hops.join(" > "),
          ms: c.ms,
          title,
          titleLen: title?.length ?? 0,
          desc,
          descLen: desc?.length ?? 0,
          canonical,
          selfCanonical: canonical === CANON + (p === "/" ? "" : p) || canonical === CANON + p,
          robots,
          xRobots: c.headers?.get("x-robots-tag") ?? null,
          h1: (h.match(/<h1\b/gi) || []).length,
          h2: all(h, /<h2[^>]*>([\s\S]*?)<\/h2>/gi).map(strip).slice(0, 20),
          words: words(strip(h)),
          mainWords: words(mt),
          ldTypes: [...types].sort(),
          ldErrors,
          imgs: imgs.length,
          imgsNoAlt: noAlt,
          imgsEmptyAltVisible: emptyAltVisible,
          linksOut: out.length,
          og: /property="og:title"/.test(head) && /property="og:image"/.test(head),
          twitter: /name="twitter:card"/.test(head),
          lang: one(h, /<html[^>]+lang="([^"]+)"/i),
          hreflang: /hreflang=/.test(head),
          section: section(p),
          inSitemap: urls.map(toPath).includes(p),
        });
      }
    }),
  );
  for (const r of rows) r.linksIn = linksIn[r.path] ?? 0;

  // Near-duplicates per section.
  const dupes = [];
  const sectionStats = {};
  const bySec = {};
  for (const r of rows) if (r.status === 200) (bySec[r.section] ??= []).push(r.path);
  for (const [sec, ps] of Object.entries(bySec)) {
    let sum = 0, n = 0, over = 0;
    const maxFor = Object.fromEntries(ps.map((p) => [p, 0]));
    for (let i = 0; i < ps.length; i++)
      for (let j = i + 1; j < ps.length; j++) {
        const s = jaccard(shingleMap[ps[i]], shingleMap[ps[j]]);
        sum += s; n++;
        maxFor[ps[i]] = Math.max(maxFor[ps[i]], s);
        maxFor[ps[j]] = Math.max(maxFor[ps[j]], s);
        if (s > 0.35) { over++; dupes.push({ section: sec, a: ps[i], b: ps[j], jaccard: +s.toFixed(3) }); }
      }
    sectionStats[sec] = { pages: ps.length, avgJaccard: n ? +(sum / n).toFixed(3) : 0, pairsOver035: over };
    for (const r of rows) if (r.section === sec) r.maxJaccard = +(maxFor[r.path] ?? 0).toFixed(3);
  }

  rows.sort((a, b) => a.path.localeCompare(b.path));
  const titles = {};
  for (const r of rows) if (r.title) (titles[r.title] ??= []).push(r.path);
  const summary = {
    base: BASE,
    generated: new Date().toISOString(),
    urls: rows.length,
    sitemaps,
    files: extras,
    non200: rows.filter((r) => r.status !== 200).map((r) => `${r.status} ${r.path}`),
    redirectChains: rows.filter((r) => r.redirects).map((r) => `${r.path}: ${r.redirects}`),
    notSelfCanonical: rows.filter((r) => r.status === 200 && !r.selfCanonical).map((r) => `${r.path} -> ${r.canonical}`),
    noindex: rows.filter((r) => /noindex/.test(r.robots || "") || /noindex/.test(r.xRobots || "")).map((r) => r.path),
    h1Not1: rows.filter((r) => r.status === 200 && r.h1 !== 1).map((r) => `${r.path} (${r.h1})`),
    titleOutside50to60: rows.filter((r) => r.status === 200 && (r.titleLen < 50 || r.titleLen > 60)).length,
    titleOver60: rows.filter((r) => r.titleLen > 60).map((r) => `${r.path} (${r.titleLen})`),
    descOutside140to158: rows.filter((r) => r.status === 200 && (r.descLen < 140 || r.descLen > 158)).length,
    duplicateTitles: Object.entries(titles).filter(([, v]) => v.length > 1),
    ldErrors: rows.filter((r) => r.ldErrors).map((r) => r.path),
    noBreadcrumb: rows.filter((r) => r.status === 200 && !r.ldTypes.includes("BreadcrumbList")).map((r) => r.path),
    imgsNoAlt: rows.reduce((s, r) => s + r.imgsNoAlt, 0),
    imgsEmptyAltVisible: rows.reduce((s, r) => s + r.imgsEmptyAltVisible, 0),
    noOgOrTwitter: rows.filter((r) => r.status === 200 && (!r.og || !r.twitter)).map((r) => r.path),
    orphans: rows.filter((r) => r.inSitemap && r.linksIn === 0).map((r) => r.path),
    under3LinksIn: rows.filter((r) => r.inSitemap && r.linksIn < 3).length,
    thinUnder600MainWords: rows.filter((r) => r.status === 200 && r.mainWords < 600).map((r) => `${r.path} (${r.mainWords})`),
    sectionStats,
    duplicatePairsOver035: dupes.length,
    avgMs: Math.round(rows.reduce((s, r) => s + r.ms, 0) / rows.length),
  };
  fs.writeFileSync(path.join(OUT, "baseline.json"), JSON.stringify({ summary, rows, duplicatePairs: dupes.sort((a, b) => b.jaccard - a.jaccard) }, null, 1));
  const cols = ["path", "section", "status", "redirects", "ms", "titleLen", "descLen", "selfCanonical", "robots", "h1", "words", "mainWords", "maxJaccard", "ldTypes", "ldErrors", "imgs", "imgsNoAlt", "linksIn", "linksOut", "og", "twitter", "title"];
  const esc = (v) => `"${String(Array.isArray(v) ? v.join(" ") : v ?? "").replace(/"/g, '""')}"`;
  fs.writeFileSync(path.join(OUT, "baseline.csv"), [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n"));
  console.log(JSON.stringify({ ...summary, duplicateTitles: summary.duplicateTitles.length, thinUnder600MainWords: summary.thinUnder600MainWords.length, orphans: summary.orphans.length, noBreadcrumb: summary.noBreadcrumb.length }, null, 1));
}
main();
