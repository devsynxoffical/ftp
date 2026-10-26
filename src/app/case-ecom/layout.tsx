import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "eCommerce & DTC Funnel Case Studies (126+ Verified Proofs)",
  description:
    "Discover 126+ eCommerce case studies scaling direct-response DTC brands across beauty, apparel, supplements, and fitness with creative funnels.",
  alternates: {
    canonical: `${BASE_URL}/case-ecom`,
  },
  openGraph: {
    title: "126+ eCommerce & DTC Funnel Case Studies | Funnels That Print",
    description:
      "Revenue and ROAS breakdowns for direct-response eCommerce and DTC brands scaled with high-converting funnels.",
    url: `${BASE_URL}/case-ecom`,
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "eCommerce & DTC Funnel Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce & DTC Funnel Case Studies (126+ Verified Proofs)",
    description:
      "Revenue and ROAS breakdowns for direct-response eCommerce and DTC brands.",
    images: ["/img/x/office.webp"],
  },
};

const ecomSchemaGraph = {
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
          name: "eCommerce & DTC Case Studies",
          item: `${BASE_URL}/case-ecom`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/case-ecom#collection`,
      name: "126+ eCommerce & DTC Funnel Case Studies",
      url: `${BASE_URL}/case-ecom`,
      description:
        "Verified revenue and ROAS breakdowns for direct-to-consumer and eCommerce brands scaled with high-converting funnels.",
      isPartOf: {
        "@type": "WebSite",
        name: "Funnels That Print",
        url: BASE_URL,
      },
    },
  ],
};

export default function CaseEcomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecomSchemaGraph) }}
      />
      {children}
    </>
  );
}
