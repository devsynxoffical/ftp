import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "$1.52M High-Ticket Funnel Case Study",
  description:
    "How a high-ticket consulting offer scaled to $1,520,000 in 19 months with a VSL funnel, AI lead qualification, speed-to-lead automation and Meta CAPI tracking.",
  alternates: {
    canonical: `${BASE_URL}/milliondollarcasestudy`,
  },
  openGraph: {
    title: "$1.52M in 19 Months: High-Ticket Consulting Funnel Case Study",
    description:
      "The full funnel, automation and attribution stack behind $1.52M collected from cold traffic in 19 months.",
    url: `${BASE_URL}/milliondollarcasestudy`,
    type: "article",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "$1.52M Case Study — Funnels That Print",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$1.52M in 19 Months: High-Ticket Consulting Funnel Case Study",
    description:
      "The full funnel, automation and attribution stack behind $1.52M collected from cold traffic in 19 months.",
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
          name: "$1.52M High-Ticket Consulting Case Study",
          item: `${BASE_URL}/milliondollarcasestudy`,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${BASE_URL}/milliondollarcasestudy#article`,
      headline:
        "From inconsistent cold traffic to $1.52M in 19 months, on a turnkey Funnels That Print™ acquisition stack",
      alternativeHeadline:
        "High-Ticket Consulting Offer Scaled to $1,520,000",
      description:
        "Comprehensive case study breakdown of scaling a high-ticket consulting firm to $1,520,000 revenue in 19 months using direct-response acquisition funnels.",
      image: `${BASE_URL}/img/og/funnels-that-print-og.jpg`,
      datePublished: "2024-01-15T08:00:00+00:00",
      dateModified: "2026-01-10T12:00:00+00:00",
      author: {
        "@type": "Organization",
        name: "Funnels That Print",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Funnels That Print",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/img/logos/logo-01.webp`,
        },
      },
      about: [
        { "@type": "Thing", name: "High-Ticket Consulting" },
        { "@type": "Thing", name: "Sales Funnel Architecture" },
        { "@type": "Thing", name: "Paid Advertising Acquisition" },
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/milliondollarcasestudy`,
      },
    },
  ],
};

export default function Case1MLayout({
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
