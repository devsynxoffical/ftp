"use client";

import Link from "next/link";
import Image from "next/image";
import { FEATURED_CASES } from "@/data/siteContent";

export default function FeaturedCases() {
  return (
    <section className="sec box" id="cases">
      <div className="chead">
        <div>
          <div className="eyebrow mono">Case studies</div>
          <h2 className="h2 d">
            Selected <span className="it">work.</span>
          </h2>
        </div>
        <Link className="btn" href="/case-studies">
          All 56 case studies <i>&#8599;</i>
        </Link>
      </div>

      <div className="cases">
        {FEATURED_CASES.map((cs) => (
          <article key={cs.slug} className="case-card">
            <div className="img">
              <Image
                className="bl"
                src={`/img/cs/${cs.slug}.webp`}
                alt=""
                fill
                sizes="100vw"
                aria-hidden="true"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="mn"
                src={`/img/cs/${cs.slug}.webp`}
                alt={`${cs.title} result screenshot`}
                width={700}
                height={500}
                style={{
                  position: "absolute",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="inf">
              <div className="tags">
                <span>{cs.category}</span>
                {cs.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <h3>{cs.title}</h3>
              <p>{cs.desc}</p>

              <div className="res">
                <b>{cs.metric}</b>
                <span>{cs.metricLabel}</span>
              </div>

              <Link
                className="btn v"
                href={`/case-studies#${cs.slug}`}
              >
                <span>View full breakdown</span>
                <i>&#8599;</i>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
