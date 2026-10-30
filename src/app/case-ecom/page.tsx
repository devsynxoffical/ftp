"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CASES, CaseItem } from "@/data/cases";
import RoboSection from "@/components/RoboSection";
import JournalPreview from "@/components/JournalPreview";
import PageFaq from "@/components/PageFaq";
import { PAGE_FAQS } from "@/data/pageFaqs";
import UFSquareMarquee from "@/components/UFSquareMarquee";

const STEP = 8;

export default function CaseEcomPage() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(STEP);

  // Extract unique niches
  const niches = useMemo(() => {
    return Array.from(new Set(CASES.map((c) => c.nic)));
  }, []);

  const filterOptions = useMemo(() => {
    return [
      { id: "all", label: "All", count: CASES.length },
      { id: "video", label: "Video proofs", count: CASES.filter((c) => c.type === "video").length },
      { id: "image", label: "Breakdowns", count: CASES.filter((c) => c.type === "image").length },
      ...niches.map((nic) => ({
        id: nic,
        label: nic,
        count: CASES.filter((c) => c.nic === nic).length,
      })),
    ];
  }, [niches]);

  // Filter list
  const filteredCases = useMemo(() => {
    const q = query.toLowerCase().trim();
    return CASES.filter((c) => {
      const matchFilter =
        filter === "all" || c.type === filter || c.nic === filter;
      if (!matchFilter) return false;
      if (!q) return true;
      const haystack = `${c.t} ${c.nic} ${c.rev} ${c.ro} ${c.cap}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [filter, query]);

  const displayedCases = useMemo(() => {
    return filteredCases.slice(0, visibleCount);
  }, [filteredCases, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(filteredCases.length, prev + STEP));
  };

  const handleFilterChange = (id: string) => {
    setFilter(id);
    setVisibleCount(STEP);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setVisibleCount(STEP);
  };

  return (
    <>
      <div className="box">
      <header className="cshero">
        <Link
          className="kback"
          href="/case-studies"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 600,
            color: "var(--body)",
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid var(--line2)",
          }}
        >
          &larr; All case studies
        </Link>
        <span className="cstag">Brand Scaling Hacks &middot; 126 case studies</span>
        <h1 className="h1 d">
          eCommerce funnel <span className="it">case studies</span>
        </h1>
        <p className="lead">
          126 direct-response eCommerce and DTC brands scaled with Meta ads,
          creative engines and funnels. Revenue and ROAS behind each one.
        </p>
      </header>

      <div className="cfil">
        <div className="cchips">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={filter === opt.id ? "on" : ""}
              onClick={() => handleFilterChange(opt.id)}
            >
              {opt.label}
              <b>{opt.count}</b>
            </button>
          ))}
        </div>

        <label className="csrch">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search revenue, niche, keyword"
            aria-label="Search case studies"
          />
        </label>
      </div>

      <div className="cgrid2" id="cgrid">
        {displayedCases.map((c, k) => (
          <Link
            key={c.id}
            className="ck show"
            href={`/case?set=ec&id=${c.id}`}
            style={
              {
                "--dl": `${(k % 2) * 0.08 + Math.floor(k / 2) * 0.06}s`,
              } as React.CSSProperties
            }
          >
            <span className="im">
              <img
                src={`/img/cs2/${c.id}.webp`}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <img
                className="mn"
                src={`/img/cs2/${c.id}.webp`}
                alt={`${c.nic} case study`}
                loading="lazy"
              />
              {c.type === "video" && (
                <em className="vb">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Video
                </em>
              )}
            </span>
            <span className="tx">
              <span className="tg">{c.nic}</span>
              <h3>{c.t}</h3>
              {c.ro && (
                <span className="ro">
                  {c.ro} {c.rol}
                </span>
              )}
              <span className="fig">
                <b>{c.rev}</b>
                <span>{c.revl}</span>
              </span>
            </span>
          </Link>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <p className="cnone">No case studies match that search.</p>
      )}

      {visibleCount < filteredCases.length && (
        <div className="cmore">
          <button
            type="button"
            className="btn lm2"
            onClick={handleLoadMore}
          >
            Load more <i>&#8599;</i>
          </button>
          <span className="mono">
            Showing {displayedCases.length} of {filteredCases.length}
          </span>
        </div>
      )}

      <div style={{ textAlign: "center", padding: "clamp(60px,8vw,100px) 0 40px" }}>
        <p className="lead" style={{ margin: "0 auto 24px", textAlign: "center" }}>
          Want your campaign on this page?
        </p>
        <Link className="btn o" href="/#robo">
          Build my funnel <i>&#8599;</i>
        </Link>
      </div>
    </div>
    <UFSquareMarquee />
      <PageFaq faqs={PAGE_FAQS["case-ecom"]} path="/case-ecom" eyebrow="About these results" />
      <JournalPreview
        id="journal"
        eyebrow="From the journal"
        title={<>eCommerce funnel playbooks behind the <span className="it">ROAS</span>.</>}
        slugs={["low-ticket-self-liquidating-offer-funnel-847k-breakdown", "meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026", "high-ticket-vsl-vs-interactive-quiz-funnel-2026"]}
      />
    <RoboSection />
  </>
  );
}
