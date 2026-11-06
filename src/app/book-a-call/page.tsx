import type { Metadata } from "next";
import Link from "next/link";
import BookingSection from "@/components/BookingSection";
import PageFaq from "@/components/PageFaq";
import LogoTicker from "@/components/LogoTicker";
import { whatsappHref, whatsappMessage } from "@/lib/whatsapp";

const BASE_URL = "https://www.funnelsthatprint.com";
const URL = `${BASE_URL}/book-a-call`;
const TITLE = "Book a Free Funnel Strategy Call (30 Minutes)";
const DESC =
  "Book a free funnel strategy call with Funnels That Print. Pick a 30-minute slot with Gaurav or Rahul and get a review of your funnel, follow-up and tracking.";

export const metadata: Metadata = {
  title: { absolute: "Book a Free Funnel Strategy Call | Funnels That Print" },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, type: "website", images: [{ url: "/img/og/funnels-that-print-og.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/img/og/funnels-that-print-og.jpg"] },
};

const FAQS = [
  {
    q: "Is the funnel strategy call really free?",
    a: "Yes. The call is free and there is no obligation to buy. We use the 30 minutes to understand your offer, look at your current funnel and numbers, and recommend the first thing to fix. If we are a fit, you get a fixed quote and timeline in writing after the call.",
  },
  {
    q: "Who will I speak with on the call?",
    a: "Gaurav or Rahul Kapoor, the founders of Funnels That Print. They have built and reviewed the funnels behind our 275+ documented client results, including the $1.52M consulting funnel and the $847K low-ticket front end, so you speak with the people who would plan your build.",
  },
  {
    q: "What should I prepare before the call?",
    a: "Have your offer and price, your current funnel or landing page link, roughly how many leads you get per month, and your cost per lead or cost per booked call if you track it. Ad account access is not needed. If you have none of this yet, book anyway and we will start from the offer.",
  },
  {
    q: "What happens after the call?",
    a: "Within one business day you receive a short plan with the recommended funnel, automations and tracking, a fixed price from $999 to $1,999 depending on scope, and a timeline. Most builds go live in 5 to 10 business days. You decide whether to go ahead; there is no follow-up pressure.",
  },
  {
    q: "I can't find a time that suits me. What now?",
    a: "Message us on WhatsApp or email info@funnelsthatprint.com with two or three times that work in your time zone and we will fit you in. We work with clients in the US, UK, Canada, Australia and the UAE, so early-morning and evening slots are usually possible.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Book a strategy call", item: URL },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      potentialAction: { "@type": "ReserveAction", target: URL, name: "Book a funnel strategy call" },
    },
  ],
};

export default function BookACallPage() {
  const wa = whatsappHref(whatsappMessage("/book-a-call", ""));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="sx-hero bkp-hero">
        <div className="box">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Book a call</span>
          </nav>
          <div className="eyebrow mono">Book a call</div>
          <h1 className="h1 d">
            Book your free funnel <span className="it">strategy call.</span>
          </h1>
          <p className="lead">
            Pick a 30-minute slot below. You speak with Gaurav or Rahul, we look at your offer, funnel, follow-up and tracking, and you
            leave with the first thing to fix, whether or not we work together.
          </p>
          <ul className="sx-trust" aria-label="About the call">
            <li><b>30</b> minutes</li>
            <li><b>Free</b> no obligation</li>
            <li><b>275+</b> documented results</li>
            <li><b>1 day</b> to get your plan</li>
          </ul>
        </div>
      </header>

      <BookingSection path="/book-a-call" variant="page" />

      <section className="sec box bkp-steps" aria-labelledby="bkp-steps-h">
        <div className="fx-head">
          <div>
            <div className="eyebrow mono">On the call</div>
            <h2 id="bkp-steps-h" className="h2 d">
              What happens in <span className="it">30 minutes.</span>
            </h2>
          </div>
        </div>
        <ol className="sx-cards bkp-list">
          <li>
            <div className="bkp-card">
              <span className="n mono">01</span>
              <b>Your offer and numbers</b>
              <span className="d">Price, buyer, traffic source, leads per month and what a booked call or sale costs you today.</span>
            </div>
          </li>
          <li>
            <div className="bkp-card">
              <span className="n mono">02</span>
              <b>A live review of your funnel</b>
              <span className="d">We open your pages, follow-up and tracking and show you where leads are leaking, usually after the form.</span>
            </div>
          </li>
          <li>
            <div className="bkp-card">
              <span className="n mono">03</span>
              <b>The plan and a fixed quote</b>
              <span className="d">
                The funnel, automations and tracking we would build first, with a price from $999 to $1,999 and a 5 to 10 day timeline.
              </span>
            </div>
          </li>
        </ol>
      </section>

      <section className="box bkp-people" aria-labelledby="bkp-people-h">
        <h2 id="bkp-people-h" className="h3 d">
          Who you&apos;ll <span className="it">meet.</span>
        </h2>
        <ul>
          <li>
            <Link href="/team/gaurav-kapoor">
              <img src="/img/team/gaurav.webp" alt="Gaurav Kapoor, co-founder of Funnels That Print" width="72" height="72" loading="lazy" />
              <span>
                <b>Gaurav Kapoor</b>
                Founder. Funnel strategy, offers and paid acquisition.
              </span>
            </Link>
          </li>
          <li>
            <Link href="/team/rahul-kapoor">
              <img src="/img/team/rahul.webp" alt="Rahul Kapoor, co-founder of Funnels That Print" width="72" height="72" loading="lazy" />
              <span>
                <b>Rahul Kapoor</b>
                Co-founder. CRM automation, AI calling and tracking.
              </span>
            </Link>
          </li>
        </ul>
        <p className="bkp-alt">
          Not ready for a call? <a href={wa} target="_blank" rel="noopener">Message us on WhatsApp</a>, send a{" "}
          <Link href="/contact">project brief</Link>, or browse <Link href="/case-studies">275+ client results</Link> first.
        </p>
      </section>

      <LogoTicker />
      <PageFaq faqs={FAQS} path="/book-a-call" eyebrow="About the call" />
    </>
  );
}
