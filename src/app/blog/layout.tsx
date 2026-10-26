import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "The Performance Marketing & AI Funnel Journal | Funnels That Print",
  description:
    "Engineering insights, real-world case breakdowns, AI sales funnel architectures, and conversion rate optimization strategies from Funnels That Print.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "The Performance Marketing & AI Funnel Journal | Funnels That Print",
    description:
      "Deep-dive guides on AI voice agents, speed-to-lead automation, server-side Meta CAPI tracking, and direct-response customer acquisition.",
    url: `${BASE_URL}/blog`,
    type: "website",
    images: [
      {
        url: "/img/blog/ai-sales-funnels-2026.jpg",
        width: 1200,
        height: 630,
        alt: "The Funnels That Print Performance Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Performance Marketing & AI Funnel Journal",
    description:
      "Actionable engineering insights on AI sales funnels, CRM speed-to-lead, and high-converting acquisition stacks.",
    images: ["/img/blog/ai-sales-funnels-2026.jpg"],
  },
};

const blogCollectionSchema = {
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
          name: "Journal",
          item: `${BASE_URL}/blog`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/blog#collection`,
      name: "The Funnels That Print Performance Marketing & AI Funnel Journal",
      url: `${BASE_URL}/blog`,
      description:
        "Comprehensive guides on AI sales funnels, voice calling agents, server-side CAPI tracking, and conversion rate optimization.",
      isPartOf: {
        "@type": "WebSite",
        name: "Funnels That Print",
        url: BASE_URL,
      },
    },
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionSchema),
        }}
      />
      {children}
    </>
  );
}
