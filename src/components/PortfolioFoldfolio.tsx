"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const FUNNELS = [
  { name: "100X Productivity", desc: "Coaching program, application funnel" },
  { name: "Growth Foundry", desc: "Local SEO audit, lead funnel" },
  { name: "Funnel Profit System", desc: "Audit offer, booking funnel" },
  { name: "Bio-Optimization Made Easy", desc: "Long-form VSL sales letter" },
  { name: "Pluto CRM", desc: "Insurance CRM, free trial funnel" },
  { name: "Inventiv", desc: "Invention showcase, lead funnel" },
  { name: "Rowan Security", desc: "Executive protection, high-ticket application" },
  { name: "Mortgage AI System", desc: "Webinar funnel, mortgage leads" },
];

export default function PortfolioFoldfolio() {
  const [funnelIndex, setFunnelIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);
  const glRef = useRef<HTMLSpanElement>(null);
  const grRef = useRef<HTMLSpanElement>(null);

  const cl = (v: number, min = 0, max = 1) =>
    Math.max(min, Math.min(max, v));

  const goOpen = useCallback(() => {
    const pw = wrapRef.current;
    if (!pw) return;
    const top = Math.round(pw.getBoundingClientRect().top + window.scrollY);
    const y = Math.round(top + 0.2 * (pw.offsetHeight - window.innerHeight));

    const globalLenis = (window as unknown as { lenis?: { scrollTo: (y: number, opts: object) => void } }).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(y, { immediate: true, force: true });
    }
    window.scrollTo(0, y);
    window.dispatchEvent(new Event("scroll"));
  }, []);

  const selectFunnel = (i: number) => {
    const nextIdx = (i + FUNNELS.length) % FUNNELS.length;
    setFunnelIndex(nextIdx);
    goOpen();
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let ticking = false;

    const frame = () => {
      ticking = false;
      const pw = wrapRef.current;
      const dev = devRef.current;
      const cover = coverRef.current;
      const pages = pagesRef.current;
      const site = siteRef.current;
      const gl = glRef.current;
      const gr = grRef.current;

      if (!pw || !dev || !cover || !pages || !site || !gl || !gr) return;

      const r = pw.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      if (r.top < vh && r.bottom > 0) {
        const p = cl(-r.top / (pw.offsetHeight - vh));

        // Device unfold animation
        const open = cl((p - 0.03) / 0.12);
        const e = open * open * (3 - 2 * open);
        dev.style.width = `calc(var(--W) * ${(0.5 + 0.5 * e).toFixed(4)})`;
        dev.style.borderRadius = `${36 - e * 8}px`;
        cover.style.transform = `rotateY(${-180 * e}deg)`;
        cover.style.visibility = e > 0.5 ? "hidden" : "visible";
        dev.classList.toggle("open", e > 0.92);

        // Giant background text spread
        const spread = e * vw * 0.42;
        gl.style.transform = `translate3d(${-spread}px,0,0)`;
        gr.style.transform = `translate3d(${spread}px,0,0)`;
        gl.style.opacity = `${1 - e * 0.85}`;
        gr.style.opacity = `${1 - e * 0.85}`;

        // Long page scroll within unfolded viewport
        const sc = cl((p - 0.17) / 0.83);
        const maxScroll = Math.max(0, site.scrollHeight - pages.clientHeight);
        const yy = sc * maxScroll;
        site.style.transform = `translate3d(0,${-yy}px,0)`;
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

  return (
    <div id="portwrap" ref={wrapRef}>
      <section className="port" id="work">
        <div className="top">
          <div>
            <div className="eyebrow mono">Portfolio</div>
            <h2 className="h3 d">Funnels we built. Live, not mockups.</h2>
          </div>
          <span
            className="mono"
            style={{ textAlign: "right", maxWidth: "30ch" }}
          >
            Scroll to unfold the device, then pick any of the 8 funnels below.
          </span>
        </div>

        <div className="giant" aria-hidden="true">
          <span id="gl" ref={glRef}>
            FTP
          </span>
          <span id="gr" ref={grRef}>
            Work
          </span>
        </div>

        <div className="dev" id="dev" ref={devRef}>
          <div className="scr">
            <div className="pages" id="pages" ref={pagesRef}>
              <div className="site" id="site" ref={siteRef}>
                <img
                  className="fimg"
                  id="fimg"
                  src={`/img/funnels/f${funnelIndex + 1}.webp`}
                  alt={`${FUNNELS[funnelIndex].name} funnel`}
                  decoding="async"
                />
              </div>

              <span className="hinge" />

              <div className="sbar">
                <span>09:41</span>
                <span>
                  5G<i />
                </span>
              </div>

              <div className="flab" id="flab">
                <button
                  type="button"
                  id="fprev"
                  aria-label="Previous funnel"
                  onClick={() => selectFunnel(funnelIndex - 1)}
                >
                  &larr;
                </button>
                <span>
                  <b id="fnum">{`0${funnelIndex + 1} / 0${FUNNELS.length}`}</b>
                  <em id="fname" style={{ fontStyle: "normal" }}>
                    {FUNNELS[funnelIndex].name}
                  </em>
                </span>
                <button
                  type="button"
                  id="fnext"
                  aria-label="Next funnel"
                  onClick={() => selectFunnel(funnelIndex + 1)}
                >
                  &rarr;
                </button>
              </div>
            </div>

            <div className="cover" id="cover" ref={coverRef}>
              <div className="ctop">
                <span className="logo">
                  <i />
                  FTP
                </span>
                <span>Live funnels</span>
              </div>
              <div className="clock">14:32</div>
              <div className="sub">Funnels, Automation, AI Calling</div>
              <div className="notifs">
                <div className="notif">
                  <i />
                  <div>
                    <b>Call booked</b>
                    <span className="mono">Application funnel, just now</span>
                  </div>
                </div>
                <div className="notif">
                  <i className="b" />
                  <div>
                    <b>Lead qualified</b>
                    <span className="mono">AI calling agent, 2 min ago</span>
                  </div>
                </div>
              </div>
              <div className="cf">
                <i>in</i>
                <span>Scroll to unfold</span>
                <i>X</i>
              </div>
            </div>
          </div>
        </div>

        <span className="hint">Pick a funnel</span>

        <div className="fsel" id="fsel" role="tablist" aria-label="Funnels">
          {FUNNELS.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              data-n={`0${i + 1}`}
              data-i={i}
              aria-label={f.name}
              title={f.name}
              className={i === funnelIndex ? "on" : ""}
              onClick={() => selectFunnel(i)}
            >
              <img
                src={`/img/funnels/f${i + 1}-t.webp`}
                alt=""
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
