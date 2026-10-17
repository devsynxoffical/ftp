"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect user's preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".w").forEach((e) => e.classList.add("on"));
      document.querySelectorAll(".node").forEach((e) => e.classList.add("on"));
      return;
    }

    // Initialize buttery smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    (window as unknown as { lenis: Lenis }).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Staggered scroll-reveal intersection observer (.sr -> .sr.in)
    const sel =
      ".eyebrow, .h2, .sec .lead, .grp, .prev, .sect, .wcard, .case-card, .q, .vc, .tm, .pbox, .cta .big, .cta .lead, .cta .btn, .fcols > *";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          e.target.classList.add("in");
          setTimeout(() => {
            e.target.classList.remove("sr", "in");
          }, 1900);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const elementsToReveal = document.querySelectorAll(sel);
    elementsToReveal.forEach((el) => {
      if (el.closest("#process, #work")) return;
      const parent = el.parentElement;
      if (!parent) return;
      const sib = Array.from(parent.children).filter((c) => c.matches(sel));
      const delay = Math.min(sib.indexOf(el), 5) * 0.08;
      (el as HTMLElement).style.setProperty("--dl", `${delay}s`);
      el.classList.add("sr");
      io.observe(el);
    });

    // Smoothly intercept hash anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href*="#"]');
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Extract the hash part
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const hash = href.substring(hashIndex);
      if (!hash || hash === "#") return;

      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element as HTMLElement, {
          offset: -80,
          duration: 1.2,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      io.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
