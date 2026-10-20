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

    // Collision avoidance and responsive fit algorithm from index (1).html
    function fit() {
      if (typeof window === "undefined") return;
      if (window.innerWidth <= 980) {
        evRefs.current.forEach((e) => {
          if (e) e.style.top = "";
        });
        if (trRef.current) trRef.current.removeAttribute("d");
        if (drRef.current) drRef.current.removeAttribute("d");
        if (glRef.current) {
          glRef.current.setAttribute("cx", "-20");
          glRef.current.setAttribute("cy", "-20");
        }
        return;
      }
      if (!sec) return;
      const L = sec.getBoundingClientRect();
      const H = sec.offsetHeight;
      const zt = 112;
      const G = 14;
      const ROW = 58;

      const T: { l: number; r: number; t: number }[] = [];
      const add = (r: DOMRect) => {
        if (r.width && r.height) {
          T.push({ l: r.left - L.left, r: r.right - L.left, t: r.top - L.top });
        }
      };

      ["h2", ".lead"].forEach((q) => {
        const e = sec.querySelector(q);
        if (!e) return;
        const rg = document.createRange();
        rg.selectNodeContents(e);
        Array.from(rg.getClientRects()).forEach(add);
      });

      [".lbadge", ".lbt > *", ".lstats > *"].forEach((q) => {
        sec.querySelectorAll(q).forEach((e) => add(e.getBoundingClientRect()));
      });

      const C = evRefs.current
        .map((e, k) => {
          if (!e) return null;
          const r = e.getBoundingClientRect();
          const dot = e.querySelector(".dot")?.getBoundingClientRect() || r;
          const l = Math.min(r.left, dot.left) - L.left - 8;
          const rr = Math.max(r.right, dot.right) - L.left + 8;
          const hdEl = e.querySelector(".hd") as HTMLElement | null;
          const bdDiv = e.querySelector(".bd > div") as HTMLElement | null;
          const exp =
            (hdEl?.offsetHeight || 0) + 24 + (bdDiv?.scrollHeight || 0) + 12;

          let ceil = H;
          T.forEach((t) => {
            if (l < t.r && rr > t.l) ceil = Math.min(ceil, t.t);
          });
          const basePctY =
            (parseFloat(AUTOMATION_EVENTS[k].y) / 100) * H;
          return {
            e,
            l,
            r: rr,
            top: Math.max(zt, Math.min(basePctY, ceil - exp - G)),
            ceil,
            exp,
          };
        })
        .filter(Boolean) as {
        e: HTMLDivElement;
        l: number;
        r: number;
        top: number;
        ceil: number;
        exp: number;
      }[];

      const S = C.slice().sort((a, b) => a.top - b.top);
      const ov = (a: (typeof S)[0], b: (typeof S)[0]) =>
        a.l < b.r && a.r > b.l;

      for (let k = 1; k < S.length; k++) {
        const b = S[k];
        for (let m = 0; m < k; m++) {
          const a = S[m];
          if (ov(a, b) && b.top < a.top + ROW) b.top = a.top + ROW;
        }
        const lim = b.ceil - b.exp - G;
        if (b.top > lim) {
          b.top = lim;
          for (let m = k - 1; m >= 0; m--) {
            const a = S[m];
            const nx = S.slice(m + 1, k + 1).filter((x) => ov(a, x));
            nx.forEach((x) => {
              if (a.top > x.top - ROW) a.top = x.top - ROW;
            });
          }
        }
      }

      C.forEach((c) => {
        c.e.style.top = Math.max(zt, c.top).toFixed(0) + "px";
      });
    }

    fit();
    window.addEventListener("resize", fit);
    if (document.fonts && document.fonts.ready) {
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
      let x = 0,
        y = 0,
        tx = 0,
        ty = 0,
        on = false,
        raf = 0;

      const lab = (t: HTMLElement | null): [string, boolean] => {
        const el = t?.closest(".ev, .btn, a, .lstats") as HTMLElement | null;
        if (!el) return ["Automate this", false];
        if (el.classList.contains("ev")) return ["", true];
        if (el.classList.contains("lstats")) return ["Live count", false];
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

      const handlePointerMove = (e: PointerEvent) => {
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

      const handlePointerLeave = () => {
        on = false;
        c.classList.remove("on", "hot", "mini");
        live.classList.remove("cur");
      };

      const handlePointerDown = () => c.classList.add("down");
      const handlePointerUp = () => c.classList.remove("down");

      const handleScroll = () => {
        if (on) {
          const r = live.getBoundingClientRect();
          if (ty < r.top || ty > r.bottom) {
            on = false;
            c.classList.remove("on");
            live.classList.remove("cur");
          }
        }
      };

      live.addEventListener("pointermove", handlePointerMove);
      live.addEventListener("pointerleave", handlePointerLeave);
      live.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("scroll", handleScroll, { passive: true });

      removeCursorEvents = () => {
        live.removeEventListener("pointermove", handlePointerMove);
        live.removeEventListener("pointerleave", handlePointerLeave);
        live.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("scroll", handleScroll);
        if (raf) cancelAnimationFrame(raf);
      };
    }

    // Increment booked calls counter
    const countTimer = setInterval(() => {
      setCallCount((prev) => prev + 1 + Math.floor(Math.random() * 3));
    }, 2600);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", fit);
      removeCursorEvents();
      if (timerRef.current) clearInterval(timerRef.current);
      clearInterval(countTimer);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section className="live" id="live" ref={sectionRef}>
      <div className="lcur" id="lcur" ref={cursorRef} aria-hidden="true">
        <i />
        <span ref={cursorLabelRef}>Automate this</span>
      </div>

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
