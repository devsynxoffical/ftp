"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav" id="nav" aria-label="Main Navigation">
        <Link href="/" className="logo" onClick={closeMenu}>
          <i />
          <span>Funnels That Print</span>
        </Link>

        <div className="pill">
          <Link
            href="/#services"
            className={pathname === "/" ? "" : ""}
          >
            What we do
          </Link>
          <Link href="/#process">How we do it</Link>
          <Link href="/#who">Who it&apos;s for</Link>
          <Link href="/#work">Portfolio</Link>
          <Link
            href="/case-studies"
            className={pathname === "/case-studies" ? "active" : ""}
          >
            Case studies
          </Link>
          <Link href="/#pricing">Pricing</Link>
        </div>

        <div className="nr">
          <Link
            className="btn"
            href="/#cta"
            style={{ height: 44, padding: "0 18px", fontSize: 13 }}
          >
            Build my funnel <i>&#8599;</i>
          </Link>

          <button
            type="button"
            className="burger"
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
      <div id="menu" className={menuOpen ? "on" : ""} role="dialog" aria-modal="true" aria-label="Menu">
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
              <Link href="/#cta" className="dim" onClick={closeMenu}>
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
