import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/glossary");

export default function Page() {
  return <SeoPageView path="/glossary" />;
}
