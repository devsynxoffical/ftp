import type { Metadata } from "next";
import Link from "next/link";
import PageFaq from "@/components/PageFaq";
import BookingCta from "@/components/BookingCta";
import { AUTHORS } from "@/data/authors";
import { CASE_INDEX } from "@/data/casePages";
import { BRAND_DESCRIPTION } from "@/data/brand";

const BASE_URL = "https://www.funnelsthatprint.com";
const URL = `${BASE_URL}/about`;
const TITLE = "About Funnels That Print: Sales Funnel Agency in Dubai";
const DESC =
  "About Funnels That Print: a Dubai-based sales funnel agency founded in 2019 by Gaurav and Rahul Kapoor, with 275+ documented client results worldwide.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, type: "website", images: [{ url: "/img/og/funnels-that-print-og.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/img/og/funnels-that-print-og.jpg"] },
};

const FAQS = [
  {
    q: "Who owns Funnels That Print?",
    a: "Funnels That Print was founded in 2019 by Gaurav Kapoor, who leads funnel strategy, offers and paid acquisition, and Rahul Kapoor, who leads CRM automation, AI calling and tracking. Both work directly on client builds, and every strategy call is taken by one of them rather than by a sales team.",
  },
  {
    q: "Where is Funnels That Print based?",
    a: "The agency is based in Dubai, United Arab Emirates, and works remotely with clients worldwide. Most of the published case studies are businesses in the United States, with others in Canada, the United Kingdom, Australia and the UAE. Calls run on Google Meet across those time zones.",
  },
  {
    q: "Are the case studies on this site real?",
    a: "Yes. Every case study shows a screenshot or video of the client's ad account, CRM or sales dashboard and states the figures that proof shows, such as leads, cost per lead, revenue or ROAS, with the month it was published. Posts that announce something without a result are kept out of search results.",
  },
  {
    q: "What does Funnels That Print do?",
    a: "We build done-for-you sales funnels (VSL, quiz, webinar and low-ticket), the GoHighLevel CRM automation behind them, AI voice agents that contact new leads within about 60 seconds, appointment reminders and Meta Conversions API tracking. Builds are one-time fees from $999 to $1,999 and launch in 5 to 10 business days.",
  },
  {
    q: "How can I contact Funnels That Print?",
    a: "Book a free 30-minute strategy call on the booking page, send a two-minute project brief on the contact page, message the team on WhatsApp from any page, or email info@funnelsthatprint.com. Replies to messages and briefs normally arrive within one business day.",
  },
];

export default function AboutPage() {
  const founders = [AUTHORS.gaurav, AUTHORS.rahul];
  const leadCases = CASE_INDEX.filter((c) => c.set === "lg").length;
  const ecomCases = CASE_INDEX.filter((c) => c.set === "ec").length;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "About", item: URL },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${URL}#webpage`,
        url: URL,
        name: TITLE,
        description: DESC,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        mainEntity: { "@id": `${BASE_URL}/#organization` },
        about: { "@id": `${BASE_URL}/#organization` },
        dateModified: "2026-11-07T09:00:00+00:00",
      },
    ],
  };

  const facts: [string, React.ReactNode][] = [
    ["Company", "Funnels That Print (FTP)"],
    ["What we do", "Done-for-you sales funnels, GoHighLevel CRM automation, AI voice agents, speed-to-lead follow-up and Meta Conversions API tracking"],
    ["Founded", "2019"],
    ["Founders", <><Link href="/team/gaurav-kapoor">Gaurav Kapoor</Link> and <Link href="/team/rahul-kapoor">Rahul Kapoor</Link></>],
    ["Based in", "Dubai, United Arab Emirates"],
    ["Clients in", "United States, Canada, United Kingdom, Australia, UAE"],
    ["Documented results", <><Link href="/case-studies/all">{CASE_INDEX.length} case studies</Link>: {leadCases} lead generation, {ecomCases} eCommerce</>],
    ["Pricing", <>One-time builds from $999 to $1,999 (<Link href="/#pricing">see packages</Link>)</>],
    ["Build time", "5 to 10 business days"],
    ["Contact", <><a href="mailto:info@funnelsthatprint.com">info@funnelsthatprint.com</a> or <Link href="/book-a-call">book a call</Link></>],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="sx-hero">
        <div className="box">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About</span>
          </nav>
          <div className="sx-hero-grid">
            <div className="sx-hero-copy">
              <div className="eyebrow mono">About us</div>
              <h1 className="h1 d">
                About Funnels <span className="it">That Print.</span>
              </h1>
              <p className="lead seo-intro">{BRAND_DESCRIPTION}</p>
              <div className="seo-cta">
                <Link className="btn o" href="/book-a-call">
                  Book a strategy call <i>&#8599;</i>
                </Link>
                <Link className="btn g" href="/case-studies">
                  See the results <i>&#8599;</i>
                </Link>
              </div>
            </div>
            <aside className="hx-qa sx-qa" aria-labelledby="about-quick-h">
              <span className="hx-tag">Quick answer</span>
              <h2 id="about-quick-h">What is Funnels That Print?</h2>
              <p>
                Funnels That Print is a sales funnel agency in Dubai, founded in 2019 by Gaurav and Rahul Kapoor. It builds done-for-you
                funnels, CRM automation and AI calling for businesses that sell through booked calls or checkouts, and publishes{" "}
                {CASE_INDEX.length} client case studies with real ad-account and CRM screenshots.
              </p>
            </aside>
          </div>
        </div>
      </header>

      <div className="box sx-body about-body">
        <div className="sx-main" style={{ gridColumn: "1 / -1" }}>
          <section className="sx-sec" id="facts">
            <span className="sx-n mono">01</span>
            <h2>Company facts</h2>
            <dl className="about-facts">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="sx-sec" id="what-we-do">
            <span className="sx-n mono">02</span>
            <h2>What we do</h2>
            <div className="seo-prose">
              <p>
                We build the system between an ad and a booked call or sale. That means the funnel itself (a{" "}
                <Link href="/vsl-funnels">VSL funnel</Link>, <Link href="/quiz-funnels">quiz funnel</Link>,{" "}
                <Link href="/webinar-funnels">webinar funnel</Link> or <Link href="/scalelowticket">low-ticket front end</Link>), the{" "}
                <Link href="/gohighlevel-agency">GoHighLevel</Link> or <Link href="/crm-automation">CRM automation</Link> behind it,{" "}
                <Link href="/ai-voice-agents">AI voice agents</Link> and <Link href="/speed-to-lead">speed-to-lead</Link> follow-up that
                reach new leads within about a minute, reminders that lift show-up rates, and{" "}
                <Link href="/meta-conversions-api-setup">Meta Conversions API tracking</Link> so ad platforms learn who actually buys.
              </p>
              <p>
                Most clients sell a high-ticket service on a call (coaching, consulting, legal, mortgage, home services) or a product
                through a checkout. We publish playbooks for each industry under{" "}
                <Link href="/funnels-for">funnels by industry</Link> and every service on the <Link href="/services">services</Link>{" "}
                page.
              </p>
              <p>
                The same team runs three sister sites for narrower services:{" "}
                <a href="https://qualifiedleadsx.com" target="_blank" rel="nofollow noopener">QualifiedLeadsX</a> for high-ticket B2B lead
                generation, <a href="https://contractorleads.us" target="_blank" rel="nofollow noopener">ContractorLeads</a> for verified
                contractor leads, and <a href="https://rankempire.us" target="_blank" rel="nofollow noopener">Rank Empire</a> for SEO, AEO and
                GEO.
              </p>
            </div>
          </section>

          <section className="sx-sec" id="how-we-document-results">
            <span className="sx-n mono">03</span>
            <h2>How we document results</h2>
            <div className="seo-prose">
              <p>
                Every result on this site has its own page with the original proof: a screenshot or screen recording of the client&apos;s
                ad account, CRM or sales dashboard. Each page lists only the figures that proof shows (leads, cost per lead, revenue,
                ROAS, ad spend) and the month it was published, and compares them with the other results we have published in the
                same industry.
              </p>
              <ul>
                <li>
                  <strong>{leadCases} lead generation results</strong> from QualifiedLeadsX&trade; campaigns, in the{" "}
                  <Link href="/case-leadgen">lead generation library</Link>.
                </li>
                <li>
                  <strong>{ecomCases} eCommerce results</strong> from Brand Scaling Hacks brands, in the{" "}
                  <Link href="/case-ecom">eCommerce library</Link>.
                </li>
                <li>
                  Two flagship builds broken down page by page: the <Link href="/milliondollarcasestudy">$1.52M consulting funnel</Link>{" "}
                  and the <Link href="/scalelowticket">$847K low-ticket funnel</Link>.
                </li>
              </ul>
              <p>
                Posts that announce a program or event without a measurable result stay on the site for context but are excluded from
                search results.
              </p>
            </div>
          </section>

          <section className="sx-sec" id="team">
            <span className="sx-n mono">04</span>
            <h2>The team</h2>
            <ul className="about-team">
              {founders.map((a) => (
                <li key={a.slug}>
                  <Link href={`/team/${a.slug}`}>
                    <img src={a.avatar} alt={a.name} width="88" height="88" loading="lazy" />
                    <span>
                      <b>{a.name}</b>
                      <em>{a.role}</em>
                      {a.bio}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <BookingCta path="/about" />
      <PageFaq faqs={FAQS} path="/about" eyebrow="About us" />
    </>
  );
}
