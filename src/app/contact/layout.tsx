import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Contact Us: Send a Funnel Project Brief",
  description:
    "Contact Funnels That Print: send a 2-minute project brief about your offer, traffic and goals and get a sales funnel, automation and AI calling plan.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Funnels That Print | Send a Project Brief",
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
    title: "Contact Funnels That Print | Send a Project Brief",
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
          name: "Contact",
          item: `${BASE_URL}/contact`,
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": `${BASE_URL}/contact#contact`,
      name: "Contact Funnels That Print",
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
