import { entriesFor, urlsetXml, xmlResponse } from "@/lib/sitemapXml";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(urlsetXml(entriesFor("locations")));
}
