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
    let nav: HTMLElement | null = null;
    let hero: HTMLElement | null = null;
    let uis: HTMLElement[] = [];
    let pw: HTMLElement | null = null;
    let track: HTMLElement | null = null;
    let cards: HTMLElement[] = [];
    let progs: HTMLElement[] = [];
    let ptw: HTMLElement | null = null;
    let ptop: HTMLElement | null = null;
    let dev: HTMLElement | null = null;
    let cover: HTMLElement | null = null;
    let pl: HTMLElement | null = null;
    let sites: HTMLElement[] = [];
    let scr: HTMLElement | null = null;
    let fsh: HTMLElement | null = null;
    let gl: HTMLElement | null = null;
    let gr: HTMLElement | null = null;
    let pipe: HTMLElement | null = null;
    let fill: HTMLElement | null = null;
    let nodes: HTMLElement[] = [];
    let adv: HTMLElement | null = null;
    let words: HTMLElement[] = [];
    let caseEls: (HTMLElement & { _s?: string })[] = [];

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

    function bindElements() {
      nav = document.getElementById("nav");
      const nextHero = document.querySelector<HTMLElement>(".hero");
      if (nextHero !== hero) {
        if (hero) hero.removeEventListener("mousemove", onHeroMouseMove);
        hero = nextHero;
        if (hero) hero.addEventListener("mousemove", onHeroMouseMove, { passive: true });
      }
      uis = Array.from(document.querySelectorAll<HTMLElement>("#stage .ui"));
      pw = document.getElementById("procwrap");
      track = document.getElementById("track");
      cards = Array.from(document.querySelectorAll<HTMLElement>("#track .card"));
      progs = Array.from(document.querySelectorAll<HTMLElement>("#prog div"));
      ptw = document.getElementById("portwrap");
      ptop = document.querySelector<HTMLElement>(".port .top");
      dev = document.getElementById("dev");
      cover = document.getElementById("cover");
      pl = document.getElementById("pl");
      sites = [
        document.getElementById("site"),
        document.getElementById("site2"),
      ].filter(Boolean) as HTMLElement[];
      scr = document.querySelector<HTMLElement>("#pl .scr");
      fsh = document.getElementById("fsh");
      gl = document.getElementById("gl");
      gr = document.getElementById("gr");
      pipe = document.getElementById("pipe");
      fill = document.getElementById("pfill");
      nodes = Array.from(document.querySelectorAll<HTMLElement>("#pipe .node"));
      adv = document.getElementById("adv");
      words = Array.from(document.querySelectorAll<HTMLElement>("#adv .w"));
      caseEls = Array.from(
        document.querySelectorAll<HTMLElement & { _s?: string }>("#caselist .case")
      );
    }

    bindElements();

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
      if (
        !pw || !pw.isConnected ||
        !track || !track.isConnected ||
        (document.getElementById("procwrap") && !pw)
      ) {
        bindElements();
      }
      M.cst = caseTop();
      M.cH = caseEls[0] ? caseEls[0].offsetHeight : 0;
      M.heroH = hero ? hero.offsetHeight : 0;
      M.pwH = pw ? pw.offsetHeight : 0;
      M.ptwH = ptw ? ptw.offsetHeight : 0;
      M.trackMax = track
        ? Math.max(
            0,
            track.scrollWidth -
              window.innerWidth +
              (parseFloat(window.getComputedStyle(track).paddingLeft) || 0)
          )
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

      // Re-bind dynamically if elements got unmounted or replaced during page navigation
      if (
        (pw && !pw.isConnected) ||
        (track && !track.isConnected) ||
        (ptw && !ptw.isConnected) ||
        (!pw && document.getElementById("procwrap"))
      ) {
        bindElements();
        measure();
      }

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
        const scrollRange = Math.max(1, (M.pwH || pw?.offsetHeight || 0) - vh);
        const p = cl(-rp.top / scrollRange);
        const trackMax =
          M.trackMax ||
          Math.max(
            0,
            track.scrollWidth -
              vw +
              (parseFloat(window.getComputedStyle(track).paddingLeft) || 0)
          );
        track.style.transform = `translate3d(${(-p * trackMax).toFixed(1)}px,0,0)`;
        const count = cards.length || 6;
        const i = Math.min(count - 1, Math.floor(p * count));
        if (i !== pi && i >= 0) {
          pi = i;
          cards.forEach((c, k) => c.classList.toggle("on", k === i));
          progs.forEach((c, k) => c.classList.toggle("on", k <= i));
        }
      }

      // 4. Portfolio 3D dual-pane fold & site scroll
      if (rt && rt.top < vh && rt.bottom > 0 && dev && cover && pl) {
        const p = cl(-rt.top / (M.ptwH - vh));
        const op = cl((p - 0.03) / 0.12);
        const cs = cl((p - 0.86) / 0.11);
        const o2 = op * (1 - cs);
        const e = o2 * o2 * (3 - 2 * o2);
        cover.classList.toggle("end", p > 0.5);
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
          dev.classList.toggle("half", e > 0.5);
          if (ptop) {
            ptop.style.opacity = Math.max(0, 1 - e * 1.6).toFixed(3);
          }
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

        const sc = cl((p - 0.17) / 0.66);
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

    // Expose rebind hook for navigation events
    (window as unknown as { __rebindSmoothScroll?: () => void }).__rebindSmoothScroll = () => {
      bindElements();
      measure();
      req();
    };

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
      delete (window as unknown as { __rebindSmoothScroll?: () => void }).__rebindSmoothScroll;
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
    
    // Rebind elements and resize Lenis after DOM updates on route transition
    const rebindAll = () => {
      globalLenis?.resize();
      const rebind = (window as unknown as { __rebindSmoothScroll?: () => void }).__rebindSmoothScroll;
      if (rebind) rebind();
      window.dispatchEvent(new Event("resize"));
    };

    const resizeTimer1 = setTimeout(rebindAll, 80);
    const resizeTimer2 = setTimeout(rebindAll, 300);

    if (window.location.hash) {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        setTimeout(() => {
          if (globalLenis) {
            globalLenis.scrollTo(targetEl as HTMLElement, { offset: -20, duration: 1.2 });
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }, 120);
      }
    } else {
      if (globalLenis) {
        globalLenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function cnt(el: HTMLElement) {
      if (el.dataset.counted === "true") return;
      el.dataset.counted = "true";
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

    document.querySelectorAll<HTMLElement>(".rv, [data-to]").forEach((el) => {
      if (el.matches("[data-to]") && el.closest(".rv")) return;
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
