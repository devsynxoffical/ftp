import SeoPageView, { seoMetadata } from "@/components/seo/SeoPageView";

export const metadata = seoMetadata("/webinar-funnels");

export default function Page() {
  return <SeoPageView path="/webinar-funnels" />;
}
