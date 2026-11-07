import fs from "node:fs";
import { ORG_PUBLISHER } from "@/data/schemaOrg";
import path from "node:path";
import Link from "next/link";
import { linkTitle, linkSummary } from "@/data/seo";
import {
  getAdjacentCases,
  getCaseCard,
  getCasesForIndustry,
  getRelatedCases,
  type CasePage,
  getCaseBenchmarks,
  getCaseNextSteps,
} from "@/data/casePages";
import { getIndustryBySlug, midSentence } from "@/data/caseIndustries";
import { getBlogPostBySlug } from "@/data/blogPosts";
import RoboSection from "@/components/RoboSection";
import CaseVideo from "@/components/case/CaseVideo";
import VIDEO_DURATIONS from "@/data/videoDurations.json";

/** Seconds -> ISO 8601 duration, e.g. 75 -> "PT1M15S". */
const isoDuration = (s: number) => `PT${Math.floor(s / 60) ? `${Math.floor(s / 60)}M` : ""}${s % 60}S`;

const BASE_URL = "https://www.funnelsthatprint.com";
const OG_FALLBACK = "/img/og/funnels-that-print-og.jpg";

const publicFileExists = (p: string) => fs.existsSync(path.join(process.cwd(), "public", p));

/** Server-rendered case study page. All text is in the HTML, nothing hidden behind a toggle. */
export default function CaseStudyView({ page }: { page: CasePage }) {
  const industry = getIndustryBySlug(page.industry)!;
  const url = `${BASE_URL}/case-studies/${page.slug}`;
  const image = publicFileExists(page.image) ? page.image : OG_FALLBACK;
  const video = page.video && publicFileExists(page.video) ? page.video : null;
  const durationSec = (VIDEO_DURATIONS as Record<string, number>)[page.id];
  const related = getRelatedCases(page.slug, 6)
    .map((c) => getCaseCard(c.slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const adjacent = getAdjacentCases(page.slug);
  const benchmarks = getCaseBenchmarks(page.slug);
  const nextSteps = getCaseNextSteps(page.slug).filter((h) => linkTitle(h));
  const quickQ = `What did this ${page.niche.toLowerCase()} campaign achieve?`;
  const quickA = [page.summary, benchmarks[0]].filter(Boolean).join(" ");
  const industryCount = getCasesForIndustry(industry.slug).length;
  const guides = industry.guides
    .map((g) => getBlogPostBySlug(g))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  const showHeadline =
    page.headline &&
    page.headline.toLowerCase().replace(/[^a-z0-9]/g, "") !== page.title.toLowerCase().replace(/[^a-z0-9]/g, "");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${BASE_URL}/case-studies` },
          { "@type": "ListItem", position: 3, name: industry.hubTitle, item: `${BASE_URL}/case-studies/${industry.slug}` },
          { "@type": "ListItem", position: 4, name: page.title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: page.title,
        alternativeHeadline: page.headline || undefined,
        description: page.description,
        image: `${BASE_URL}${image}`,
        datePublished: `${page.published}T09:00:00+00:00`,
        dateModified: "2026-11-03T09:00:00+00:00",
        author: ORG_PUBLISHER,
        publisher: ORG_PUBLISHER,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        isPartOf: { "@id": `${BASE_URL}/case-studies/${industry.slug}#collection` },
        about: { "@type": "Thing", name: page.niche },
        articleSection: industry.hubTitle,
        inLanguage: "en-US",
        ...(page.igUrl ? { isBasedOn: page.igUrl } : {}),
        ...(video ? { video: { "@id": `${url}#video` } } : {}),
      },
      ...(video
        ? [
            {
              "@type": "VideoObject",
              "@id": `${url}#video`,
              name: page.title,
              description: page.description,
              thumbnailUrl: [`${BASE_URL}${image}`],
              uploadDate: `${page.published}T09:00:00+00:00`,
              contentUrl: `${BASE_URL}${video}`,
              embedUrl: url,
              ...(durationSec ? { duration: isoDuration(durationSec) } : {}),
              // Key moments: Google may link to a timestamp; CaseVideo seeks to ?t=<seconds>.
              ...(durationSec && durationSec >= 30
                ? {
                    potentialAction: {
                      "@type": "SeekToAction",
                      target: `${url}?t={seek_to_second_number}`,
                      "startOffset-input": "required name=seek_to_second_number",
                    },
                  }
                : {}),
              isFamilyFriendly: true,
              inLanguage: "en-US",
              publisher: ORG_PUBLISHER,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="box">
        <section className="kc case-page">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/case-studies">Case studies</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/case-studies/${industry.slug}`}>{industry.hubTitle.replace(/ Case Studies$/, "")}</Link>
          </nav>

          <div className="kd">
            <div className="md">
              {video ? (
                <>
                  <span className="mb">Video proof</span>
                  <CaseVideo src={video} poster={image} label={`Video breakdown: ${page.title}`} />
                </>
              ) : (
                <>
                  <span className="mb">Results screenshot</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={`${page.title}: results screenshot`} />
                </>
              )}
            </div>

            <div>
              <span className="tag">
                Case study &middot; {page.niche} &middot; {page.publishedLabel}
              </span>
              <h1>{page.title}</h1>
              {showHeadline && <p className="case-headline">&ldquo;{page.headline}&rdquo;</p>}

              <div className="km">
                <div>
                  <span>Headline result</span>
                  <b>{page.primary.value}</b>
                  <span>{page.primary.label}</span>
                </div>
                <div>
                  <span>{page.secondary.label}</span>
                  <b>{page.secondary.value}</b>
                  <span>&nbsp;</span>
                </div>
                <div>
                  <span>Industry</span>
                  <b className="sm">{page.niche}</b>
                </div>
                <div>
                  <span>System</span>
                  <b className="sm">{page.raw.sys}</b>
                </div>
              </div>

              {page.facts.length > 0 && (
                <ul className="kpt" aria-label="Reported figures">
                  {page.facts.map((f) => (
                    <li key={f.label}>
                      <span>
                        <strong>{f.label}:</strong> {f.value}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <section className="case-quick" aria-labelledby="case-quick-h">
                <span className="tag">Quick answer</span>
                <h2 id="case-quick-h">{quickQ}</h2>
                <p>{quickA}</p>
              </section>

              <div className="kcap open case-body">
                <h2>The full breakdown</h2>
                {page.blocks.length > 0 ? (
                  page.blocks.map((b, i) =>
                    b.type === "ul" ? (
                      <ul key={i}>
                        {b.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i}>{b.items[0]}</p>
                    )
                  )
                ) : (
                  <p>{page.summary}</p>
                )}
              </div>

              <div className="kact">
                <Link className="btn o" href="/book-a-call">
                  Get results like this <i>&#8599;</i>
                </Link>
                {page.igUrl && (
                  <a className="btn case-ig" href={page.igUrl} target="_blank" rel="noopener noreferrer">
                    View the original post <i>&#8599;</i>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="case-sections">
            <section className="case-card">
              <h2>Result summary</h2>
              <p>{page.summary}</p>
            </section>
            {benchmarks.length > 0 && (
              <section className="case-card case-bench">
                <h2>How this result compares</h2>
                <ul>
                  {benchmarks.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="case-bench-note">
                  Compared with the other {midSentence(industry.hubTitle.replace(/ Case Studies$/, ""))} results published on this site. See them all
                  on the <Link href={`/case-studies/${industry.slug}`}>{industry.hubTitle.toLowerCase()}</Link> page.
                </p>
              </section>
            )}
            {nextSteps.length > 0 && (
              <section className="case-card case-next">
                <h2>Build this for your business</h2>
                <ul>
                  {nextSteps.map((h) => (
                    <li key={h}>
                      <Link href={h}>
                        <b>{linkTitle(h)}</b>
                        {linkSummary(h) && <span>{linkSummary(h)}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section className="case-card">
              <h2>How {industry.label === "Shopify" ? "this eCommerce" : `this ${midSentence(industry.label)}`} system is built</h2>
              <ol className="tl">
                {industry.build.map((step) => (
                  <li key={step.title}>
                    <b>{step.title}</b>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {related.length > 0 && (
            <section className="case-related" aria-labelledby="case-related-h">
              <div className="case-related-head">
                <h2 id="case-related-h">More {midSentence(industry.hubTitle.replace(/ Case Studies$/, ""))} case studies</h2>
                <Link className="btn g" href={`/case-studies/${industry.slug}`}>
                  All {industryCount} {midSentence(industry.label)} results <i>&#8599;</i>
                </Link>
              </div>
              <ul className="case-rel-grid">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link href={c.href}>
                      <span className="case-rel-fig">{c.primary.value}</span>
                      <span className="case-rel-lbl">{c.primary.label}</span>
                      <span className="case-rel-t">{c.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {guides.length > 0 && (
            <section className="case-guides" aria-labelledby="case-guides-h">
              <h2 id="case-guides-h">Guides behind this result</h2>
              <ul>
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/blog/${g.slug}`}>
                      <b>{g.metaTitle}</b>
                      <span>{g.metaDescription}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="kcta">
            <h2>Want numbers like these?</h2>
            <Link className="btn" href="/book-a-call">
              Book a strategy call <i>&#8599;</i>
            </Link>
          </div>

          {adjacent && (
            <nav className="kpn" aria-label="More case studies">
              <Link className="knext" href={`/case-studies/${adjacent.prev.slug}`}>
                <div>
                  <span>Previous {midSentence(industry.label)} case</span>
                  <b>{getCaseCard(adjacent.prev.slug)?.title.split(": ").slice(1).join(": ")}</b>
                </div>
                <i style={{ transform: "scaleX(-1)" }}>&#8599;</i>
              </Link>
              <Link className="knext" href={`/case-studies/${adjacent.next.slug}`}>
                <div>
                  <span>Next {midSentence(industry.label)} case</span>
                  <b>{getCaseCard(adjacent.next.slug)?.title.split(": ").slice(1).join(": ")}</b>
                </div>
                <i>&#8599;</i>
              </Link>
            </nav>
          )}
        </section>
      </div>
      <RoboSection />
    </>
  );
}
