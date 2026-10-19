"use client";

import { useEffect, useRef } from "react";
import { PIPELINE_NODES } from "@/data/siteContent";

export default function AdvantageFlow() {
  const advRef = useRef<HTMLParagraphElement>(null);

  // Split into word spans on mount matching ftp 4
  useEffect(() => {
    const adv = advRef.current;
    if (!adv) return;

    adv.innerHTML = [...adv.childNodes]
      .map((n) =>
        n.nodeType === 3
          ? (n.textContent || "")
              .split(/\s+/)
              .filter(Boolean)
              .map((w) => `<span class="w">${w}</span>`)
              .join(" ")
          : "<b>" +
            (n.textContent || "")
              .split(/\s+/)
              .filter(Boolean)
              .map((w) => `<span class="w">${w}</span>`)
              .join(" ") +
            "</b>"
      )
      .join(" ");
  }, []);

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
          <p className="d" id="adv" ref={advRef}>
            A landing page should not operate by itself. Your funnel should not
            operate separately from your CRM. And your leads should not wait
            around for someone to follow up.{" "}
            <b>
              We connect the moving parts so your acquisition process works as
              one system.
            </b>
          </p>
        </div>

        {/* Vertical Liquid Fill Pipeline */}
        <div className="pipe" id="pipe">
          <span className="fill" id="pfill" />
          {PIPELINE_NODES.map((node, i) => (
            <div
              key={node.title}
              className={`node ${i === PIPELINE_NODES.length - 1 ? "end" : ""}`}
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
