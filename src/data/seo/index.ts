import type { SeoPage } from "./types";
import { SERVICE_PAGES } from "./services";
import { INDUSTRY_PAGES } from "./industries";
import { COMPARE_PAGES } from "./compare";
import { TOOL_PAGES } from "./tools";
import { TEMPLATE_PAGES } from "./templates";
import { GLOSSARY_PAGES } from "./glossary";
import { LOCATION_PAGES } from "./locations";
import { AI_NICHE_PAGES } from "./aiNiches";
import { BLOG_POSTS } from "../blogPosts";
import { CASE_INDUSTRIES } from "../caseIndustries";
import { getCasePage } from "../casePages";

export type { SeoPage } from "./types";

export const SEO_PAGES: SeoPage[] = [
  ...SERVICE_PAGES,
  ...INDUSTRY_PAGES,
  ...COMPARE_PAGES,
  ...TOOL_PAGES,
  ...TEMPLATE_PAGES,
  ...GLOSSARY_PAGES,
  ...LOCATION_PAGES,
  ...AI_NICHE_PAGES,
];

const BY_PATH = new Map(SEO_PAGES.map((p) => [p.path, p]));

export function getSeoPage(path: string): SeoPage | undefined {
  return BY_PATH.get(path);
}

/** Pages whose breadcrumb parent is `path` (the children of a hub). */
export function getSeoChildren(path: string): SeoPage[] {
  return SEO_PAGES.filter((p) => p.parent.path === path && p.path !== path);
}

const CORE: Record<string, string> = {
  "/": "Funnels That Print home",
  "/contact": "Contact us",
  "/book-a-call": "Book a funnel strategy call",
  "/blog": "Journal",
  "/case-studies": "Sales funnel case studies",
  "/case-studies/all": "All case studies by industry",
  "/case-leadgen": "Lead generation case studies",
  "/case-ecom": "eCommerce case studies",
  "/milliondollarcasestudy": "$1.52M high-ticket funnel case study",
  "/scalelowticket": "$847K low-ticket funnel case study",
};

/**
 * Title for any internal path the new pages may link to, or undefined when
 * the path is not a real page (the validator treats that as an error).
 */
export function linkTitle(path: string): string | undefined {
  const p = BY_PATH.get(path);
  if (p) return p.h1;
  if (CORE[path]) return CORE[path];
  if (path.startsWith("/blog/")) return BLOG_POSTS.find((b) => `/blog/${b.slug}` === path)?.metaTitle;
  if (path.startsWith("/case-studies/")) {
    const slug = path.slice("/case-studies/".length);
    const hub = CASE_INDUSTRIES.find((i) => i.slug === slug);
    if (hub) return hub.hubTitle;
    return getCasePage(slug)?.title;
  }
  return undefined;
}

/** One-line summary for link cards. */
export function linkSummary(path: string): string | undefined {
  const p = BY_PATH.get(path);
  if (p) return p.description;
  if (path.startsWith("/blog/")) return BLOG_POSTS.find((b) => `/blog/${b.slug}` === path)?.metaDescription;
  if (path.startsWith("/case-studies/")) {
    const slug = path.slice("/case-studies/".length);
    const hub = CASE_INDUSTRIES.find((i) => i.slug === slug);
    if (hub) return hub.hubDescription;
    return getCasePage(slug)?.description;
  }
  return undefined;
}
