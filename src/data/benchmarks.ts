import { CASE_INDUSTRIES } from "./caseIndustries";
import { getCasesForIndustry, getCasePage, parseMetric, type CasePage } from "./casePages";

/**
 * Benchmarks computed from the case studies published on this site. They are
 * first-party numbers (each links back to the cases it summarises), so they
 * are safe to quote and change automatically when cases are added.
 */
export interface IndustryBenchmark {
  slug: string;
  label: string;
  cases: number;
  cpl?: { n: number; median: number; min: number; max: number };
  roas?: { n: number; median: number; min: number; max: number };
}

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

function metric(p: CasePage, factLabel: string, boxLabel: RegExp): number | null {
  const f = parseMetric(p.facts.find((x) => x.label === factLabel)?.value);
  if (f !== null) return f;
  for (const b of [p.primary, p.secondary]) if (boxLabel.test(b.label)) return parseMetric(b.value);
  return null;
}

const stats = (xs: number[]) =>
  xs.length ? { n: xs.length, median: median(xs), min: Math.min(...xs), max: Math.max(...xs) } : undefined;

const LABEL: Record<string, string> = {
  "roofing-lead-generation": "Roofing",
  "mva-personal-injury-lead-generation": "MVA and personal injury",
  "mortgage-insurance-lead-generation": "Mortgage and insurance",
  "med-spa-marketing": "Med spa",
  "hvac-lead-generation": "HVAC",
  "solar-home-services-lead-generation": "Solar and home services",
  "real-estate-lead-generation": "Real estate",
  "coaching-consulting-funnels": "Coaching and consulting",
  "agency-saas-lead-generation": "Agency, SaaS and B2B",
  "low-ticket-funnels": "Low-ticket offers",
  "shopify-dtc-ecommerce": "Shopify and DTC",
  "beauty-skincare-ecommerce": "Beauty and skincare",
  "fashion-apparel-ecommerce": "Fashion and apparel",
  "supplements-fitness-ecommerce": "Supplements and fitness",
};

/**
 * Cases whose published figures conflict (e.g. caption and dashboard disagree).
 * Left out of every benchmark until the numbers are confirmed.
 */
const DISPUTED = new Set(["lead-gen-501-leads-at-40-cpl"]);

const benchCases = (slug: string) =>
  getCasesForIndustry(slug)
    .map((c) => getCasePage(c.slug))
    .filter((p): p is CasePage => Boolean(p) && !p!.noindex && !DISPUTED.has(p!.slug));

export function industryBenchmark(slug: string): IndustryBenchmark {
  const cases = benchCases(slug);
  const cpl = cases.map((p) => metric(p, "Cost per lead", /cost per lead/i)).filter((x): x is number => x !== null && x > 0);
  const roas = cases.map((p) => metric(p, "ROAS", /return on ad spend|roas/i)).filter((x): x is number => x !== null && x > 0 && x < 100);
  return { slug, label: LABEL[slug] ?? slug, cases: cases.length, cpl: stats(cpl), roas: stats(roas) };
}

export function allBenchmarks(): IndustryBenchmark[] {
  return CASE_INDUSTRIES.map((i) => industryBenchmark(i.slug));
}

export const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: n < 100 ? 2 : 0, maximumFractionDigits: n < 100 ? 2 : 0 })}`;
export const times = (n: number) => `${(+n.toFixed(2)).toString()}x`;

/** Only groups with at least this many campaigns are published, so one outlier never reads as a benchmark. */
export const MIN_N = 3;

const hub = (b: IndustryBenchmark) => `<a href="/case-studies/${b.slug}">${b.label}</a>`;
const plural = (n: number) => `${n} campaign${n === 1 ? "" : "s"}`;

/** "Average cost per lead by industry" table (median and range per industry). */
export function cplBenchmarkTable(): string {
  const rows = allBenchmarks()
    .filter((b) => b.cpl && b.cpl.n >= MIN_N)
    .sort((a, b) => a.cpl!.median - b.cpl!.median)
    .map((b) => `<tr><td>${hub(b)}</td><td>${money(b.cpl!.median)}</td><td>${money(b.cpl!.min)} to ${money(b.cpl!.max)}</td><td>${plural(b.cpl!.n)}</td></tr>`)
    .join("\n");
  return `<div class="table-wrap"><table><thead><tr><th>Industry</th><th>Median cost per lead</th><th>Range</th><th>Based on</th></tr></thead><tbody>\n${rows}\n</tbody></table></div>`;
}

/** One sentence with the median CPL for the largest lead-gen industries. */
export function cplSentence(): string {
  const bs = allBenchmarks().filter((b) => b.cpl && b.cpl.n >= MIN_N).sort((a, b) => b.cpl!.n - a.cpl!.n).slice(0, 4);
  return bs.map((b) => `${money(b.cpl!.median)} for ${b.label.replace(/^([A-Z])(?=[a-z])/, (c) => c.toLowerCase())}`).join(", ");
}

/** ROAS table for the given hub slugs (median and range). */
export function roasBenchmarkTable(slugs: string[]): string {
  const rows = slugs
    .map((s) => industryBenchmark(s))
    .filter((b) => b.roas && b.roas.n >= MIN_N)
    .map((b) => `<tr><td>${hub(b)}</td><td>${times(b.roas!.median)}</td><td>${times(b.roas!.min)} to ${times(b.roas!.max)}</td><td>${plural(b.roas!.n)}</td></tr>`)
    .join("\n");
  return `<div class="table-wrap"><table><thead><tr><th>Category</th><th>Median ROAS</th><th>Range</th><th>Based on</th></tr></thead><tbody>\n${rows}\n</tbody></table></div>`;
}

export const ECOM_SLUGS = ["shopify-dtc-ecommerce", "beauty-skincare-ecommerce", "fashion-apparel-ecommerce", "supplements-fitness-ecommerce", "low-ticket-funnels"];

export interface CplCampaign { slug: string; industry: string; label: string; cpl: number; leads: number | null; spend: number | null }

/** Every published lead generation campaign with a cost per lead, for benchmark articles. */
export function cplCampaigns(): CplCampaign[] {
  const out: CplCampaign[] = [];
  for (const i of CASE_INDUSTRIES)
    for (const p of benchCases(i.slug)) {
      const cpl = metric(p, "Cost per lead", /cost per lead/i);
      if (cpl === null || cpl <= 0) continue;
      const fact = (re: RegExp) => parseMetric(p.facts.find((f) => re.test(f.label))?.value);
      out.push({ slug: p.slug, industry: i.slug, label: LABEL[i.slug] ?? i.slug, cpl, leads: fact(/^leads$/i), spend: fact(/^ad spend$/i) });
    }
  return out;
}

export const int = (n: number) => Math.round(n).toLocaleString("en-US");
