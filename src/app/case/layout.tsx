import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Case Study Viewer & Conversion Proof",
  description:
    "Examine detailed revenue figures, ad performance metrics, and video proof of client funnels built by Funnels That Print.",
  alternates: {
    canonical: `${BASE_URL}/case`,
  },
  // Client-rendered viewer driven by ?set=&id= query params. Googlebot sees an
  // empty shell per URL, which produces "Crawled, currently not indexed" noise
  // and dilutes the hub pages. Keep it crawlable (follow) but out of the index.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Case Study Viewer | Funnels That Print",
    description:
      "Verified conversion proof, revenue stats, and funnel breakdowns.",
    url: `${BASE_URL}/case`,
    type: "website",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "Funnels That Print Case Study Proof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study Viewer & Conversion Proof",
    description:
      "Verified conversion proof, revenue stats, and funnel breakdowns.",
    images: ["/img/og/funnels-that-print-og.jpg"],
  },
};

const caseViewerSchemaGraph = {
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
          name: "Case Proof Viewer",
          item: `${BASE_URL}/case`,
        },
      ],
    },
    {
      "@type": "ItemPage",
      "@id": `${BASE_URL}/case#viewer`,
      name: "Case Study Proof Viewer | Funnels That Print",
      url: `${BASE_URL}/case`,
      description:
        "Verified conversion proof, revenue dashboard metrics, and funnel breakdowns.",
      isPartOf: {
        "@type": "WebSite",
        name: "Funnels That Print",
        url: BASE_URL,
      },
    },
  ],
};

export default function CaseViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseViewerSchemaGraph),
        }}
      />
      {children}
    </>
  );
}
