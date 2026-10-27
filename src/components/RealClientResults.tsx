"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { REAL_PROOF_DATA, RealProofItem } from "@/data/realClientResults";

export default function RealClientResults() {
  const [activeFilter, setActiveFilter] = useState<"all" | "lead-gen" | "ecom" | "wins">("all");
  const [selectedProof, setSelectedProof] = useState<RealProofItem | null>(null);

  const displayedProofs = useMemo(() => {
    if (activeFilter === "all") return REAL_PROOF_DATA;
    return REAL_PROOF_DATA.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  // Handle keyboard navigation for modal lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProof) return;
      if (e.key === "Escape") {
        setSelectedProof(null);
      } else if (e.key === "ArrowLeft") {
        const curIdx = displayedProofs.findIndex((p) => p.id === selectedProof.id);
        const prevIdx = (curIdx - 1 + displayedProofs.length) % displayedProofs.length;
        setSelectedProof(displayedProofs[prevIdx]);
      } else if (e.key === "ArrowRight") {
        const curIdx = displayedProofs.findIndex((p) => p.id === selectedProof.id);
        const nextIdx = (curIdx + 1) % displayedProofs.length;
        setSelectedProof(displayedProofs[nextIdx]);
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
  }, [selectedProof, displayedProofs]);

  return (
    <section className="rcr-section" id="results" aria-label="Real client output">
      <div className="box">
        {/* Generic Professional Header */}
        <div className="rcr-header">
          <div className="rcr-badge">
            <span className="rcr-tab-dot" />
            <span>VERIFIED TRACK RECORD</span>
          </div>
          <h2 className="rcr-title">
            Real Client Results &amp; Live Proof
          </h2>
          <p className="rcr-subtitle">
            Live ad manager dashboards, verified campaign metrics, and closed revenue across client accounts.
          </p>

          {/* Proper Filter Buttons */}
          <div className="rcr-tabs" role="tablist" aria-label="Filter client output">
            <button
              type="button"
              className={`rcr-tab ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
              role="tab"
              aria-selected={activeFilter === "all"}
            >
              <span>Show All</span>
            </button>

            <button
              type="button"
              className={`rcr-tab ${activeFilter === "lead-gen" ? "active" : ""}`}
              onClick={() => setActiveFilter("lead-gen")}
              role="tab"
              aria-selected={activeFilter === "lead-gen"}
            >
              <span>Lead Generation</span>
            </button>

            <button
              type="button"
              className={`rcr-tab ${activeFilter === "ecom" ? "active" : ""}`}
              onClick={() => setActiveFilter("ecom")}
              role="tab"
              aria-selected={activeFilter === "ecom"}
            >
              <span>eCommerce &amp; Sales</span>
            </button>

            <button
              type="button"
              className={`rcr-tab ${activeFilter === "wins" ? "active" : ""}`}
              onClick={() => setActiveFilter("wins")}
              role="tab"
              aria-selected={activeFilter === "wins"}
            >
              <span>Client Wins &amp; Reviews</span>
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
                const curIdx = displayedProofs.findIndex((p) => p.id === selectedProof.id);
                const prevIdx = (curIdx - 1 + displayedProofs.length) % displayedProofs.length;
                setSelectedProof(displayedProofs[prevIdx]);
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
                const curIdx = displayedProofs.findIndex((p) => p.id === selectedProof.id);
                const nextIdx = (curIdx + 1) % displayedProofs.length;
                setSelectedProof(displayedProofs[nextIdx]);
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
                    Proof {displayedProofs.findIndex((p) => p.id === selectedProof.id) + 1} of {displayedProofs.length}
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
