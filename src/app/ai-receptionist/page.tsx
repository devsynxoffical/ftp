import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/ai-receptionist");

export default function Page() {
  return <SeoPageView path="/ai-receptionist" />;
}
