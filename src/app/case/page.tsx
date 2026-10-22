"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CASES, CaseItem } from "@/data/cases";
import { LEADS, LeadItem } from "@/data/leads";
import RoboSection from "@/components/RoboSection";
import UFSquareMarquee from "@/components/UFSquareMarquee";

function CaseDetailContent() {
  const searchParams = useSearchParams();
  const set = searchParams.get("set") === "ec" ? "ec" : "lg";
  const id = searchParams.get("id");

  const [expanded, setExpanded] = useState(false);

  const dataset: (CaseItem | LeadItem)[] = set === "ec" ? CASES : LEADS;
  const listUrl = set === "ec" ? "/case-ecom" : "/case-leadgen";
  const label = set === "ec" ? "Ecom" : "Lead gen";
  const mediaFolder = set === "ec" ? "cs2" : "lg";

  // Find index or default to 0
  const currentIndex = useMemo(() => {
    const idx = dataset.findIndex((item) => item.id === id);
    return idx >= 0 ? idx : 0;
  }, [dataset, id]);

  const current = dataset[currentIndex];
  const prev = dataset[(currentIndex - 1 + dataset.length) % dataset.length];
  const next = dataset[(currentIndex + 1) % dataset.length];

  if (!current) {
    return (
      <div className="box" style={{ padding: "120px 0", textAlign: "center" }}>
        <h1>Case study not found</h1>
        <p style={{ marginTop: 16 }}>
          <Link className="btn" href="/case-studies">
            &larr; View all case studies
          </Link>
        </p>
      </div>
    );
  }

  const isVideo = current.type === "video";
  const isLongCaption = current.cap && current.cap.length > 600;

  return (
    <div className="box">
      <section className="kc" id="kroot">
        <Link className="kback in" href={listUrl}>
          &larr; All {label} case studies
        </Link>

        <div className="kd">
          <div className="md in">
            {isVideo ? (
              <>
                <span className="mb">Video proof</span>
                <video
                  src={`/vid/${mediaFolder}/${current.id}.mp4`}
                  poster={`/img/${mediaFolder}/${current.id}.webp`}
                  controls
                  playsInline
                  preload="metadata"
                />
              </>
            ) : (
              <>
                <span className="mb">Breakdown</span>
                <img
                  src={`/img/${mediaFolder}/${current.id}.webp`}
                  alt={`${current.nic} results`}
                />
              </>
            )}
          </div>

          <div>
            <div className="in">
              <span className="tag">
                Case study {String(current.i).padStart(3, "0")} &middot;{" "}
                {current.nic}
              </span>
              <h1>{current.t}</h1>
            </div>

            <div className="km in">
              <div>
                <span>{set === "lg" ? "Headline result" : "Verified revenue"}</span>
                <b>{current.rev}</b>
                <span>{current.revl}</span>
              </div>
              <div>
                <span>
                  {current.rol === "ROAS"
                    ? "Return on ad spend"
                    : current.ro
                    ? current.rol.replace(/^./, (m) => m.toUpperCase())
                    : "Proof type"}
                </span>
                <b>{current.ro || (isVideo ? "Video" : "Dashboard")}</b>
                <span>{current.ro ? "" : "verified"}</span>
              </div>
              <div>
                <span>Niche</span>
                <b className="sm">{current.nic}</b>
              </div>
              <div>
                <span>System</span>
                <b className="sm">{current.sys}</b>
              </div>
            </div>

            {current.pts && current.pts.length > 0 && (
              <ul className="kpt in">
                {current.pts.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            )}

            <div className={`kcap in ${expanded ? "open" : ""}`}>
              <h2>The full breakdown</h2>
              <p style={{ whiteSpace: "pre-line" }}>{current.cap}</p>
              {isLongCaption && (
                <button
                  type="button"
                  id="kmore"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Show less" : "Read the full breakdown"}
                </button>
              )}
            </div>

            <div className="kact in">
              <Link className="btn o" href="/contact">
                Get results like this <i>&#8599;</i>
              </Link>
              {current.ig && (
                <a
                  className="btn"
                  href={current.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#fff",
                    color: "var(--fg)",
                    border: "1px solid var(--line2)",
                  }}
                >
                  View original post <i>&#8599;</i>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="kcta in">
          <h2>Want numbers like these?</h2>
          <Link className="btn" href="/contact">
            Book a strategy call <i>&#8599;</i>
          </Link>
        </div>

        <div className="kpn">
          <Link
            className="knext in"
            href={`/case?set=${set}&id=${prev.id}`}
          >
            <div>
              <span>Previous</span>
              <b>
                {prev.rev} {prev.nic}
              </b>
            </div>
            <i style={{ transform: "scaleX(-1)" }}>&#8599;</i>
          </Link>

          <Link
            className="knext in"
            href={`/case?set=${set}&id=${next.id}`}
          >
            <div>
              <span>Next</span>
              <b>
                {next.rev} {next.nic}
              </b>
            </div>
            <i>&#8599;</i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function CaseDetailPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="box" style={{ padding: "120px 0", textAlign: "center" }}>
            <p className="lead">Loading case study...</p>
          </div>
        }
      >
        <CaseDetailContent />
      </Suspense>
      <UFSquareMarquee />
      <RoboSection />
    </>
  );
}
