import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/ai-agents");

export default function Page() {
  return <SeoPageView path="/ai-agents" />;
}
