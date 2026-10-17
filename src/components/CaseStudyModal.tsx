"use client";

import { useEffect } from "react";
import { CaseStudy } from "@/data/siteContent";

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!study) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(20,20,20,.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "grid",
        placeItems: "center",
        padding: "clamp(12px, 3vw, 30px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <dialog
        className="cm"
        id="cm"
        open
        style={{
          display: "block",
          position: "relative",
          margin: 0,
        }}
      >
        <button
          type="button"
          className="x"
          id="cmx"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="in">
          <div className="im">
            <img
              id="cmi"
              src={`/img/cs/${study.k}.webp`}
              alt={study.t}
            />
          </div>

          <div className="tx">
            <span className="mono" id="cmg">
              {study.g}
            </span>
            <h2 id="cmt">{study.t}</h2>
            <p id="cmb">{study.b}</p>
            <a
              className="btn o"
              href="/#cta"
              style={{ alignSelf: "flex-start", marginTop: "auto" }}
            >
              Build something like this <i>&#8599;</i>
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
