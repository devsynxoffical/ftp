import Link from "next/link";
import { CASE_INDUSTRIES, type CaseSet } from "@/data/caseIndustries";
import { CASE_INDEX } from "@/data/casePages";

/**
 * "Browse by industry" links to every industry hub. Plain links with no state,
 * so it renders the same in server and client pages and is fully crawlable.
 */
export default function IndustryLinks({
  set,
  title = "Browse case studies by industry",
}: {
  set?: CaseSet;
  title?: string;
}) {
  const list = set ? CASE_INDUSTRIES.filter((i) => i.set === set) : CASE_INDUSTRIES;
  return (
    <section className="box ind-links" aria-labelledby="ind-links-h">
      <h2 id="ind-links-h" className="h3 d">{title}</h2>
      <ul>
        {list.map((i) => (
          <li key={i.slug}>
            <Link href={`/case-studies/${i.slug}`}>
              <b>{i.hubTitle.replace(/ Case Studies$/, "")}</b>
              <span>{CASE_INDEX.filter((c) => c.industry === i.slug).length} results</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
