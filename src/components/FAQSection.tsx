"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/data/siteContent";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="sec box" id="faq">
      <div className="faq">
        <div>
          <div className="eyebrow mono">FAQ</div>
          <h2 className="h2 d">
            Got <span className="it">questions?</span>
          </h2>
          <p className="lead" style={{ margin: "24px 0 30px" }}>
            Short answers to what we hear most before a build starts.
          </p>
          <Link className="btn g" href="/#cta">
            Ask us directly <i>&#8599;</i>
          </Link>
        </div>

        <div className="qs">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const numStr = String(index + 1).padStart(2, "0");

            return (
              <div key={faq.q} className={`q ${isOpen ? "on" : ""}`}>
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="n">{numStr}</span>
                  <span>{faq.q}</span>
                  <i />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="a"
                  role="region"
                  aria-hidden={!isOpen}
                >
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
