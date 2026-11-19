"use client";

import { useEffect, useRef } from "react";

export default function RoboSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ro = sectionRef.current;
    const rb = robotRef.current;
    if (!ro || !rb) return;

    // Intersection observer for entering animation
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ro.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ro);

    // Robot tilt. Desktop: follows the mouse. Touch screens have no hover, so
    // the robot follows the finger while it moves and tilts with scroll.
    let rx = 0;
    let ry = 0;
    let t = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    const apply = () => {
      if (t) return;
      t = true;
      requestAnimationFrame(() => {
        t = false;
        rb.style.transform = `translate(${rx * 24}px, ${ry * 20}px) rotate(${rx * 3}deg)`;
      });
    };

    const track = (x: number, y: number) => {
      const r = ro.getBoundingClientRect();
      rx = (x - r.left) / r.width - 0.5;
      ry = (y - r.top) / r.height - 0.5;
      apply();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") track(e.clientX, e.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      const f = e.touches[0];
      if (f) track(f.clientX, f.clientY);
    };
    const onPointerLeave = () => {
      rb.style.transform = "";
    };

    // Scroll: map the section's position in the viewport (-1 below, +1 above)
    // to a sideways lean and a small vertical drift.
    const onScroll = () => {
      const r = ro.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const p = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / vh));
      rx = p * 0.9;
      ry = -p * 0.9;
      apply();
    };

    if (!reduce) {
      ro.addEventListener("pointermove", onPointerMove);
      ro.addEventListener("pointerleave", onPointerLeave);
      if (touch) {
        ro.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
      }
    }

    return () => {
      io.disconnect();
      ro.removeEventListener("pointermove", onPointerMove);
      ro.removeEventListener("pointerleave", onPointerLeave);
      ro.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="robo" id="robo" ref={sectionRef}>
      <div className="rl">
        <img
          src="/img/x/robot.webp"
          alt="FTP automation robot"
          id="robot"
          ref={robotRef}
          loading="lazy"
        />
      </div>

      <div className="rm">
        <h2>
          We
          <br />
          build
          <br />
          with
          <br />
          Robots.
          <span className="stk">
            <span>Let&apos;s Talk</span>
          </span>
        </h2>
        <a href="/book-a-call">
          Book a call <i>&rarr;</i>
        </a>
        <div className="sp" />
      </div>

      <div className="rr">
        <p>
          We&apos;re a small team of strategists, builders and automation nerds,
          blending funnels, follow-up and AI calling so your leads turn into
          booked calls, not cold contacts.
        </p>
      </div>
    </section>
  );
}
