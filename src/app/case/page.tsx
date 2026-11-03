import { permanentRedirect } from "next/navigation";
import { getCaseSlugById } from "@/data/casePages";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * The old client-side viewer (/case?set=lg&id=<post>) is replaced by one
 * static, indexable page per case study. Old links and bookmarks get a 308
 * to the matching page, or to the case study library if the id is unknown.
 */
export default async function LegacyCaseViewer({ searchParams }: PageProps) {
  const sp = await searchParams;
  const id = Array.isArray(sp.id) ? sp.id[0] : sp.id;
  const slug = id ? getCaseSlugById(id) : undefined;
  permanentRedirect(slug ? `/case-studies/${slug}` : "/case-studies");
}
