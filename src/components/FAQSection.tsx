"use client";

import { useState } from "react";
import { FAQS } from "@/data/siteContent";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="sec box" id="faq">
      <div className="faq">
        <div className="sticky">
          <div>
            <div className="eyebrow mono">FAQ</div>
            <h2 className="h2 d">Common questions.</h2>
          </div>
          <p className="lead">
            Everything you want to know about the build, timelines,
            integrations, traffic and how we work.
          </p>
          <div className="fhelp">
            <b>Still have a question?</b>
            <p>
              We are happy to answer via email or on a 15-minute intro call.
            </p>
            <a
              className="btn o"
              href="#cta"
              style={{ alignSelf: "flex-start", marginTop: 10 }}
            >
              Ask us directly <i>&#8599;</i>
            </a>
          </div>
        </div>

        <div className="qs" id="qs">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const numStr = String(index + 1).padStart(2, "0");

            return (
              <div key={faq.q} className={`q ${isOpen ? "on" : ""}`}>
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="n">{numStr}</span>
                  <span>{faq.q}</span>
                  <i />
                </button>

                <div className="a">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
