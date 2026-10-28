import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "AI Sales Funnel & Automation Blog",
  description:
    "Guides on AI sales funnels, speed-to-lead automation, GoHighLevel workflows, Meta Conversions API tracking and high-ticket funnel strategy.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "AI Sales Funnel & Automation Blog | Funnels That Print",
    description:
      "Actionable guides on AI voice agents, speed-to-lead, server-side tracking and high-converting funnel architecture.",
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
    title: "AI Sales Funnel & Automation Blog | Funnels That Print",
    description:
      "Actionable guides on AI voice agents, speed-to-lead, server-side tracking and high-converting funnel architecture.",
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
