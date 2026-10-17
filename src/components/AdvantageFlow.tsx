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

  const text =
    "Most businesses lose deals between the traffic and the sales conversation. We build each piece of the journey so prospects arrive educated, qualified and ready to talk.";
  const words = text.split(" ").filter(Boolean);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setActiveWordCount(words.length);
      setFillHeight("100%");
      setActiveNodes(new Array(PIPELINE_NODES.length).fill(true));
      return;
    }

    let ticking = false;

    const frame = () => {
      ticking = false;
      const vh = window.innerHeight;

      // 1. Liquid pipeline fill effect
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

      // 2. Word-by-word text illuminate effect
      if (advRef.current) {
        const advRect = advRef.current.getBoundingClientRect();
        if (advRect.top < vh && advRect.bottom > 0) {
          const ratio = Math.max(
            0,
            Math.min(1, (vh * 0.8 - advRect.top) / (vh * 0.45))
          );
          const activeCount = Math.round(ratio * words.length);
          setActiveWordCount(activeCount);
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    frame();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [words.length]);

  return (
    <section className="sec box" id="advantage">
      <div className="flow">
        <div className="sticky">
          <div>
            <div className="eyebrow mono">Why this works</div>
            <h2 className="h2 d">
              The conversion <span className="it">pipeline.</span>
            </h2>
          </div>

          {/* Word-by-word Illuminated Text */}
          <p className="lead" id="adv" ref={advRef}>
            {words.map((w, idx) => (
              <span
                key={idx}
                className={`w ${idx < activeWordCount ? "on" : ""}`}
              >
                {w}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Vertical Liquid Fill Pipeline */}
        <div className="pipe" id="pipe" ref={pipeRef}>
          <div className="fill" id="pfill" style={{ height: fillHeight }} />
          {PIPELINE_NODES.map((node, i) => (
            <div
              key={node.title}
              className={`node ${
                i === PIPELINE_NODES.length - 1 ? "end" : ""
              } ${activeNodes[i] ? "on" : ""}`}
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
