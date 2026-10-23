"use client";

import { useEffect } from "react";
import { PROCESS_STEPS } from "@/data/siteContent";

const CBG = ["#d6ccff", "#c8f54a", "#ffbfe0", "#bfe3ff", "#ffd3c2", "#efece4"];

export default function ProcessSection() {
  // IntersectionObserver to auto play/pause card videos smoothly matching ftp 4
  useEffect(() => {
    const pvids = document.querySelectorAll<HTMLVideoElement>(".card video");
    if (!pvids.length) return;

    const po = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { rootMargin: "120px" }
    );

    pvids.forEach((v) => po.observe(v));

    return () => po.disconnect();
  }, []);

  // Allow horizontal swipe/wheel gesture inside track to smoothly scroll the section
  useEffect(() => {
    const proc = document.getElementById("process");
    if (!proc) return;

    const handleWheel = (e: WheelEvent) => {
      // If horizontal gesture on trackpad or shift+wheel
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 3) {
        const globalLenis = (window as unknown as {
          lenis?: { scrollTo: (y: number, opts?: object) => void; scroll: number };
        }).lenis;
        if (globalLenis) {
          globalLenis.scrollTo(globalLenis.scroll + e.deltaX * 1.5, { immediate: true });
        } else {
          window.scrollBy({ top: e.deltaX * 1.5 });
        }
      }
    };

    proc.addEventListener("wheel", handleWheel, { passive: true });
    return () => proc.removeEventListener("wheel", handleWheel);
  }, []);

  const scrollToStep = (index: number) => {
    const pw = document.getElementById("procwrap");
    if (!pw) return;

    let top = 0;
    let curr: HTMLElement | null = pw;
    while (curr) {
      top += curr.offsetTop;
      curr = curr.offsetParent as HTMLElement | null;
    }

    const totalScrollable = Math.max(1, pw.offsetHeight - window.innerHeight);
    const targetY = top + (index / (PROCESS_STEPS.length - 1)) * totalScrollable;

    // Immediately update active card class for instant visual response
    const cards = document.querySelectorAll<HTMLElement>("#track .card");
    const progs = document.querySelectorAll<HTMLElement>("#prog div");
    cards.forEach((c, k) => c.classList.toggle("on", k === index));
    progs.forEach((c, k) => c.classList.toggle("on", k <= index));

    const globalLenis = (window as unknown as {
      lenis?: { scrollTo: (y: number, opts: object) => void };
    }).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(targetY, { duration: 1.0 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <div id="procwrap">
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

        <div className="track" id="track">
          {PROCESS_STEPS.map((step, i) => (
            <article
              key={step.num}
              className={`card ${i === 0 ? "on" : ""}`}
              style={{ "--cbg": CBG[i] } as React.CSSProperties}
              onClick={() => scrollToStep(i)}
            >
              <div className="ph">
                <video
                  className="bg"
                  poster={`/img/proc/p${i + 1}.webp`}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                >
                  <source src={`/img/proc/p${i + 1}.webm`} type="video/webm" />
                  <source src={`/img/proc/p${i + 1}.mp4`} type="video/mp4" />
                </video>
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
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={i === 0 ? "on" : ""}
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
