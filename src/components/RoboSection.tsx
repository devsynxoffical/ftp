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

    // Pointer move robot tilt matching ftp 4
    let rx = 0;
    let ry = 0;
    let t = false;

    const onPointerMove = (e: PointerEvent) => {
      const r = ro.getBoundingClientRect();
      rx = (e.clientX - r.left) / r.width - 0.5;
      ry = (e.clientY - r.top) / r.height - 0.5;

      if (!t) {
        t = true;
        requestAnimationFrame(() => {
          t = false;
          rb.style.transform = `translate(${rx * 24}px, ${ry * 20}px) rotate(${
            rx * 3
          }deg)`;
        });
      }
    };

    const onPointerLeave = () => {
      rb.style.transform = "";
    };

    ro.addEventListener("pointermove", onPointerMove);
    ro.addEventListener("pointerleave", onPointerLeave);

    return () => {
      io.disconnect();
      ro.removeEventListener("pointermove", onPointerMove);
      ro.removeEventListener("pointerleave", onPointerLeave);
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
        <a href="mailto:info@funnelsthatprint.com">
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
