/**
 * Turns the raw case datasets (cases.ts = eCommerce, leads.ts = lead gen)
 * into indexable pages at /case-studies/<slug>.
 *
 * The raw data is Instagram captions: emojis, hashtags, "comment X below"
 * calls to action and truncated titles. Titles, descriptions and slugs here
 * are generated from the structured metrics instead, and only state a number
 * when its label says unambiguously what it is.
 *
 * No server-only imports: the client-side hub grids import getCaseHref so
 * their links always match the generated URLs.
 */
import { CASES } from "./cases";
import { LEADS } from "./leads";
import {
  CASE_INDUSTRIES,
  getIndustryForNiche,
  type CaseIndustry,
  type CaseSet,
} from "./caseIndustries";

type RawCase = {
  id: string;
  i: number;
  t: string;
  type: string;
  nic: string;
  rev: string;
  revl: string;
  ro: string;
  rol: string;
  sys: string;
  cap: string;
  pts: string[];
  ig?: string;
};

export interface CaseFact {
  label: string;
  value: string;
}

export interface CaseIndexEntry {
  id: string;
  set: CaseSet;
  slug: string;
  industry: string;
  niche: string;
  /** Position in the original dataset, used for stable ordering. */
  order: number;
}

export interface CasePage extends CaseIndexEntry {
  raw: RawCase;
  isVideo: boolean;
  nicheLabel: string;
  title: string;
  /** True when `title` already fits with the brand suffix (use the template). */
  titleUsesTemplate: boolean;
  description: string;
  h1: string;
  /** The original post's opening line, cleaned. Shown under the H1. */
  headline: string;
  noindex: boolean;
  phrase: string | null;
  published: string;
  publishedLabel: string;
  primary: { value: string; label: string };
  secondary: { value: string; label: string };
  facts: CaseFact[];
  summary: string;
  blocks: { type: "p" | "ul"; items: string[] }[];
  image: string;
  video: string | null;
  igUrl: string | null;
}

const BRAND_SUFFIX = " | Funnels That Print";

/* ---------------------------------------------------------------- labels */

const NICHE_LABEL: Record<string, string> = {
  // lead gen
  Roofing: "Roofing",
  "Legal / MVA": "MVA",
  "Mortgage & Refinance": "Mortgage",
  "Final Expense & Insurance": "Final Expense",
  MedSpa: "Med Spa",
  HVAC: "HVAC",
  "Home Services": "Home Services",
  Solar: "Solar",
  "Real Estate": "Real Estate",
  "Coaching & Consulting": "Coaching",
  Webinar: "Webinar",
  "Agency Scaling": "Agency",
  "Lead Generation": "Lead Gen",
  SaaS: "SaaS",
  "Low-Ticket Offers": "Low-Ticket Funnel",
  // eCommerce
  "DTC Performance Brand": "DTC Brand",
  "Direct-Response eCommerce": "Shopify Store",
  "Beauty & Skincare": "Skincare Brand",
  "DTC Fitness & Health": "Fitness Brand",
  "Apparel & Fashion DTC": "Fashion Brand",
  "DTC Supplements & Nutrition": "Supplement Brand",
};

const nicheLabel = (nic: string) => NICHE_LABEL[nic] ?? nic.replace(/[^\w &-]/g, "").trim();

/* -------------------------------------------------------------- overrides */

type Override = {
  title: string;
  primary: { value: string; label: string };
  secondary?: { value: string; label: string };
  /** Promotional posts with no result: page exists but stays out of the index. */
  noindex?: boolean;
};

/**
 * Hand-written titles for the cases whose primary metric is ambiguous
 * (a competitor's spend, "video breakdown", "dashboard proof"). Every number
 * here is stated in the original post.
 */
const OVERRIDES: Record<string, Override> = {
  "C4qlCg-BGeu": { title: "Agency Case Study: Done-With-You Client Acquisition Program", primary: { value: "Video", label: "Program breakdown" } },
  DdrANhmycDu: { title: "Coaching Case Study: 15,958 Summit Registrations at $7.48", primary: { value: "15,958+", label: "Registrations" }, secondary: { value: "$7.48", label: "Cost per registration" } },
  DXBWqork2wC: { title: "Coaching Case Study: $1,850 Sale From $2.10 in Ad Spend", primary: { value: "$1,850", label: "Sale closed" }, secondary: { value: "$2.10", label: "Ad spend" } },
  DUlWy4pEo0m: { title: "Agency Case Study: $15,900 Closed in 10 Days", primary: { value: "$15,900", label: "Closed in 10 days" } },
  DTLiCG_En3K: { title: "Summit Case Study: 2,000+ Investor Summit Registrations", primary: { value: "2,000+", label: "Registrations" } },
  DRPJcNXEp2B: { title: "Agency Case Study: 77 Cold-Traffic Registrations at $5.76", primary: { value: "77", label: "Registrations" }, secondary: { value: "$5.76", label: "Cost per registration" } },
  DQ6KmbLEsJJ: { title: "Low-Ticket Funnel Case Study: $1,061 Profit at 28.23 ROAS", primary: { value: "$1,061", label: "Profit" }, secondary: { value: "28.23x", label: "Return on ad spend" } },
  DQl6sBlEsCi: { title: "Agency Case Study: 1,261 Registrations for $5,900", primary: { value: "1,261", label: "Registrations" }, secondary: { value: "$5,900", label: "Ad spend" } },
  DQapbVREnJ4: { title: "Webinar Case Study: Live Summit and Webinar Ads Breakdown", primary: { value: "Live", label: "Ads breakdown" } },
  DQXUnRNkjR3: { title: "Roofing Case Study: OTP-Verified Lead Forms Strategy Session", primary: { value: "Video", label: "Strategy session" } },
  "DQH-ld1EiFv": { title: "Agency Case Study: $850 From One Ad at 295x ROAS", primary: { value: "$850", label: "From one ad" }, secondary: { value: "295.14x", label: "Return on ad spend" } },
  DP74WvtkkIj: { title: "Low-Ticket Funnel Case Study: 63.98 ROAS on an LTO Campaign", primary: { value: "63.98x", label: "Return on ad spend" } },
  DMgZ9YRSuz5: { title: "Coaching Case Study: Agency Client at $85K in a Month", primary: { value: "$85K", label: "Revenue last month" } },
  DL0r43yScHo: { title: "Mortgage Case Study: Offer and Ad Copy Strategy Session", primary: { value: "Video", label: "Strategy session" } },
  DLsy3BWy_w3: { title: "Coaching Case Study: Full-Funnel Retargeting Strategy", primary: { value: "Video", label: "Strategy breakdown" } },
  DK9ep4iyeZ2: { title: "Coaching Case Study: $256 Ad Spend to $4K in Deals", primary: { value: "$4K", label: "In deals" }, secondary: { value: "$256", label: "Ad spend" } },
  DZcFQ2OkqTO: { title: "Low-Ticket Funnel Case Study: $58,108 in One Day at 4.52x", primary: { value: "$58,108", label: "Revenue in one day" }, secondary: { value: "4.52x", label: "Return on ad spend" } },
  DWuNG1bErnO: { title: "Roofing Case Study: 18% CTR Creatives in a Live Ads Audit", primary: { value: "18%", label: "Click-through rate" } },
  DWEsLr9GJ29: { title: "Webinar Case Study: 835 Paid Registrations at $4.57", primary: { value: "835", label: "Paid registrations" }, secondary: { value: "$4.57", label: "Cost per registration" } },
  DT4yHdFkXhM: { title: "SaaS Case Study: $71,934 in 24 Days for an AI SaaS", primary: { value: "$71,934", label: "Revenue in 24 days" }, secondary: { value: "320", label: "New customers" } },
  DRcaexWkg1p: { title: "Coaching Case Study: $60,912 Front-End Sales in One Day", primary: { value: "$60,912", label: "Front-end revenue" }, secondary: { value: "$21K", label: "Ad spend" } },
  DQEz9MREt5m: { title: "Low-Ticket Funnel Case Study: $17,200 in One Day", primary: { value: "$17,200", label: "Revenue in one day" }, secondary: { value: "293", label: "Low-ticket sales" } },
  DM_M_qxz6xo: { title: "MVA Case Study: 276 OTP-Verified Calls in 5 Days", primary: { value: "276+", label: "Verified calls" }, secondary: { value: "$5,453", label: "Ad spend" } },
  DLKmOPoS2IM: { title: "Low-Ticket Funnel Case Study: $4,394 Revenue at 2.15x ROAS", primary: { value: "$4,394", label: "Revenue" }, secondary: { value: "$2,043", label: "Ad spend" } },
  "DK-ZkImzyri": { title: "Low-Ticket Funnel Case Study: 166 Courses Sold in a Day", primary: { value: "$14,646", label: "Revenue" }, secondary: { value: "$7,334", label: "Ad spend" } },
  DK2tpecTDVQ: { title: "Low-Ticket Funnel Case Study: $69,652 in 8 Days at 3.65x", primary: { value: "$69,652", label: "Revenue in 8 days" }, secondary: { value: "$19,104", label: "Ad spend" } },
  DHn8TyTygLd: { title: "Coaching Case Study: Offer Tweak Lifts CTR to 4 to 6%", primary: { value: "4-6%", label: "Click-through rate" } },
  DBG7MvJSbqr: { title: "Mortgage Case Study: 5 Offers That Book More Appointments", primary: { value: "5", label: "Proven offers" } },
  DBG2Iz3SXV5: { title: "HVAC Case Study: Custom Offer Creation for HVAC Businesses", primary: { value: "Offer", label: "Strategy" }, noindex: true },
};

/**
 * Posts that appear in both datasets. The alias gets no page of its own; links
 * and the old /case viewer resolve it to the canonical copy.
 */
const ALIASES: Record<string, string> = {
  DZXZSYykvpC: "DZXZSkyAU7x", // lead gen copy has no image; eCommerce copy has the metrics
};

/**
 * Source-data niche tags that contradict the post itself (checked by reading
 * each one). Corrected here so the case lands in the right industry hub.
 */
const NICHE_FIX: Record<string, string> = {
  DTLiCG_En3K: "Webinar", // investor summit registrations
  "DTAB1YGEr1-": "Home Services", // 12-month home services lead gen at $4.90 CPL
  "DRRR-IHEpc-": "Mortgage & Refinance", // 492 mortgage-ready registrations
  DQpQXvxEkF4: "Home Services", // garage door and kitchen remodeling company
  DMTbiLhy45r: "Low-Ticket Offers", // coaching membership launch
  DMOUbBhywzQ: "Low-Ticket Offers", // $97 mid-ticket product
  DSkbQyzkvbL: "Low-Ticket Offers", // 689 buyers, online business offer
};

/* --------------------------------------------------------------- cleaning */

// Pictographs, dingbats, misc symbols, variation selectors and joiners.
// Arrows (U+2190-21FF) are kept: they carry meaning ("208 leads → 37 closings").
const EMOJI =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2300}-\u{23FF}\u{25A0}-\u{25FF}\u{FE0F}\u{200D}\u{20E3}\u{3030}\u{303D}\u{3297}\u{3299}\u{E0020}-\u{E007F}]/gu;

export function cleanInline(s: string): string {
  return s
    .replace(EMOJI, "")
    .replace(/(^|\s)#[\p{L}\p{N}_]+/gu, " ")
    .replace(/(^|\s)@[\w.]+/g, " ")
    .replace(/\bf\*ck(?:ing|in)?\b\s*/gi, "")
    .replace(/\s+([,.!?;:])/g, "$1")
    .replace(/[ \t]+/g, " ")
    .trim();
}

const CTA_LINE =
  /comment\s*[“"'‘]|comment\b.*\b(below|down|and i|& i|i'll|i will)\b|in the comments|\bdm\s*[“"'‘]|\bdm me\b|\bmessage me\b|\bsend me a (dm|message)\b|link in (my )?bio|check (out )?my profile|follow (me|us)\b|tag (a|your) friend|\bsee ya\b|your ecom guy|^\s*hashtags?\b|^\s*p\.?s\.?\s*$/i;

const HASHTAG_ONLY = /^\s*(?:#[\p{L}\p{N}_]+\s*)+$/u;

function captionLines(cap: string): string[] {
  return cap.split("\n").map((l) => l.trimEnd());
}

/* ----------------------------------------------------------------- dates */

const SC_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

/** Instagram media IDs encode their creation time; the shortcode is that ID in base64. */
export function shortcodeDate(shortcode: string): string {
  let id = BigInt(0);
  for (const ch of shortcode.slice(0, 11)) {
    const v = SC_ALPHABET.indexOf(ch);
    if (v < 0) return "2025-01-01";
    id = id * BigInt(64) + BigInt(v);
  }
  const ms = Number(id >> BigInt(23)) + 1314220021721;
  const d = new Date(ms);
  if (Number.isNaN(d.getTime()) || d.getUTCFullYear() < 2015 || d.getUTCFullYear() > 2030) return "2025-01-01";
  return d.toISOString().slice(0, 10);
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthYear = (iso: string) => `${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;

/* --------------------------------------------------------------- metrics */

function parseFacts(pts: string[]): CaseFact[] {
  const out: CaseFact[] = [];
  for (const p of pts || []) {
    const m = p.match(/^([A-Za-z][A-Za-z ]{1,24}):\s*(.+)$/);
    if (!m) continue;
    const value = cleanInline(m[2]).replace(/[\s,.;:]+$/, "");
    if (!/\d/.test(value)) continue;
    out.push({ label: m[1].trim(), value });
  }
  return out;
}

const money = (v: string) => {
  const m = v.replace(/,/g, "").match(/\$?\s*([\d.]+)\s*([kKmM])?/);
  return m ? parseFloat(m[1]) * (m[2] ? (/k/i.test(m[2]) ? 1e3 : 1e6) : 1) : NaN;
};

/**
 * The source "Cost per lead" is sometimes a different number from the post: a
 * resale price, the client's old cost, or an industry benchmark (found on
 * 2026-11-05 by checking spend / leads on every case). When leads, spend and
 * CPL disagree by more than 25%, use the CPL the caption itself states if one
 * is close to spend / leads, otherwise the computed value.
 */
function reconcileCpl(facts: CaseFact[], caption: string): CaseFact[] {
  const get = (l: string) => facts.find((f) => f.label === l)?.value;
  const leads = money(get("Leads") ?? "");
  const spend = money(get("Ad spend") ?? "");
  const cpl = money(get("Cost per lead") ?? "");
  if (!(leads > 0 && spend > 0 && cpl > 0)) return facts;
  const calc = spend / leads;
  if (Math.abs(calc - cpl) / calc <= 0.25) return facts;
  // Read whole amounts ("$20,324" is 20324, not 20) and take the one closest to spend / leads.
  const stated = [...caption.matchAll(/\$\s?(\d{1,3}(?:,\d{3})+|\d+)(\.\d{1,2})?(?![\d,])/g)]
    .map((m) => parseFloat(m[1].replace(/,/g, "") + (m[2] ?? "")))
    .filter((x) => Math.abs(x - calc) / calc <= 0.15)
    .sort((a, b) => Math.abs(a - calc) - Math.abs(b - calc))[0];
  const value = `$${(stated ?? calc).toFixed(2)}`;
  return facts.map((f) => (f.label === "Cost per lead" ? { ...f, value } : f));
}

const fact = (facts: CaseFact[], label: string) =>
  facts.find((f) => f.label.toLowerCase() === label.toLowerCase())?.value;

/** "$148,000" -> "$148K", "$1,000,000+" -> "$1M+"; other values unchanged. */
export function compactMoney(v: string): string {
  const m = v.match(/^\$([\d,]+(?:\.\d+)?)(\+?)$/);
  if (!m) return v;
  const n = Number(m[1].replace(/,/g, ""));
  if (!Number.isFinite(n)) return v;
  if (n >= 1_000_000) {
    const x = n / 1_000_000;
    return `$${x >= 10 || Number.isInteger(x) ? Math.round(x) : x.toFixed(1)}M${m[2]}`;
  }
  if (n >= 10_000) return `$${Math.round(n / 1000)}K${m[2]}`;
  return v;
}

const UNHELPFUL_PRIMARY = new Set(["Headline result", "Video breakdown", "Dashboard proof", "Ad spend"]);

/** A headline result phrase, or null when the data does not state one unambiguously. */
function leadPhrase(r: RawCase, facts: CaseFact[]): { phrase: string; short: string } | null {
  const rev = cleanInline(r.rev);
  const cpl = fact(facts, "Cost per lead");
  const spend = fact(facts, "Ad spend");
  const money = (v: string) => compactMoney(v);
  const withCpl = (base: string) => (cpl ? { phrase: `${base} at ${cpl} CPL`, short: base } : { phrase: base, short: base });

  if (!UNHELPFUL_PRIMARY.has(r.revl) && /\d/.test(rev)) {
    switch (r.revl) {
      case "Leads generated":
        return withCpl(`${rev} Leads`);
      case "Revenue":
        return spend
          ? { phrase: `${money(rev)} Revenue on ${money(spend)} Ad Spend`, short: `${money(rev)} Revenue` }
          : { phrase: `${money(rev)} in Revenue`, short: `${money(rev)} in Revenue` };
      case "Sales":
        return rev.startsWith("$")
          ? { phrase: `${money(rev)} in Sales`, short: `${money(rev)} in Sales` }
          : { phrase: `${rev} Sales`, short: `${rev} Sales` };
      case "Appointments":
        return { phrase: `${rev} Appointments Booked`, short: `${rev} Appointments` };
      case "Calls":
        return { phrase: `${rev} Booked Calls`, short: `${rev} Booked Calls` };
      case "Clients":
        return { phrase: `${rev} New Clients Signed`, short: `${rev} New Clients` };
      case "Buyers":
        return { phrase: `${rev} Buyers`, short: `${rev} Buyers` };
      case "Memberships":
        return { phrase: `${rev} Memberships Sold`, short: `${rev} Memberships` };
      case "Cost per lead": {
        const leads = fact(facts, "Leads");
        return leads
          ? { phrase: `${leads} Leads at ${rev} CPL`, short: `${rev} Cost per Lead` }
          : { phrase: `${rev} Cost per Lead`, short: `${rev} Cost per Lead` };
      }
      case "ROAS":
        return { phrase: `${rev} ROAS`, short: `${rev} ROAS` };
    }
  }
  // Primary value is ambiguous: fall back to the labelled facts, best first.
  const revenue = fact(facts, "Revenue");
  if (revenue) return { phrase: `${money(revenue)} in Revenue`, short: `${money(revenue)} in Revenue` };
  const leads = fact(facts, "Leads");
  if (leads) return withCpl(`${leads} Leads`);
  const appts = fact(facts, "Appointments");
  if (appts) return { phrase: `${appts} Appointments Booked`, short: `${appts} Appointments` };
  const sales = fact(facts, "Sales");
  if (sales) return { phrase: `${sales} Sales`, short: `${sales} Sales` };
  const clients = fact(facts, "Clients");
  if (clients) return { phrase: `${clients} New Clients`, short: `${clients} New Clients` };
  return null;
}

function ecomPhrase(r: RawCase): { phrase: string; short: string } | null {
  const rev = cleanInline(r.rev);
  if (!/^\$[\d,.]+\+?$/.test(rev)) return null;
  const m = compactMoney(rev);
  const l = r.revl.trim();
  let base: string;
  if (/^\/ ?Day/i.test(l)) base = `${m}/Day in Sales`;
  else if (/^\/ ?Month/i.test(l)) base = `${m}/Month in Sales`;
  else if (/^in /i.test(l)) base = `${m} ${l.replace(/\bDays\b/, "Days").replace(/^in/, "in")}`;
  else if (/Q4/i.test(l)) base = `${m} in Q4`;
  else if (/BFCM/i.test(l)) base = `${m} in BFCM`;
  else base = `${m} in Sales`;
  const roas = r.ro && /roas/i.test(r.rol) ? ` at ${cleanInline(r.ro)} ROAS` : "";
  const margin = r.ro && /margin/i.test(r.rol) ? ` at ${cleanInline(r.ro)} Margin` : "";
  return { phrase: base + (roas || margin), short: base };
}

/* ------------------------------------------------------------ headlines */

function firstMeaningfulLine(r: RawCase): string {
  const lines = captionLines(r.cap).map(cleanInline).filter((l) => l && !CTA_LINE.test(l));
  const fromCap = lines[0] || "";
  const fromTitle = cleanInline(r.t).replace(/\.{3}$|…$/, "").trim();
  // The caption's first line is the untruncated version of `t`.
  return fromCap.length >= fromTitle.length ? fromCap : fromTitle;
}

function cutAtBoundary(s: string, max: number): string {
  if (s.length <= max) return s;
  const slice = s.slice(0, max + 1);
  const sentence = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("! "), slice.lastIndexOf("? "));
  if (sentence > max * 0.5) return slice.slice(0, sentence + 1).trim();
  const sp = slice.lastIndexOf(" ");
  return slice.slice(0, sp > 0 ? sp : max).replace(/[\s,;:–—-]+$/, "").trim();
}

function fallbackPhrase(r: RawCase, budget: number): string {
  let s = firstMeaningfulLine(r).replace(/[“”"]/g, "").replace(/\s*\.{2,}\s*/g, ". ");
  const m = s.match(/^(.{18,}?)(?:[.!?](?:\s|$)|\s[–—-]\s|\s\()/);
  if (m) s = m[1];
  s = cutAtBoundary(s, budget).replace(/[.!?]+$/, "");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function slugify(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\$/g, "")
    .replace(/(\d)\.(\d)/g, "$1-$2")
    .replace(/(\d),(\d)/g, "$1$2")
    .replace(/\+/g, "-plus")
    .replace(/%/g, "-percent")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function limitSlug(slug: string, max = 72): string {
  if (slug.length <= max) return slug;
  const cut = slug.slice(0, max);
  return cut.slice(0, cut.lastIndexOf("-") > 30 ? cut.lastIndexOf("-") : max).replace(/-+$/, "");
}

/* ------------------------------------------------------------ the index */

interface Draft {
  r: RawCase;
  set: CaseSet;
  order: number;
  industry: CaseIndustry;
  label: string;
  facts: CaseFact[];
  phrase: { phrase: string; short: string } | null;
  override?: Override;
  published: string;
  title: string;
  slug: string;
}

function buildDrafts(): Draft[] {
  const drafts: Draft[] = [];
  const seenIds = new Set<string>();
  const push = (raw: RawCase, set: CaseSet) => {
    if (seenIds.has(raw.id) || ALIASES[raw.id]) return; // the eCommerce data repeats three posts
    const r = NICHE_FIX[raw.id] ? { ...raw, nic: NICHE_FIX[raw.id] } : raw;
    seenIds.add(r.id);
    const facts = set === "lg" ? reconcileCpl(parseFacts(r.pts), r.cap) : [];
    const override = OVERRIDES[r.id];
    const label = override ? override.title.split(" Case Study:")[0] : nicheLabel(r.nic);
    drafts.push({
      r,
      set,
      order: drafts.length,
      industry: getIndustryForNiche(set, r.nic),
      label,
      facts,
      phrase: override
        ? { phrase: override.title.split(": ").slice(1).join(": "), short: override.title.split(": ").slice(1).join(": ") }
        : set === "lg"
          ? leadPhrase(r, facts)
          : ecomPhrase(r),
      override,
      published: shortcodeDate(r.id),
      title: "",
      slug: "",
    });
  };
  (LEADS as unknown as RawCase[]).forEach((r) => push(r, "lg"));
  (CASES as unknown as RawCase[]).forEach((r) => push(r, "ec"));

  // Titles: "<Niche> Case Study: <result>", kept to 60 characters.
  const usedTitles = new Set<string>();
  const usedSlugs = new Set<string>(CASE_INDUSTRIES.map((i) => i.slug));
  for (const d of drafts) {
    const stem = `${d.label} Case Study: `;
    let title: string;
    if (d.override) {
      title = d.override.title;
    } else if (d.phrase) {
      title = stem + d.phrase.phrase;
      if (title.length > 60) title = stem + d.phrase.short;
    } else {
      title = stem + fallbackPhrase(d.r, 60 - stem.length);
    }
    if (title.length > 60) title = cutAtBoundary(title, 60);
    if (usedTitles.has(title.toLowerCase())) {
      const dated = `${cutAtBoundary(title, 60 - 11)} (${monthYear(d.published).replace(/^(\w{3})\w*/, "$1")})`;
      title = usedTitles.has(dated.toLowerCase()) ? `${cutAtBoundary(title, 54)} #${d.r.i}` : dated;
    }
    usedTitles.add(title.toLowerCase());
    d.title = title;

    let slug = limitSlug(slugify(title.replace(/ Case Study:/, "")));
    if (!slug) slug = `case-${d.r.id.toLowerCase()}`;
    let n = 2;
    const base = slug;
    while (usedSlugs.has(slug)) slug = `${base}-${n++}`;
    usedSlugs.add(slug);
    d.slug = slug;
  }
  return drafts;
}

const DRAFTS = buildDrafts();
const BY_SLUG = new Map(DRAFTS.map((d) => [d.slug, d]));
const BY_ID = new Map(DRAFTS.map((d) => [d.r.id, d]));
for (const [alias, target] of Object.entries(ALIASES)) {
  const d = BY_ID.get(target);
  if (d) BY_ID.set(alias, d);
}

export const CASE_INDEX: CaseIndexEntry[] = DRAFTS.map((d) => ({
  id: d.r.id,
  set: d.set,
  slug: d.slug,
  industry: d.industry.slug,
  niche: d.r.nic,
  order: d.order,
}));

export function getCaseHref(id: string): string {
  const d = BY_ID.get(id);
  return d ? `/case-studies/${d.slug}` : "/case-studies";
}

export function getCaseSlugById(id: string): string | undefined {
  return BY_ID.get(id)?.slug;
}

export function getCasesForIndustry(industrySlug: string): CaseIndexEntry[] {
  return CASE_INDEX.filter((c) => c.industry === industrySlug);
}

/* ------------------------------------------------------------ full page */

function bodyBlocks(r: RawCase, h1: string): CasePage["blocks"] {
  const blocks: CasePage["blocks"] = [];
  let current: string[] = [];
  const flush = () => {
    if (!current.length) return;
    const allShort = current.length >= 2 && current.every((l) => l.length <= 140);
    if (allShort) blocks.push({ type: "ul", items: current });
    else blocks.push({ type: "p", items: [current.join(" ")] });
    current = [];
  };
  const h1Key = h1.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 60);
  let skippedHeadline = false;
  for (const rawLine of captionLines(r.cap)) {
    if (!rawLine.trim()) {
      flush();
      continue;
    }
    if (HASHTAG_ONLY.test(rawLine) || CTA_LINE.test(rawLine)) continue;
    const line = cleanInline(rawLine).replace(/^[-–—•*]\s*/, "");
    if (!line || line.length < 3) continue;
    const key = line.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 60);
    if (!skippedHeadline && key && h1Key.startsWith(key.slice(0, 40))) {
      skippedHeadline = true;
      continue;
    }
    current.push(line);
  }
  flush();
  return blocks;
}

function describe(d: Draft, h1: string, blocks: CasePage["blocks"]): string {
  const lead = d.phrase
    ? `${d.label} case study: ${d.phrase.phrase}.`
    : `${d.label} case study: ${fallbackPhrase(d.r, 90)}.`;
  const tail =
    d.set === "lg"
      ? " See the funnel, ads and follow-up system behind the result, with verified screenshots."
      : " See the Meta ads, offer and scaling system behind the result, with verified screenshots.";
  // Prefer a real sentence from the breakdown when it fits; it makes each description unique.
  const firstPara = blocks.find((b) => b.type === "p")?.items[0] ?? "";
  const sentence = (firstPara.match(/^[^.!?]{40,150}[.!?]/)?.[0] ?? "").trim();
  const chatty = /^(hey|hi|hello|yo|what is going on|what's up|whats up|happy (monday|tuesday|wednesday|thursday|friday|saturday|sunday)|good (morning|evening))\b/i;
  if (sentence && !chatty.test(sentence) && !/comment|dm |message me/i.test(sentence) && (lead + " " + sentence).length <= 160) {
    return `${lead} ${sentence}`;
  }
  if ((lead + tail).length <= 160) return lead + tail;
  const shortTail = d.set === "lg" ? " Funnel, ads and follow-up with verified results." : " Ads, offer and scaling with verified results.";
  if ((lead + shortTail).length <= 160) return lead + shortTail;
  return cutAtBoundary(lead + shortTail, 157) + ".";
}

let DESCRIPTIONS: Map<string, string> | null = null;

/** Final, site-unique descriptions for every case, computed once. */
function allDescriptions(): Map<string, string> {
  if (DESCRIPTIONS) return DESCRIPTIONS;
  DESCRIPTIONS = new Map();
  const used = new Set<string>();
  for (const d of DRAFTS) {
    const headline = cutAtBoundary(firstMeaningfulLine(d.r).replace(/\s*\.{3}$/, ""), 160);
    const blocks = bodyBlocks(d.r, headline);
    let desc = describe(d, headline, blocks);
    if (used.has(desc.toLowerCase())) {
      // Try the other sentences of this post's own breakdown first.
      const lead = desc.split(". ")[0] + ".";
      const sentences = blocks
        .flatMap((b) => b.items)
        .join(" ")
        .match(/[^.!?]{30,140}[.!?]/g) ?? [];
      const alt = sentences
        .map((x) => `${lead} ${x.trim()}`)
        .find((c) => c.length <= 160 && !used.has(c.toLowerCase()) && !/comment|dm |message me/i.test(c));
      desc = alt ?? cutAtBoundary(`${lead} Published ${monthYear(d.published)}, ${d.r.type === "video" ? "video" : "screenshot"} breakdown.`, 160);
    }
    used.add(desc.toLowerCase());
    DESCRIPTIONS.set(d.slug, desc);
  }
  return DESCRIPTIONS;
}

export function getCasePage(slug: string): CasePage | undefined {
  const d = BY_SLUG.get(slug);
  if (!d) return undefined;
  const r = d.r;
  const isVideo = r.type === "video";
  const folder = d.set === "ec" ? "cs2" : "lg";

  const headline = cutAtBoundary(firstMeaningfulLine(r).replace(/\s*\.{3}$/, ""), 160);
  const blocks = bodyBlocks(r, headline);

  const ambiguous = d.set === "lg" && (UNHELPFUL_PRIMARY.has(r.revl) || !/\d/.test(r.rev));
  const primary = d.override
    ? d.override.primary
    : d.set === "lg" && ambiguous
      ? d.phrase
        ? { value: d.phrase.short.split(" ")[0], label: d.phrase.short.split(" ").slice(1).join(" ") || "Result" }
        : { value: isVideo ? "Video" : "Proof", label: isVideo ? "Video breakdown" : "Results breakdown" }
      : { value: cleanInline(r.rev), label: cleanInline(r.revl) };

  let secondary: { value: string; label: string };
  if (d.override?.secondary) {
    secondary = d.override.secondary;
  } else if (r.ro && r.rol) {
    const lbl = /roas/i.test(r.rol) ? "Return on ad spend" : r.rol.replace(/^./, (m) => m.toUpperCase());
    // Use the reconciled figure when the raw source value was corrected (see reconcileCpl).
    const reconciled = /cost per lead/i.test(r.rol) ? fact(d.facts, "Cost per lead") : undefined;
    secondary = { value: reconciled ?? cleanInline(r.ro), label: lbl };
  } else if (fact(d.facts, "Ad spend")) {
    secondary = { value: fact(d.facts, "Ad spend")!, label: "Ad spend" };
  } else {
    secondary = { value: isVideo ? "Video" : "Dashboard", label: "Proof type" };
  }

  const published = d.published;
  const factsLine = d.facts.length
    ? ` Reported figures: ${d.facts.map((f) => `${f.label.toLowerCase()} ${f.value}`).join(", ")}.`
    : "";
  const KEEP = /^(CPL|ROAS|BFCM|Q4|LTO|OTP|SaaS|AI|CTR|DWY|MVA|HVAC|SKOOL|Skool|DTC)$/;
  const sentencePhrase = (x: string) => x.split(" ").map((w) => (KEEP.test(w) || /\d/.test(w) ? w : w.toLowerCase())).join(" ");
  const summary = d.phrase
    ? `This ${r.nic.toLowerCase()} campaign produced ${sentencePhrase(d.phrase.phrase)}.${factsLine} It ran on ${cleanInline(r.sys).toLowerCase()}, and the original breakdown was published in ${monthYear(published)}.`
    : `This ${r.nic.toLowerCase()} result was documented in ${monthYear(published)} and ran on ${cleanInline(r.sys).toLowerCase()}.${factsLine}`;

  return {
    id: r.id,
    set: d.set,
    slug: d.slug,
    industry: d.industry.slug,
    niche: r.nic,
    order: d.order,
    raw: r,
    isVideo,
    nicheLabel: d.label,
    title: searchTitle(d.title),
    titleUsesTemplate: searchTitle(d.title).length + BRAND_SUFFIX.length <= 60,
    description: allDescriptions().get(d.slug)!,
    h1: searchTitle(d.title),
    headline,
    noindex: Boolean(d.override?.noindex),
    phrase: d.phrase?.phrase ?? null,
    published,
    publishedLabel: monthYear(published),
    primary,
    secondary,
    facts: d.facts,
    summary,
    blocks,
    image: `/img/${folder}/${r.id}.webp`,
    video: isVideo ? `/vid/${folder}/${r.id}.mp4` : null,
    igUrl: r.ig ?? null,
  };
}

export function getAllCaseSlugs(): string[] {
  return DRAFTS.map((d) => d.slug);
}

/** Up to `limit` other cases from the same industry, nearest in the list first. */
export function getRelatedCases(slug: string, limit = 6): CaseIndexEntry[] {
  const self = CASE_INDEX.find((c) => c.slug === slug);
  if (!self) return [];
  const peers = CASE_INDEX.filter((c) => c.industry === self.industry);
  const at = peers.findIndex((c) => c.slug === slug);
  const out: CaseIndexEntry[] = [];
  for (let step = 1; out.length < limit && step < peers.length; step++) {
    for (const k of [at + step, at - step]) {
      const c = peers[(k + peers.length) % peers.length];
      if (c && c.slug !== slug && !out.includes(c)) out.push(c);
      if (out.length >= limit) break;
    }
  }
  return out;
}

/** Previous and next case within the same industry (wrapping). */
export function getAdjacentCases(slug: string): { prev: CaseIndexEntry; next: CaseIndexEntry } | null {
  const self = CASE_INDEX.find((c) => c.slug === slug);
  if (!self) return null;
  const peers = CASE_INDEX.filter((c) => c.industry === self.industry);
  if (peers.length < 2) return null;
  const at = peers.findIndex((c) => c.slug === slug);
  return { prev: peers[(at - 1 + peers.length) % peers.length], next: peers[(at + 1) % peers.length] };
}

/** Lightweight card data for grids and related lists. */
export function getCaseCard(slug: string) {
  const p = getCasePage(slug);
  if (!p) return undefined;
  return {
    slug: p.slug,
    href: `/case-studies/${p.slug}`,
    title: p.title,
    niche: p.niche,
    image: p.image,
    isVideo: p.isVideo,
    primary: p.primary,
    secondary: p.secondary,
  };
}


/**
 * Case titles open with a short label ("Roofing Case Study: ..."). People
 * search for the industry phrase ("roofing lead generation case study"), so
 * the label is expanded when the title still fits in 60 characters. Slugs and
 * URLs are unchanged.
 */
const SEARCH_PREFIX: Record<string, string> = {
  Roofing: "Roofing Lead Generation",
  MVA: "MVA Lead Generation",
  Mortgage: "Mortgage Lead Generation",
  "Final Expense": "Final Expense Lead Generation",
  HVAC: "HVAC Lead Generation",
  Solar: "Solar Lead Generation",
  "Home Services": "Home Services Lead Generation",
  "Real Estate": "Real Estate Lead Generation",
  "Med Spa": "Med Spa Marketing",
  Coaching: "Coaching Funnel",
  Webinar: "Webinar Funnel",
  Summit: "Summit Funnel",
  Agency: "Agency Lead Generation",
  "Lead Gen": "Lead Generation",
  SaaS: "SaaS Marketing",
  "Shopify Store": "Shopify Meta Ads",
  "DTC Brand": "DTC Meta Ads",
  "Skincare Brand": "Skincare Meta Ads",
  "Fashion Brand": "Fashion Meta Ads",
  "Fitness Brand": "Fitness Meta Ads",
  "Supplement Brand": "Supplement Meta Ads",
};

export function searchTitle(title: string): string {
  const i = title.indexOf(" Case Study");
  if (i < 0) return title;
  const expanded = SEARCH_PREFIX[title.slice(0, i)];
  if (!expanded) return title;
  const next = expanded + title.slice(i);
  return next.length <= 60 ? next : title;
}

/** Parses "$5.31", "$105K", "$2.3M", "4.2x", "1,024" into a number. */
export function parseMetric(v: string | undefined): number | null {
  if (!v) return null;
  const m = v.replace(/,/g, "").match(/(\d+(?:\.\d+)?)\s*([kKmM])?/);
  if (!m) return null;
  let n = parseFloat(m[1]);
  if (m[2]) n *= /k/i.test(m[2]) ? 1e3 : 1e6;
  return Number.isFinite(n) ? n : null;
}

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const fmtMoney = (n: number) =>
  n >= 1e6
    ? `$${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M`
    : n >= 1e4
      ? `$${Math.round(n / 1e3)}K`
      : `$${n.toLocaleString("en-US", { maximumFractionDigits: n < 100 ? 2 : 0, minimumFractionDigits: n < 100 && n % 1 ? 2 : 0 })}`;
const ordinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

/** A metric from the reported facts, falling back to the headline boxes (eCommerce cases report ROAS and sales there). */
function caseMetric(c: CasePage, label: string): number | null {
  const f = parseMetric(fact(c.facts, label));
  if (f !== null) return f;
  const boxes = [c.primary, c.secondary];
  const match: Record<string, RegExp> = {
    ROAS: /return on ad spend|roas/i,
    "Cost per lead": /cost per lead/i,
    Revenue: /^(revenue|sales|in sales|collected)$/i,
  };
  const re = match[label];
  if (!re) return null;
  const box = boxes.find((b) => re.test(b.label.trim()));
  return box ? parseMetric(box.value) : null;
}

const INDUSTRY_WORD: Record<string, string> = {
  "roofing-lead-generation": "roofing",
  "mva-personal-injury-lead-generation": "MVA and personal injury",
  "mortgage-insurance-lead-generation": "mortgage and insurance",
  "med-spa-marketing": "med spa",
  "hvac-lead-generation": "HVAC",
  "solar-home-services-lead-generation": "solar and home services",
  "real-estate-lead-generation": "real estate",
  "coaching-consulting-funnels": "coaching and consulting",
  "agency-saas-lead-generation": "agency, SaaS and B2B",
  "low-ticket-funnels": "low-ticket funnel",
  "shopify-dtc-ecommerce": "Shopify and DTC",
  "beauty-skincare-ecommerce": "beauty and skincare",
  "fashion-apparel-ecommerce": "fashion and apparel",
  "supplements-fitness-ecommerce": "supplement and fitness",
};

/**
 * How one case compares with every other published case in its industry, on
 * the figures both report. Computed from the case data, so each page carries
 * numbers that exist nowhere else. Only metrics with 3+ comparable cases.
 */
export function getCaseBenchmarks(slug: string): string[] {
  const page = getCasePage(slug);
  if (!page) return [];
  const peers = getCasesForIndustry(page.industry)
    .map((c) => getCasePage(c.slug))
    .filter((c): c is CasePage => Boolean(c) && !c!.noindex);
  const word = INDUSTRY_WORD[page.industry] ?? "similar";
  const out: string[] = [];
  const metric = (label: string, lowerIsBetter: boolean, kind: "money" | "x" | "count", noun: string) => {
    const mine = caseMetric(page, label);
    if (mine === null || mine <= 0) return;
    const vals = peers.map((c) => caseMetric(c, label)).filter((x): x is number => x !== null && x > 0);
    if (vals.length < 3) return;
    const sorted = [...vals].sort((a, b) => (lowerIsBetter ? a - b : b - a));
    const rank = sorted.indexOf(mine) + 1;
    const med = median(vals);
    const show = (n: number) => (kind === "money" ? fmtMoney(n) : kind === "x" ? `${+n.toFixed(2)}x` : Math.round(n).toLocaleString("en-US"));
    const pos = rank === 1 ? `the ${lowerIsBetter ? "lowest" : "highest"}` : `the ${ordinal(rank)} ${lowerIsBetter ? "lowest" : "highest"}`;
    const rel = mine === med ? "equal to" : (lowerIsBetter ? mine < med : mine > med) ? "better than" : "behind";
    out.push(
      `Its ${noun} of ${show(mine)} is ${pos} of ${vals.length} ${word} campaigns we have published with this figure, ${rel} the median of ${show(med)}.`
    );
  };
  metric("Cost per lead", true, "money", "cost per lead");
  metric("ROAS", false, "x", "return on ad spend");
  metric("Leads", false, "count", "lead volume");
  metric("Revenue", false, "money", "revenue");
  return out.slice(0, 3);
}

/** Where a reader of this case goes next: the industry funnel page and the service behind the result. */
export function getCaseNextSteps(slug: string): string[] {
  const page = getCasePage(slug);
  if (!page) return [];
  const n = page.niche.toLowerCase();
  const byIndustry: Record<string, string[]> = {
    "roofing-lead-generation": ["/funnels-for/roofing", "/speed-to-lead"],
    "mva-personal-injury-lead-generation": ["/funnels-for/personal-injury-lawyers", "/ai-voice-agents"],
    "mortgage-insurance-lead-generation": [/final expense|insurance/.test(n) ? "/funnels-for/insurance" : "/funnels-for/mortgage", "/ai-appointment-setter"],
    "med-spa-marketing": ["/funnels-for/med-spas", "/ai-appointment-setter"],
    "hvac-lead-generation": ["/funnels-for/hvac", "/speed-to-lead"],
    "solar-home-services-lead-generation": [/solar/.test(n) ? "/funnels-for/solar" : "/funnels-for/home-services", "/speed-to-lead"],
    "real-estate-lead-generation": ["/funnels-for/real-estate", "/ai-appointment-setter/real-estate"],
    "coaching-consulting-funnels": [/webinar|summit/.test(n) ? "/webinar-funnels" : "/funnels-for/coaches", "/vsl-funnels"],
    "agency-saas-lead-generation": [/saas/.test(n) ? "/funnels-for/saas" : "/funnels-for/consultants", "/quiz-funnels"],
    "low-ticket-funnels": ["/scalelowticket", "/blog/low-ticket-funnel-guide"],
    "shopify-dtc-ecommerce": ["/funnels-for/ecommerce", "/meta-conversions-api-setup"],
    "beauty-skincare-ecommerce": ["/funnels-for/ecommerce", "/meta-conversions-api-setup"],
    "fashion-apparel-ecommerce": ["/funnels-for/ecommerce", "/meta-conversions-api-setup"],
    "supplements-fitness-ecommerce": ["/funnels-for/ecommerce", "/meta-conversions-api-setup"],
  };
  const base = byIndustry[page.industry] ?? ["/services"];
  const extra = CASE_EXTRA_LINKS[slug] ?? [];
  return [...base, ...extra.filter((h) => !base.includes(h))];
}

/** Cases tied to a place (from the original posts) or to a newer industry page. */
const CASE_EXTRA_LINKS: Record<string, string[]> = {
  // Membership campaigns: the membership funnel guide owns "subscription/membership funnel" queries.
  "low-ticket-funnel-1566-memberships-sold": ["/blog/membership-funnel"],
  "low-ticket-funnel-537-memberships-sold": ["/blog/membership-funnel"],
  "low-ticket-funnel-58k-revenue-on-23k-ad-spend": ["/blog/membership-funnel"],
  "low-ticket-funnel-66k-in-revenue": ["/blog/membership-funnel"],
  // Med spa cases: the patient acquisition guide owns "med spa patient acquisition" queries.
  "med-spa-12k-revenue-on-590-ad-spend": ["/blog/med-spa-patient-acquisition"],
  "med-spa-639k-in-revenue": ["/blog/med-spa-patient-acquisition"],
  "med-spa-0-50-cost-per-lead": ["/blog/med-spa-patient-acquisition"],
  "med-spa-46-leads": ["/blog/med-spa-patient-acquisition"],
  "med-spa-11-leads": ["/blog/med-spa-patient-acquisition"],
  "roofing-686-leads-at-5-31-cpl": ["/locations/texas"],
  "roofing-850-leads": ["/locations/texas"],
  "roofing-537-leads-at-4-27-cpl": ["/locations/texas", "/locations/florida"],
  "mortgage-823-leads-at-23-97-cpl": ["/locations/texas"],
  "mortgage-142-leads-at-4-31-cpl": ["/locations/texas"],
  "real-estate-247-leads-at-16-48-cpl": ["/locations/texas"],
  "agency-142-leads-at-11-24-cpl": ["/funnels-for/pressure-washing", "/locations/texas"],
  "mva-530-leads-at-27-cpl": ["/locations/texas"],
  "mva-1865-leads-at-5-24-cpl": ["/locations/texas"],
  "solar-300-leads-at-14-71-cpl": ["/locations/texas"],
  "home-services-542-leads-at-23-82-cpl": ["/locations/texas"],
  "hvac-5628-appointments-booked": ["/locations/florida"],
  "lead-gen-89-leads": ["/funnels-for/car-dealerships"],
  "lead-gen-7-75-cost-per-lead": ["/locations/florida"],
  "mva-465-leads-at-14-21-cpl": ["/locations/florida"],
  "home-services-5-10-cost-per-lead": ["/locations/new-york"],
  "med-spa-74k-revenue-on-10k-ad-spend": ["/locations/new-york", "/blog/med-spa-patient-acquisition"],
  "med-spa-1011-leads": ["/blog/med-spa-patient-acquisition", "/locations/new-york", "/locations/california"],
  "mva-276-otp-verified-calls-in-5-days": ["/locations/new-york"],
  "roofing-52-booked-calls": ["/locations/california"],
};
