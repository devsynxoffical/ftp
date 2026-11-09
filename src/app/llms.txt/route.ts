import { llmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

/** Generated from the page registry so it stays current as pages are added. */
export function GET() {
  return new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
