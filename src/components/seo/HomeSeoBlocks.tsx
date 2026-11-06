import Link from "next/link";
import { CASE_INDUSTRIES } from "@/data/caseIndustries";
import { CASE_INDEX } from "@/data/casePages";

const BASE_URL = "https://www.funnelsthatprint.com";


type L = { href: string; label: string };

/** Most searched pages, grouped so the block reads like a directory, not a tag cloud. */
const GROUPS: { title: string; hub: L; links: L[] }[] = [
  {
    title: "Services",
    hub: { href: "/services", label: "All services" },
    links: [
      { href: "/sales-funnel-agency", label: "Sales funnel agency" },
      { href: "/gohighlevel-agency", label: "GoHighLevel agency" },
      { href: "/ai-voice-agents", label: "AI voice agents" },
      { href: "/ai-appointment-setter", label: "AI appointment setter" },
      { href: "/speed-to-lead", label: "Speed to lead automation" },
      { href: "/vsl-funnels", label: "VSL funnels" },
      { href: "/scalelowticket", label: "Low ticket funnel agency" },
    ],
  },
  {
    title: "Funnels by industry",
    hub: { href: "/funnels-for", label: "All industries" },
    links: [
      { href: "/funnels-for/roofing", label: "Roofing" },
      { href: "/funnels-for/med-spas", label: "Med spas" },
      { href: "/funnels-for/personal-injury-lawyers", label: "Personal injury lawyers" },
      { href: "/funnels-for/coaches", label: "Coaches" },
      { href: "/funnels-for/mortgage", label: "Mortgage" },
      { href: "/funnels-for/solar", label: "Solar" },
      { href: "/funnels-for/hvac", label: "HVAC" },
    ],
  },
  {
    title: "Free tools",
    hub: { href: "/tools", label: "All calculators" },
    links: [
      { href: "/tools/funnel-conversion-calculator", label: "Funnel conversion calculator" },
      { href: "/tools/cost-per-lead-calculator", label: "Cost per lead calculator" },
      { href: "/tools/roas-calculator", label: "ROAS calculator" },
      { href: "/templates/vsl-script-template", label: "VSL script template" },
      { href: "/templates/sms-follow-up-templates", label: "SMS follow-up templates" },
      { href: "/templates", label: "All templates" },
    ],
  },
  {
    title: "Learn",
    hub: { href: "/blog", label: "The journal" },
    links: [
      { href: "/blog/how-much-does-a-sales-funnel-cost", label: "How much does a sales funnel cost?" },
      { href: "/glossary/sales-funnel", label: "What is a sales funnel?" },
      { href: "/compare/gohighlevel-vs-hubspot", label: "GoHighLevel vs HubSpot" },
      { href: "/compare/funnel-agency-vs-freelancer", label: "Funnel agency vs freelancer" },
      { href: "/glossary", label: "Sales funnel glossary" },
      { href: "/compare", label: "All comparisons" },
    ],
  },
];

/**
 * Home "Explore" section (SEO plan): the answer-first quick answer, the most
 * searched pages grouped by intent, and every case study hub. Styled with the
 * site's section header, row lists and dark card so it reads as part of the page.
 */
export function HomeExplore() {
  return (
    <section className="sec box hx" aria-labelledby="hx-h">
      <div className="fx-head">
        <div>
          <div className="eyebrow mono">Explore</div>
          <h2 id="hx-h" className="h2 d">
            Find your <span className="it">answer.</span>
          </h2>
          <p className="lead">Services, industry playbooks, free calculators and guides, organised by what you came to solve.</p>
        </div>
      </div>

      <div className="hx-top">
        <aside className="hx-qa" aria-labelledby="hx-qa-h">
          <span className="hx-tag">Quick answer</span>
          <h3 id="hx-qa-h">What does Funnels That Print do?</h3>
          <p>
            Funnels That Print is a sales funnel agency. We build done-for-you funnels (VSL, quiz, webinar and low-ticket) and the
            systems around them: GoHighLevel CRM automation, AI voice agents that call leads within 60 seconds, reminders, and Meta
            Conversions API tracking. Builds launch in 5 to 10 business days, from $999, with 275+ documented results since 2019.
          </p>
          <div className="hx-qa-stats">
            <div><b>275+</b><span>documented results</span></div>
            <div><b>5-10</b><span>days per build</span></div>
            <div><b>$999</b><span>builds from</span></div>
          </div>
          <Link className="btn o" href="/book-a-call">
            Book a strategy call <i>&#8599;</i>
          </Link>
        </aside>

        <div className="hx-groups">
          {GROUPS.map((g) => (
            <nav key={g.title} className="hx-g" aria-label={g.title}>
              <span className="hx-gh mono">{g.title}</span>
              <ul>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>
                      {l.label}
                      <i aria-hidden="true">&#8599;</i>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link className="hx-hub" href={g.hub.href}>
                {g.hub.label} &rarr;
              </Link>
            </nav>
          ))}
        </div>
      </div>

      <div className="hx-cases" aria-labelledby="hx-cases-h">
        <div className="hx-cases-head">
          <h3 id="hx-cases-h" className="h3 d">
            Case studies by <span className="it">industry</span>
          </h3>
          <Link className="btn g" href="/case-studies/all">
            All case studies <i>&#8599;</i>
          </Link>
        </div>
        <ul>
          {CASE_INDUSTRIES.map((i, n) => (
            <li key={i.slug}>
              <Link href={`/case-studies/${i.slug}`}>
                <span className="n mono">{String(n + 1).padStart(2, "0")}</span>
                <b>{i.hubTitle.replace(/ Case Studies$/, "")}</b>
                <span className="c mono">{CASE_INDEX.filter((c) => c.industry === i.slug).length} results</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Service structured data for the home page. */
export const HOME_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service`,
      name: "Sales funnel and automation services",
      serviceType: "Sales funnel design, build and automation",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Worldwide" },
      url: `${BASE_URL}/services`,
      description:
        "Done-for-you sales funnels (VSL, quiz, webinar, low-ticket), GoHighLevel CRM automation, AI voice agents, speed-to-lead follow-up and Meta Conversions API tracking.",
      offers: [
        { "@type": "Offer", name: "Design only", price: "999", priceCurrency: "USD" },
        { "@type": "Offer", name: "Design, copy and full build", price: "1499", priceCurrency: "USD" },
        { "@type": "Offer", name: "Complete suite with CRM, automation, AI booking and tracking", price: "1999", priceCurrency: "USD" },
      ],
    },
  ],
};
