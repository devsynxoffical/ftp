import type { Metadata } from "next";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  title: "Case Study Viewer & Conversion Proof",
  description:
    "Examine detailed revenue figures, ad performance metrics, and video proof of client funnels built by Funnels That Print.",
  alternates: {
    canonical: `${BASE_URL}/case`,
  },
  openGraph: {
    title: "Case Study Viewer | Funnels That Print",
    description:
      "Verified conversion proof, revenue stats, and funnel breakdowns.",
    url: `${BASE_URL}/case`,
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "Funnels That Print Case Study Proof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study Viewer & Conversion Proof",
    description:
      "Verified conversion proof, revenue stats, and funnel breakdowns.",
    images: ["/img/x/office.webp"],
  },
};

export default function CaseViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
