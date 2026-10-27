"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close dropdown on route change
  useEffect(() => {
    setDdOpen(false);
  }, [pathname]);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDdOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDdOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDdOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDdOpen(false);
    }, 180);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const globalLenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      if (globalLenis) globalLenis.stop();
    } else {
      document.body.style.overflow = "";
      const globalLenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      if (globalLenis) globalLenis.start();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    const nav = document.getElementById("nav");
    if (!nav) return;

    const handleScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("hide", y > lastY && y > 400);
      nav.classList.toggle("scrolled", y > 15);
      lastY = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav" id="nav" aria-label="Main">
        <Link href="/" className="logo" onClick={closeMenu}>
          <i />
          <span>Funnels That Print</span>
        </Link>

        <div className="pill">
          <Link href="/#services">What we do</Link>
          <Link href="/#process">How we do it</Link>
          <div
            className={`dd ${ddOpen ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`dd-trigger ${
                pathname === "/case-studies" ||
                pathname === "/milliondollarcasestudy" ||
                pathname === "/scalelowticket"
                  ? "active-page"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setDdOpen((prev) => !prev);
              }}
              aria-expanded={ddOpen}
              aria-haspopup="menu"
              aria-label="Case studies menu"
            >
              Case studies
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 1.25L5 4.75L9 1.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="ddm" role="menu" aria-label="Case studies submenu">
              <Link
                href="/milliondollarcasestudy"
                className={`dd-item ${pathname === "/milliondollarcasestudy" ? "active" : ""}`}
                role="menuitem"
                onClick={() => setDdOpen(false)}
              >
                <div className="dd-head">
                  <span className="dd-title">High-Ticket Consulting</span>
                  <span className="dd-badge">$1.52M</span>
                </div>
                <span className="dd-sub">
                  From cold traffic to $1.52M in 19 months &middot; Turnkey stack
                </span>
              </Link>
              <Link
                href="/scalelowticket"
                className={`dd-item ${pathname === "/scalelowticket" ? "active" : ""}`}
                role="menuitem"
                onClick={() => setDdOpen(false)}
              >
                <div className="dd-head">
                  <span className="dd-title">Low-Ticket Scaling System</span>
                  <span className="dd-badge">$847K</span>
                </div>
                <span className="dd-sub">
                  $847,307 collected with self-liquidating front door
                </span>
              </Link>
              <Link
                href="/case-studies"
                className="dd-all"
                role="menuitem"
                onClick={() => setDdOpen(false)}
              >
                <span>View all case studies (275+)</span>
                <i aria-hidden="true">&rarr;</i>
              </Link>
            </div>
          </div>
          <Link href="/#pricing">Pricing</Link>
          <Link
            href="/blog"
            className={pathname.startsWith("/blog") ? "active" : ""}
          >
            Blog
          </Link>
        </div>

        <div className="nr">
          <Link
            className="btn"
            href="/#robo"
            style={{ height: 44 }}
            onClick={closeMenu}
          >
            Build my funnel <i>&#8599;</i>
          </Link>

          <button
            type="button"
            className="burger"
            id="mopen"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <s />
            <s />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile / Tablet Menu */}
      <div
        id="menu"
        className={menuOpen ? "on" : ""}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="ml">
          <div className="big">
            Start a project <i>&rarr;</i>
          </div>

          <div className="mbrand">
            <div className="yl">
              <b>FTP</b>
              <div>
                <small>Funnels. Automation. Follow-up. AI.</small>
                <span className="mono" style={{ display: "block", marginTop: 8 }}>
                  Built around conversion
                </span>
              </div>
            </div>

            <div className="mlinks">
              <Link href="/#services" onClick={closeMenu}>
                Funnel &amp; page builds
              </Link>
              <Link href="/#services" onClick={closeMenu}>
                Automation &amp; follow-up
              </Link>
              <Link href="/#services" onClick={closeMenu}>
                AI calling agent
              </Link>
            </div>
          </div>
        </div>

        <div className="mr">
          <div className="pic">
            <Image
              src="/img/gen/menu.webp"
              alt="Funnels That Print team work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="mnav">
            <nav>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/#services" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/#process" onClick={closeMenu}>
                Process
              </Link>
              <Link href="/case-studies" onClick={closeMenu}>
                Case studies
              </Link>
              <Link href="/#pricing" onClick={closeMenu}>
                Pricing
              </Link>
              <Link href="/blog" onClick={closeMenu}>
                Blog
              </Link>
              <Link href="/contact" className="dim" onClick={closeMenu}>
                Contact
              </Link>
            </nav>

            <div className="mfoot">
              <div>
                <span className="mono">Follow us</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <br />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <br />
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  X
                </a>
              </div>
              <div>
                <span className="mono">Reach out</span>
                <a href="mailto:info@funnelsthatprint.com">info@funnelsthatprint.com</a>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mclose"
            id="mclose"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
