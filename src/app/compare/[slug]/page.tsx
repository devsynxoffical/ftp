import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";
import { SEO_PAGES } from "@/data/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Only pages in the registry exist; anything else under /compare/ is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGES.filter((p) => p.path.startsWith("/compare/")).map((p) => ({ slug: p.path.slice("/compare/".length) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return seoMetadata(`/compare/${slug}`);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <SeoPageView path={`/compare/${slug}`} />;
}
