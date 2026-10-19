"use client";

import { useState, useRef, useEffect } from "react";
import { PLANS_DATA } from "@/data/siteContent";

export default function PricingSection() {
  const [planIdx, setPlanIdx] = useState(1);
  const [isSwitching, setIsSwitching] = useState(false);
  const pindRef = useRef<HTMLSpanElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  const activePlan = PLANS_DATA[planIdx];

  const updatePind = (btn: HTMLElement | null) => {
    if (!btn || !pindRef.current) return;
    pindRef.current.style.left = `${btn.offsetLeft}px`;
    pindRef.current.style.width = `${btn.offsetWidth}px`;
  };

  useEffect(() => {
    updatePind(activeBtnRef.current);
    const handleResize = () => updatePind(activeBtnRef.current);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [planIdx]);

  const selectPlan = (index: number) => {
    if (index === planIdx) return;
    setIsSwitching(true);
    setTimeout(() => {
      setPlanIdx(index);
      setIsSwitching(false);
    }, 180);
  };

  return (
    <section className="sec box" id="pricing">
      <div className="head">
        <div>
          <div className="eyebrow mono">Packages</div>
          <h2 className="h2 d">
            Pick how much we <span className="it">build.</span>
          </h2>
        </div>
        <p className="lead">
          Three ways to work with us, from design only to the complete
          done-for-you AC Funnel suite.
        </p>
      </div>

      <div className="pr3">
        {/* Interactive Visual Graphic */}
        <div className="pvis" id="pvis" data-p={planIdx}>
          <div className="pv0 ps">
            <div className="pg">
              <i className="h" />
              <i className="sw">
                <s />
                <s />
                <s />
                <s />
              </i>
              <i className="hero">
                <s />
              </i>
              <i className="row">
                <s />
                <s />
                <s />
              </i>
              <i className="btn" />
            </div>
            <svg className="cur" viewBox="0 0 24 24">
              <path
                d="M4 2l16 9-7 2-4 7z"
                fill="#141414"
                stroke="#fff"
                strokeWidth="1.5"
              />
            </svg>
            <span className="chip a">Brand visuals</span>
            <span className="chip b">Mobile layout</span>
          </div>

          <div className="pv1 ps">
            <div className="pg">
              <i className="vsl">
                <s />
              </i>
              <i className="t" style={{ "--w": "86%", "--d": ".2s" } as React.CSSProperties} />
              <i className="t" style={{ "--w": "72%", "--d": ".5s" } as React.CSSProperties} />
              <i className="t" style={{ "--w": "80%", "--d": ".8s" } as React.CSSProperties} />
              <i className="t s" style={{ "--w": "60%", "--d": "1.1s" } as React.CSSProperties} />
            </div>
            <div className="ck">
              <b>Checkout</b>
              <span className="r">
                <em>Order bump</em>
                <s />
              </span>
              <span className="r">
                <em>OTO</em>
                <s />
              </span>
              <i />
            </div>
            <span className="chip a">Long-form copy</span>
          </div>

          <div className="pv2 ps">
            <div className="fl">
              <span className="nd" style={{ "--x": "12%", "--y": "22%" } as React.CSSProperties}>
                Page
              </span>
              <span className="nd" style={{ "--x": "52%", "--y": "12%" } as React.CSSProperties}>
                Checkout
              </span>
              <span className="nd" style={{ "--x": "84%", "--y": "40%" } as React.CSSProperties}>
                Members
              </span>
              <span className="nd" style={{ "--x": "58%", "--y": "66%" } as React.CSSProperties}>
                Email
              </span>
              <span className="nd" style={{ "--x": "18%", "--y": "72%" } as React.CSSProperties}>
                Booking
              </span>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M12 22 L52 12 L84 40 L58 66 L18 72 Z" />
              </svg>
              <i className="dot" />
            </div>
            <div className="sup">
              <b>30</b>
              <span>days post-launch support</span>
            </div>
          </div>

          <div className="pcap">
            <span className="pk" id="ptag">
              {activePlan.tag}
            </span>
            <b id="pname">{activePlan.title}</b>
          </div>
        </div>

        {/* Center Panel */}
        <div className={`pmid ${isSwitching ? "sw" : ""}`}>
          <div className="ptog3" role="tablist" aria-label="Package">
            {PLANS_DATA.map((plan, i) => {
              const isSelected = planIdx === i;
              return (
                <button
                  key={plan.title}
                  ref={isSelected ? activeBtnRef : null}
                  type="button"
                  role="tab"
                  data-p={i}
                  aria-selected={isSelected}
                  onClick={() => selectPlan(i)}
                >
                  {i === 0 ? "Starter" : i === 1 ? "Most popular" : "Complete"}
                </button>
              );
            })}
            <span className="pind" id="pind" ref={pindRef} />
          </div>

          <h3 className="pt3" id="ptitle">
            {activePlan.title}
          </h3>
          <p className="pdesc" id="pdesc">
            {activePlan.desc}
          </p>

          <a
            className="btn pcta"
            id="pcta"
            href={activePlan.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span id="pctat">{activePlan.ctaText}</span> <i>&#8599;</i>
          </a>

          <p className="pcall">
            Not sure which fits? Book a short call and we will tell you.
          </p>
        </div>

        {/* Features List */}
        <ul className="pfeat" id="pf">
          {activePlan.features.map((feat, k) => (
            <li key={feat} style={{ "--i": k } as React.CSSProperties}>
              <i>&#10003;</i>
              <div>
                <b>{feat}</b>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
