import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Book a Strategy Call & Build Your Funnel",
  description:
    "Ready to scale your conversions and turn traffic into booked sales calls? Contact Funnels That Print or book your funnel strategy session.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Book a Strategy Call | Funnels That Print",
    description:
      "Tell us about your offer, ad spend, and goals. We will build a conversion journey engineered to print calls and revenue.",
    url: `${BASE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "Contact Funnels That Print",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Strategy Call | Funnels That Print",
    description:
      "Ready to scale your conversions and turn traffic into booked sales calls? Contact Funnels That Print.",
    images: ["/img/x/office.webp"],
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
      mainEntity: {
        "@type": "Organization",
        name: "Funnels That Print",
        url: BASE_URL,
        email: "info@funnelsthatprint.com",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales and customer service",
          email: "info@funnelsthatprint.com",
          availableLanguage: ["English"],
        },
      },
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
