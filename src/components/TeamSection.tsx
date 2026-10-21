"use client";

import { useState } from "react";

export default function TeamSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handlePointerEnter = (name: string, e: React.PointerEvent) => {
    if (e.pointerType === "mouse") {
      setActiveCard(name);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") {
      setActiveCard(null);
    }
  };

  const handleCardClick = (name: string, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    setActiveCard((prev) => (prev === name ? null : name));
  };

  return (
    <section className="sec box" id="team">
      <div className="thd">
        <span className="tlab">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--or)"
            strokeWidth="1.6"
          >
            <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
          </svg>
          Our team
        </span>
        <h2 className="h2 d">
          The people behind
          <br />
          <span className="g">your next funnel.</span>
        </h2>
        <a className="tmore" href="#robo">
          Work with us{" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path d="M12 4v16M4 12h16" />
          </svg>
        </a>
      </div>

      <div className="tsg" id="tdeck">
        {/* Gaurav Kapoor */}
        <figure
          className={`tc ${activeCard === "gaurav" ? "hot" : ""}`}
          style={{ "--t": "-3deg", "--o": "0px" } as React.CSSProperties}
          tabIndex={0}
          onPointerEnter={(e) => handlePointerEnter("gaurav", e)}
          onPointerLeave={handlePointerLeave}
          onClick={(e) => handleCardClick("gaurav", e)}
          onFocus={() => setActiveCard("gaurav")}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setActiveCard(null);
            }
          }}
        >
          <div className="tf">
            <img
              src="/img/team/gaurav.webp"
              alt="Gaurav Kapoor, Founder of Funnels That Print"
              loading="lazy"
            />
            <span className="tag">Gaurav Kapoor</span>
          </div>
          <figcaption className="tbk">
            <b className="tn">
              Gaurav
              <br />
              Kapoor
            </b>
            <span className="tr">Founder &amp; Funnel Strategist</span>
            <span className="tb">
              Turns offers into funnels that book calls, from first click to
              booked call.
            </span>
            <span className="tsk">
              <i>Funnel strategy</i>
              <i>Offer positioning</i>
              <i>AC &amp; VSL funnels</i>
              <i>Conversion copy</i>
            </span>
            <span className="twk">
              <a href="/case-1m.html">$1.52M high-ticket funnel</a>
              <a href="/case-847k.html">$847K launch funnel</a>
            </span>
            <span className="tso">
              <a href="mailto:info@funnelsthatprint.com">Email</a>
              <a href="#robo">Book a call</a>
            </span>
          </figcaption>
        </figure>

        {/* Rahul Kapoor */}
        <figure
          className={`tc ${activeCard === "rahul" ? "hot" : ""}`}
          style={{ "--t": "2.5deg", "--o": "34px" } as React.CSSProperties}
          tabIndex={0}
          onPointerEnter={(e) => handlePointerEnter("rahul", e)}
          onPointerLeave={handlePointerLeave}
          onClick={(e) => handleCardClick("rahul", e)}
          onFocus={() => setActiveCard("rahul")}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setActiveCard(null);
            }
          }}
        >
          <div className="tf">
            <img
              src="/img/team/rahul.webp"
              alt="Rahul Kapoor, Co-founder of Funnels That Print"
              loading="lazy"
            />
            <span className="tag">Rahul Kapoor</span>
          </div>
          <figcaption className="tbk">
            <b className="tn">
              Rahul
              <br />
              Kapoor
            </b>
            <span className="tr">Co-founder &amp; Automation Lead</span>
            <span className="tb">
              Builds the systems behind the pages that keep every lead warm.
            </span>
            <span className="tsk">
              <i>CRM &amp; GHL</i>
              <i>Email &amp; SMS</i>
              <i>Booking automation</i>
              <i>AI calling agent</i>
            </span>
            <span className="twk">
              <a href="#work">Mortgage AI System funnel</a>
              <a href="#services">Automation &amp; follow-up stack</a>
            </span>
            <span className="tso">
              <a href="mailto:info@funnelsthatprint.com">Email</a>
              <a href="#robo">Book a call</a>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
