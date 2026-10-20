"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FEATURED_CASES } from "@/data/siteContent";

export default function FeaturedCases() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const videos = containerRef.current.querySelectorAll<HTMLVideoElement>(".mv");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec box" id="cases">
      <div className="cwrap">
        <div className="chead">
          <h2 className="h2 d">
            Selected <span className="it">work.</span>
          </h2>
          <Link className="btn" href="/case-studies">
            All case studies <i>&#8599;</i>
          </Link>
        </div>

        <div className="cases" id="caselist" ref={containerRef}>
          {FEATURED_CASES.map((cs, i) => (
            <article
              key={cs.slug}
              className="case"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="cin">
                <div className="img">
                  <video
                    className="mv"
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={`/img/sw/c${i + 1}.webp`}
                    aria-hidden="true"
                  >
                    <source src={`/img/sw/c${i + 1}.mp4`} type="video/mp4" />
                  </video>
                  <span className="gl" />
                  <figure className="pf">
                    <img
                      className="mn"
                      src={`/img/cs/${cs.slug}.webp`}
                      alt={`${cs.title} results`}
                      loading="lazy"
                    />
                    <figcaption>
                      <i />
                      Real result
                    </figcaption>
                  </figure>
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

                  <Link className="btn v" href={`/case?set=lg&id=${cs.slug}`}>
                    View full case study <i>&#8599;</i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
