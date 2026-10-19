"use client";

import { useState } from "react";
import { FAQS } from "@/data/siteContent";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.map((faq, originalIdx) => ({
    ...faq,
    originalIdx,
  })).filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  const handleTabClick = (category: string) => {
    setActiveCategory(category);
    setOpenIndex(0); // Open the first item in the selected category
  };

  const toggleQuestion = (filteredIdx: number) => {
    setOpenIndex((prev) => (prev === filteredIdx ? null : filteredIdx));
  };

  return (
    <section className="sec box" id="faq">
      <div className="faq">
        <div className="fsticky">
          <div className="eyebrow mono">FAQ</div>
          <h2 className="h2 d">
            Got <span className="it">questions?</span>
          </h2>
          <p className="lead" style={{ margin: "24px 0 26px" }}>
            Short answers to what we hear most before a build starts.
          </p>

          <div className="ftabs" id="ftabs" role="tablist">
            <button
              type="button"
              className={activeCategory === "all" ? "on" : ""}
              onClick={() => handleTabClick("all")}
            >
              All <b>11</b>
            </button>
            <button
              type="button"
              className={activeCategory === "build" ? "on" : ""}
              onClick={() => handleTabClick("build")}
            >
              Builds <b>5</b>
            </button>
            <button
              type="button"
              className={activeCategory === "auto" ? "on" : ""}
              onClick={() => handleTabClick("auto")}
            >
              Automation <b>3</b>
            </button>
            <button
              type="button"
              className={activeCategory === "work" ? "on" : ""}
              onClick={() => handleTabClick("work")}
            >
              Working together <b>3</b>
            </button>
          </div>

          <div className="fask">
            <b>Still unsure?</b>
            <span>Send the question, we answer within a day.</span>
            <a className="btn g" href="mailto:info@funnelsthatprint.com">
              Ask us directly <i>&#8599;</i>
            </a>
          </div>
        </div>

        <div className="qs" id="qs">
          {filteredFaqs.map((faq, filteredIdx) => {
            const isOpen = openIndex === filteredIdx;
            const numStr = String(faq.originalIdx + 1).padStart(2, "0");

            return (
              <div
                key={faq.q}
                className={`q ${isOpen ? "on" : ""}`}
                data-c={faq.category}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleQuestion(filteredIdx)}
                >
                  <span className="n">{numStr}</span>
                  <span>{faq.q}</span>
                  <i />
                </button>
                <div className="a">
                  <div>
                    <p>{faq.a}</p>
                    <div className="tg">
                      {faq.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
