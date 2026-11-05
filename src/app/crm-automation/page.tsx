import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/crm-automation");

export default function Page() {
  return <SeoPageView path="/crm-automation" />;
}
