import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/templates");

export default function Page() {
  return <SeoPageView path="/templates" />;
}
