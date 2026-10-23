"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export interface ClientResult {
  id: string;
  name: string;
  niche: string;
  image: string;
  liveStatus: string;
  highlight: string;
  highlightColor: string;
  subtext: string;
  alt: string;
}

export const CLIENT_RESULTS_DATA: ClientResult[] = [
  {
    id: "charles",
    name: "Charles",
    niche: "Solar & Home Services",
    image: "/screenshots/Charles.webp",
    liveStatus: "Live",
    highlight: "$18K Cash (14X ROI)",
    highlightColor: "#ff5a1f",
    subtext: "7 New Deals Closed",
    alt: "Charles - Solar & Home Services funnel screenshot",
  },
  {
    id: "daniel",
    name: "Daniel",
    niche: "Solar Installation",
    image: "/screenshots/Daniel.webp",
    liveStatus: "Live",
    highlight: "Calendar Fully Booked",
    highlightColor: "#059669",
    subtext: "$1.28 CPL",
    alt: "Daniel - Solar Installation funnel screenshot",
  },
  {
    id: "alexander",
    name: "Alexander",
    niche: "Agency Growth",
    image: "/screenshots/Alexander.webp",
    liveStatus: "Live",
    highlight: "$16.5K in Single Day",
    highlightColor: "#ff5a1f",
    subtext: "8 Sales in 24 Hours",
    alt: "Alexander - Agency Growth funnel screenshot",
  },
  {
    id: "henry",
    name: "Henry",
    niche: "High-Ticket B2B",
    image: "/screenshots/Henry.webp",
    liveStatus: "Live",
    highlight: "$105,000 Month",
    highlightColor: "#059669",
    subtext: "$80K Cash Collected",
    alt: "Henry - High-Ticket B2B funnel screenshot",
  },
  {
    id: "mateo",
    name: "Mateo",
    niche: "Sales & Closers",
    image: "/screenshots/Mateo.webp",
    liveStatus: "Live",
    highlight: "$51.2K Cash Collected",
    highlightColor: "#ff5a1f",
    subtext: "15 New Customers",
    alt: "Mateo - Sales & Closers funnel screenshot",
  },
  {
    id: "jason",
    name: "Jason",
    niche: "Roofing Ads",
    image: "/screenshots/Jason.webp",
    liveStatus: "Live",
    highlight: "50k +",
    highlightColor: "#059669",
    subtext: "Qualified Campaign",
    alt: "Jason - Roofing Ads funnel screenshot",
  },
  {
    id: "justin",
    name: "Justin",
    niche: "Roofing Installs",
    image: "/screenshots/Justin.webp",
    liveStatus: "Live",
    highlight: "$133k Revenue",
    highlightColor: "#ff5a1f",
    subtext: "7 Leads",
    alt: "Justin - Roofing Installs funnel screenshot",
  },
  {
    id: "aiden",
    name: "Aiden",
    niche: "Meta Ads Scaling",
    image: "/screenshots/Parker.webp",
    liveStatus: "Live",
    highlight: "50.9k",
    highlightColor: "#059669",
    subtext: "Next Month Target 100k",
    alt: "Aiden - Meta Ads Scaling funnel screenshot",
  },
  {
    id: "stan",
    name: "Stan",
    niche: "Roofing Agency",
    image: "/screenshots/Stan.webp",
    liveStatus: "Live",
    highlight: "100k%",
    highlightColor: "#ff5a1f",
    subtext: "Return On Ad Spend",
    alt: "Stan - Roofing Agency funnel screenshot",
  },
  {
    id: "adam",
    name: "Adam",
    niche: "Home Services",
    image: "/screenshots/Adam.webp",
    liveStatus: "Live",
    highlight: "8 Leads (1 Closed Day 1)",
    highlightColor: "#059669",
    subtext: "$1,500+ Net Profit",
    alt: "Adam - Home Services funnel screenshot",
  },
];

export default function RealClientResults() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) =>
          prev === null ? null : (prev - 1 + CLIENT_RESULTS_DATA.length) % CLIENT_RESULTS_DATA.length
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) =>
          prev === null ? null : (prev + 1) % CLIENT_RESULTS_DATA.length
        );
      }
    };

    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx]);

  return (
    <section className="rcr-section" id="results" aria-label="Real client results">
      <div className="box">
        {/* Header Block */}
        <div className="rcr-header">
          <div className="rcr-badge">
            <span className="rcr-badge-pulse" />
            <span>Real client results</span>
          </div>

          <h2 className="rcr-title">
            Don&apos;t take our word for it... see{" "}
            <span className="rcr-highlight">what our clients achieved.</span>
          </h2>

          <p className="rcr-desc">
            Revenue screenshots, Meta Ads dashboards, case studies and success
            stories from funnels we&apos;ve installed across different niches - the
            same system, proven over and over.
          </p>

          {/* Stat Pillars */}
          <div className="rcr-stats">
            <div className="rcr-stat-card">
              <b className="rcr-stat-num">6–8 Figure</b>
              <span className="rcr-stat-label">Clients Under Our Belt</span>
            </div>
            <div className="rcr-stat-card">
              <b className="rcr-stat-num">30+</b>
              <span className="rcr-stat-label">Niches Proven</span>
            </div>
            <div className="rcr-stat-card">
              <b className="rcr-stat-num">12+ Years</b>
              <span className="rcr-stat-label">Experience</span>
            </div>
          </div>
        </div>

        {/* 10-Item Results Grid */}
        <div className="rcr-grid">
          {CLIENT_RESULTS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="rcr-card"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIdx(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedIdx(idx);
              }}
              aria-label={`View screenshot for ${item.name}`}
            >
              <div className="rcr-thumb-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="rcr-thumb-img"
                  loading="lazy"
                />
                <div className="rcr-thumb-overlay">
                  <span className="rcr-inspect-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Tap to inspect
                  </span>
                </div>
              </div>

              <div className="rcr-card-info">
                <div className="rcr-client-row">
                  <span className="rcr-client-name">{item.name}</span>
                  <span className="rcr-live-tag">
                    <i className="rcr-live-dot" />
                    Live
                  </span>
                </div>

                <div
                  className="rcr-metric"
                  style={{ color: item.highlightColor }}
                >
                  {item.highlight}
                </div>

                <div className="rcr-subtext">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <span>{item.subtext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="rcr-modal-backdrop"
          onClick={() => setSelectedIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="rcr-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="rcr-modal-close"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <button
              className="rcr-modal-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx(
                  (prev) =>
                    prev !== null
                      ? (prev - 1 + CLIENT_RESULTS_DATA.length) % CLIENT_RESULTS_DATA.length
                      : 0
                );
              }}
              aria-label="Previous screenshot"
            >
              &#8592;
            </button>

            <button
              className="rcr-modal-nav next"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx(
                  (prev) =>
                    prev !== null
                      ? (prev + 1) % CLIENT_RESULTS_DATA.length
                      : 0
                );
              }}
              aria-label="Next screenshot"
            >
              &#8594;
            </button>

            <div className="rcr-modal-content">
              <div className="rcr-modal-img-wrap">
                <img
                  src={CLIENT_RESULTS_DATA[selectedIdx].image}
                  alt={CLIENT_RESULTS_DATA[selectedIdx].alt}
                  className="rcr-modal-img"
                />
              </div>

              <div className="rcr-modal-meta">
                <div className="rcr-modal-badge">
                  <span className="rcr-live-dot" />
                  <span>Verified Client Result</span>
                </div>
                <h3>{CLIENT_RESULTS_DATA[selectedIdx].name} &middot; {CLIENT_RESULTS_DATA[selectedIdx].niche}</h3>
                <div
                  className="rcr-modal-highlight"
                  style={{ color: CLIENT_RESULTS_DATA[selectedIdx].highlightColor }}
                >
                  {CLIENT_RESULTS_DATA[selectedIdx].highlight}
                </div>
                <p className="rcr-modal-sub">
                  📈 {CLIENT_RESULTS_DATA[selectedIdx].subtext}
                </p>
                <div className="rcr-modal-index">
                  {selectedIdx + 1} of {CLIENT_RESULTS_DATA.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
