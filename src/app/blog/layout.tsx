import type { Metadata } from "next";
import BlogIndexSchema from "@/components/BlogIndexSchema";

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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogIndexSchema />
      {children}
    </>
  );
}
