"use client";

import { useEffect, useRef, useState } from "react";

interface AutomationEvent {
  time: string;
  label: string;
  title: string;
  desc: string;
  x: string;
  y: string;
  alignClass: string;
  width: number;
}

const AUTOMATION_EVENTS: AutomationEvent[] = [
  {
    time: "02:14",
    label: "Lead captured",
    title: "Lead capture",
    desc: "Every form fill lands in the CRM with source, score and owner in seconds.",
    x: "46%",
    y: "12%",
    alignClass: "",
    width: 330,
  },
  {
    time: "02:15",
    label: "Lead qualified, CRM updated",
    title: "Qualification",
    desc: "The AI agent asks three questions, scores the lead and routes it to the right pipeline.",
    x: "46%",
    y: "40%",
    alignClass: "",
    width: 330,
  },
  {
    time: "02:16",
    label: "Call booked",
    title: "Booking",
    desc: "Calendar slot picked, confirmation sent, reminders queued at 24h and 1h.",
    x: "95%",
    y: "18%",
    alignClass: "r",
    width: 290,
  },
  {
    time: "02:18",
    label: "Follow-up sequence started",
    title: "Follow-up",
    desc: "Email and SMS nurture starts without anyone touching it.",
    x: "95%",
    y: "47%",
    alignClass: "r",
    width: 310,
  },
  {
    time: "02:20",
    label: "AI call completed",
    title: "AI calling",
    desc: "No-shows get a call back, objections answered, the slot rebooked.",
    x: "60%",
    y: "63%",
    alignClass: "",
    width: 310,
  },
];

export default function LiveAutomation() {
  const sectionRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const trRef = useRef<SVGPathElement>(null);
  const drRef = useRef<SVGPathElement>(null);
  const glRef = useRef<SVGCircleElement>(null);
  const evRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [callCount, setCallCount] = useState<number>(1287);

  const curRef = useRef<number>(0);
  const animRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const visRef = useRef<boolean>(true);

  // Link curve animation between dot A and dot B
  const link = (a: number, b: number) => {
    if (typeof window === "undefined" || window.innerWidth <= 980) return;
    const box = boxRef.current;
    const tr = trRef.current;
    const dr = drRef.current;
    const gl = glRef.current;
    const elA = evRefs.current[a];
    const elB = evRefs.current[b];

    if (!box || !tr || !dr || !gl || !elA || !elB) return;

    const pt = (el: HTMLElement) => {
      const dot = el.querySelector(".dot");
      if (!dot) return [0, 0];
      const d = dot.getBoundingClientRect();
      const bBox = box.getBoundingClientRect();
      return [
        d.left + d.width / 2 - bBox.left,
        d.top + d.height / 2 - bBox.top,
      ];
    };

    const [x1, y1] = pt(elA);
    const [x2, y2] = pt(elB);
    const mx = (x1 + x2) / 2;
    const lift = Math.max(80, Math.abs(x2 - x1) * 0.35);
    const my = Math.min(y1, y2) - lift;
    const d = `M${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;

    tr.setAttribute("d", d);
    dr.setAttribute("d", d);

    const L = dr.getTotalLength();
    dr.style.strokeDasharray = `${L}`;

    cancelAnimationFrame(animRef.current);
    const t0 = performance.now();
    const D = 900;

    dr.style.transition = "none";
    dr.style.opacity = "1";
    tr.style.opacity = "1";

    function st(t: number) {
      const k = Math.min(1, (t - t0) / D);
      const e =
        k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      dr!.style.strokeDashoffset = `${L * (1 - e)}`;
      const p = dr!.getPointAtLength(L * e);
      gl!.setAttribute("cx", `${p.x}`);
      gl!.setAttribute("cy", `${p.y}`);
      gl!.style.opacity = k < 1 ? "1" : "0";

      if (k < 1) {
        animRef.current = requestAnimationFrame(st);
      } else {
        dr!.style.transition = "opacity .8s";
        dr!.style.opacity = "0";
        tr!.style.opacity = "0.6";
      }
    }

    animRef.current = requestAnimationFrame(st);
  };

  const setIndex = (i: number) => {
    if (i === curRef.current) return;
    const prev = curRef.current;
    curRef.current = i;
    setActiveIdx(i);
    evRefs.current.forEach((el, k) => {
      if (el) el.classList.toggle("on", k === i);
    });
    if (prev > -1) {
      link(prev, i);
    }
  };

  const startCycle = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (visRef.current) {
        const next = (curRef.current + 1) % AUTOMATION_EVENTS.length;
        setIndex(next);
      }
    }, 3800);
  };

  useEffect(() => {
    // Visibility observer to pause cycle when offscreen
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        visRef.current = e.isIntersecting;
      });
    });

    if (sectionRef.current) {
      io.observe(sectionRef.current);
    }

    startCycle();

    const onResize = () => {
      if (window.innerWidth <= 980) {
        if (trRef.current) trRef.current.removeAttribute("d");
        if (drRef.current) drRef.current.removeAttribute("d");
        if (glRef.current) {
          glRef.current.setAttribute("cx", "-20");
          glRef.current.setAttribute("cy", "-20");
        }
      }
    };
    window.addEventListener("resize", onResize);

    // Increment booked calls counter
    const countTimer = setInterval(() => {
      setCallCount((prev) => prev + 1 + Math.floor(Math.random() * 3));
    }, 2600);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
      if (timerRef.current) clearInterval(timerRef.current);
      clearInterval(countTimer);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section className="live" id="live" ref={sectionRef}>
      <img
        className="lbg"
        src="/img/x/office.webp"
        alt=""
        loading="lazy"
      />

      <div className="evs" id="evs" ref={boxRef}>
        <svg className="evsvg" id="evsvg">
          <path className="tr" id="evtr" ref={trRef} />
          <path className="dr" id="evdr" ref={drRef} />
          <circle className="gl" id="evgl" ref={glRef} r="4" cx="-20" cy="-20" />
        </svg>

        {AUTOMATION_EVENTS.map((event, i) => (
          <div
            key={event.title}
            ref={(el) => {
              evRefs.current[i] = el;
            }}
            className={`ev ${event.alignClass} ${
              activeIdx === i ? "on" : ""
            }`}
            style={
              {
                "--x": event.x,
                "--y": event.y,
                "--w": `${event.width}px`,
              } as React.CSSProperties
            }
            data-i={i}
            onPointerEnter={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              setIndex(i);
            }}
            onPointerLeave={startCycle}
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              setIndex(i);
            }}
          >
            <span className="dot" />
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
            <a className="btn lm" href="#robo">
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
