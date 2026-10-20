"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { FUNNELS_LIST } from "@/data/siteContent";

export default function PortfolioFoldfolio() {
  const [funnelIndex, setFunnelIndex] = useState(0);
  const [clockTime, setClockTime] = useState("14:32");
  const slideRef = useRef<HTMLDivElement>(null);

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

  // Slide-to-talk widget interaction
  useEffect(() => {
    const sl = slideRef.current;
    if (!sl) return;
    const k = sl.querySelector<HTMLElement>("#sk");
    if (!k) return;

    let dx = 0;
    let st = 0;
    let dr = false;

    const max = () => sl.clientWidth - k.offsetWidth - 12;
    const go = () => {
      window.location.href = "/contact";
    };

    const onPointerDown = (e: PointerEvent) => {
      dr = true;
      st = e.clientX - dx;
      sl.setPointerCapture(e.pointerId);
      sl.classList.add("drag");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dr) return;
      dx = Math.max(0, Math.min(max(), e.clientX - st));
      k.style.transform = `translateX(${dx}px)`;
      sl.setAttribute("aria-valuenow", String(Math.round((dx / max()) * 100)));
    };

    const end = () => {
      if (!dr) return;
      dr = false;
      sl.classList.remove("drag");
      if (dx > max() * 0.8) {
        k.style.transform = `translateX(${max()}px)`;
        setTimeout(go, 280);
      } else {
        dx = 0;
        k.style.transform = "translateX(0)";
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "ArrowRight") {
        k.style.transform = `translateX(${max()}px)`;
        setTimeout(go, 280);
      }
    };

    sl.addEventListener("pointerdown", onPointerDown);
    sl.addEventListener("pointermove", onPointerMove);
    sl.addEventListener("pointerup", end);
    sl.addEventListener("pointercancel", end);
    sl.addEventListener("keydown", onKeyDown);

    return () => {
      sl.removeEventListener("pointerdown", onPointerDown);
      sl.removeEventListener("pointermove", onPointerMove);
      sl.removeEventListener("pointerup", end);
      sl.removeEventListener("pointercancel", end);
      sl.removeEventListener("keydown", onKeyDown);
    };
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

  const currentFunnel = FUNNELS_LIST[funnelIndex];

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
                    src={`/img/funnels/f${currentFunnel.id}.webp`}
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
                    src={`/img/funnels/f${currentFunnel.id}.webp`}
                    alt={`${currentFunnel.name} funnel`}
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
                    <img src="/img/funnels/f8-t.webp" alt="" />
                    <div>
                      <b>Mortgage AI System is live</b>
                      <span className="mono">WEBINAR FUNNEL &middot; NOW</span>
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

                <div className="ccall">
                  <div className="cn">Funnels That Print</div>
                  <div className="cs">
                    Incoming call &middot; about your next funnel
                  </div>
                  <div className="cav">
                    <img src="/img/team/gaurav.webp" alt="Gaurav Kapoor" />
                  </div>
                  <div
                    ref={slideRef}
                    className="slide"
                    id="slide"
                    role="slider"
                    aria-label="Slide to talk"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={0}
                    tabIndex={0}
                  >
                    <span className="sk" id="sk">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
                      </svg>
                    </span>
                    <span className="st">slide to talk</span>
                  </div>
                  <a className="cm" href="mailto:info@funnelsthatprint.com">
                    INFO@FUNNELSTHATPRINT.COM
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
                  {currentFunnel.name}
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
                src={`/img/funnels/f${f.id}-t.webp`}
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
