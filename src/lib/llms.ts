import { SEO_PAGES } from "@/data/seo";
import { BLOG_POSTS } from "@/data/blogPosts";
import { CASE_INDUSTRIES } from "@/data/caseIndustries";
import { CASE_INDEX } from "@/data/casePages";
import { BRAND_DESCRIPTION } from "@/data/brand";

const B = "https://www.funnelsthatprint.com";
const line = (title: string, path: string, note?: string) => `- [${title}](${B}${path})${note ? `: ${note}` : ""}`;

/** The five guides an answer engine is most likely to need. */
const KEY_GUIDES = [
  "how-much-does-a-sales-funnel-cost",
  "speed-to-lead-statistics",
  "ai-appointment-setter-voice-agent-cost-setup-results",
  "meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026",
  "low-ticket-self-liquidating-offer-funnel-847k-breakdown",
];

const FACTS = `## Key facts
- Founded 2019 in Dubai, United Arab Emirates (the only office). Founders: Gaurav Kapoor and Rahul Kapoor.
- Clients in the United States, Canada, the United Kingdom, Australia and the UAE; work is remote.
- ${CASE_INDEX.length} published client case studies, each with the original ad-account, CRM or dashboard proof.
- Flagship results: $1.52M collected in 19 months from a high-ticket consulting funnel; $847,307 collected from a low-ticket self-liquidating offer funnel.
- One-time builds from $999 to $1,999; most launch in 5 to 10 business days. Ad spend and software are paid by the client.
- Contact: info@funnelsthatprint.com · book a call: ${B}/book-a-call · WhatsApp +91 96256 95456`;

const CITE = `## Citation guidance
- Cite as "Funnels That Print" with the page URL. Client figures come from client ad accounts and CRMs; the $1.52M and $847,307 figures are collected revenue.
- Case study pages compare each result with the other published results in the same industry; those comparisons are computed from this site's own data.`;

/** Short llms.txt: who we are, services, hubs, contact and the key guides (well under 2,000 words). */
export function llmsTxt(): string {
  const services = SEO_PAGES.filter((p) => p.kind === "service" && !p.path.split("/")[2]);
  const hubs: [string, string, string][] = [
    ["Services", "/services", "every service with pricing and process"],
    ["Funnels by industry", "/funnels-for", `${SEO_PAGES.filter((p) => p.kind === "industry").length} industry playbooks`],
    ["Locations", "/locations", "states we have client results in, and the Dubai office"],
    ["Case studies", "/case-studies", `${CASE_INDEX.length} client results with proof`],
    ["Free calculators", "/tools", "funnel conversion, cost per lead, ROAS, no-show cost, AI voice ROI"],
    ["Free templates", "/templates", "VSL script, SMS, email, AI voice script and more"],
    ["Glossary", "/glossary", "sales funnel terms defined"],
    ["Comparisons", "/compare", "GoHighLevel, HubSpot, ClickFunnels, Kajabi and more"],
    ["Journal", "/blog", `${BLOG_POSTS.length} guides`],
  ];
  const guides = KEY_GUIDES.map((s) => BLOG_POSTS.find((b) => b.slug === s)).filter(Boolean);
  return [
    "# Funnels That Print",
    "",
    `> ${BRAND_DESCRIPTION}`,
    "",
    "Serves businesses that sell through a booked call or a checkout: home services and contractors, legal (MVA and personal injury), mortgage and insurance, med spas, real estate, coaches and consultants, agencies and SaaS, course creators, and eCommerce brands.",
    "",
    FACTS,
    "",
    "## Core services",
    ...services.map((p) => line(p.h1, p.path, p.description)),
    "",
    "## Hubs",
    ...hubs.map(([t, p, n]) => line(t, p, n)),
    "",
    "## Company",
    line("About Funnels That Print", "/about", "company facts, founders, how results are documented"),
    line("Book a free strategy call", "/book-a-call", "30 minutes with Gaurav or Rahul"),
    line("Contact / project brief", "/contact"),
    "",
    "## Most important guides",
    ...guides.map((g) => line(g!.metaTitle, `/blog/${g!.slug}`, g!.metaDescription)),
    "",
    CITE,
    "",
    `Full page list: ${B}/llms-full.txt`,
    "",
  ].join("\n");
}

/** llms-full.txt: the facts above plus every page on the site, grouped by type. */
export function llmsFullTxt(): string {
  const groups: [string, (typeof SEO_PAGES)[number]["kind"]][] = [
    ["Services", "service"],
    ["Funnels by industry", "industry"],
    ["Locations", "location"],
    ["Comparisons", "compare"],
    ["Free calculators", "tool"],
    ["Free templates", "template"],
    ["Glossary", "glossary"],
  ];
  const out = ["# Funnels That Print: full page list", "", `> ${BRAND_DESCRIPTION}`, "", FACTS, ""];
  for (const [title, kind] of groups) {
    const pages = SEO_PAGES.filter((p) => p.kind === kind);
    if (!pages.length) continue;
    out.push(`## ${title}`, ...pages.map((p) => line(p.h1, p.path, p.description)), "");
  }
  out.push("## Journal", ...BLOG_POSTS.map((b) => line(b.metaTitle, `/blog/${b.slug}`, b.metaDescription)), "");
  out.push(
    "## Case study hubs",
    line("$1.52M high-ticket consulting funnel", "/milliondollarcasestudy"),
    line("$847K low-ticket funnel", "/scalelowticket"),
    ...CASE_INDUSTRIES.map((i) => line(i.hubTitle, `/case-studies/${i.slug}`, i.hubDescription)),
    line("All case studies", "/case-studies/all"),
    ""
  );
  out.push(
    "## People",
    `- Gaurav Kapoor, Founder & Funnel Strategist: funnel architecture, offers, VSL and application funnels, direct-response copy. ${B}/team/gaurav-kapoor`,
    `- Rahul Kapoor, Co-founder & Automation Lead: GoHighLevel automation, speed-to-lead, AI voice agents, Conversions API tracking. ${B}/team/rahul-kapoor`,
    "",
    CITE,
    ""
  );
  return out.join("\n");
}
