"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Footer() {
  const [localTime, setLocalTime] = useState("--:--");
  const [copied, setCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [magOffset, setMagOffset] = useState({ x: 0, y: 0 });

  const footerRef = useRef<HTMLElement>(null);
  const magRef = useRef<HTMLAnchorElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  // Live local timezone clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat([], {
        hour: "2-digit",
        minute: "2-digit",
      }).format(now);
      setLocalTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Footer letter wave physics and radial cursor lighting
  useEffect(() => {
    const footer = footerRef.current;
    const word = wordRef.current;
    if (!footer || !word) return;

    let mx = 0;
    let my = 0;
    let ticking = false;

    const letterElements = word.querySelectorAll<HTMLElement>(".l i");

    const paint = () => {
      ticking = false;
      const fRect = footer.getBoundingClientRect();
      footer.style.setProperty("--mx", `${mx - fRect.left}px`);
      footer.style.setProperty("--my", `${my - fRect.top}px`);

      const wRect = word.getBoundingClientRect();
      const near = my > wRect.top - 160 && my < wRect.bottom + 60;

      letterElements.forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        const b = parent.getBoundingClientRect();
        const d = Math.abs(mx - (b.left + b.width / 2));
        const p = near ? Math.max(0, 1 - d / 230) : 0;
        el.style.setProperty("--p", p.toFixed(3));
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
    };

    const handlePointerLeave = () => {
      letterElements.forEach((el) => {
        el.style.setProperty("--p", "0");
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        mx = e.touches[0].clientX;
        my = e.touches[0].clientY;
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(paint);
        }
      }
    };

    footer.addEventListener("pointermove", handlePointerMove);
    footer.addEventListener("pointerleave", handlePointerLeave);
    footer.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Intersection observer for word fade in
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          word.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(word);

    return () => {
      footer.removeEventListener("pointermove", handlePointerMove);
      footer.removeEventListener("pointerleave", handlePointerLeave);
      io.disconnect();
    };
  }, []);

  // Copy email to clipboard
  const handleCopyEmail = async () => {
    const email = "info@funnelsthatprint.com";
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        window.location.href = `mailto:${email}`;
      }
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  // Back to top scroll
  const handleScrollTop = () => {
    const globalLenis = (window as unknown as { lenis?: { scrollTo: (y: number, opts: object) => void } }).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Magnetic button cursor tracking
  const handleMagMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!magRef.current) return;
    const rect = magRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMagMouseLeave = () => {
    setMagOffset({ x: 0, y: 0 });
  };

  // Newsletter submission with security API
  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus("loading");

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const honeypot = formData.get("hp_field") as string;

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, honeypot }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setNewsletterStatus("success");
        setStatusMessage("Thanks, you are on the list.");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setNewsletterStatus("error");
      setStatusMessage("Failed to subscribe. Check your connection.");
    }
  };

  const brandLetters = "FUNNELS THAT PRINT".split("");

  return (
    <footer className="foot" id="foot" ref={footerRef}>
      {/* Top CTA Row */}
      <div className="fcta">
        <div>
          <span className="fk">Have traffic but not enough calls?</span>
          <h2 className="fbig">
            Let&apos;s turn your clicks into <em>booked calls.</em>
          </h2>
        </div>

        <a
          ref={magRef}
          className="mag"
          id="fmag"
          href="mailto:info@funnelsthatprint.com?subject=Project%20Inquiry"
          onMouseMove={handleMagMouseMove}
          onMouseLeave={handleMagMouseLeave}
          style={{
            transform: `translate3d(${magOffset.x}px, ${magOffset.y}px, 0)`,
          }}
        >
          <span
            style={{
              transform: `translate3d(${magOffset.x * 0.4}px, ${magOffset.y * 0.4}px, 0)`,
            }}
          >
            Start a<br />
            project
          </span>
        </a>
      </div>

      {/* 4-Column Navigation & Brand Info */}
      <div className="fcols">
        {/* Brand Column */}
        <div className="fbrand">
          <Link className="logo" href="/#top">
            <i />
            Funnels That Print
          </Link>
          <p>
            Funnels, automation, follow-up and AI calling, built around one goal:
            booked calls.
          </p>

          <button
            className={`fcopy ${copied ? "ok" : ""}`}
            id="fcopy"
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
          >
            <span>info@funnelsthatprint.com</span>
            <span className="ck">{copied ? "Copied" : "Copy"}</span>
          </button>

          <div className="ftime">
            It&apos;s <b id="ftime">{localTime}</b> where you are. We reply within
            one business day.
          </div>
        </div>

        {/* Explore Links */}
        <nav aria-label="Explore Navigation">
          <span className="fh">Explore</span>
          <Link className="rl" href="/#services">
            <span>What we do</span>
            <span>What we do</span>
          </Link>
          <Link className="rl" href="/#process">
            <span>How we do it</span>
            <span>How we do it</span>
          </Link>
          <Link className="rl" href="/#who">
            <span>Who it&apos;s for</span>
            <span>Who it&apos;s for</span>
          </Link>
          <Link className="rl" href="/#work">
            <span>Portfolio</span>
            <span>Portfolio</span>
          </Link>
          <Link className="rl" href="/case-studies">
            <span>Case studies</span>
            <span>Case studies</span>
          </Link>
          <Link className="rl" href="/#pricing">
            <span>Pricing</span>
            <span>Pricing</span>
          </Link>
          <Link className="rl" href="/#faq">
            <span>FAQ</span>
            <span>FAQ</span>
          </Link>
        </nav>

        {/* Services Links */}
        <nav aria-label="Services List">
          <span className="fh">Services</span>
          <Link className="rl" href="/#services">
            <span>High-ticket funnels</span>
            <span>High-ticket funnels</span>
          </Link>
          <Link className="rl" href="/#services">
            <span>VSL funnels</span>
            <span>VSL funnels</span>
          </Link>
          <Link className="rl" href="/#services">
            <span>Low-ticket funnels</span>
            <span>Low-ticket funnels</span>
          </Link>
          <Link className="rl" href="/#services">
            <span>Bridge funnels</span>
            <span>Bridge funnels</span>
          </Link>
          <Link className="rl" href="/#services">
            <span>Application funnels</span>
            <span>Application funnels</span>
          </Link>
          <Link className="rl" href="/#services">
            <span>CRM automation</span>
            <span>CRM automation</span>
          </Link>
          <Link className="rl" href="/#services">
            <span>AI calling agent</span>
            <span>AI calling agent</span>
          </Link>
        </nav>

        {/* Newsletter & Socials */}
        <div className="fnl">
          <span className="fh">Newsletter</span>
          <p>
            Funnel teardowns and verified case studies, once a month. No spam.
          </p>

          {newsletterStatus === "success" ? (
            <div
              style={{
                padding: "12px 18px",
                color: "var(--lime)",
                background: "rgba(200, 245, 74, 0.1)",
                borderRadius: 999,
                fontSize: 14,
              }}
            >
              {statusMessage}
            </div>
          ) : (
            <form id="nl" onSubmit={handleNewsletterSubmit}>
              {/* Anti-spam honeypot input hidden from humans */}
              <input
                type="text"
                name="hp_field"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <input
                id="nl-e"
                type="email"
                name="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email address for monthly teardowns"
                required
              />

              <button type="submit" disabled={newsletterStatus === "loading"}>
                {newsletterStatus === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          )}

          {newsletterStatus === "error" && (
            <p style={{ color: "#ff7a45", fontSize: 13, marginTop: 8 }}>
              {statusMessage}
            </p>
          )}

          <div className="fsoc">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
        </div>
      </div>

      {/* Giant Typography Brand Wave */}
      <div className="fword" id="fword" ref={wordRef} aria-hidden="true">
        {brandLetters.map((char, index) =>
          char === " " ? (
            <span key={index} className="sp" />
          ) : (
            <span
              key={index}
              className="l"
              style={{ "--k": index } as React.CSSProperties}
            >
              <i>{char}</i>
            </span>
          )
        )}
      </div>

      {/* Copyright Bar */}
      <div className="fbar">
        <span>&copy; 2026 Funnels That Print. All rights reserved.</span>
        <span>funnelsthatprint.com</span>
        <button type="button" id="ftop" onClick={handleScrollTop}>
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}
