import { indexXml, xmlResponse } from "@/lib/sitemapXml";

export const dynamic = "force-static";

/** Sitemap index (the URL submitted to Search Console). Children are split by page type. */
export function GET() {
  return xmlResponse(indexXml());
}
