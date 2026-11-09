import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/sales-funnel-audit");

export default function Page() {
  return <SeoPageView path="/sales-funnel-audit" />;
}
