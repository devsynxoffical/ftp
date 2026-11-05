import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";
import { SEO_PAGES } from "@/data/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Only pages in the registry exist; anything else under /glossary/ is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGES.filter((p) => p.path.startsWith("/glossary/")).map((p) => ({ slug: p.path.slice("/glossary/".length) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return seoMetadata(`/glossary/${slug}`);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <SeoPageView path={`/glossary/${slug}`} />;
}
