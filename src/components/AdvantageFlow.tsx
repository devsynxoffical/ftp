"use client";

import { useEffect, useState, useRef } from "react";
import { PIPELINE_NODES } from "@/data/siteContent";

export default function AdvantageFlow() {
  const [activeNodes, setActiveNodes] = useState<boolean[]>(
    new Array(PIPELINE_NODES.length).fill(false)
  );
  const [fillHeight, setFillHeight] = useState("0%");
  const [activeWordCount, setActiveWordCount] = useState(0);

  const pipeRef = useRef<HTMLDivElement>(null);
  const advRef = useRef<HTMLParagraphElement>(null);

  const paragraphWordsPart1 =
    "A landing page should not operate by itself. Your funnel should not operate separately from your CRM. And your leads should not wait around for someone to follow up."
      .split(" ")
      .filter(Boolean);

  const paragraphWordsPart2 =
    "We connect the moving parts so your acquisition process works as one system."
      .split(" ")
      .filter(Boolean);

  const totalWords = paragraphWordsPart1.length + paragraphWordsPart2.length;

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;

      // 1. Word-by-word text illuminate effect
      if (advRef.current) {
        const advRect = advRef.current.getBoundingClientRect();
        if (advRect.top < vh && advRect.bottom > 0) {
          const ratio = Math.max(
            0,
            Math.min(1, (vh * 0.8 - advRect.top) / (vh * 0.45))
          );
          const activeCount = Math.round(ratio * totalWords);
          setActiveWordCount(activeCount);
        }
      }

      // 2. Liquid pipeline fill effect
      if (pipeRef.current) {
        const pipeRect = pipeRef.current.getBoundingClientRect();
        if (pipeRect.top < vh && pipeRect.bottom > 0) {
          const progress = Math.max(
            0,
            Math.min(1, (vh * 0.72 - pipeRect.top) / pipeRect.height)
          );
          setFillHeight(`${progress * 100}%`);

          const nodeElements = pipeRef.current.querySelectorAll(".node");
          const newActive = Array.from(nodeElements).map((el) => {
            const elRect = el.getBoundingClientRect();
            return elRect.top + elRect.height * 0.5 < vh * 0.72;
          });

          setActiveNodes(newActive);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalWords]);

  return (
    <section className="sec box" id="advantage">
      <div className="flow">
        <div className="sticky">
          <div className="eyebrow mono">The Funnels That Print advantage</div>
          <h2 className="h2 d">
            One strategy.
            <br />
            Every piece <span className="it">connected.</span>
          </h2>

          {/* Word-by-word Illuminated Text */}
          <p className="d" id="adv" ref={advRef} style={{ marginTop: 28 }}>
            {paragraphWordsPart1.map((w, idx) => (
              <span
                key={idx}
                className={`w ${idx < activeWordCount ? "on" : ""}`}
              >
                {w}{" "}
              </span>
            ))}
            <b>
              {paragraphWordsPart2.map((w, idx) => {
                const globalIdx = paragraphWordsPart1.length + idx;
                return (
                  <span
                    key={idx}
                    className={`w ${globalIdx < activeWordCount ? "on" : ""}`}
                  >
                    {w}{" "}
                  </span>
                );
              })}
            </b>
          </p>
        </div>

        {/* Vertical Liquid Fill Pipeline */}
        <div className="pipe" ref={pipeRef}>
          <span className="fill" style={{ height: fillHeight }} />
          {PIPELINE_NODES.map((node, i) => (
            <div
              key={node.title}
              className={`node ${i === PIPELINE_NODES.length - 1 ? "end" : ""} ${
                activeNodes[i] ? "on" : ""
              }`}
            >
              <b>{node.title}</b>
              <small>{node.desc}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
