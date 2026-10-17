"use client";

import { useState, useEffect, useMemo } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/siteContent";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(
    null
  );

  // Extract unique categories and calculate counts
  const categoriesWithCounts = useMemo(() => {
    const counts: { [key: string]: number } = { All: CASE_STUDIES.length };
    CASE_STUDIES.forEach((cs) => {
      const cat = cs.g.trim();
      counts[cat] = (counts[cat] || 0) + 1;
    });

    const list = Object.entries(counts).map(([name, count]) => ({
      name,
      count,
    }));

    return list;
  }, []);

  // Filtered case studies
  const filteredStudies = useMemo(() => {
    if (selectedCategory === "All") return CASE_STUDIES;
    return CASE_STUDIES.filter((cs) => cs.g.trim() === selectedCategory);
  }, [selectedCategory]);

  // Handle direct deep-linking via hash (e.g. /case-studies#DLidtnUTjXL)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const match = CASE_STUDIES.find((cs) => cs.k === hashId);
      if (match) {
        setTimeout(() => setActiveModalStudy(match), 400);
      }
    }
  }, []);

  const openStudy = (study: CaseStudy) => {
    setActiveModalStudy(study);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${study.k}`);
    }
  };

  const closeStudy = () => {
    setActiveModalStudy(null);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <main className="box wh" id="top" style={{ paddingTop: "clamp(100px, 12vw, 140px)" }}>
      {/* Page Header */}
      <div className="head">
        <div>
          <div className="eyebrow mono">Case studies</div>
          <h1
            className="h1 d"
            style={{ fontSize: "clamp(40px, 6.4vw, 96px)" }}
          >
            Built for conversion.
            <br />
            <span className="it">Proven</span> in the numbers.
          </h1>
        </div>

        <p className="lead">
          56 campaigns and funnels across lead gen, low-ticket, coaching, legal,
          home services and more. Each one posted by the team with the real
          figures. Open any card for the full breakdown.
        </p>
      </div>

      {/* Filter Chips Bar */}
      <div className="chips" role="tablist" aria-label="Filter by industry">
        {categoriesWithCounts.map(({ name, count }) => {
          const isSelected = selectedCategory === name;
          return (
            <button
              key={name}
              type="button"
              className={isSelected ? "on" : ""}
              onClick={() => setSelectedCategory(name)}
              aria-pressed={isSelected}
              role="tab"
            >
              <span>{name}</span>
              <i>({count})</i>
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="cgrid" id="cgrid">
        {filteredStudies.map((cs, i) => (
          <article key={cs.k} className="cc" id={cs.k} data-t={cs.g}>
            <button
              type="button"
              className="ci"
              data-i={i}
              onClick={() => openStudy(cs)}
              aria-label={`Open case study: ${cs.t}`}
            >
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
            </button>
            <div className="cb">
              <span className="mono">{cs.g}</span>
              <h3>{cs.t}</h3>
              <button
                type="button"
                className="rd"
                data-i={i}
                onClick={() => openStudy(cs)}
              >
                Read the breakdown &#8599;
              </button>
            </div>
          </article>
        ))}
      </div>

      <CaseStudyModal study={activeModalStudy} onClose={closeStudy} />
    </main>
  );
}
