"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "@/data/siteContent";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleScroll = () => {
      if (prefersReducedMotion || !wrapRef.current || !trackRef.current) return;
      if (window.innerWidth <= 980) return; // On mobile, let native touch scroll work smoothly

      const pw = wrapRef.current;
      const track = trackRef.current;
      const rect = pw.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      if (rect.top < vh && rect.bottom > 0) {
        const totalScrollable = pw.offsetHeight - vh;
        const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));

        const paddingLeft = parseFloat(getComputedStyle(track).paddingLeft) || 30;
        const maxScroll = track.scrollWidth - vw + paddingLeft;

        track.style.transform = `translate3d(${-progress * maxScroll}px, 0, 0)`;

        const currentStep = Math.min(
          PROCESS_STEPS.length - 1,
          Math.floor(progress * PROCESS_STEPS.length)
        );
        setActiveStep(currentStep);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    if (wrapRef.current && window.innerWidth > 980) {
      const pw = wrapRef.current;
      const top = pw.getBoundingClientRect().top + window.scrollY;
      const totalScrollable = pw.offsetHeight - window.innerHeight;
      const targetY = top + (index / (PROCESS_STEPS.length - 1)) * totalScrollable;

      const globalLenis = (window as unknown as { lenis?: { scrollTo: (y: number, opts: object) => void } }).lenis;
      if (globalLenis) {
        globalLenis.scrollTo(targetY, { duration: 1.2 });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    } else if (trackRef.current) {
      const cards = trackRef.current.querySelectorAll(".card");
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <div id="procwrap" className="dark" ref={wrapRef}>
      <section className="proc" id="process">
        <div className="box">
          <div>
            <div className="eyebrow mono">How we do it</div>
            <h2 className="h2 d">
              We build around{" "}
              <span className="it" style={{ color: "var(--lime)" }}>
                your
              </span>{" "}
              sales process.
            </h2>
          </div>
          <p className="lead" style={{ maxWidth: "34ch" }}>
            Every business has a different offer, audience and buying journey,
            so we never force yours into a pre-built funnel.
          </p>
        </div>

        {/* Pinned Scroll Track */}
        <div className="track" ref={trackRef} aria-label="Process Steps Carousel">
          {PROCESS_STEPS.map((step, index) => (
            <article
              key={step.num}
              className={`card ${activeStep === index ? "on" : ""}`}
              onClick={() => scrollToStep(index)}
            >
              <Image
                className="bg"
                src={step.img}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 84vw, 540px"
                style={{ objectFit: "cover" }}
              />
              <span className="num">{step.num}</span>
              <div className="sc" />
              <div className="ct">
                <div className="mono">
                  <b>Step {step.num}</b>
                  <span>/ 06</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Step Bar */}
        <div className="prog" role="tablist" aria-label="Step Progress">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.num}
              className={activeStep >= index ? "on" : ""}
              onClick={() => scrollToStep(index)}
              role="tab"
              tabIndex={0}
              aria-selected={activeStep === index}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  scrollToStep(index);
                }
              }}
            >
              {step.num} {step.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
