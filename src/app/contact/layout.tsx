import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Book a Funnel Strategy Call",
  description:
    "Book a free funnel strategy call with Funnels That Print. Tell us your offer and goals and get a custom sales funnel, CRM automation and AI calling plan.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Book a Funnel Strategy Call | Funnels That Print",
    description:
      "Get a custom plan for your sales funnel, follow-up automation and AI calling agent. Built in 5 to 10 business days.",
    url: `${BASE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Funnels That Print",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Funnel Strategy Call | Funnels That Print",
    description:
      "Get a custom plan for your sales funnel, follow-up automation and AI calling agent. Built in 5 to 10 business days.",
    images: ["/img/og/funnels-that-print-og.jpg"],
  },
};

const contactSchemaGraph = {
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
          name: "Book a Strategy Call",
          item: `${BASE_URL}/contact`,
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": `${BASE_URL}/contact#contact`,
      name: "Book a Strategy Call | Funnels That Print",
      url: `${BASE_URL}/contact`,
      description:
        "Schedule a 1-on-1 strategy call or enquire about building high-converting funnels.",
      mainEntity: { "@id": `${BASE_URL}/#organization` },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemaGraph) }}
      />
      {children}
    </>
  );
}
