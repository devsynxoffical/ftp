"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
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
        setActiveModalStudy(match);
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
    <div className="box wh" id="top">
      {/* Page Header */}
      <div className="head">
        <div>
          <div className="eyebrow mono">Case studies directory</div>
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

      {/* Case Studies Responsive Grid */}
      <div className="cgrid" id="cgrid">
        {filteredStudies.map((study) => (
          <article
            key={study.k}
            className="cc"
            id={study.k}
            data-category={study.g}
          >
            <button
              type="button"
              className="ci"
              onClick={() => openStudy(study)}
              aria-label={`Open case study: ${study.t}`}
            >
              <Image
                src={`/img/cs/${study.k}.webp`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                aria-hidden="true"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="mn"
                src={`/img/cs/${study.k}.webp`}
                alt={`${study.g} case study results`}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                style={{ objectFit: "contain" }}
              />
            </button>

            <div className="cb">
              <span className="mono">{study.g}</span>

              {study.s && (
                <b className="st">
                  {study.s}
                  <small>Key figure</small>
                </b>
              )}

              <h3>{study.t}</h3>

              <button
                type="button"
                className="rd"
                onClick={() => openStudy(study)}
              >
                <span>Read the breakdown</span>
                <span>&#8599;</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Details Modal */}
      <CaseStudyModal study={activeModalStudy} onClose={closeStudy} />
    </div>
  );
}
