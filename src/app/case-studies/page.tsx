import type { Metadata } from "next";
import RoboSection from "@/components/RoboSection";
import UFSquareMarquee from "@/components/UFSquareMarquee";
import RealClientResults from "@/components/RealClientResults";
import VideoTestimonials from "@/components/VideoTestimonials";

export const metadata: Metadata = {
  title: "Client Case Studies: Lead Gen & eCommerce Funnels",
  description:
    "Browse 250+ verified case studies and proof across high-ticket lead generation and DTC eCommerce funnels built by Funnels That Print.",
  alternates: {
    canonical: "https://www.funnelsthatprint.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies: Lead Gen & eCommerce Funnels | Funnels That Print",
    description:
      "Browse 250+ verified client results across service businesses, high-ticket consulting, and high-growth DTC brands.",
    url: "https://www.funnelsthatprint.com/case-studies",
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "Funnels That Print Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies: Lead Gen & eCommerce Funnels",
    description:
      "Browse 250+ verified case studies across Lead Generation and eCommerce.",
    images: ["/img/x/office.webp"],
  },
};

const BASE_URL = "https://www.funnelsthatprint.com";

const caseStudiesSchema = {
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
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/case-studies/#collection`,
      url: `${BASE_URL}/case-studies`,
      name: "Funnels That Print Client Case Studies & Proofs",
      description:
        "275+ verified case studies across high-ticket B2B consulting, service businesses, and high-growth DTC eCommerce funnels.",
      publisher: {
        "@type": "Organization",
        name: "Funnels That Print",
        url: BASE_URL,
      },
      hasPart: [
        {
          "@type": "Article",
          name: "High-Ticket Consulting ($1.52M in 19 Months)",
          url: `${BASE_URL}/milliondollarcasestudy`,
        },
        {
          "@type": "Article",
          name: "Low-Ticket Scaling System ($847,307 Collected)",
          url: `${BASE_URL}/scalelowticket`,
        },
        {
          "@type": "CollectionPage",
          name: "125+ Lead Generation Case Studies",
          url: `${BASE_URL}/case-leadgen`,
        },
        {
          "@type": "CollectionPage",
          name: "126+ eCommerce & DTC Funnel Case Studies",
          url: `${BASE_URL}/case-ecom`,
        },
      ],
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />

    <RealClientResults />
    <VideoTestimonials />
    <UFSquareMarquee />
    <RoboSection />
  </>
  );
}
