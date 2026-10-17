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

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.085,
    });

    (window as unknown as { lenis: Lenis }).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Staggered scroll-reveal intersection observer (.sr -> .sr.in) matching ftp 3
    const sel =
      ".eyebrow, .h2, .sec .lead, .grp, .prev, .sect, .wcard, .case, .q, .vc, .tm, .pimg, .pmid, .pfeat, .cta .big, .cta .lead, .cta .btn, .fg > *, .freach > *";

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
      if (el.closest(".proc, .port, #process, #work")) return;
      const parent = el.parentElement;
      if (!parent) return;
      const sib = Array.from(parent.children).filter((c) => c.matches(sel));
      const delay = Math.min(sib.indexOf(el), 5) * 0.08;
      (el as HTMLElement).style.setProperty("--dl", `${delay}s`);
      el.classList.add("sr");
      io.observe(el);
    });

    // Auto-hide navbar on scroll down
    const nav = document.getElementById("nav");
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) {
        nav.classList.toggle("hide", y > lastScrollY && y > 400);
      }
      lastScrollY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Smoothly intercept hash anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href*="#"]');
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const hash = href.substring(hashIndex);
      if (!hash || hash === "#") return;

      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element as HTMLElement, {
          offset: -20,
          duration: 1.4,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      io.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
