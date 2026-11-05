import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/funnels-for");

export default function Page() {
  return <SeoPageView path="/funnels-for" />;
}
