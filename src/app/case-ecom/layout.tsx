import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "eCommerce Funnel Case Studies (126+)",
  description:
    "126+ eCommerce and DTC funnel case studies: ROAS, average order value and scaling results for beauty, apparel, supplement and fitness brands on Meta ads.",
  alternates: {
    canonical: `${BASE_URL}/case-ecom`,
  },
  openGraph: {
    title: "126+ eCommerce & DTC Funnel Case Studies",
    description:
      "Verified ROAS and scaling results from direct-response eCommerce funnels built by Funnels That Print.",
    url: `${BASE_URL}/case-ecom`,
    type: "website",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "eCommerce & DTC Funnel Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "126+ eCommerce & DTC Funnel Case Studies",
    description:
      "Verified ROAS and scaling results from direct-response eCommerce funnels built by Funnels That Print.",
    images: ["/img/og/funnels-that-print-og.jpg"],
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
