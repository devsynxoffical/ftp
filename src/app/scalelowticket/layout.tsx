import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "$847,307 Low-Ticket Front Door Case Study",
  description:
    "How we turned an ad-bleeding coaching offer into a self-liquidating $847,307 buyer engine with an optimized low-ticket acquisition front door.",
  alternates: {
    canonical: `${BASE_URL}/scalelowticket`,
  },
  openGraph: {
    title:
      "$847,307 Collected from a Low-Ticket Front Door | Funnels That Print",
    description:
      "A coaching client stuck in high-ticket hype with no front end to pay for ads. We rebuilt the offer, fixed tracking, and generated $847,307.",
    url: `${BASE_URL}/scalelowticket`,
    type: "article",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "$847K Case Study — Funnels That Print",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$847,307 Low-Ticket Front Door Case Study",
    description:
      "How we built a self-liquidating $847,307 buyer machine with an optimized low-ticket acquisition front door.",
    images: ["/img/x/office.webp"],
  },
};

const caseSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "$847,307 collected from a low-ticket front door",
  description:
    "How we rebuilt the offer, fixed tracking, and turned an ad-bleeding coaching funnel into a self-liquidating $847,307 buyer engine.",
  author: {
    "@type": "Organization",
    name: "Funnels That Print",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Funnels That Print",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/img/logos/logo-01.webp`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/scalelowticket`,
  },
};

export default function ScaleLowTicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
      />
      {children}
    </>
  );
}
