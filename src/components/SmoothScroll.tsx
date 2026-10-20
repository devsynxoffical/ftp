"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
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

    // Initialize buttery smooth Lenis matching ftp 4
    const lenis = new Lenis({
      lerp: 0.11,
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

    // Staggered scroll-reveal intersection observer matching ftp 4
    const sel =
      ".eyebrow,.h2,.sec .lead,.grp,.prev,.sect,.wcard,.q,.bt,.tm,.pvis,.pmid,.pfeat,.ftabs,.fask,.fg>*,.freach>*";

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

    // High performance batched measurement & GPU frame runner
    const cl = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
    const nav = document.getElementById("nav");
    const hero = document.querySelector<HTMLElement>(".hero");
    const uis = Array.from(document.querySelectorAll<HTMLElement>("#stage .ui"));
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
    const pl = document.getElementById("pl");
    const sites = [
      document.getElementById("site"),
      document.getElementById("site2"),
    ].filter(Boolean) as HTMLElement[];
    const scr = document.querySelector<HTMLElement>("#pl .scr");
    const fsh = document.getElementById("fsh");
    const gl = document.getElementById("gl");
    const gr = document.getElementById("gr");
    const pipe = document.getElementById("pipe");
    const fill = document.getElementById("pfill");
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("#pipe .node")
    );
    const adv = document.getElementById("adv");
    const words = Array.from(document.querySelectorAll<HTMLElement>("#adv .w"));
    const caseEls = Array.from(
      document.querySelectorAll<HTMLElement & { _s?: string }>("#caselist .case")
    );

    let last = 0;
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

    const caseTop = () =>
      caseEls[0]
        ? parseFloat(window.getComputedStyle(caseEls[0]).top || "170") || 170
        : 170;

    // Measurement cache M to avoid layout thrashing in scroll loop
    const M: {
      cst: number;
      cH: number;
      heroH: number;
      pwH: number;
      ptwH: number;
      trackMax: number;
      P: number;
      siteMax: number;
    } = {
      cst: 170,
      cH: 0,
      heroH: 0,
      pwH: 0,
      ptwH: 0,
      trackMax: 0,
      P: 0,
      siteMax: 0,
    };

    function measure() {
      M.cst = caseTop();
      M.cH = caseEls[0] ? caseEls[0].offsetHeight : 0;
      M.heroH = hero ? hero.offsetHeight : 0;
      M.pwH = pw ? pw.offsetHeight : 0;
      M.ptwH = ptw ? ptw.offsetHeight : 0;
      M.trackMax = track
        ? track.scrollWidth -
          window.innerWidth +
          (parseFloat(window.getComputedStyle(track).paddingLeft) || 0)
        : 0;
      M.P = cover ? cover.offsetWidth : 0;
      M.siteMax =
        sites[0] && scr ? Math.max(0, sites[0].scrollHeight - scr.clientHeight) : 0;
    }

    measure();
    window.addEventListener("load", measure);

    const fimg = document.getElementById("fimg");
    if (fimg) {
      fimg.addEventListener("load", () => {
        measure();
        req();
      });
    }

    let lastE = -1;
    let lastYY = -1;
    let lastN = -1;

    function frame() {
      tick = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      const rp = pw ? pw.getBoundingClientRect() : null;
      const rt = ptw ? ptw.getBoundingClientRect() : null;
      const rpi = pipe ? pipe.getBoundingClientRect() : null;
      const ra = adv ? adv.getBoundingClientRect() : null;

      let nodeTops: number[] | null = null;
      const cr =
        vw > 980 && caseEls.length
          ? caseEls.map((c) => c.getBoundingClientRect().top)
          : null;
      const cst = M.cst;
      const cH = M.cH;

      if (rpi && rpi.top < vh && rpi.bottom > 0 && nodes.length) {
        nodeTops = nodes.map((n) => {
          const nr = n.getBoundingClientRect();
          return nr.top + nr.height * 0.5;
        });
      }

      // 1. Auto-hide navbar
      if (nav) {
        nav.classList.toggle("hide", y > last && y > 400);
      }
      last = y;

      // 2. Hero parallax
      if (hero && y < M.heroH && vw > 560) {
        uis.forEach((u) => {
          const m = parseFloat(u.dataset.m || "0");
          u.style.translate = `${mx * m}px ${my * m * 0.6 + y * m * 0.01}px`;
        });
      }

      // 3. Process track horizontal scroll
      if (rp && rp.top < vh && rp.bottom > 0 && track) {
        const p = cl(-rp.top / (M.pwH - vh));
        track.style.transform = `translate3d(${(-p * M.trackMax).toFixed(1)}px,0,0)`;
        const i = Math.min(5, Math.floor(p * 6));
        if (i !== pi) {
          pi = i;
          cards.forEach((c, k) => c.classList.toggle("on", k === i));
          progs.forEach((c, k) => c.classList.toggle("on", k <= i));
        }
      }

      // 4. Portfolio 3D dual-pane fold & site scroll
      if (rt && rt.top < vh && rt.bottom > 0 && dev && cover && pl) {
        const p = cl(-rt.top / (M.ptwH - vh));
        const open = cl((p - 0.03) / 0.12);
        const e = open * open * (3 - 2 * open);
        const P = M.P;
        const mob = vw <= 980;

        if (e !== lastE) {
          lastE = e;
          if (!mob) {
            dev.style.transform = `translate3d(${(-P / 2 * (1 - e)).toFixed(1)}px,0,0)`;
          }
          cover.style.transform = `rotateY(${(-180 * e).toFixed(2)}deg)`;
          cover.style.visibility = e >= 0.5 ? "hidden" : "visible";
          cover.style.setProperty("--sh", Math.min(1, e * 1.8).toFixed(2));
          pl.style.transform = `rotateY(${(180 - 180 * e).toFixed(2)}deg)`;
          pl.style.visibility = e <= 0.5 ? "hidden" : "visible";
          if (!mob && fsh) {
            fsh.style.transform = `translateX(-50%) scaleX(${(0.5 + 0.5 * e).toFixed(3)})`;
          }
          dev.classList.toggle("open", e > 0.92);
          const spread = e * vw * 0.42;
          if (gl && gr) {
            gl.style.transform = `translate3d(${-spread}px,0,0)`;
            gr.style.transform = `translate3d(${spread}px,0,0)`;
            gl.style.opacity = `${1 - e * 0.85}`;
            gr.style.opacity = `${1 - e * 0.85}`;
          }
        }

        const sc = cl((p - 0.17) / 0.83);
        const yy = Math.round(sc * M.siteMax);
        if (yy !== lastYY) {
          lastYY = yy;
          sites.forEach((x) => {
            x.style.transform = `translate3d(0,${-yy}px,0)`;
          });
        }
      }

      // 5. Case studies stacking scale & dim
      if (cr && caseEls.length) {
        const st = cst;
        const H = cH;
        caseEls.forEach((c, i) => {
          let k = 0;
          if (i < caseEls.length - 1) {
            k = cl((st + H - cr[i + 1]) / H);
          } else {
            k = 0;
          }
          const sc = 1 - 0.12 * k;
          const v = sc.toFixed(4);
          if (c._s !== v) {
            c._s = v;
            const cin = c.firstElementChild as HTMLElement;
            if (cin) {
              cin.style.transform = `scale(${v})`;
              cin.style.setProperty("--dim", (k * 0.35).toFixed(3));
            }
          }
        });
      }

      // 6. Liquid pipeline fill & nodes
      if (nodeTops && fill && rpi) {
        const p = cl((vh * 0.72 - rpi.top) / rpi.height);
        fill.style.height = `${(p * 100).toFixed(1)}%`;
        nodes.forEach((n, i) =>
          n.classList.toggle("on", nodeTops![i] < vh * 0.72)
        );
      }

      // 7. Word-by-word text illumination
      if (ra && ra.top < vh && ra.bottom > 0 && words.length) {
        const n = Math.round(
          cl((vh * 0.8 - ra.top) / (vh * 0.45)) * words.length
        );
        if (n !== lastN) {
          lastN = n;
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
    window.addEventListener("resize", () => {
      measure();
      lastE = -1;
      lastYY = -1;
      req();
    });

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
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      cancelAnimationFrame(rafId);
      io.disconnect();
      lenis.destroy();
    };
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    const globalLenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function cnt(el: HTMLElement) {
      const to = +(el.dataset.to || 0);
      const dec = +(el.dataset.dec || 0);
      const pre = el.dataset.pre || "";
      const suf = el.dataset.suf || "";
      const t0 = performance.now();
      const D = 1600;
      function f(t: number) {
        const k = Math.min(1, (t - t0) / D);
        const e = 1 - Math.pow(1 - k, 4);
        el.textContent =
          pre +
          (to * e).toLocaleString("en-US", {
            minimumFractionDigits: dec,
            maximumFractionDigits: dec,
          }) +
          suf;
        if (k < 1) requestAnimationFrame(f);
      }
      requestAnimationFrame(f);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const target = e.target as HTMLElement;
          target.classList.add("in");
          io.unobserve(target);
          target.querySelectorAll<HTMLElement>("[data-to]").forEach(cnt);
          if (target.hasAttribute("data-to")) {
            cnt(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll<HTMLElement>(".rv").forEach((el) => {
      io.observe(el);
    });

    if (!prefersReducedMotion) {
      const srIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const target = e.target as HTMLElement;
            srIo.unobserve(target);
            target.classList.add("in");
            setTimeout(() => target.classList.remove("sr", "in"), 1900);
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
      );

      document
        .querySelectorAll<HTMLElement>(
          ".eyebrow, .lead, .fcols>*, .cf2, .info"
        )
        .forEach((el, i) => {
          el.style.setProperty("--dl", `${(i % 3) * 0.07}s`);
          el.classList.add("sr");
          srIo.observe(el);
        });

      return () => {
        io.disconnect();
        srIo.disconnect();
      };
    }

    return () => io.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
