"use client";

import { useEffect, useState } from "react";
import { LOADER_WORDS } from "@/data/siteContent";

export default function Loader() {
  const [wordIndex, setWordIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current >= LOADER_WORDS.length) {
        clearInterval(interval);
        setPercent(100);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => setIsHidden(true), 1100);
        }, 250);
        return;
      }

      setWordIndex(current);
      const pct = Math.round((current / (LOADER_WORDS.length - 1)) * 100);
      setPercent(pct);
    }, 220);

    return () => clearInterval(interval);
  }, []);

  if (isHidden) return null;

  return (
    <div
      id="loader"
      className={isDone ? "out" : ""}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--or)",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        transition: "transform 1s cubic-bezier(0.76, 0, 0.24, 1)",
        transform: isDone ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div
        className="wd"
        style={{
          fontFamily: "var(--disp)",
          fontWeight: 700,
          fontSize: "clamp(32px, 5vw, 68px)",
          letterSpacing: "-0.04em",
          minHeight: "1.2em",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        {LOADER_WORDS[wordIndex]}
      </div>

      <div
        style={{
          position: "absolute",
          left: "var(--gut)",
          bottom: 54,
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "rgba(255, 255, 255, 0.8)",
          letterSpacing: "0.05em",
        }}
      >
        Funnels That Print &nbsp;/&nbsp; Loading
      </div>

      <div
        style={{
          position: "absolute",
          right: "var(--gut)",
          bottom: 54,
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "#fff",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {percent}%
      </div>

      <div
        style={{
          position: "absolute",
          left: "var(--gut)",
          right: "var(--gut)",
          bottom: 40,
          height: 1,
          background: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <i
          style={{
            display: "block",
            height: "100%",
            background: "#fff",
            width: `${percent}%`,
            transition: "width 0.22s linear",
          }}
        />
      </div>
    </div>
  );
}
