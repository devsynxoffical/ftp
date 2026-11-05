import type { Metadata } from "next";
import Link from "next/link";
import { CASE_INDUSTRIES } from "@/data/caseIndustries";
import { getCaseCard, getCasePage, getCasesForIndustry } from "@/data/casePages";
import { ORG_PUBLISHER } from "@/data/schemaOrg";
import RoboSection from "@/components/RoboSection";

const BASE_URL = "https://www.funnelsthatprint.com";
const URL = `${BASE_URL}/case-studies/all`;

const groups = CASE_INDUSTRIES.map((ind) => ({
  ind,
  cards: getCasesForIndustry(ind.slug)
    .filter((c) => !getCasePage(c.slug)!.noindex)
    .map((c) => getCaseCard(c.slug)!),
}));
const total = groups.reduce((n, g) => n + g.cards.length, 0);

export const metadata: Metadata = {
  title: { absolute: `All ${total} Case Studies by Industry | Funnels That Print` },
  description: `Index of all ${total} Funnels That Print case studies, grouped by industry: roofing, MVA, mortgage, med spa, HVAC, coaching, low-ticket, Shopify and more.`,
  alternates: { canonical: URL },
  openGraph: {
    title: `All ${total} Case Studies by Industry`,
    description: `Every documented client result, grouped by industry, with the headline metric for each.`,
    url: URL,
    type: "website",
    images: [{ url: "/img/og/funnels-that-print-og.jpg", width: 1200, height: 630, alt: "Funnels That Print case studies" }],
  },
};

/** HTML sitemap of the case study library: every case, one click from the footer. */
export default function AllCaseStudiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${BASE_URL}/case-studies` },
          { "@type": "ListItem", position: 3, name: "All case studies", item: URL },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${URL}#collection`,
        url: URL,
        name: `All ${total} case studies by industry`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: ORG_PUBLISHER,
        hasPart: CASE_INDUSTRIES.map((i) => ({ "@type": "CollectionPage", name: i.hubTitle, url: `${BASE_URL}/case-studies/${i.slug}` })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="box">
        <section className="kc all-cases">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/case-studies">Case studies</Link>
          </nav>
          <div className="ih-head">
            <div className="eyebrow mono">Case study index</div>
            <h1 className="h1 d">All {total} case studies by industry</h1>
            <p className="lead">
              Every documented client result in one place. Each entry links to its own page with the reported figures,
              the full breakdown and the original post. Jump to an industry:
            </p>
            <ul className="all-jump">
              {groups.map(({ ind, cards }) => (
                <li key={ind.slug}>
                  <a href={`#${ind.slug}`}>
                    {ind.hubTitle.replace(/ Case Studies$/, "")} <b>{cards.length}</b>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {groups.map(({ ind, cards }) => (
            <section key={ind.slug} id={ind.slug} className="all-group" aria-labelledby={`h-${ind.slug}`}>
              <div className="all-group-head">
                <h2 id={`h-${ind.slug}`}>{ind.hubTitle}</h2>
                <Link href={`/case-studies/${ind.slug}`}>Industry overview <i>&#8599;</i></Link>
              </div>
              <ul>
                {cards.map((c) => (
                  <li key={c.slug}>
                    <Link href={c.href}>
                      <b>
                        {c.primary.value} <span>{c.primary.label}</span>
                      </b>
                      <span>{c.title.split(": ").slice(1).join(": ") || c.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </div>
      <RoboSection />
    </>
  );
}
