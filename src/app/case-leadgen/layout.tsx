import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Lead Generation Funnel Case Studies (125+ Verified Proofs)",
  description:
    "Explore 125+ verified lead-gen case studies across roofing, mortgage, coaching, medspa, and legal. See real booked calls, lead flow, and CPL numbers.",
  alternates: {
    canonical: `${BASE_URL}/case-leadgen`,
  },
  openGraph: {
    title: "125+ Lead Gen Case Studies | Funnels That Print",
    description:
      "Booked calls, verified leads and lower cost per lead for service businesses, agencies, coaches and local trades.",
    url: `${BASE_URL}/case-leadgen`,
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "Lead Generation Funnel Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Funnel Case Studies (125+ Verified Proofs)",
    description:
      "Booked calls, verified leads and lower CPL for service businesses and coaches.",
    images: ["/img/x/office.webp"],
  },
};

export default function CaseLeadgenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
