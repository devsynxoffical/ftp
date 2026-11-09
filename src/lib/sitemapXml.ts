import type { MetadataRoute } from "next";
import { allSitemapEntries } from "@/lib/sitemapEntries";

export const BASE_URL = "https://www.funnelsthatprint.com";

/**
 * The sitemap is split by page type so Search Console reports indexing per
 * group. Grouping is by URL prefix, so new pages land in the right file
 * automatically.
 */
export const SITEMAP_GROUPS = ["core", "industries", "locations", "content", "case-studies"] as const;
export type SitemapGroup = (typeof SITEMAP_GROUPS)[number];

const INDUSTRY_PREFIXES = ["/funnels-for", "/ai-appointment-setter/", "/ai-voice-agents/"];
const LOCATION_PREFIXES = ["/locations", "/lead-generation-agency-dubai", "/ai-voice-agent-dubai"];
const CONTENT_PREFIXES = ["/blog", "/tools", "/templates", "/glossary", "/compare"];
const CASE_PREFIXES = ["/case-studies", "/case-leadgen", "/case-ecom", "/milliondollarcasestudy", "/scalelowticket"];

export function groupOf(url: string): SitemapGroup {
  const path = url.replace(BASE_URL, "") || "/";
  // "/funnels-for" matches the hub and its children; "/ai-voice-agents/" matches children only.
  const starts = (list: string[]) => list.some((p) => (p.endsWith("/") ? path.startsWith(p) : path === p || path.startsWith(`${p}/`)));
  if (starts(INDUSTRY_PREFIXES)) return "industries";
  if (starts(LOCATION_PREFIXES)) return "locations";
  if (starts(CONTENT_PREFIXES)) return "content";
  if (starts(CASE_PREFIXES)) return "case-studies";
  return "core";
}

export function entriesFor(group: SitemapGroup): MetadataRoute.Sitemap {
  return allSitemapEntries().filter((e) => groupOf(e.url) === group);
}

// Entry text fields are escaped where they are built (see sitemapEntries.ts);
// URLs only need "&" escaped.
const loc = (u: string) => u.replace(/&(?!amp;)/g, "&amp;");
const iso = (d: string | Date | undefined) => (d ? new Date(d).toISOString() : undefined);

export function urlsetXml(entries: MetadataRoute.Sitemap): string {
  const body = entries
    .map((e) => {
      const parts = [`<loc>${loc(e.url)}</loc>`];
      for (const img of e.images ?? []) parts.push(`<image:image><image:loc>${loc(img)}</image:loc></image:image>`);
      for (const v of e.videos ?? []) {
        parts.push(
          "<video:video>" +
            `<video:title>${v.title}</video:title>` +
            `<video:thumbnail_loc>${loc(v.thumbnail_loc)}</video:thumbnail_loc>` +
            `<video:description>${v.description}</video:description>` +
            (v.content_loc ? `<video:content_loc>${loc(v.content_loc)}</video:content_loc>` : "") +
            (v.duration ? `<video:duration>${v.duration}</video:duration>` : "") +
            (v.publication_date ? `<video:publication_date>${v.publication_date}</video:publication_date>` : "") +
            (v.family_friendly ? `<video:family_friendly>${v.family_friendly}</video:family_friendly>` : "") +
            "</video:video>"
        );
      }
      const lm = iso(e.lastModified);
      if (lm) parts.push(`<lastmod>${lm}</lastmod>`);
      if (e.changeFrequency) parts.push(`<changefreq>${e.changeFrequency}</changefreq>`);
      if (e.priority !== undefined) parts.push(`<priority>${e.priority}</priority>`);
      return `<url>\n${parts.join("\n")}\n</url>`;
    })
    .join("\n");
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n' +
    body +
    "\n</urlset>\n"
  );
}

/** Sitemap index: one child per group, lastmod = newest page in that group. */
export function indexXml(): string {
  const all = allSitemapEntries();
  const items = SITEMAP_GROUPS.map((g) => {
    const dates = all.filter((e) => groupOf(e.url) === g).map((e) => iso(e.lastModified)).filter(Boolean) as string[];
    const last = dates.sort().at(-1);
    return `<sitemap><loc>${BASE_URL}/sitemap-${g}.xml</loc>${last ? `<lastmod>${last}</lastmod>` : ""}</sitemap>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export function xmlResponse(xml: string) {
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
