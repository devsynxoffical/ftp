import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Lead Gen Funnel Case Studies (125+)",
  description:
    "125+ lead generation funnel case studies with real cost per lead, booked calls and ad spend across roofing, mortgage, medspa, legal, solar and coaching.",
  alternates: {
    canonical: `${BASE_URL}/case-leadgen`,
  },
  openGraph: {
    title: "125+ Lead Generation Funnel Case Studies",
    description:
      "Verified lead gen funnel results: cost per lead, booked calls and pipeline across home services, finance, healthcare and coaching.",
    url: `${BASE_URL}/case-leadgen`,
    type: "website",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Generation Funnel Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "125+ Lead Generation Funnel Case Studies",
    description:
      "Verified lead gen funnel results: cost per lead, booked calls and pipeline across home services, finance, healthcare and coaching.",
    images: ["/img/og/funnels-that-print-og.jpg"],
  },
};

const leadgenSchemaGraph = {
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
          name: "Lead Generation Case Studies",
          item: `${BASE_URL}/case-leadgen`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/case-leadgen#collection`,
      name: "125+ Lead Generation Funnel Case Studies",
      url: `${BASE_URL}/case-leadgen`,
      description:
        "Verified booked calls, qualified lead flow, and CPL metrics for service businesses, agencies, and high-ticket coaches.",
      isPartOf: {
        "@type": "WebSite",
        name: "Funnels That Print",
        url: BASE_URL,
      },
    },
  ],
};

export default function CaseLeadgenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadgenSchemaGraph) }}
      />
      {children}
    </>
  );
}
