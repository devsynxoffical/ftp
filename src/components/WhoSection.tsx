"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const WHO = [
  {
    name: "Agencies",
    desc: "Generate better-fit prospects and turn marketing traffic into qualified discovery calls.",
    out: "Discovery calls",
    journey: [
      { label: "Ad click", icon: "↗" },
      { label: "Case-study page", icon: "▤" },
      { label: "Qualifier form", icon: "✓" },
      { label: "Discovery call", icon: "☎" },
    ],
    chips: ["Strategy", "Copy", "Landing page", "CRM routing"],
  },
  {
    name: "Coaches & Consultants",
    desc: "Build a structured journey that turns interest into applications and sales conversations.",
    out: "Applications",
    journey: [
      { label: "Content", icon: "▶" },
      { label: "VSL page", icon: "▷" },
      { label: "Application", icon: "✎" },
      { label: "Sales call", icon: "☎" },
    ],
    chips: ["VSL funnel", "Application form", "Automated follow-up"],
  },
  {
    name: "High-Ticket Service Providers",
    desc: "Present your offer, qualify prospects and get serious buyers onto your calendar.",
    out: "Calendar",
    journey: [
      { label: "Ad or referral", icon: "↗" },
      { label: "Offer page", icon: "▤" },
      { label: "Pre-call survey", icon: "✓" },
      { label: "Booked calendar", icon: "▦" },
    ],
    chips: ["AC Funnel", "Qualification quiz", "Calendar booking"],
  },
  {
    name: "B2B Companies",
    desc: "Create a conversion path designed to engage and qualify potential clients before the sales team steps in.",
    out: "Qualification",
    journey: [
      { label: "LinkedIn & search", icon: "↗" },
      { label: "Solution page", icon: "▤" },
      { label: "Lead scoring", icon: "≡" },
      { label: "Sales handoff", icon: "⇄" },
    ],
    chips: ["Whitepaper funnel", "Email nurture", "Lead scoring"],
  },
  {
    name: "Professional Services",
    desc: "Turn expertise and credibility into a predictable path toward consultation bookings.",
    out: "Consultations",
    journey: [
      { label: "Local search", icon: "⌖" },
      { label: "Credibility page", icon: "★" },
      { label: "Intake form", icon: "✎" },
      { label: "Consultation", icon: "☎" },
    ],
    chips: ["Consultation funnel", "Intake automation", "SMS reminders"],
  },
  {
    name: "Information & Education",
    desc: "Use VSLs, low-ticket offers, bridge funnels and automated journeys to turn attention into customers.",
    out: "Customers",
    journey: [
      { label: "Social video", icon: "▶" },
      { label: "Low-ticket offer", icon: "$" },
      { label: "Email nurture", icon: "✉" },
      { label: "Customer", icon: "♥" },
    ],
    chips: ["Bridge funnel", "Order bump & OTO", "Email sequence"],
  },
];

export default function WhoSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  const setWho = useCallback((i: number) => {
    setSelectedIdx(i);
    setAnimKey((prev) => prev + 1);
  }, []);

  // Intersection observer & timer (4.2 seconds)
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const io = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.3 }
    );
    io.observe(sec);

    const interval = setInterval(() => {
      if (isVisibleRef.current && !isHovered) {
        setSelectedIdx((prev) => (prev + 1) % WHO.length);
        setAnimKey((prev) => prev + 1);
      }
    }, 4200);

    return () => {
      io.disconnect();
      clearInterval(interval);
    };
  }, [isHovered]);

  // Pointer light tracking
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const b = cardRef.current;
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--mx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
    b.style.setProperty("--my", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
  };

  const current = WHO[selectedIdx];
  const numStr = String(selectedIdx + 1).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className="sec box"
      id="who"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="head">
        <div>
          <div className="eyebrow mono">Who we work with</div>
          <h2 className="h2 d">
            Built for businesses that sell through{" "}
            <span className="it">conversation.</span>
          </h2>
        </div>
        <p className="lead">
          Our funnels are for businesses where generating the right sales
          conversation matters more than cheap clicks or cheap leads.
        </p>
      </div>

      <div className="who">
        <div className="sect" id="sect">
          {WHO.map((item, index) => (
            <a
              key={item.name}
              href="#robo"
              data-i={index}
              className={selectedIdx === index ? "on" : ""}
              onClick={(e) => {
                e.preventDefault();
                setWho(index);
                const robo = document.getElementById("robo");
                if (robo) robo.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => setWho(index)}
              onFocus={() => setWho(index)}
            >
              <span className="n">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.name}</h3>
              <em>{item.out}</em>
            </a>
          ))}
        </div>

        <aside
          ref={cardRef}
          className="wcard wb"
          id="wb"
          onPointerMove={handlePointerMove}
        >
          <span key={`big-${animKey}`} className="wbig go" id="wbig" aria-hidden="true">
            {numStr}
          </span>
          <div className="top">
            <span className="wt">
              <b id="wn">{numStr}</b> / 06 &middot; <span id="wname">{current.name}</span>
            </span>
            <span className="wfit">
              <i />Best fit
            </span>
          </div>

          <p key={`p-${animKey}`} className="go" id="wp">
            {current.desc.split(" ").map((w, k) => (
              <span key={k} style={{ "--k": k } as React.CSSProperties}>
                {w}
                {k < current.desc.split(" ").length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </p>

          <div
            key={`wj-${animKey}`}
            className="wj"
            id="wj"
            aria-label="Typical funnel journey"
          >
            <div className="wl" aria-hidden="true">
              <s />
              <b />
            </div>
            {current.journey.map((s, k) => (
              <div
                key={k}
                className={`ws${k === current.journey.length - 1 ? " end" : ""}`}
                style={{ "--k": k } as React.CSSProperties}
              >
                <span className="wi">{s.icon}</span>
                <em>{s.label}</em>
              </div>
            ))}
            <span className="wout" style={{ "--k": 5 } as React.CSSProperties}>
              {current.out}
            </span>
          </div>

          <div className="wfoot">
            <div className="wch" id="wch">
              {current.chips.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <a className="btn g" href="#robo">
              Map my funnel <i>&#8599;</i>
            </a>
          </div>

          <div className="wprog">
            <i
              key={`prog-${animKey}`}
              id="wpi"
              style={{
                width: "100%",
                transition: "width 4.2s linear",
              }}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
