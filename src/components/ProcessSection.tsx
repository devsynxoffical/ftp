"use client";

import { useEffect, useRef, useState } from "react";

const CBG = ["#d6ccff", "#c8f54a", "#ffbfe0", "#bfe3ff", "#ffd3c2", "#efece4"];

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your offer, ideal customer, traffic source, sales process and conversion goal.",
    img: "/img/svc/s1.webp",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We determine what your prospect needs to see, understand and believe before taking the next step.",
    img: "/img/svc/s8.webp",
  },
  {
    num: "03",
    title: "Build",
    desc: "Our team develops the pages, funnel flow, copy, forms and conversion elements.",
    img: "/img/svc/s2.webp",
  },
  {
    num: "04",
    title: "Connect",
    desc: "We integrate your CRM, calendar, email, SMS, workflows, tracking and AI calling where required.",
    img: "/img/svc/s7.webp",
  },
  {
    num: "05",
    title: "Test",
    desc: "We test the complete journey so pages, forms, integrations, notifications and automations work as intended.",
    img: "/img/svc/s9.webp",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Your funnel goes live and is ready to receive traffic.",
    img: "/img/svc/s5.webp",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let ticking = false;

    const frame = () => {
      ticking = false;
      const pw = wrapRef.current;
      const track = trackRef.current;
      if (!pw || !track) return;

      const r = pw.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      if (r.top < vh && r.bottom > 0) {
        const totalScrollable = pw.offsetHeight - vh;
        if (totalScrollable <= 0) return;
        const p = Math.max(0, Math.min(1, -r.top / totalScrollable));

        const paddingLeft =
          parseFloat(getComputedStyle(track).paddingLeft) || 20;
        const max = track.scrollWidth - vw + paddingLeft;
        track.style.transform = `translate3d(${-p * max}px, 0, 0)`;

        const i = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
        setActiveStep(i);
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
  }, []);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    const pw = wrapRef.current;
    if (pw && window.innerWidth > 980) {
      const top = pw.getBoundingClientRect().top + window.scrollY;
      const totalScrollable = pw.offsetHeight - window.innerHeight;
      const targetY = top + (index / (STEPS.length - 1)) * totalScrollable;

      const globalLenis = (window as unknown as { lenis?: { scrollTo: (y: number, opts: object) => void } }).lenis;
      if (globalLenis) {
        globalLenis.scrollTo(targetY, { duration: 1.2 });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  return (
    <div id="procwrap" ref={wrapRef}>
      <section className="proc" id="process">
        <div className="box">
          <div>
            <div className="eyebrow mono">How we do it</div>
            <h2 className="h2 d">
              We build around <span className="it">your</span> sales process.
            </h2>
          </div>
          <p className="lead" style={{ maxWidth: "34ch" }}>
            Every business has a different offer, audience and buying journey,
            so we never force yours into a pre-built funnel.
          </p>
        </div>

        <div className="track" id="track" ref={trackRef}>
          {STEPS.map((step, i) => (
            <article
              key={step.num}
              className={`card ${activeStep === i ? "on" : ""}`}
              style={{ "--cbg": CBG[i] } as React.CSSProperties}
              onClick={() => scrollToStep(i)}
            >
              <div className="ph">
                <img
                  className="bg"
                  src={step.img}
                  alt=""
                  loading="lazy"
                />
                <span className="num">{step.num}</span>
              </div>
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

        <div className="prog" id="prog">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={activeStep >= i ? "on" : ""}
              onClick={() => scrollToStep(i)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  scrollToStep(i);
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
