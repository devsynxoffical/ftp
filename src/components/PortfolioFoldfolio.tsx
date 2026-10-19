"use client";

import { useState, useEffect, useCallback } from "react";
import { FUNNELS_LIST } from "@/data/siteContent";

export default function PortfolioFoldfolio() {
  const [funnelIndex, setFunnelIndex] = useState(0);
  const [clockTime, setClockTime] = useState("14:32");

  // Keep live clock accurate
  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      setClockTime(
        String(d.getHours()).padStart(2, "0") +
          ":" +
          String(d.getMinutes()).padStart(2, "0")
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 20000);
    return () => clearInterval(interval);
  }, []);

  const goOpen = useCallback(() => {
    const pw = document.getElementById("portwrap");
    if (!pw) return;
    const top = Math.round(pw.getBoundingClientRect().top + window.scrollY);
    const from = window.scrollY;
    const inside =
      from > top && from < top + pw.offsetHeight - window.innerHeight;

    const globalLenis = (window as unknown as {
      lenis?: { scrollTo: (y: number, opts: object) => void };
    }).lenis;

    if (globalLenis) {
      globalLenis.scrollTo(top, {
        duration: inside ? 1.1 : 1.4,
        force: true,
        lock: true,
      });
      return;
    }

    const t0 = performance.now();
    const D = inside ? 1000 : 1300;
    (function st(t) {
      const k = Math.min(1, (t - t0) / D);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      window.scrollTo(0, from + (top - from) * e);
      if (k < 1) requestAnimationFrame(st);
    })(t0);
  }, []);

  const selectFunnel = (i: number) => {
    const nextIdx = (i + FUNNELS_LIST.length) % FUNNELS_LIST.length;
    setFunnelIndex(nextIdx);
    goOpen();
  };

  return (
    <div id="portwrap">
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
            Scroll to unfold, then pick any of the 8 funnels below.
          </span>
        </div>

        <div className="giant" aria-hidden="true">
          <span id="gl">FTP</span>
          <span id="gr">Work</span>
        </div>

        <div className="fstage">
          <div className="fshadow" id="fsh" />
          <div className="fold" id="dev">
            <div className="pane pr" id="pr">
              <div className="scr">
                <div className="site" id="site2">
                  <img
                    className="fimg"
                    id="fimg2"
                    src={`/img/funnels/f${funnelIndex + 1}.webp`}
                    alt=""
                    decoding="async"
                  />
                </div>
                <span className="sb r">
                  5G<i />
                </span>
              </div>
            </div>

            <div className="pane pl" id="pl">
              <div className="scr">
                <div className="site" id="site">
                  <img
                    className="fimg"
                    id="fimg"
                    src={`/img/funnels/f${funnelIndex + 1}.webp`}
                    alt={`${FUNNELS_LIST[funnelIndex].name} funnel`}
                    decoding="async"
                  />
                </div>
                <span className="sb l">09:41</span>
              </div>
            </div>

            <div className="cover" id="cover">
              <div className="cin">
                <img
                  className="cph"
                  src="/img/hero/agent.webp"
                  alt=""
                  loading="lazy"
                />
                <div className="clock" id="clock">
                  {clockTime}
                </div>
                <div className="sub">Funnels That Print &middot; Portfolio</div>
                <div className="notifs">
                  <div className="notif">
                    <img src="/img/funnels/f1-t.webp" alt="" />
                    <div>
                      <b>100X Productivity is live</b>
                      <span className="mono">APPLICATION FUNNEL &middot; NOW</span>
                    </div>
                  </div>
                  <div className="notif">
                    <img src="/img/funnels/f7-t.webp" alt="" />
                    <div>
                      <b>Rowan Security, 41 calls booked</b>
                      <span className="mono">
                        HIGH-TICKET FUNNEL &middot; 2H AGO
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cf">
                  <a href="#foot" aria-label="Instagram">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                  <span>Scroll to unfold</span>
                  <a href="#foot" aria-label="X">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9.1L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 3.9H5.1L17 20z" />
                    </svg>
                  </a>
                </div>
              </div>
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
                <b id="fnum">{`0${funnelIndex + 1} / 0${FUNNELS_LIST.length}`}</b>
                <em id="fname" style={{ fontStyle: "normal" }}>
                  {FUNNELS_LIST[funnelIndex].name}
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
        </div>

        <span className="hint">Pick a funnel</span>
        <div className="fsel" id="fsel" role="tablist" aria-label="Funnels">
          {FUNNELS_LIST.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              data-n={`0${i + 1}`}
              data-i={i}
              aria-label={f.name}
              title={f.name}
              className={funnelIndex === i ? "on" : ""}
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
