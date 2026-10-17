"use client";

import { useEffect } from "react";
import Image from "next/image";
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
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <button
          type="button"
          className="cm-x"
          onClick={onClose}
          aria-label="Close case study details"
        >
          &times;
        </button>

        <div className="cm-in">
          <div className="cm-im">
            <Image
              src={`/img/cs/${study.k}.webp`}
              alt={study.t}
              width={study.w || 800}
              height={study.h || 600}
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
              priority
            />
          </div>

          <div className="cm-tx">
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span
                style={{
                  background: "var(--fg)",
                  color: "#fff",
                  fontSize: 12,
                  fontFamily: "var(--mono)",
                  padding: "4px 12px",
                  borderRadius: 999,
                }}
              >
                {study.g}
              </span>
              {study.s && (
                <span
                  style={{
                    background: "rgba(255, 90, 31, 0.12)",
                    color: "var(--or)",
                    fontWeight: 700,
                    fontSize: 13,
                    fontFamily: "var(--mono)",
                    padding: "4px 12px",
                    borderRadius: 999,
                  }}
                >
                  {study.s} Key Figure
                </span>
              )}
            </div>

            <h2 id="modal-title">{study.t}</h2>

            <p>{study.b}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
