import fs from "node:fs";
import { ORG_PUBLISHER } from "@/data/schemaOrg";
import ServiceSchema from "@/components/ServiceSchema";
import path from "node:path";
import Link from "next/link";
import { getCaseCard, getCasesForIndustry } from "@/data/casePages";
import { CASE_INDUSTRIES, type CaseIndustry, midSentence } from "@/data/caseIndustries";
import { getBlogPostBySlug } from "@/data/blogPosts";
import PageFaq from "@/components/PageFaq";
import QuickAnswer from "@/components/QuickAnswer";
import RoboSection from "@/components/RoboSection";
import { industryBenchmark, money, times, MIN_N } from "@/data/benchmarks";

const BASE_URL = "https://www.funnelsthatprint.com";

/** Each case hub's matching "how we build it" page, with the anchor people search for. */
const PLAYBOOK: Record<string, { href: string; anchor: string }> = {
  "roofing-lead-generation": { href: "/funnels-for/roofing", anchor: "roofing lead generation funnel" },
  "mva-personal-injury-lead-generation": { href: "/funnels-for/personal-injury-lawyers", anchor: "personal injury lead funnel" },
  "mortgage-insurance-lead-generation": { href: "/funnels-for/mortgage", anchor: "mortgage lead funnel" },
  "med-spa-marketing": { href: "/funnels-for/med-spas", anchor: "med spa patient acquisition funnel" },
  "hvac-lead-generation": { href: "/funnels-for/hvac", anchor: "HVAC lead funnel" },
  "solar-home-services-lead-generation": { href: "/funnels-for/solar", anchor: "solar lead funnel" },
  "real-estate-lead-generation": { href: "/funnels-for/real-estate", anchor: "real estate lead funnel" },
  "coaching-consulting-funnels": { href: "/funnels-for/coaches", anchor: "coaching funnel" },
  "agency-saas-lead-generation": { href: "/funnels-for/marketing-agencies", anchor: "client acquisition funnel for agencies" },
  "low-ticket-funnels": { href: "/funnels-for/course-creators", anchor: "low-ticket funnel for course creators" },
  "shopify-dtc-ecommerce": { href: "/funnels-for/ecommerce", anchor: "eCommerce funnel" },
  "beauty-skincare-ecommerce": { href: "/funnels-for/skincare-brands", anchor: "skincare brand funnel" },
  "fashion-apparel-ecommerce": { href: "/funnels-for/fashion-brands", anchor: "fashion brand funnel" },
  "supplements-fitness-ecommerce": { href: "/funnels-for/supplement-brands", anchor: "supplement brand funnel" },
};
const OG_FALLBACK = "/img/og/funnels-that-print-og.jpg";
const publicFileExists = (p: string) => fs.existsSync(path.join(process.cwd(), "public", p));

/** Industry hub: every case in one industry, server-rendered so each link is crawlable. */
export default function IndustryHubView({ industry }: { industry: CaseIndustry }) {
  const url = `${BASE_URL}/case-studies/${industry.slug}`;
  const cards = getCasesForIndustry(industry.slug)
    .map((c) => getCaseCard(c.slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const videoCount = cards.filter((c) => c.isVideo).length;
  const guides = industry.guides
    .map((g) => getBlogPostBySlug(g))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  const others = CASE_INDUSTRIES.filter((i) => i.slug !== industry.slug);
  const bench = industryBenchmark(industry.slug);
  const cpl = bench.cpl && bench.cpl.n >= MIN_N ? bench.cpl : undefined;
  const roas = bench.roas && bench.roas.n >= MIN_N ? bench.roas : undefined;
  const setHub = industry.set === "ec" ? { href: "/case-ecom", label: "All eCommerce case studies" } : { href: "/case-leadgen", label: "All lead generation case studies" };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${BASE_URL}/case-studies` },
          { "@type": "ListItem", position: 3, name: industry.hubTitle, item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        url,
        name: industry.hubTitle,
        description: industry.hubDescription,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: ORG_PUBLISHER,
        inLanguage: "en-US",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: cards.length,
          itemListElement: cards.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${BASE_URL}${c.href}`,
            name: c.title,
          })),
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceSchema path={`/case-studies/${industry.slug}`} name={`${industry.label} funnels and lead generation`} serviceType={`${industry.label} sales funnel and lead generation`} description={industry.hubDescription} />
      <div className="box">
        <section className="kc industry-hub">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/case-studies">Case studies</Link>
            <span aria-hidden="true">/</span>
            <Link href={setHub.href}>{industry.set === "ec" ? "eCommerce" : "Lead generation"}</Link>
          </nav>

          <div className="ih-head">
            <div className="eyebrow mono">{cards.length} documented results</div>
            <h1 className="h1 d">{industry.hubTitle}</h1>
            {industry.intro.map((p, i) => (
              <p key={i} className="lead">
                {p}
              </p>
            ))}
            <div className="ih-stats">
              <div>
                <b>{cards.length}</b>
                <span>case studies</span>
              </div>
              <div>
                <b>{videoCount}</b>
                <span>video breakdowns</span>
              </div>
              <div>
                <b>{cards.length - videoCount}</b>
                <span>screenshot breakdowns</span>
              </div>
            </div>
          </div>

          <QuickAnswer q={industry.quick.q} a={industry.quick.a} id="ih-quick-h" />

          {PLAYBOOK[industry.slug] && (
            <p className="ih-play">
              Planning your own? See how we build a{" "}
              <Link href={PLAYBOOK[industry.slug].href}>{PLAYBOOK[industry.slug].anchor}</Link>, step by step.
            </p>
          )}

          {(cpl || roas) && (
            <section className="case-card ih-bench" aria-labelledby="ih-bench-h">
              <h2 id="ih-bench-h">{bench.label} benchmarks from these case studies</h2>
              <p>
                Calculated from the published results below and updated whenever a case is added.
                {cpl && (
                  <>
                    {" "}The median cost per lead was <b>{money(cpl.median)}</b> across {cpl.n} campaigns, ranging from {money(cpl.min)} to {money(cpl.max)}.
                  </>
                )}
                {roas && (
                  <>
                    {" "}The median return on ad spend was <b>{times(roas.median)}</b> across {roas.n} campaigns, ranging from {times(roas.min)} to {times(roas.max)}.
                  </>
                )}
              </p>
              <p>
                Compare other industries and work out what you can afford with the{" "}
                {cpl ? <Link href="/tools/cost-per-lead-calculator">cost per lead calculator</Link> : <Link href="/tools/roas-calculator">ROAS and break-even ROAS calculator</Link>}.
              </p>
            </section>
          )}

          <h2 className="ih-h2">All {midSentence(industry.label)} results</h2>
          <div className="cgrid2 ih-grid">
            {cards.map((c) => {
              const img = publicFileExists(c.image) ? c.image : OG_FALLBACK;
              return (
                <Link key={c.slug} className="ck show" href={c.href}>
                  <span className="im">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" aria-hidden="true" loading="lazy" width={600} height={560} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="mn" src={img} alt={`${c.title} results`} loading="lazy" width={600} height={560} />
                    {c.isVideo && (
                      <em className="vb">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Video
                      </em>
                    )}
                  </span>
                  <span className="tx">
                    <span className="tg">{c.niche}</span>
                    <h3>{c.title.split(": ").slice(1).join(": ") || c.title}</h3>
                    {c.secondary.value && !/^(Video|Dashboard)$/.test(c.secondary.value) && (
                      <span className="ro">
                        {c.secondary.value} {c.secondary.label.toLowerCase()}
                      </span>
                    )}
                    <span className="fig">
                      <b>{c.primary.value}</b>
                      <span>{c.primary.label}</span>
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <section className="case-card ih-build">
            <h2>How we build {industry.label === "Shopify" ? "eCommerce" : midSentence(industry.label)} {industry.set === "ec" ? "growth systems" : "funnels"}</h2>
            <ol className="tl">
              {industry.build.map((step) => (
                <li key={step.title}>
                  <b>{step.title}</b>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {guides.length > 0 && (
            <section className="case-guides" aria-labelledby="ih-guides-h">
              <h2 id="ih-guides-h">Related guides</h2>
              <ul>
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/blog/${g.slug}`}>
                      <b>{g.metaTitle}</b>
                      <span>{g.metaDescription}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="ih-others" aria-labelledby="ih-others-h">
            <h2 id="ih-others-h">Case studies in other industries</h2>
            <ul>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/case-studies/${o.slug}`}>{o.hubTitle.replace(/ Case Studies$/, "")}</Link>
                </li>
              ))}
              <li>
                <Link href={setHub.href}>{setHub.label}</Link>
              </li>
            </ul>
          </section>
        </section>
      </div>
      <PageFaq
        faqs={industry.faqs}
        path={`/case-studies/${industry.slug}`}
        eyebrow={`About ${midSentence(industry.label)} results`}
      />
      <RoboSection />
    </>
  );
}
