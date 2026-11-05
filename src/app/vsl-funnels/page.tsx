import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/vsl-funnels");

export default function Page() {
  return <SeoPageView path="/vsl-funnels" />;
}
