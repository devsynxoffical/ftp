"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { HERO_WORDS } from "@/data/siteContent";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);

  // High-performance DOM-direct typewriter (zero React re-renders to prevent layout thrashing)
  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const W = HERO_WORDS;
    let wi = 0;
    let ci = W[0].length;
    let del = true;
    let timeoutId: NodeJS.Timeout;

    function step() {
      if (!el) return;
      const w = W[wi];
      if (del) {
        ci--;
        el.textContent = w.slice(0, ci);
        if (ci === 0) {
          del = false;
          wi = (wi + 1) % W.length;
          timeoutId = setTimeout(step, 400);
          return;
        }
        timeoutId = setTimeout(step, 45);
      } else {
        ci++;
        el.textContent = W[wi].slice(0, ci);
        if (ci === W[wi].length) {
          del = true;
          timeoutId = setTimeout(step, 2400);
          return;
        }
        timeoutId = setTimeout(step, 70);
      }
    }

    timeoutId = setTimeout(step, 3200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="hero" id="top" ref={heroRef}>
      <video
        className="hbg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/img/hero/bg.webm" type="video/webm" />
        <source src="/img/hero/bg.mp4" type="video/mp4" />
      </video>

      <div className="box">
        <span className="tag rise">
          <i>&#10022;</i> Trusted by 50+ businesses, 56 published case studies
        </span>

        <h1
          className="h1 d rise"
          style={{ "--rd": "0.1s" } as React.CSSProperties}
        >
          We build funnels that print{" "}
          <br />
          <span className="type" id="type" ref={typeRef}>
            booked calls.
          </span>
        </h1>

        <p
          className="lead rise"
          style={{ "--rd": "0.2s" } as React.CSSProperties}
        >
          Define the offer, connect your traffic, and let the funnel, the follow-up
          and the AI agent do the work while you focus on closing.
        </p>

        <div
          className="hcta rise"
          style={{ "--rd": "0.3s" } as React.CSSProperties}
        >
          <a className="btn grad" href="#cta">
            Build my funnel <i>&#8599;</i>
          </a>
          <a className="btn wh" href="#process">
            See how it works
          </a>
        </div>

        <div className="stage" id="stage" ref={stageRef}>
          <div
            className="agent rise"
            style={{ "--rd": "0.4s" } as React.CSSProperties}
          >
            <video
              poster="/img/hero/agent.webp"
              autoPlay
              muted
              loop
              playsInline
              aria-label="AI agent"
            >
              <source src="/img/hero/agent.webm" type="video/webm" />
              <source src="/img/hero/agent.mp4" type="video/mp4" />
            </video>
          </div>

          <div
            className="ui lead"
            style={{ left: 0, top: "18%", "--d": "1s" } as React.CSSProperties}
            data-m="22"
          >
            <div className="uh">
              <b>New lead</b>
              <span className="pl">AI is qualifying</span>
            </div>
            <div className="avs">
              <img src="/img/team/gaurav.webp" alt="Gaurav" />
              <em>+</em>
              <img src="/img/team/rahul.webp" alt="Rahul" />
              <em>+</em>
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "var(--or)",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                AI
              </span>
            </div>
            <div className="sum">
              <b>Summary of the call</b>
              <s>Budget confirmed for a $5K DWY offer</s>
              <s>Timeline: wants to start this month</s>
              <s>Booked for Thursday 14:30</s>
            </div>
          </div>

          <div
            className="ui src"
            style={{ right: 0, top: "8%", "--d": "1.2s" } as React.CSSProperties}
            data-m="-20"
          >
            <b style={{ fontSize: 16, marginBottom: 4 }}>Connected</b>
            <div className="rw">
              <i>CRM</i>GoHighLevel
            </div>
            <div className="rw">
              <i style={{ background: "#2d4fe6" }}>CAL</i>Calendar + reminders
            </div>
            <div className="rw add">+ Add source(s)</div>
          </div>

          <div
            className="ui chip"
            style={{
              left: "10%",
              bottom: "10%",
              "--d": "1.5s",
            } as React.CSSProperties}
            data-m="14"
          >
            <i>&#9679;</i>Qualifies, books, follows up
          </div>

          <div
            className="ui tools"
            style={{
              right: "4%",
              bottom: "8%",
              "--d": "1.7s",
            } as React.CSSProperties}
            data-m="-14"
          >
            <b>Stack and automations</b>
            <div className="ic">
              <span title="HighLevel">
                <img src="/img/tools/highlevel.webp" alt="HighLevel" />
              </span>
              <span title="ClickFunnels">
                <img src="/img/tools/clickfunnels.webp" alt="ClickFunnels" />
              </span>
              <span title="Zapier">
                <img src="/img/tools/zapier.svg" alt="Zapier" />
              </span>
              <span title="OpenAI">
                <img src="/img/tools/openai.svg" alt="OpenAI" />
              </span>
              <span title="Twilio">
                <img src="/img/tools/twilio.svg" alt="Twilio" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
