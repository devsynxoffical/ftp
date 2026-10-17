"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/data/siteContent";

export default function PortfolioFoldfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);
  const glRef = useRef<HTMLSpanElement>(null);
  const grRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cl = (v: number, min = 0, max = 1) =>
      Math.max(min, Math.min(max, v));

    const handleScroll = () => {
      if (
        prefersReducedMotion ||
        !wrapRef.current ||
        !devRef.current ||
        !coverRef.current ||
        !siteRef.current ||
        !pagesRef.current
      )
        return;

      if (window.innerWidth <= 980) return; // On mobile, display simplified responsive device

      const ptw = wrapRef.current;
      const dev = devRef.current;
      const cover = coverRef.current;
      const site = siteRef.current;
      const pages = pagesRef.current;
      const gl = glRef.current;
      const gr = grRef.current;

      const rect = ptw.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      if (rect.top < vh && rect.bottom > 0) {
        const totalScrollable = ptw.offsetHeight - vh;
        const p = cl(-rect.top / totalScrollable);

        // Phase 1: Unfold the dual screen cover (0.03 to 0.15 progress)
        const open = cl((p - 0.03) / 0.12);
        const e = open * open * (3 - 2 * open); // Smooth cubic hermite curve

        dev.style.width = `calc(var(--W) * ${(0.5 + 0.5 * e).toFixed(4)})`;
        dev.style.borderRadius = `${36 - e * 8}px`;

        cover.style.transform = `rotateY(${-180 * e}deg)`;
        cover.style.visibility = e > 0.5 ? "hidden" : "visible";
        dev.classList.toggle("open", e > 0.92);

        // Giant background letters spread
        if (gl && gr) {
          const spread = e * vw * 0.42;
          gl.style.transform = `translate3d(${-spread}px, 0, 0)`;
          gr.style.transform = `translate3d(${spread}px, 0, 0)`;
          gl.style.opacity = `${1 - e * 0.85}`;
          gr.style.opacity = `${1 - e * 0.85}`;
        }

        // Phase 2: Scroll the internal site content inside device (0.17 to 1.0 progress)
        const sc = cl((p - 0.17) / 0.83);
        const maxScroll = Math.max(0, site.scrollHeight - pages.clientHeight);
        const yy = sc * maxScroll;
        site.style.transform = `translate3d(0, ${-yy}px, 0)`;

        // Update active screen tab based on scroll position inside device
        const anchors = site.querySelectorAll("[data-a]");
        let currentAi = 0;
        anchors.forEach((el, i) => {
          const htmlEl = el as HTMLElement;
          if (yy + pages.clientHeight * 0.5 >= htmlEl.offsetTop) {
            currentAi = i;
          }
        });
        setActiveTab(currentAi);
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

  const scrollToAnchor = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (!wrapRef.current || !siteRef.current || !pagesRef.current) return;

    if (window.innerWidth > 980) {
      const ptw = wrapRef.current;
      const site = siteRef.current;
      const pages = pagesRef.current;
      const anchors = site.querySelectorAll("[data-a]");
      const targetAnchor = anchors[tabIndex] as HTMLElement;

      if (targetAnchor) {
        const maxInsideScroll = Math.max(
          1,
          site.scrollHeight - pages.clientHeight
        );
        const pRatio = 0.17 + 0.83 * Math.min(1, targetAnchor.offsetTop / maxInsideScroll);
        const top = ptw.getBoundingClientRect().top + window.scrollY;
        const targetY = top + pRatio * (ptw.offsetHeight - window.innerHeight);

        const globalLenis = (window as unknown as { lenis?: { scrollTo: (y: number, opts: object) => void } }).lenis;
        if (globalLenis) {
          globalLenis.scrollTo(targetY, { duration: 1.2 });
        } else {
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div id="portwrap" ref={wrapRef}>
      <section className="port" id="work">
        <div className="top">
          <div>
            <div className="eyebrow mono">Portfolio</div>
            <h2 className="h3 d">Built for conversion. Not just for show.</h2>
          </div>
          <span className="mono" style={{ textAlign: "right", maxWidth: "32ch" }}>
            Every project starts with a business objective. Scroll to unfold the
            work.
          </span>
        </div>

        <div className="giant" aria-hidden="true">
          <span ref={glRef} id="gl">
            FTP
          </span>
          <span ref={grRef} id="gr">
            Work
          </span>
        </div>

        {/* 3D Unfolding Device */}
        <div className="dev" id="dev" ref={devRef}>
          <div className="scr">
            <div className="pages" id="pages" ref={pagesRef}>
              <div className="site" id="site" ref={siteRef}>
                {/* Screen 0: Home Hero */}
                <div className="scn hs" data-a="0">
                  <div className="l pad">
                    <span className="mono">
                      Funnels, Automation, Follow-up, AI
                    </span>
                    <div>
                      <div className="nm">
                        Funnels
                        <br />
                        That Print
                      </div>
                      <p>
                        Conversion journeys built around your offer, audience
                        and sales process. From first click to booked call.
                      </p>
                      <div className="bts">
                        <Link className="btn o" href="/#cta">
                          Build my funnel <i>&#8599;</i>
                        </Link>
                        <Link className="btn g" href="/case-studies">
                          Case studies
                        </Link>
                      </div>
                    </div>
                    <span className="mono">Scroll to explore</span>
                  </div>

                  <div className="r">
                    <Image
                      src="/img/gen/hero.webp"
                      alt="Funnel portfolio showcase"
                      fill
                      sizes="600px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Screen 1: Numbers */}
                <div className="scn st pad" data-a="1">
                  <span className="mono">Funnels That Print in numbers</span>
                  <div className="stt">
                    <div>
                      <b>56</b>
                      <span>Published case studies</span>
                    </div>
                    <div>
                      <b>10</b>
                      <span>Services, build to follow-up</span>
                    </div>
                    <div>
                      <b>6</b>
                      <span>Funnel formats</span>
                    </div>
                    <div>
                      <b>5 to 10</b>
                      <span>Day turnaround</span>
                    </div>
                  </div>
                </div>

                {/* Screen 2: Portfolio Intro */}
                <div className="scn sel pad" data-a="2">
                  <div className="nm">
                    Funnel
                    <br />
                    portfolio
                  </div>
                  <Link
                    className="btn"
                    href="/case-studies"
                    style={{ background: "#fff", color: "#111" }}
                  >
                    Case studies <i>&#8599;</i>
                  </Link>
                </div>

                {/* Screen 3+: Individual Projects */}
                {PORTFOLIO_PROJECTS.map((pj, i) => (
                  <div
                    key={pj.num}
                    className="scn pj"
                    data-a={i === PORTFOLIO_PROJECTS.length - 1 ? "3" : undefined}
                  >
                    <div className="im">
                      <Image
                        className="mn"
                        src={pj.img}
                        alt={pj.title}
                        fill
                        sizes="600px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="tx pad" style={{ background: pj.color }}>
                      <div className="num">{pj.num}</div>
                      <div>
                        <span className="mono">{pj.type}</span>
                        <h3>{pj.title}</h3>
                        <p>{pj.desc}</p>
                        <Link href="/#services">See the service &#8599;</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <span className="hinge" />

              <div className="sbar">
                <span>09:41</span>
                <span>
                  5G<i></i>
                </span>
              </div>

              <div className="pnav" id="pnav">
                <button
                  type="button"
                  className={activeTab === 0 ? "on" : ""}
                  onClick={() => scrollToAnchor(0)}
                >
                  Home
                </button>
                <button
                  type="button"
                  className={activeTab === 1 ? "on" : ""}
                  onClick={() => scrollToAnchor(1)}
                >
                  Numbers
                </button>
                <button
                  type="button"
                  className={activeTab === 2 ? "on" : ""}
                  onClick={() => scrollToAnchor(2)}
                >
                  Work
                </button>
                <button
                  type="button"
                  className={activeTab === 3 ? "on" : ""}
                  onClick={() => scrollToAnchor(3)}
                >
                  Contact
                </button>
              </div>
            </div>

            {/* 3D Unfolding Cover */}
            <div className="cover" id="cover" ref={coverRef}>
              <Image
                className="face"
                src="/img/gen/who.webp"
                alt=""
                fill
                sizes="600px"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
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
      </section>
    </div>
  );
}
