import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footRef = useRef(null);
  const gwRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!footRef.current || !gwRef.current) return;
      const r = footRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.top < vh) {
        const val = Math.max(-1, Math.min(1, (r.top - vh * 0.2) / vh)) * 120;
        gwRef.current.style.transform = `translate3d(0, ${val}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="dark foot" ref={footRef}>
      <div className="ghostword d" id="gw" ref={gwRef}>
        FTP
      </div>
      <div className="glow">
        <button
          className="up"
          type="button"
          id="up"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          ↑
        </button>
        <div className="fgrid">
          <div className="fcard">
            <div className="d">
              Main
              <br />
              pages
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="/#what-we-build">What We Build</a>
              </li>
              <li>
                <a href="/#features">Automations</a>
              </li>
              <li>
                <Link to="/proof">Work Proof</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="fcard">
            <div className="d">
              Legal &amp;
              <br />
              utilities
            </div>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/contact">Book Strategy Call</Link>
              </li>
              <li>
                <a href="/#faq">FAQs</a>
              </li>
              <li>
                <Link to="/proof">Case Studies</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbar">
          <span>Funnels That Print</span>
          <span>&copy; {new Date().getFullYear()} Funnels That Print Inc. All rights reserved.</span>
          <span>Bespoke Funnel Architecture</span>
        </div>
      </div>
    </footer>
  );
}
