import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Lead Generation Funnel Case Studies (125+ Verified Proofs)",
  description:
    "Explore 125+ verified lead-gen case studies across roofing, mortgage, coaching, medspa, and legal. See real booked calls, lead flow, and CPL numbers.",
  alternates: {
    canonical: `${BASE_URL}/case-leadgen`,
  },
  openGraph: {
    title: "125+ Lead Gen Case Studies | Funnels That Print",
    description:
      "Booked calls, verified leads and lower cost per lead for service businesses, agencies, coaches and local trades.",
    url: `${BASE_URL}/case-leadgen`,
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "Lead Generation Funnel Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Funnel Case Studies (125+ Verified Proofs)",
    description:
      "Booked calls, verified leads and lower CPL for service businesses and coaches.",
    images: ["/img/x/office.webp"],
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
