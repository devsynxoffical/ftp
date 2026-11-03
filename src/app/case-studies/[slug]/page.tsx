import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseSlugs, getCasePage } from "@/data/casePages";
import { CASE_INDUSTRIES, getIndustryBySlug } from "@/data/caseIndustries";
import CaseStudyView from "@/components/case/CaseStudyView";
import IndustryHubView from "@/components/case/IndustryHubView";

const BASE_URL = "https://www.funnelsthatprint.com";
const OG = "/img/og/funnels-that-print-og.jpg";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Every industry hub and every case study is prerendered; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...CASE_INDUSTRIES.map((i) => ({ slug: i.slug })),
    ...getAllCaseSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const url = `${BASE_URL}/case-studies/${slug}`;

  const industry = getIndustryBySlug(slug);
  if (industry) {
    return {
      title: { absolute: industry.hubMetaTitle },
      description: industry.hubDescription,
      alternates: { canonical: url },
      openGraph: {
        title: industry.hubMetaTitle,
        description: industry.hubDescription,
        url,
        type: "website",
        images: [{ url: OG, width: 1200, height: 630, alt: industry.hubTitle }],
      },
      twitter: { card: "summary_large_image", title: industry.hubMetaTitle, description: industry.hubDescription, images: [OG] },
    };
  }

  const page = getCasePage(slug);
  if (!page) return {};
  return {
    // Titles are written to 60 characters; add the brand only where it still fits.
    title: page.titleUsesTemplate ? page.title : { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    ...(page.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      publishedTime: page.published,
      modifiedTime: "2026-11-03",
      images: [{ url: page.image, alt: page.title }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [page.image] },
  };
}

export default async function CaseStudyOrHubPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (industry) return <IndustryHubView industry={industry} />;
  const page = getCasePage(slug);
  if (!page) notFound();
  return <CaseStudyView page={page} />;
}
