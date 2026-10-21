"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);
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

  // Rearrange floating cards so they never cover text across screen sizes
  const fit = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth <= 980) {
      evRefs.current.forEach((e) => {
        if (e) e.style.top = "";
      });
      return;
    }

    const sec = sectionRef.current;
    if (!sec) return;

    const L = sec.getBoundingClientRect();
    const H = sec.offsetHeight;
    const zt = 104;
    const G = 12;

    const T: { l: number; r: number; t: number }[] = [];
    const add = (r: DOMRect) => {
      if (r.width && r.height) {
        T.push({
          l: r.left - L.left - 16,
          r: r.right - L.left + 16,
          t: r.top - L.top,
        });
      }
    };

    ["h2", ".lead"].forEach((q) => {
      const e = sec.querySelector(q);
      if (!e) return;
      const rg = document.createRange();
      rg.selectNodeContents(e);
      Array.from(rg.getClientRects()).forEach(add);
    });

    [".lbadge", ".lbt>*", ".lstats>*"].forEach((q) => {
      Array.from(sec.querySelectorAll(q)).forEach((e) =>
        add(e.getBoundingClientRect())
      );
    });

    const currentEvs = evRefs.current.filter(Boolean) as HTMLDivElement[];
    if (currentEvs.length !== AUTOMATION_EVENTS.length) return;

    const C = currentEvs.map((e, k) => {
      const r = e.getBoundingClientRect();
      const dot = e.querySelector(".dot")?.getBoundingClientRect() || r;
      const l = Math.min(r.left, dot.left) - L.left - 10;
      const rr = Math.max(r.right, dot.right) - L.left + 10;
      const hd = e.querySelector<HTMLElement>(".hd");
      const bdDiv = e.querySelector<HTMLElement>(".bd > div");
      const hc = (hd?.offsetHeight || 30) + 24;
      const he = hc + (bdDiv?.scrollHeight || 100) + 4;
      const h = k === curRef.current ? he : hc;

      let ceil = H - 20;
      T.forEach((t) => {
        if (l < t.r && rr > t.l) {
          ceil = Math.min(ceil, t.t);
        }
      });

      return {
        e,
        l,
        r: rr,
        base: Math.max(zt, (parseFloat(AUTOMATION_EVENTS[k].y) / 100) * H),
        h,
        ceil,
        top: 0,
      };
    });

    const ov = (
      a: { l: number; r: number },
      b: { l: number; r: number }
    ) => a.l < b.r && a.r > b.l;

    const P: typeof C = [];

    C.slice()
      .sort((a, b) => a.base - b.base)
      .forEach((c) => {
        let top = Math.min(c.base, c.ceil - c.h - G);
        let moved = true;
        let n = 0;

        while (moved && n++ < 20) {
          moved = false;
          P.forEach((p) => {
            if (ov(p, c) && top < p.top + p.h + G && top + c.h + G > p.top) {
              top = p.top + p.h + G;
              moved = true;
            }
          });
        }

        if (top + c.h + G > c.ceil) {
          top = c.ceil - c.h - G;
          let ref = c;
          let rt = top;
          for (let m = P.length - 1; m >= 0; m--) {
            const p = P[m];
            if (ov(p, ref) && p.top + p.h + G > rt) {
              p.top = rt - p.h - G;
              ref = p;
              rt = p.top;
            }
          }
        }

        c.top = Math.max(zt, top);
        P.push(c);
      });

    C.forEach((c) => {
      c.e.style.top = `${c.top.toFixed(0)}px`;
    });
  }, []);

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
      const d = (dot || el).getBoundingClientRect();
      const bRect = box.getBoundingClientRect();
      return [
        d.left + d.width / 2 - bRect.left,
        d.top + d.height / 2 - bRect.top,
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
    fit();
    if (prev > -1) {
      setTimeout(() => link(prev, i), 620);
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
    const sec = sectionRef.current;
    if (!sec) return;

    // Visibility observer to pause cycle when offscreen
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        visRef.current = e.isIntersecting;
      });
    });
    io.observe(sec);

    startCycle();

    fit();
    window.addEventListener("resize", fit);
    if (document.fonts) {
      document.fonts.ready.then(fit);
    }

    // Custom interactive cursor logic for #live
    const live = sec;
    const c = cursorRef.current;
    const lb = cursorLabelRef.current;
    let removeCursorEvents = () => {};

    if (
      c &&
      lb &&
      !window.matchMedia("(hover:none),(pointer:coarse)").matches
    ) {
      let x = 0;
      let y = 0;
      let tx = 0;
      let ty = 0;
      let on = false;
      let raf = 0;

      const lab = (t: HTMLElement): [string, boolean] => {
        const e = t.closest<HTMLElement>(".ev, .btn, a, .lstats");
        if (!e) return ["Automate this", false];
        if (e.classList.contains("ev")) return ["", true];
        if (e.classList.contains("lstats")) return ["Live count", false];
        return ["Let's go", true];
      };

      const loop = () => {
        x += (tx - x) * 0.22;
        y += (ty - y) * 0.22;
        c.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
        if (Math.abs(tx - x) + Math.abs(ty - y) > 0.3) {
          raf = requestAnimationFrame(loop);
        } else {
          raf = 0;
        }
      };

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        tx = e.clientX;
        ty = e.clientY;
        if (!on) {
          on = true;
          x = tx;
          y = ty;
          c.classList.add("on");
          live.classList.add("cur");
        }
        const [l, h] = lab(e.target as HTMLElement);
        if (l && lb.textContent !== l) lb.textContent = l;
        c.classList.toggle("hot", h);
        c.classList.toggle("mini", !l);
        if (!raf) raf = requestAnimationFrame(loop);
      };

      const onPointerLeave = () => {
        on = false;
        c.classList.remove("on", "hot", "mini");
        live.classList.remove("cur");
      };

      const onPointerDown = () => c.classList.add("down");
      const onPointerUp = () => c.classList.remove("down");

      const onScroll = () => {
        if (on) {
          const r = live.getBoundingClientRect();
          if (ty < r.top || ty > r.bottom) {
            on = false;
            c.classList.remove("on");
            live.classList.remove("cur");
          }
        }
      };

      live.addEventListener("pointermove", onPointerMove);
      live.addEventListener("pointerleave", onPointerLeave);
      live.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("scroll", onScroll, { passive: true });

      removeCursorEvents = () => {
        live.removeEventListener("pointermove", onPointerMove);
        live.removeEventListener("pointerleave", onPointerLeave);
        live.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("scroll", onScroll);
        if (raf) cancelAnimationFrame(raf);
      };
    }

    return () => {
      io.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", fit);
      removeCursorEvents();
    };
  }, [fit]);

  // Live counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCallCount((prev) => prev + 1 + Math.floor(Math.random() * 3));
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="live" id="live">
      {/* Interactive Cursor */}
      <div
        ref={cursorRef}
        className="lcur"
        id="lcur"
        aria-hidden="true"
        style={{ pointerEvents: "none" }}
      >
        <i />
        <span ref={cursorLabelRef}>Automate this</span>
      </div>

      <img
        className="lbg"
        src="/img/x/office.webp"
        alt=""
        loading="lazy"
      />

      {/* Events and Dynamic SVG Connecting Line */}
      <div ref={boxRef} className="evs" id="evs">
        <svg className="evsvg" id="evsvg" aria-hidden="true">
          <path ref={trRef} id="evtr" className="tr" />
          <path ref={drRef} id="evdr" className="dr" />
          <circle ref={glRef} id="evgl" className="gl" r="4" cx="-20" cy="-20" />
        </svg>

        {AUTOMATION_EVENTS.map((event, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={event.title}
              ref={(el) => {
                evRefs.current[idx] = el;
              }}
              className={`ev ${event.alignClass} ${isActive ? "on" : ""}`}
              style={
                {
                  "--x": event.x,
                  "--y": event.y,
                  "--w": `${event.width}px`,
                } as React.CSSProperties
              }
              data-i={idx}
              onPointerEnter={() => {
                if (timerRef.current) clearInterval(timerRef.current);
                setIndex(idx);
              }}
              onPointerLeave={startCycle}
            >
              <span className="dot" />
              <div className="bx">
                <span className="hd">
                  <span className="ts">{event.time}</span>
                  <span className="lb">{event.label}</span>
                </span>
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
          );
        })}
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
