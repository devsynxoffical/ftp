"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CASE_STUDIES, CaseStudy } from "@/data/siteContent";

const STEP = 8;

export default function CaseStudiesPage() {
  const [shownCount, setShownCount] = useState(STEP);
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const displayedStudies = CASE_STUDIES.slice(0, shownCount);

  // Handle direct deep-linking via hash (e.g. /case-studies#DLidtnUTjXL)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const idx = CASE_STUDIES.findIndex((cs) => cs.k === hashId);
      if (idx > -1) {
        if (idx >= shownCount) {
          setShownCount(Math.min(CASE_STUDIES.length, idx + STEP));
        }
        setTimeout(() => setActiveStudy(CASE_STUDIES[idx]), 400);
      }
    }
  }, []);

  const openModal = (cs: CaseStudy) => {
    setActiveStudy(cs);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${cs.k}`);
    }
  };

  const closeModal = () => {
    setActiveStudy(null);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const loadMore = () => {
    setShownCount((prev) => Math.min(CASE_STUDIES.length, prev + STEP));
  };

  return (
    <main className="box wh" id="top">
      {/* Header matching ftp 4 case-studies.html */}
      <header className="cshero">
        <h1 className="h1 d">
          Case <span className="it">studies</span>
        </h1>
        <p className="lead">
          See how sharper offers, better funnels and automated follow-up turn
          ad spend into booked calls and sales. 56 campaigns, real numbers.
        </p>
      </header>

      {/* 2-Column Grid matching ftp 4 */}
      <div className="cgrid2" id="cgrid">
        {displayedStudies.map((cs, i) => {
          const desc = (cs.b || "").replace(/\s+/g, " ").slice(0, 180);
          const dl = `${(i % 2) * 0.08 + Math.floor((i % 8) / 2) * 0.06}s`;

          return (
            <button
              key={cs.k}
              type="button"
              className="ck show"
              id={cs.k}
              data-i={i}
              style={{ "--dl": dl } as React.CSSProperties}
              onClick={() => openModal(cs)}
              aria-label={`Open case study: ${cs.t}`}
            >
              <span className="im">
                <img
                  src={`/img/cs/${cs.k}.webp`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                <img
                  className="mn"
                  src={`/img/cs/${cs.k}.webp`}
                  alt={`${cs.g} case study`}
                  loading="lazy"
                />
              </span>
              <span className="tx">
                <span className="tg">{cs.g}</span>
                <h3>{cs.t}</h3>
                <p>{desc}</p>
                {cs.s ? (
                  <span className="fig">
                    <b>{cs.s.replace(/,$/, "")}</b>
                    <span>Key figure from the campaign</span>
                  </span>
                ) : (
                  <span className="fig">
                    <span>Open the full breakdown &#8599;</span>
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Load More & Count */}
      <div className="cmore">
        {shownCount < CASE_STUDIES.length && (
          <button
            type="button"
            className="btn lm2"
            id="lmore"
            onClick={loadMore}
          >
            Load more <i>&#8599;</i>
          </button>
        )}
        <span className="mono" id="lcount">
          Showing {shownCount} of {CASE_STUDIES.length}
        </span>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          textAlign: "center",
          padding: "clamp(60px, 8vw, 100px) 0 40px",
        }}
      >
        <p
          className="lead"
          style={{ margin: "0 auto 24px", textAlign: "center" }}
        >
          Want your campaign on this page?
        </p>
        <Link className="btn o" href="/#robo">
          Build my funnel <i>&#8599;</i>
        </Link>
      </div>

      {/* Native Dialog Modal matching ftp 4 */}
      {activeStudy && (
        <dialog
          className="cm"
          id="cm"
          open
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <button
            className="x"
            id="cmx"
            aria-label="Close"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="in">
            <div className="im">
              <img
                id="cmi"
                src={`/img/cs/${activeStudy.k}.webp`}
                alt={`${activeStudy.t} proof`}
              />
            </div>
            <div className="tx">
              <span className="mono" id="cmg">
                {activeStudy.g}
              </span>
              <h2 id="cmt">{activeStudy.t}</h2>
              <p id="cmb">{activeStudy.b}</p>
              <Link
                className="btn o"
                href="/#robo"
                style={{ alignSelf: "flex-start", marginTop: "auto" }}
                onClick={closeModal}
              >
                Build something like this <i>&#8599;</i>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </main>
  );
}
