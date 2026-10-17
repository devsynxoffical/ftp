"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".w").forEach((e) => e.classList.add("on"));
      document.querySelectorAll(".node").forEach((e) => e.classList.add("on"));
      return;
    }

    // Initialize Lenis buttery smooth scroll
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    (window as unknown as { lenis: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

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

    const elementsToReveal = document.querySelectorAll<HTMLElement>(sel);
    elementsToReveal.forEach((el) => {
      if (el.closest(".proc, .port, #process, #work")) return;
      const parent = el.parentElement;
      if (!parent) return;
      const sib = Array.from(parent.children).filter((c) => c.matches(sel));
      const delay = Math.min(sib.indexOf(el), 5) * 0.08;
      el.style.setProperty("--dl", `${delay}s`);
      el.classList.add("sr");
      io.observe(el);
    });

    // Unified 60fps GPU Frame Runner
    const cl = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
    const nav = document.getElementById("nav");
    const hero = document.querySelector<HTMLElement>(".hero");
    const uis = Array.from(
      document.querySelectorAll<HTMLElement>("#stage .ui")
    );
    const pw = document.getElementById("procwrap");
    const track = document.getElementById("track");
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("#track .card")
    );
    const progs = Array.from(
      document.querySelectorAll<HTMLElement>("#prog div")
    );
    const ptw = document.getElementById("portwrap");
    const dev = document.getElementById("dev");
    const cover = document.getElementById("cover");
    const site = document.getElementById("site");
    const pages = document.getElementById("pages");
    const gl = document.getElementById("gl");
    const gr = document.getElementById("gr");
    const pipe = document.getElementById("pipe");
    const fill = document.getElementById("pfill");
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("#pipe .node")
    );
    const adv = document.getElementById("adv");
    const words = Array.from(
      document.querySelectorAll<HTMLElement>("#adv .w")
    );

    let lastY = 0;
    let tick = false;
    let pi = -1;
    let mx = 0;
    let my = 0;

    const onHeroMouseMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      req();
    };

    if (hero) {
      hero.addEventListener("mousemove", onHeroMouseMove, { passive: true });
    }

    const prog = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const diff = el.offsetHeight - window.innerHeight;
      return diff <= 0 ? 0 : cl(-r.top / diff);
    };

    function frame() {
      tick = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // 1. Auto-hide navbar
      if (nav) {
        nav.classList.toggle("hide", y > lastY && y > 400);
      }
      lastY = y;

      // 2. Hero parallax using independent CSS translate
      if (hero && y < hero.offsetHeight) {
        uis.forEach((u) => {
          const m = parseFloat(u.dataset.m || "0");
          u.style.translate = `${mx * m}px ${my * m * 0.6 + y * m * 0.01}px`;
        });
      }

      // 3. Process horizontal track
      if (pw && track) {
        const r = pw.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const p = prog(pw);
          const paddingLeft =
            parseFloat(window.getComputedStyle(track).paddingLeft || "0") || 20;
          const max = track.scrollWidth - vw + paddingLeft;
          track.style.transform = `translate3d(${-p * max}px, 0, 0)`;
          const i = Math.min(5, Math.floor(p * 6));
          if (i !== pi) {
            pi = i;
            cards.forEach((c, k) => c.classList.toggle("on", k === i));
            progs.forEach((c, k) => c.classList.toggle("on", k <= i));
          }
        }
      }

      // 4. Portfolio 3D device unfold & site scroll
      if (ptw && dev && cover && site && pages && gl && gr) {
        const r = ptw.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const p = prog(ptw);
          const open = cl((p - 0.03) / 0.12);
          const e = open * open * (3 - 2 * open);
          dev.style.width = `calc(var(--W) * ${(0.5 + 0.5 * e).toFixed(4)})`;
          dev.style.borderRadius = `${36 - e * 8}px`;
          cover.style.transform = `rotateY(${-180 * e}deg)`;
          cover.style.visibility = e > 0.5 ? "hidden" : "visible";
          dev.classList.toggle("open", e > 0.92);

          const spread = e * vw * 0.42;
          gl.style.transform = `translate3d(${-spread}px, 0, 0)`;
          gr.style.transform = `translate3d(${spread}px, 0, 0)`;
          gl.style.opacity = `${1 - e * 0.85}`;
          gr.style.opacity = `${1 - e * 0.85}`;

          const sc = cl((p - 0.17) / 0.83);
          const max = Math.max(0, site.scrollHeight - pages.clientHeight);
          const yy = sc * max;
          site.style.transform = `translate3d(0, ${-yy}px, 0)`;
        }
      }

      // 5. Liquid pipeline fill & nodes
      if (pipe && fill) {
        const r = pipe.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const p = cl((vh * 0.72 - r.top) / r.height);
          fill.style.height = `${p * 100}%`;
          nodes.forEach((n) => {
            const nr = n.getBoundingClientRect();
            n.classList.toggle("on", nr.top + nr.height * 0.5 < vh * 0.72);
          });
        }
      }

      // 6. Word-by-word reveal
      if (adv && words.length > 0) {
        const r = adv.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const n = Math.round(
            cl((vh * 0.8 - r.top) / (vh * 0.45)) * words.length
          );
          words.forEach((w, i) => w.classList.toggle("on", i < n));
        }
      }
    }

    function req() {
      if (!tick) {
        tick = true;
        requestAnimationFrame(frame);
      }
    }

    lenis.on("scroll", req);
    window.addEventListener("scroll", req, { passive: true });
    window.addEventListener("resize", req);
    frame();

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
      if (hero) hero.removeEventListener("mousemove", onHeroMouseMove);
      window.removeEventListener("scroll", req);
      window.removeEventListener("resize", req);
      cancelAnimationFrame(rafId);
      io.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
