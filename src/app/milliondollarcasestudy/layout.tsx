import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "$1.52M High-Ticket Consulting Case Study",
  description:
    "How we scaled an inconsistent high-ticket consulting offer to $1,520,000 in 19 months using a turnkey Funnels That Print™ architecture.",
  alternates: {
    canonical: `${BASE_URL}/milliondollarcasestudy`,
  },
  openGraph: {
    title: "$1.52M in 19 Months Case Study | Funnels That Print",
    description:
      "From inconsistent cold traffic to $1.52M in 19 months on a turnkey Funnels That Print™ stack. Watch the full walkthrough.",
    url: `${BASE_URL}/milliondollarcasestudy`,
    type: "article",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "$1.52M Case Study — Funnels That Print",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$1.52M High-Ticket Consulting Case Study",
    description:
      "How we scaled an inconsistent high-ticket consulting offer to $1,520,000 in 19 months.",
    images: ["/img/x/office.webp"],
  },
};

const caseSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "From inconsistent cold traffic to $1.52M in 19 months, on a turnkey Funnels That Print™ acquisition stack",
  description:
    "Comprehensive case study breakdown of scaling a high-ticket consulting firm to $1,520,000 revenue in 19 months.",
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
    "@id": `${BASE_URL}/milliondollarcasestudy`,
  },
};

export default function Case1MLayout({
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
