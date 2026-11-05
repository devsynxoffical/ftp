import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/services");

export default function Page() {
  return <SeoPageView path="/services" />;
}
