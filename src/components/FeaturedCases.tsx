"use client";

import Link from "next/link";
import { FEATURED_CASES } from "@/data/siteContent";

export default function FeaturedCases() {
  return (
    <section className="sec box" id="cases">
      <div className="chead">
        <h2 className="h2 d">
          Selected <span className="it">work.</span>
        </h2>
        <Link className="btn" href="/case-studies">
          All case studies <i>&#8599;</i>
        </Link>
      </div>

      <div className="cases" id="caselist">
        {FEATURED_CASES.map((cs, i) => (
          <article
            key={cs.slug}
            className="case"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="img">
              <img
                className="bl"
                src={`/img/cs/${cs.slug}.webp`}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <img
                className="mn"
                src={`/img/cs/${cs.slug}.webp`}
                alt={`${cs.title} results`}
                loading="lazy"
              />
            </div>

            <div className="inf">
              <div className="tags">
                <span>{cs.category}</span>
                {cs.tags.slice(0, 2).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <h3>{cs.title}</h3>
              <p>{cs.desc}</p>

              <div className="res">
                <b>{cs.metric}</b>
                <span>{cs.metricLabel}</span>
              </div>

              <Link className="btn v" href={`/case-studies#${cs.slug}`}>
                View full case study <i>&#8599;</i>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
