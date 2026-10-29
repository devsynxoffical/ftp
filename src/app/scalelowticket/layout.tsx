import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "$847K Low-Ticket SLO Funnel Case Study",
  description:
    "How a $27 self-liquidating offer funnel collected $847,307: front-end offer, order bump and upsell economics, buyer-list backend and value-based ad tracking.",
  alternates: {
    canonical: `${BASE_URL}/scalelowticket`,
  },
  openGraph: {
    title:
      "$847,307 Collected from a Low-Ticket Front Door | Funnels That Print",
    description:
      "A coaching client stuck in high-ticket hype with no front end to pay for ads. We rebuilt the offer, fixed tracking, and generated $847,307.",
    url: `${BASE_URL}/scalelowticket`,
    type: "article",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "$847K Case Study — Funnels That Print",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$847,307 Self-Liquidating Offer Funnel Case Study",
    description:
      "Page-by-page breakdown of the low-ticket front door funnel that paid for its own ads and built a buyer list.",
    images: ["/img/og/funnels-that-print-og.jpg"],
  },
};

const caseSchemaGraph = {
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
        {
          "@type": "ListItem",
          position: 3,
          name: "$847,307 Low-Ticket Front Door Case Study",
          item: `${BASE_URL}/scalelowticket`,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${BASE_URL}/scalelowticket#article`,
      headline: "$847,307 collected from a low-ticket front door",
      alternativeHeadline:
        "Self-Liquidating Low-Ticket Front-End System Case Study",
      description:
        "How we rebuilt the offer, fixed tracking, and turned an ad-bleeding coaching funnel into a self-liquidating $847,307 buyer engine.",
      image: `${BASE_URL}/img/og/funnels-that-print-og.jpg`,
      datePublished: "2024-03-20T08:00:00+00:00",
      dateModified: "2026-10-29T12:00:00+00:00",
      author: { "@id": `${BASE_URL}/#person-gaurav` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      about: [
        { "@type": "Thing", name: "Low-Ticket Acquisition Funnel" },
        { "@type": "Thing", name: "Coaching and Info Products" },
        { "@type": "Thing", name: "Paid Media Optimization" },
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/scalelowticket`,
      },
    },
  ],
};

export default function ScaleLowTicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchemaGraph) }}
      />
      {children}
    </>
  );
}
