import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/ai-appointment-setter");

export default function Page() {
  return <SeoPageView path="/ai-appointment-setter" />;
}
