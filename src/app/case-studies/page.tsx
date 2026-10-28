import type { Metadata } from "next";
import Link from "next/link";
import RoboSection from "@/components/RoboSection";
import JournalPreview from "@/components/JournalPreview";
import UFSquareMarquee from "@/components/UFSquareMarquee";
import RealClientResults from "@/components/RealClientResults";
import VideoTestimonials from "@/components/VideoTestimonials";

export const metadata: Metadata = {
  title: "Sales Funnel Case Studies (275+)",
  description:
    "Browse 275+ verified sales funnel case studies: lead generation funnels for roofing, mortgage, medspa, legal and coaching, plus eCommerce and DTC brand results.",
  alternates: {
    canonical: "https://www.funnelsthatprint.com/case-studies",
  },
  openGraph: {
    title: "Sales Funnel Case Studies: 275+ Verified Client Results",
    description:
      "Real screenshots and numbers from 275+ lead generation and eCommerce funnels built by Funnels That Print.",
    url: "https://www.funnelsthatprint.com/case-studies",
    type: "website",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "Funnels That Print Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Funnel Case Studies: 275+ Verified Client Results",
    description:
      "Real screenshots and numbers from 275+ lead generation and eCommerce funnels built by Funnels That Print.",
    images: ["/img/og/funnels-that-print-og.jpg"],
  },
};

const BASE_URL = "https://www.funnelsthatprint.com";

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: `${BASE_URL}/case-studies`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/case-studies/#collection`,
      url: `${BASE_URL}/case-studies`,
      name: "Funnels That Print Client Case Studies & Proofs",
      description:
        "275+ verified case studies across high-ticket B2B consulting, service businesses, and high-growth DTC eCommerce funnels.",
      publisher: {
        "@type": "Organization",
        name: "Funnels That Print",
        url: BASE_URL,
      },
      hasPart: [
        {
          "@type": "Article",
          name: "High-Ticket Consulting ($1.52M in 19 Months)",
          url: `${BASE_URL}/milliondollarcasestudy`,
        },
        {
          "@type": "Article",
          name: "Low-Ticket Scaling System ($847,307 Collected)",
          url: `${BASE_URL}/scalelowticket`,
        },
        {
          "@type": "CollectionPage",
          name: "125+ Lead Generation Case Studies",
          url: `${BASE_URL}/case-leadgen`,
        },
        {
          "@type": "CollectionPage",
          name: "126+ eCommerce & DTC Funnel Case Studies",
          url: `${BASE_URL}/case-ecom`,
        },
      ],
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

      <div className="box">
        <header className="cshero">
          <h1 className="h1 d">
            Sales funnel <span className="it">case studies</span>
          </h1>
          <p className="lead">
            Two libraries of real, verified results. Pick the one that matches your
            business.
          </p>
        </header>

        <div className="hub">
          <Link className="hc lg" href="/case-leadgen">
            <div className="fan">
              <img
                src="/img/lg/Dd9D3rnSCMT.webp"
                alt="Lead generation case study proof"
                loading="lazy"
                style={{ "--r": "-8deg", "--x": "-30%" } as React.CSSProperties}
              />
              <img
                src="/img/lg/DdN7bs-xSg7.webp"
                alt="Lead generation case study proof"
                loading="lazy"
                style={{ "--r": "0deg", "--x": "0%" } as React.CSSProperties}
              />
              <img
                src="/img/lg/DbHD8X3ksnz.webp"
                alt="Lead generation case study proof"
                loading="lazy"
                style={{ "--r": "8deg", "--x": "30%" } as React.CSSProperties}
              />
            </div>
            <div className="hb">
              <span className="ht">QualifiedLeadsX&trade;</span>
              <h2>Lead generation</h2>
              <div className="hn">
                <b>125</b>
                <span>case studies</span>
              </div>
              <p>
                Booked calls, verified leads and lower cost per lead for service
                businesses, agencies, coaches and local trades.
              </p>
              <div className="hch">
                <span>Roofing</span>
                <span>Legal / MVA</span>
                <span>Mortgage</span>
                <span>MedSpa</span>
                <span>Coaching</span>
                <span>Low-ticket</span>
              </div>
              <span className="btn hbtn">
                Explore lead gen cases <i>&#8599;</i>
              </span>
            </div>
          </Link>

          <Link className="hc ec" href="/case-ecom">
            <div className="fan">
              <img
                src="/img/cs2/C-4VFNmBfUA.webp"
                alt="E-commerce case study proof"
                loading="lazy"
                style={{ "--r": "-8deg", "--x": "-30%" } as React.CSSProperties}
              />
              <img
                src="/img/cs2/DMLC9R1Bn-m.webp"
                alt="E-commerce case study proof"
                loading="lazy"
                style={{ "--r": "0deg", "--x": "0%" } as React.CSSProperties}
              />
              <img
                src="/img/cs2/DCpIoi0hNhx.webp"
                alt="E-commerce case study proof"
                loading="lazy"
                style={{ "--r": "8deg", "--x": "30%" } as React.CSSProperties}
              />
            </div>
            <div className="hb">
              <span className="ht">Brand Scaling Hacks</span>
              <h2>Ecom &amp; DTC</h2>
              <div className="hn">
                <b>126</b>
                <span>case studies</span>
              </div>
              <p>
                Revenue and ROAS for direct-response eCommerce and DTC brands scaled
                with Meta ads and creative engines.
              </p>
              <div className="hch">
                <span>eCommerce</span>
                <span>DTC brands</span>
                <span>Beauty &amp; skincare</span>
                <span>Apparel</span>
                <span>Fitness</span>
                <span>Supplements</span>
              </div>
              <span className="btn hbtn">
                Explore ecom cases <i>&#8599;</i>
              </span>
            </div>
          </Link>
        </div>

        <div style={{ textAlign: "center", padding: "clamp(60px,8vw,100px) 0 40px" }}>
          <p className="lead" style={{ margin: "0 auto 24px", textAlign: "center" }}>
            Want your campaign on this page?
          </p>
          <Link className="btn o" href="/#robo">
            Build my funnel <i>&#8599;</i>
          </Link>
        </div>
      </div>
      <JournalPreview
        id="journal"
        eyebrow="From the journal"
        title={<>How we get these <span className="it">results</span>.</>}
        slugs={["ai-sales-funnels-voice-lead-qualification-2026", "meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026", "low-ticket-self-liquidating-offer-funnel-847k-breakdown"]}
      />
      <RealClientResults />
      <VideoTestimonials />
      <UFSquareMarquee />
      <RoboSection />
    </>
  );
}
