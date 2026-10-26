"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { REAL_PROOF_DATA, RealProofItem } from "@/data/realClientResults";

export default function RealClientResults() {
  const [activeFilter, setActiveFilter] = useState<"all" | "lead-gen" | "ecom">("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [selectedProof, setSelectedProof] = useState<RealProofItem | null>(null);

  const filteredProofs = useMemo(() => {
    if (activeFilter === "all") return REAL_PROOF_DATA;
    return REAL_PROOF_DATA.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  const displayedProofs = useMemo(() => {
    return filteredProofs.slice(0, visibleCount);
  }, [filteredProofs, visibleCount]);

  // Handle keyboard navigation for modal lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProof) return;
      if (e.key === "Escape") {
        setSelectedProof(null);
      } else if (e.key === "ArrowLeft") {
        const curIdx = filteredProofs.findIndex((p) => p.id === selectedProof.id);
        const prevIdx = (curIdx - 1 + filteredProofs.length) % filteredProofs.length;
        setSelectedProof(filteredProofs[prevIdx]);
      } else if (e.key === "ArrowRight") {
        const curIdx = filteredProofs.findIndex((p) => p.id === selectedProof.id);
        const nextIdx = (curIdx + 1) % filteredProofs.length;
        setSelectedProof(filteredProofs[nextIdx]);
      }
    };

    if (selectedProof) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProof, filteredProofs]);

  const counts = useMemo(() => {
    return {
      all: REAL_PROOF_DATA.length,
      leadGen: REAL_PROOF_DATA.filter((i) => i.type === "lead-gen").length,
      ecom: REAL_PROOF_DATA.filter((i) => i.type === "ecom").length,
    };
  }, []);

  return (
    <section className="rcr-section" id="results" aria-label="Real client output">
      <div className="box">
        {/* Clean Header Matching Reference Layout */}
        <div className="rcr-header">
          <p className="rcr-reference-title">
            Booked calendars, paid invoices, closed deals. Every screenshot below is real client output &mdash; not marketing mockups.
          </p>

          {/* Filter Pills */}
          <div className="rcr-tabs" role="tablist" aria-label="Filter client output">
            <button
              type="button"
              className={`rcr-tab ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => {
                setActiveFilter("all");
                setVisibleCount(12);
              }}
              role="tab"
              aria-selected={activeFilter === "all"}
            >
              <span>All Verified Proofs</span>
              <span className="rcr-tab-count">{counts.all}</span>
            </button>

            <button
              type="button"
              className={`rcr-tab ${activeFilter === "lead-gen" ? "active" : ""}`}
              onClick={() => {
                setActiveFilter("lead-gen");
                setVisibleCount(12);
              }}
              role="tab"
              aria-selected={activeFilter === "lead-gen"}
            >
              <span className="rcr-tab-dot" />
              <span>Lead Generation</span>
              <span className="rcr-tab-tag">CPL &amp; Bookings</span>
            </button>

            <button
              type="button"
              className={`rcr-tab ${activeFilter === "ecom" ? "active" : ""}`}
              onClick={() => {
                setActiveFilter("ecom");
                setVisibleCount(12);
              }}
              role="tab"
              aria-selected={activeFilter === "ecom"}
            >
              <span className="rcr-tab-dot" />
              <span>eCommerce &amp; DTC</span>
              <span className="rcr-tab-tag">ROAS &amp; Revenue</span>
            </button>
          </div>
        </div>

        {/* Proof Cards Grid */}
        <div className="rcr-grid">
          {displayedProofs.map((item) => (
            <article
              key={item.id}
              className="rcr-card"
              onClick={() => setSelectedProof(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProof(item);
                }
              }}
              aria-label={`Inspect verified proof: ${item.headline}`}
            >
              {/* Screenshot Frame with Centered Magnifying Glass Overlay */}
              <div className="rcr-thumb-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="rcr-thumb-img"
                  loading="lazy"
                />

                {/* Hover Overlay with Centered Inspect Icon */}
                <div className="rcr-thumb-overlay">
                  <div className="rcr-inspect-circle">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="10.5" cy="10.5" r="7" />
                      <line x1="21" y1="21" x2="15.5" y2="15.5" />
                      <line x1="10.5" y1="7.5" x2="10.5" y2="13.5" />
                      <line x1="7.5" y1="10.5" x2="13.5" y2="10.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProofs.length && (
          <div className="rcr-load-more-wrap">
            <button
              type="button"
              className="btn hbtn rcr-load-more-btn"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredProofs.length))}
            >
              Load more verified proofs ({filteredProofs.length - visibleCount} remaining) <i>&#8595;</i>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal (Tap to Inspect) */}
      {selectedProof && (
        <div
          className="rcr-modal-backdrop"
          onClick={() => setSelectedProof(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Inspecting proof: ${selectedProof.headline}`}
        >
          <div className="rcr-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="rcr-modal-close"
              onClick={() => setSelectedProof(null)}
              aria-label="Close proof inspection"
            >
              &times;
            </button>

            <button
              type="button"
              className="rcr-modal-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                const curIdx = filteredProofs.findIndex((p) => p.id === selectedProof.id);
                const prevIdx = (curIdx - 1 + filteredProofs.length) % filteredProofs.length;
                setSelectedProof(filteredProofs[prevIdx]);
              }}
              aria-label="Previous proof"
            >
              &#8592;
            </button>

            <button
              type="button"
              className="rcr-modal-nav next"
              onClick={(e) => {
                e.stopPropagation();
                const curIdx = filteredProofs.findIndex((p) => p.id === selectedProof.id);
                const nextIdx = (curIdx + 1) % filteredProofs.length;
                setSelectedProof(filteredProofs[nextIdx]);
              }}
              aria-label="Next proof"
            >
              &#8594;
            </button>

            <div className="rcr-modal-content">
              {/* Left Column: Full Uncropped High-Res Screenshot */}
              <div className="rcr-modal-img-wrap">
                <img
                  src={selectedProof.image}
                  alt={selectedProof.alt}
                  className="rcr-modal-img"
                />
              </div>

              {/* Right Column: Verified Meta & Breakdown */}
              <div className="rcr-modal-meta">
                <div className="rcr-modal-header-row">
                  <div className="rcr-modal-badge">
                    <span className="rcr-modal-pulse-dot" />
                    <span>Verified Telemetry</span>
                  </div>
                  <span className="rcr-modal-tag">{selectedProof.niche}</span>
                </div>

                <div className="rcr-modal-author-row">
                  <div className="rcr-avatar small" aria-hidden="true">
                    {selectedProof.avatar}
                  </div>
                  <div>
                    <h3 className="rcr-modal-author-name">
                      {selectedProof.author}
                      <svg
                        className="rcr-verified-icon"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-label="Verified"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </h3>
                    <span className="rcr-modal-date">
                      {selectedProof.date} &middot; {selectedProof.tag}
                    </span>
                  </div>
                </div>

                {/* Modal Big Stats */}
                <div className="rcr-modal-stats-grid">
                  <div className="rcr-modal-stat-box">
                    <span className="rcr-modal-stat-label">{selectedProof.metricMainLabel}</span>
                    <strong className="rcr-modal-stat-num">{selectedProof.metricMain}</strong>
                  </div>
                  <div className="rcr-modal-stat-box">
                    <span className="rcr-modal-stat-label">{selectedProof.metricSubLabel}</span>
                    <strong className="rcr-modal-stat-num">{selectedProof.metricSub}</strong>
                  </div>
                </div>

                {/* Verbatim Breakdown Body */}
                <div className="rcr-modal-body-scroll">
                  <h4 className="rcr-modal-breakdown-title">Campaign Breakdown &amp; Funnel Output</h4>
                  <div className="rcr-modal-caption-text">
                    {selectedProof.caption.split("\n").map((line, idx) => {
                      if (!line.trim()) return <br key={idx} />;
                      return <p key={idx}>{line}</p>;
                    })}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="rcr-modal-actions">
                  <Link href="/#robo" className="btn o rcr-modal-cta" onClick={() => setSelectedProof(null)}>
                    Install this funnel into your business <i>&#8599;</i>
                  </Link>
                  <div className="rcr-modal-counter">
                    Proof {filteredProofs.findIndex((p) => p.id === selectedProof.id) + 1} of {filteredProofs.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
