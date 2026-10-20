import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "eCommerce & DTC Funnel Case Studies (126+ Verified Proofs)",
  description:
    "Discover 126+ eCommerce case studies scaling direct-response DTC brands across beauty, apparel, supplements, and fitness with creative funnels.",
  alternates: {
    canonical: `${BASE_URL}/case-ecom`,
  },
  openGraph: {
    title: "126+ eCommerce & DTC Funnel Case Studies | Funnels That Print",
    description:
      "Revenue and ROAS breakdowns for direct-response eCommerce and DTC brands scaled with high-converting funnels.",
    url: `${BASE_URL}/case-ecom`,
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "eCommerce & DTC Funnel Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce & DTC Funnel Case Studies (126+ Verified Proofs)",
    description:
      "Revenue and ROAS breakdowns for direct-response eCommerce and DTC brands.",
    images: ["/img/x/office.webp"],
  },
};

export default function CaseEcomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
