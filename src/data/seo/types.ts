/**
 * Content model for the SEO page plan (services, industry funnels, comparisons,
 * tools, templates, glossary). Every page meets the plan's standard:
 * one primary keyword, title <= 60 and description <= 155 characters, a quick
 * answer under the hero, 600+ words, a proof block, 5-6 FAQs, schema and
 * internal links. scripts/validate checks all of it.
 */
export type SeoKind = "hub" | "service" | "industry" | "compare" | "tool" | "template" | "glossary";

export interface SeoSection {
  h2: string;
  /** HTML: <p>, <ul>, <ol>, <table>, internal <a href="/...">. */
  html: string;
}

export interface SeoProofItem {
  value: string;
  label: string;
  /** Case study or case page this number comes from. */
  href: string;
}

export interface SeoPage {
  path: string;
  kind: SeoKind;
  /** Primary keyword. Unique across the whole site. */
  keyword: string;
  /** <title>, max 60 characters, contains the keyword. */
  title: string;
  /** Meta description, max 155 characters. */
  description: string;
  eyebrow: string;
  h1: string;
  /** First paragraph (HTML). Contains the keyword. */
  intro: string;
  /** Quick answer directly under the hero: the main question and a 40-60 word answer. */
  quick: { q: string; a: string };
  sections: SeoSection[];
  proof?: { heading?: string; items: SeoProofItem[]; more?: { label: string; href: string } };
  faqs: { q: string; a: string }[];
  /** Internal links out: sibling pages, a guide, the hub. Must resolve to real pages. */
  related: string[];
  /** Breadcrumb parent (the hub). Hubs use the home page. */
  parent: { name: string; path: string };
  updated: string;
  /** schema.org Service.serviceType for service and industry pages. */
  serviceType?: string;
  /** Calculator id rendered by the tool slot. */
  tool?: string;
  /** Downloadable template: file name under /templates/files and its text. */
  template?: { file: string; body: string };
  /** Glossary term name for DefinedTerm. */
  term?: string;
}
