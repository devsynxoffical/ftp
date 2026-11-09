import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/locations");

export default function Page() {
  return <SeoPageView path="/locations" />;
}
