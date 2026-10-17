"use client";

import { useEffect, useState, useRef } from "react";

interface AutomationEvent {
  time: string;
  label: string;
  title: string;
  desc: string;
  x: string;
  y: string;
  alignRight?: boolean;
  lineHeight: number;
}

const AUTOMATION_EVENTS: AutomationEvent[] = [
  {
    time: "02:14",
    label: "Lead captured",
    title: "Lead capture",
    desc: "Every form fill lands in the CRM with source, score and owner in seconds.",
    x: "34%",
    y: "18%",
    alignRight: false,
    lineHeight: 160,
  },
  {
    time: "02:15",
    label: "Lead qualified, CRM updated",
    title: "Qualification",
    desc: "The AI agent asks three questions, scores the lead and routes it to the right pipeline.",
    x: "36%",
    y: "40%",
    alignRight: false,
    lineHeight: 120,
  },
  {
    time: "02:16",
    label: "Call booked",
    title: "Booking",
    desc: "Calendar slot picked, confirmation sent, reminders queued at 24h and 1h.",
    x: "92%",
    y: "28%",
    alignRight: true,
    lineHeight: 150,
  },
  {
    time: "02:18",
    label: "Follow-up sequence started",
    title: "Follow-up",
    desc: "Email and SMS nurture starts without anyone touching it.",
    x: "70%",
    y: "52%",
    alignRight: false,
    lineHeight: 110,
  },
  {
    time: "02:20",
    label: "AI call completed",
    title: "AI calling",
    desc: "No-shows get a call back, objections answered, the slot rebooked.",
    x: "96%",
    y: "76%",
    alignRight: true,
    lineHeight: 130,
  },
];

export default function LiveAutomation() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [callCount, setCallCount] = useState(1287);
  const isHoveredRef = useRef(false);

  // Auto-cycle through events
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      if (!isHoveredRef.current) {
        setActiveIdx((prev) => (prev + 1) % AUTOMATION_EVENTS.length);
      }
    }, 3600);

    return () => clearInterval(cycleInterval);
  }, []);

  // Increment live booked calls counter
  useEffect(() => {
    const countInterval = setInterval(() => {
      setCallCount((prev) => prev + 1 + Math.floor(Math.random() * 3));
    }, 2600);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <section className="live" id="live">
      <img
        className="lbg"
        src="/img/x/office.webp"
        alt="FTP automation agency office"
        loading="lazy"
      />

      <div className="evs" id="evs">
        {AUTOMATION_EVENTS.map((event, i) => (
          <div
            key={event.title}
            className={`ev ${event.alignRight ? "r" : ""} ${
              activeIdx === i ? "on" : ""
            }`}
            style={
              {
                "--x": event.x,
                "--y": event.y,
                "--lh": `${event.lineHeight}px`,
              } as React.CSSProperties
            }
            data-i={i}
            onPointerEnter={() => {
              isHoveredRef.current = true;
              setActiveIdx(i);
            }}
            onPointerLeave={() => {
              isHoveredRef.current = false;
            }}
          >
            <span className="dot" />
            <span className="ln" />
            <div className="bx">
              <time className="t">{event.time}</time>
              {event.label}
              <div className="bd">
                <div>
                  <div className="in">
                    <div>
                      <b>{event.title}</b>
                      <p>{event.desc}</p>
                    </div>
                    <i>&#8599;</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <span className="lbadge">Funnel automation agency, since 2019</span>
      <h2>
        Your funnel, <em>booking itself.</em>
      </h2>

      <div className="lrow">
        <div>
          <p className="lead">
            We wire your pages, CRM, calendar, follow-up and AI calling into one
            flow that keeps booking calls while your team sleeps.
          </p>
          <div className="lbt">
            <a className="btn lm" href="#cta">
              Book a call <i>&#8599;</i>
            </a>
            <a className="btn lo" href="#services">
              See the workflows
            </a>
          </div>
        </div>

        <div className="lstats">
          <div>
            <b id="lcount">{callCount.toLocaleString("en-US")}</b>
            <span>Calls booked this month</span>
          </div>
          <div>
            <b>31h</b>
            <span>Back per week</span>
          </div>
        </div>
      </div>
    </section>
  );
}
