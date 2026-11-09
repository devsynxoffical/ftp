import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/lead-reactivation");

export default function Page() {
  return <SeoPageView path="/lead-reactivation" />;
}
