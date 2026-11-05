import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/tools");

export default function Page() {
  return <SeoPageView path="/tools" />;
}
