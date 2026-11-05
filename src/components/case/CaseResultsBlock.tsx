import Link from "next/link";
import { getCaseCard, getCasePage, getCasesForIndustry } from "@/data/casePages";
import { getIndustryBySlug, midSentence } from "@/data/caseIndustries";

/**
 * "Results from this playbook": real case studies from the industries an
 * article or page is about, plus links to those industry hubs. Server-only
 * markup with plain links, so indexed pages pass crawl paths to case pages.
 */
export default function CaseResultsBlock({
  industries,
  perIndustry = 2,
  title = "Results from this playbook",
  intro,
  className = "",
}: {
  industries: string[];
  perIndustry?: number;
  title?: string;
  intro?: string;
  className?: string;
}) {
  const hubs = industries.map((s) => getIndustryBySlug(s)).filter((h): h is NonNullable<typeof h> => Boolean(h));
  const cards = hubs.flatMap((h) =>
    getCasesForIndustry(h.slug)
      .map((c) => getCasePage(c.slug)!)
      // Cases with a stated metric and reported figures make the best proof.
      .filter((p) => p.phrase && !p.noindex)
      .sort((a, b) => b.facts.length - a.facts.length || a.order - b.order)
      .slice(0, perIndustry)
      .map((p) => getCaseCard(p.slug)!)
  );
  if (!cards.length) return null;

  return (
    <section className={`case-results-block ${className}`} aria-labelledby="crb-h">
      <h2 id="crb-h">{title}</h2>
      {intro && <p className="crb-intro">{intro}</p>}
      <ul className="case-rel-grid">
        {cards.map((c) => (
          <li key={c.slug}>
            <Link href={c.href}>
              <span className="case-rel-fig">{c.primary.value}</span>
              <span className="case-rel-lbl">{c.primary.label}</span>
              <span className="case-rel-t">{c.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="crb-hubs">
        {hubs.map((h, i) => (
          <span key={h.slug}>
            {i > 0 && " · "}
            <Link href={`/case-studies/${h.slug}`}>All {midSentence(h.hubTitle.replace(/ Case Studies$/, ""))} case studies</Link>
          </span>
        ))}
      </p>
    </section>
  );
}
