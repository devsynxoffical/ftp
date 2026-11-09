import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/landing-page-design");

export default function Page() {
  return <SeoPageView path="/landing-page-design" />;
}
