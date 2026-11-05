import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/quiz-funnels");

export default function Page() {
  return <SeoPageView path="/quiz-funnels" />;
}
