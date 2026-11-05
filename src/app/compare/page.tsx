import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/compare");

export default function Page() {
  return <SeoPageView path="/compare" />;
}
