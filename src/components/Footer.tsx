"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const footRef = useRef<HTMLElement>(null);
  const fwRef = useRef<HTMLDivElement>(null);
  const fstartRef = useRef<HTMLAnchorElement>(null);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const foot = footRef.current;
    const fw = fwRef.current;
    const fstart = fstartRef.current;
    if (!foot || !fw || !fstart) return;

    // Split text into spans for staggered hover effect
    const text = "Start a project";
    fw.innerHTML = [...text]
      .map((c) => (c === " " ? " " : `<span>${c}</span>`))
      .join("");

    const fit = () => {
      fw.style.fontSize = "100px";
      const cs = getComputedStyle(fstart);
      const arr = fstart.querySelector(".arr");
      const arrWidth = arr ? arr.getBoundingClientRect().width : 90;
      const av =
        fstart.clientWidth -
        parseFloat(cs.paddingLeft) -
        parseFloat(cs.paddingRight) -
        arrWidth -
        30;
      const calculated = Math.max(
        28,
        Math.min(220, Math.floor(100 * (av / fw.scrollWidth)))
      );
      fw.style.fontSize = `${calculated}px`;
    };

    fit();
    window.addEventListener("resize", fit);
    if (document.fonts) {
      document.fonts.ready.then(fit);
    }

    // Pointer move radial glow
    let mx = 0;
    let my = 0;
    let ticking = false;

    const onPointerMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          const r = foot.getBoundingClientRect();
          foot.style.setProperty("--mx", `${mx - r.left}px`);
          foot.style.setProperty("--my", `${my - r.top}px`);
        });
      }
    };

    foot.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("resize", fit);
      foot.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const scrollToTop = () => {
    const globalLenis = (window as unknown as { lenis?: { scrollTo: (y: number, opts: object) => void } }).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="foot" id="foot" ref={footRef}>
      <a
        className="fstart"
        href="mailto:info@funnelsthatprint.com"
        id="fstart"
        ref={fstartRef}
      >
        <div className="fw" id="fw" ref={fwRef}>
          Start a project
        </div>
        <svg className="arr" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M30 70 L70 30 M40 30 H70 V60" />
        </svg>
      </a>

      <div className="fg">
        <div className="fbr">
          <div>
            <div className="mk">
              FTP<sup>&reg;</sup>
            </div>
            <div className="ico">
              <a href="#top" aria-label="Home">
                &#10033;
              </a>
              <a href="#services" aria-label="Services">
                &#9673;
              </a>
              <Link href="/case-studies" aria-label="Case studies">
                &lt;/&gt;
              </Link>
            </div>
          </div>
          <div>
            <h4>
              Funnels, automation, follow-up and AI calling, built around booked
              calls.
            </h4>
            <div className="cp">
              &copy; 2026 Funnels That Print. All rights reserved.
            </div>
          </div>
        </div>

        <nav className="flk" aria-label="Footer">
          <Link href="/#services">
            Services <i>&#8599;</i>
          </Link>
          <Link href="/#process">
            Process <i>&#8599;</i>
          </Link>
          <Link href="/case-studies">
            Case studies <i>&#8599;</i>
          </Link>
          <Link href="/#pricing">
            Pricing <i>&#8599;</i>
          </Link>
          <Link href="/contact">
            Contact <i>&#8599;</i>
          </Link>
        </nav>

        <div className="ffl">
          <span className="fh">Follow Us</span>
          <a href="#top">X/Twitter</a>
          <a href="#top">Instagram</a>
          <a href="#top">LinkedIn</a>
          <a href="#top">YouTube</a>
        </div>

        <div className="fnl">
          <div className="gh" aria-hidden="true">
            Stay ahead
          </div>
          <img
            className="env"
            src="/img/x/envelope.webp"
            alt=""
            loading="lazy"
          />
          <div className="nb">
            <span className="fh">Newsletter</span>
            <p>
              Subscribe for funnel teardowns and new case studies, once a
              month.
            </p>
          </div>
          <form id="nl" onSubmit={handleSubscribe}>
            {subscribed ? (
              <span style={{ padding: "13px 18px", color: "var(--lime)" }}>
                Thanks, you are on the list.
              </span>
            ) : (
              <>
                <input
                  id="nl-e"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <button type="submit">Join</button>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="freach">
        <div>
          <span className="fh">Direct reach</span>
          <a className="femail" href="mailto:info@funnelsthatprint.com">
            info@funnelsthatprint.com
          </a>
        </div>
        <div className="fmeta">
          <span>Available for select projects</span>
          <span>Based in Dubai &amp; global</span>
          <button type="button" id="ftop" onClick={scrollToTop}>
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
