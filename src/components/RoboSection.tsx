"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function RoboSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const robot = robotRef.current;
    if (!section || !robot) return;

    // Intersection observer for entering animation
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(section);

    // Pointer move tilt
    let rx = 0;
    let ry = 0;
    let ticking = false;

    const onPointerMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      rx = (e.clientX - rect.left) / rect.width - 0.5;
      ry = (e.clientY - rect.top) / rect.height - 0.5;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          robot.style.transform = `translate3d(${rx * 24}px, ${
            ry * 20
          }px, 0) rotate(${rx * 3}deg)`;
        });
      }
    };

    const onPointerLeave = () => {
      robot.style.transform = "";
    };

    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);

    return () => {
      io.disconnect();
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
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
          We build
          <br />
          with
          <br />
          Robots.
          <span className="stk">
            <span>Let&apos;s Talk</span>
          </span>
        </h2>
        <a href="#cta">
          Talk with us <i>&rarr;</i>
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
