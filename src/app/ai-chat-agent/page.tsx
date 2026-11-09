import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/ai-chat-agent");

export default function Page() {
  return <SeoPageView path="/ai-chat-agent" />;
}
