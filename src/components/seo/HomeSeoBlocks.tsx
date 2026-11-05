import Link from "next/link";

const BASE_URL = "https://www.funnelsthatprint.com";

/**
 * Answer-first block under the home hero (SEO plan, week 1). 40-60 words that
 * an answer engine can quote without the rest of the page.
 */
export function HomeQuickAnswer() {
  return (
    <div className="box">
      <section className="seo-quick home-quick" aria-labelledby="home-quick-h">
        <span className="tag">Quick answer</span>
        <h2 id="home-quick-h">What does Funnels That Print do?</h2>
        <p>
          Funnels That Print is a sales funnel agency. We build done-for-you funnels (VSL, quiz, webinar and low-ticket) and the
          systems around them: GoHighLevel CRM automation, AI voice agents that call leads within 60 seconds, reminders, and Meta
          Conversions API tracking. Builds launch in 5 to 10 business days, from $999, with 275+ documented results since 2019.
        </p>
      </section>
    </div>
  );
}

/** The 16 pages people search for most, linked from the home page. */
const MOST_SEARCHED: { href: string; label: string }[] = [
  { href: "/sales-funnel-agency", label: "Sales funnel agency" },
  { href: "/gohighlevel-agency", label: "GoHighLevel agency" },
  { href: "/ai-voice-agents", label: "AI voice agents" },
  { href: "/ai-appointment-setter", label: "AI appointment setter" },
  { href: "/speed-to-lead", label: "Speed to lead automation" },
  { href: "/vsl-funnels", label: "VSL funnels" },
  { href: "/scalelowticket", label: "Low ticket funnel agency" },
  { href: "/funnels-for/roofing", label: "Roofing lead generation funnel" },
  { href: "/funnels-for/med-spas", label: "Med spa funnel" },
  { href: "/funnels-for/personal-injury-lawyers", label: "Personal injury lead funnel" },
  { href: "/funnels-for/coaches", label: "Coaching funnel" },
  { href: "/compare/gohighlevel-vs-hubspot", label: "GoHighLevel vs HubSpot" },
  { href: "/tools/funnel-conversion-calculator", label: "Funnel conversion calculator" },
  { href: "/templates/vsl-script-template", label: "VSL script template" },
  { href: "/blog/how-much-does-a-sales-funnel-cost", label: "How much does a sales funnel cost?" },
  { href: "/glossary/sales-funnel", label: "What is a sales funnel?" },
];

export function HomeMostSearched() {
  return (
    <section className="box ind-links home-most" aria-labelledby="home-most-h">
      <h2 id="home-most-h" className="h3 d">Most searched</h2>
      <ul>
        {MOST_SEARCHED.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>
              <b>{l.label}</b>
            </Link>
          </li>
        ))}
      </ul>
      <p className="home-hubs">
        Browse everything: <Link href="/services">services</Link> · <Link href="/funnels-for">funnels by industry</Link> ·{" "}
        <Link href="/case-studies">case studies</Link> · <Link href="/tools">calculators</Link> · <Link href="/templates">templates</Link> ·{" "}
        <Link href="/glossary">glossary</Link> · <Link href="/compare">comparisons</Link> · <Link href="/blog">journal</Link>
      </p>
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
