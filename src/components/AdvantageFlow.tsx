"use client";

import { PIPELINE_NODES } from "@/data/siteContent";

export default function AdvantageFlow() {
  const text =
    "Most businesses lose deals between the traffic and the sales conversation. We build each piece of the journey so prospects arrive educated, qualified and ready to talk.";
  const words = text.split(" ").filter(Boolean);

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
          <p className="lead" id="adv">
            {words.map((w, idx) => (
              <span key={idx} className="w">
                {w}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Vertical Liquid Fill Pipeline */}
        <div className="pipe" id="pipe">
          <div className="fill" id="pfill" />
          {PIPELINE_NODES.map((node, i) => (
            <div
              key={node.title}
              className={`node ${
                i === PIPELINE_NODES.length - 1 ? "end" : ""
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
