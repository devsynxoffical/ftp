import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useFramerPageInteractions() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. SPA Internal Links Interception
    const handleLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("./") || (href.startsWith("/") && !href.startsWith("//"))) {
        e.preventDefault();
        let target = href;
        if (target.startsWith("./")) {
          target = "/" + target.slice(2);
        }
        if (target === "/" || target === "") {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate(target);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    // 2. FAQ Accordion Interaction
    const handleFaqClick = (e) => {
      const targetHeader = e.target.closest('.framer-kg7wsu, .framer-6paxum, [data-framer-name="Icon Wrap"], .framer-1ij0dh0');
      if (!targetHeader) return;

      const parentCard = targetHeader.closest('[data-border="true"], .framer-17nhe3m, .framer-rkm23s, .framer-193gfb [data-framer-name="FAQs List"] > div, [data-framer-name="FAQ Item"]');
      if (!parentCard) return;

      const answerWrap = parentCard.querySelector('.framer-11jd2sk, [data-framer-name="Answer Wrap"], .framer-11jd2sk-container');
      const iconMinus = parentCard.querySelector('.framer-n08bpq, [data-framer-name="Icon"]');

      if (answerWrap) {
        const isHidden = answerWrap.style.display === "none" || window.getComputedStyle(answerWrap).display === "none";
        if (isHidden) {
          answerWrap.style.setProperty("display", "block", "important");
          answerWrap.style.setProperty("opacity", "1", "important");
          if (iconMinus) iconMinus.style.setProperty("transform", "rotate(90deg)", "important");
        } else {
          answerWrap.style.setProperty("display", "none", "important");
          if (iconMinus) iconMinus.style.setProperty("transform", "rotate(0deg)", "important");
        }
      }
    };

    document.addEventListener("click", handleFaqClick);

    // 2b. Auto-play Videos
    const initVideos = () => {
      document.querySelectorAll('video').forEach((v) => {
        v.muted = true;
        v.loop = true;
        v.autoplay = true;
        v.playsInline = true;
        v.preload = "auto";
        v.play().catch(() => {});
      });
    };
    initVideos();

    // 2c. Local Asset Image Resolution
    const fixImages = () => {
      document.querySelectorAll("img").forEach((img) => {
        if (img.src && img.src.includes("framerusercontent.com/images/")) {
          const filename = img.src.split("/").pop().split("?")[0];
          img.src = "/assets/" + filename;
          img.removeAttribute("srcset");
        }
      });
    };
    fixImages();
    setTimeout(fixImages, 200);

    // 3. 3D Fan Cards Click Switcher (Feature 3: 6-Card Carousel System)
    const setupFanCards = () => {
      const fanSections = document.querySelectorAll('.framer-345ywe, [data-framer-name="Feature 3"]');
      if (!fanSections.length) return;

      fanSections.forEach((section) => {
        const containers = section.querySelectorAll('.framer-mxks8r, [data-framer-name="Cards"]');
        containers.forEach((container) => {
          const cards = Array.from(container.querySelectorAll('.fan-card-item, .framer-1aw3tgn, .framer-1lpf4l7, .framer-75n0t6'));
          if (!cards.length) return;

          const totalCards = cards.length;
          let activeIndex = 0;

          const getParams = () => {
            const isMobile = window.innerWidth < 768;
            return {
              xOffset: isMobile ? 180 : 340,
              yOffset: isMobile ? 25 : 35,
              rotAngle: isMobile ? 6 : 8,
              sideScale: isMobile ? 0.88 : 0.92
            };
          };

          // Reset inner containers from SSR 3D depth
          container.querySelectorAll('.framer-shzaz2-container, .framer-1ditxsb-container, .framer-1ytawg7-container').forEach(el => {
            el.style.setProperty("transform", "none", "important");
            el.style.setProperty("opacity", "1", "important");
            el.style.setProperty("width", "480px", "important");
            el.style.setProperty("max-width", "100%", "important");
          });

          container.querySelectorAll('.framer-9upOs').forEach(el => {
            el.style.setProperty("width", "480px", "important");
            el.style.setProperty("max-width", "100%", "important");
            el.style.setProperty("opacity", "1", "important");
          });

          // Preload and force display of card images
          container.querySelectorAll('img').forEach((img) => {
            img.loading = "eager";
            img.decoding = "sync";
            img.style.setProperty("opacity", "1", "important");
            img.style.setProperty("visibility", "visible", "important");
            img.style.setProperty("display", "block", "important");
          });

          cards.forEach((card) => {
            card.style.setProperty("position", "absolute", "important");
            card.style.setProperty("top", "50%", "important");
            card.style.setProperty("left", "50%", "important");
            card.style.setProperty("width", "480px", "important");
            card.style.setProperty("max-width", "90vw", "important");
            card.style.setProperty("will-change", "transform, opacity, z-index", "important");
            card.style.setProperty("transition", "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, z-index 0.5s ease", "important");
          });

          const applyFanState = (currIndex) => {
            activeIndex = (currIndex % totalCards + totalCards) % totalCards;
            const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
            const nextIndex = (activeIndex + 1) % totalCards;
            const { xOffset, yOffset, rotAngle, sideScale } = getParams();

            cards.forEach((card, idx) => {
              const iconFrame = card.querySelector('.framer-1yl77oy, [data-framer-name="Icon Frame"]');
              const numBadge = card.querySelector('.framer-1fa1z50, [data-framer-name="Number"], .card-badge-num');

              if (idx === activeIndex) {
                // Center / Active card
                card.style.setProperty("transform", "translate(-50%, -50%) translateZ(40px) scale(1)", "important");
                card.style.setProperty("z-index", "10", "important");
                card.style.setProperty("opacity", "1", "important");
                card.style.setProperty("pointer-events", "auto", "important");
                card.style.setProperty("cursor", "default", "important");
                card.style.setProperty("filter", "brightness(1)", "important");
                if (iconFrame) iconFrame.style.setProperty("background-color", "rgb(56, 26, 201)", "important");
                if (numBadge) numBadge.style.setProperty("background-color", "rgb(255, 255, 255)", "important");
              } else if (idx === prevIndex) {
                // Left / Back card
                card.style.setProperty("transform", `translate(-50%, -50%) translateX(-${xOffset}px) translateY(${yOffset}px) rotate(-${rotAngle}deg) scale(${sideScale})`, "important");
                card.style.setProperty("z-index", "5", "important");
                card.style.setProperty("opacity", "0.75", "important");
                card.style.setProperty("pointer-events", "auto", "important");
                card.style.setProperty("cursor", "pointer", "important");
                card.style.setProperty("filter", "brightness(0.85)", "important");
                if (iconFrame) iconFrame.style.setProperty("background-color", "rgba(255, 255, 255, 0.05)", "important");
              } else if (idx === nextIndex) {
                // Right / Next card
                card.style.setProperty("transform", `translate(-50%, -50%) translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotAngle}deg) scale(${sideScale})`, "important");
                card.style.setProperty("z-index", "6", "important");
                card.style.setProperty("opacity", "0.75", "important");
                card.style.setProperty("pointer-events", "auto", "important");
                card.style.setProperty("cursor", "pointer", "important");
                card.style.setProperty("filter", "brightness(0.85)", "important");
                if (iconFrame) iconFrame.style.setProperty("background-color", "rgba(255, 255, 255, 0.05)", "important");
              } else {
                // Hidden cards (the other 3 cards)
                card.style.setProperty("transform", "translate(-50%, -50%) translateY(100px) scale(0.7)", "important");
                card.style.setProperty("z-index", "1", "important");
                card.style.setProperty("opacity", "0", "important");
                card.style.setProperty("pointer-events", "none", "important");
              }
            });

            // Update pills
            const pillBtns = section.querySelectorAll('.fan-pill-btn');
            pillBtns.forEach((btn, pIdx) => {
              if (pIdx === activeIndex) {
                btn.style.setProperty("background", "rgb(56, 26, 201)", "important");
                btn.style.setProperty("color", "#ffffff", "important");
                btn.style.setProperty("transform", "scale(1.1)", "important");
              } else {
                btn.style.setProperty("background", "transparent", "important");
                btn.style.setProperty("color", "rgba(255, 255, 255, 0.6)", "important");
                btn.style.setProperty("transform", "scale(1)", "important");
              }
            });
          };

          // Attach click listeners to cards
          cards.forEach((card, idx) => {
            card.onclick = (e) => {
              e.stopPropagation();
              const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
              const nextIndex = (activeIndex + 1) % totalCards;
              if (idx === prevIndex || idx === nextIndex) {
                applyFanState(idx);
              }
            };
          });

          // Connect navigation buttons
          const prevBtn = section.querySelector('.fan-nav-prev');
          const nextBtn = section.querySelector('.fan-nav-next');
          const pillBtns = section.querySelectorAll('.fan-pill-btn');

          if (prevBtn) {
            prevBtn.onclick = (e) => {
              e.preventDefault();
              applyFanState(activeIndex - 1);
            };
          }
          if (nextBtn) {
            nextBtn.onclick = (e) => {
              e.preventDefault();
              applyFanState(activeIndex + 1);
            };
          }
          pillBtns.forEach((btn, pIdx) => {
            btn.onclick = (e) => {
              e.preventDefault();
              applyFanState(pIdx);
            };
          });

          // Initialize first state (Card 1 active, Card 6 on left, Card 2 on right)
          applyFanState(0);
        });
      });
    };

    setupFanCards();

    // 4. Scroll-driven typing / reveal on About section ("From seamless Spending...")
    const setupAboutScroll = () => {
      const sections = document.querySelectorAll('section.framer-1ml1jmc, [data-framer-name="About"]');
      if (!sections.length) return () => {};

      const cleanups = [];

      sections.forEach((section) => {
        const desktopContainer = section.querySelector('.framer-ru1q5v');
        if (!desktopContainer) return;

        const items = Array.from(desktopContainer.children).filter(el => {
          return el.classList.contains("framer-47zw38-container") ||
                 el.classList.contains("framer-1uk6udh-container") ||
                 el.classList.contains("framer-ry5ojh-container") ||
                 el.classList.contains("framer-11pu2s0-container") ||
                 el.classList.contains("framer-18t5sb-container") ||
                 el.classList.contains("framer-tmy8zj-container") ||
                 el.classList.contains("framer-rb4elr-container") ||
                 el.classList.contains("framer-1e5u8cg-container") ||
                 el.classList.contains("framer-1axkhz-container") ||
                 el.classList.contains("framer-zmw4z4-container") ||
                 el.classList.contains("framer-lfwddn-container") ||
                 el.classList.contains("framer-12q3okt-container") ||
                 el.classList.contains("framer-661drs-container") ||
                 el.classList.contains("framer-1ng5nsh-container") ||
                 el.classList.contains("framer-3hali9-container") ||
                 el.classList.contains("framer-6fsbwc-container") ||
                 el.classList.contains("framer-6e7v9m-container") ||
                 el.classList.contains("framer-lripfn-container") ||
                 el.classList.contains("framer-yol5ym-container") ||
                 el.classList.contains("framer-1p5c0q-container") ||
                 el.classList.contains("framer-tudrcw-container") ||
                 el.classList.contains("framer-536i8b-container") ||
                 el.classList.contains("framer-10qpcst-container") ||
                 el.classList.contains("framer-htawln-container") ||
                 el.classList.contains("framer-xf3ohg-container") ||
                 el.classList.contains("framer-nz2nc6") ||
                 el.classList.contains("framer-74k4u") ||
                 el.classList.contains("framer-c8enmy") ||
                 el.getAttribute("data-framer-name") === "Word" ||
                 el.getAttribute("data-framer-name") === "Bubble" ||
                 el.hasAttribute("data-bubble");
        });

        const icon1 = section.querySelector('.framer-afieow-container');
        const icon2 = section.querySelector('.framer-i0ip7v-container');
        const icon3 = section.querySelector('.framer-117kp59-container');
        const icon4 = section.querySelector('.framer-1o4kyau-container');
        const icon5 = section.querySelector('.framer-1n80uf5-container');

        let ticking = false;

        const updateAbout = () => {
          const rect = section.getBoundingClientRect();
          const windowH = window.innerHeight;
          let progress = 0;

          if (rect.height > windowH + 100) {
            const totalDist = rect.height - windowH;
            progress = Math.max(0, Math.min(1, -rect.top / totalDist));
          } else {
            const raw = (windowH - rect.top) / (windowH + rect.height);
            progress = Math.max(0, Math.min(1, (raw - 0.2) / 0.6));
          }

          const totalItems = items.length;

          items.forEach((item, index) => {
            const start = 0.03 + (index / totalItems) * 0.84;
            const end = start + (0.84 / totalItems) * 0.85;
            const isBubble = item.classList.contains("framer-nz2nc6") || 
                             item.classList.contains("framer-74k4u") || 
                             item.classList.contains("framer-c8enmy") ||
                             item.getAttribute("data-framer-name") === "Bubble" || 
                             item.hasAttribute("data-bubble");

            const textEl = item.querySelector("p.framer-text") || item.querySelector("p");

            if (progress < start) {
              if (isBubble) {
                item.style.setProperty("opacity", "0", "important");
                item.style.setProperty("transform", "translateY(-30px) scale(0.85)", "important");
              } else if (textEl) {
                textEl.style.setProperty("color", "rgba(18, 18, 20, 0.16)", "important");
                textEl.style.setProperty("opacity", "0.35", "important");
              }
            } else if (progress >= end) {
              if (isBubble) {
                item.style.setProperty("opacity", "1", "important");
                item.style.setProperty("transform", "translateY(0px) scale(1)", "important");
              } else if (textEl) {
                textEl.style.setProperty("color", "#121214", "important");
                textEl.style.setProperty("opacity", "1", "important");
              }
            } else {
              const fraction = (progress - start) / (end - start);
              if (isBubble) {
                item.style.setProperty("opacity", fraction.toFixed(3), "important");
                item.style.setProperty("transform", `translateY(${((1 - fraction) * -30).toFixed(1)}px) scale(${(0.85 + fraction * 0.15).toFixed(3)})`, "important");
              } else if (textEl) {
                textEl.style.setProperty("color", fraction > 0.5 ? "#121214" : "rgba(18, 18, 20, 0.4)", "important");
                textEl.style.setProperty("opacity", (0.35 + fraction * 0.65).toFixed(3), "important");
              }
            }
          });

          if (icon1) icon1.style.setProperty("margin-top", `${(-45 * progress).toFixed(1)}px`, "important");
          if (icon2) icon2.style.setProperty("margin-top", `${(50 * progress).toFixed(1)}px`, "important");
          if (icon3) icon3.style.setProperty("margin-top", `${(-30 * progress).toFixed(1)}px`, "important");
          if (icon4) icon4.style.setProperty("margin-top", `${(40 * progress).toFixed(1)}px`, "important");
          if (icon5) icon5.style.setProperty("margin-top", `${(-55 * progress).toFixed(1)}px`, "important");

          ticking = false;
        };

        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateAbout);
            ticking = true;
          }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        updateAbout();

        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        });
      });

      return () => cleanups.forEach(c => c());
    };

    // 5. Scroll Stacking & Parallax for "Proven Performance" Number Cards (01, 02, 03)
    const setupNumberCardsScroll = () => {
      const sections = document.querySelectorAll('section.framer-F3Z8T, .framer-1huufdb, [data-framer-name="Number Cards"]');
      if (!sections.length) return () => {};

      const cleanups = [];

      sections.forEach((section) => {
        const card1 = section.querySelector('.framer-1g1up0j-container');
        const card2 = section.querySelector('.framer-4nwo3y-container');
        const card3 = section.querySelector('.framer-13w1hln-container');
        const gradientCapsule = section.querySelector('.framer-16c4gkf') || section.querySelector('.framer-1qhvodn');

        let ticking = false;

        const updateCards = () => {
          const rect = section.getBoundingClientRect();
          const windowH = window.innerHeight;
          let progress = 0;

          if (rect.height > windowH + 100) {
            const totalDist = rect.height - windowH;
            progress = Math.max(0, Math.min(1, -rect.top / totalDist));
          } else {
            const raw = (windowH - rect.top) / (windowH + rect.height);
            progress = Math.max(0, Math.min(1, (raw - 0.2) / 0.6));
          }

          if (card1) {
            const p1 = Math.min(1, progress / 0.4);
            const scale1 = progress > 0.3 ? Math.max(0.92, 1 - (progress - 0.3) * 0.15) : 1;
            const opacity1 = progress > 0.45 ? Math.max(0.65, 1 - (progress - 0.45) * 0.5) : 1;
            card1.style.setProperty("transform", `rotate(${(-3 + p1 * 1).toFixed(1)}deg) scale(${scale1.toFixed(3)})`, "important");
            card1.style.setProperty("opacity", opacity1.toFixed(3), "important");
          }

          if (card2) {
            const p2 = Math.max(0, Math.min(1, (progress - 0.15) / 0.4));
            const scale2 = progress > 0.65 ? Math.max(0.94, 1 - (progress - 0.65) * 0.12) : (0.92 + p2 * 0.08);
            const translateY2 = (1 - p2) * 60;
            card2.style.setProperty("transform", `translateY(${translateY2.toFixed(1)}px) rotate(${(3 - (1 - p2) * 5).toFixed(1)}deg) scale(${scale2.toFixed(3)})`, "important");
            card2.style.setProperty("opacity", (0.35 + p2 * 0.65).toFixed(3), "important");
          }

          if (card3) {
            const p3 = Math.max(0, Math.min(1, (progress - 0.45) / 0.4));
            const translateY3 = (1 - p3) * 80;
            card3.style.setProperty("transform", `translateY(${translateY3.toFixed(1)}px) rotate(${(-2 + (1 - p3) * 4).toFixed(1)}deg) scale(${(0.9 + p3 * 0.1).toFixed(3)})`, "important");
            card3.style.setProperty("opacity", (0.25 + p3 * 0.75).toFixed(3), "important");
          }

          if (gradientCapsule) {
            const gScale = 0.88 + progress * 0.22;
            gradientCapsule.style.setProperty("transform", `scale(${gScale.toFixed(3)})`, "important");
          }

          ticking = false;
        };

        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateCards);
            ticking = true;
          }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        updateCards();

        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        });
      });

      return () => cleanups.forEach(c => c());
    };

    // 6. Testimonials Floating & Scroll Animation (Matching Framer reference)
    const setupTestimonialsScroll = () => {
      const sections = document.querySelectorAll('section.framer-1gx9988, [data-framer-name="Testimonials"]');
      if (!sections.length) return () => {};

      const cleanups = [];

      sections.forEach((section) => {
        const card1 = section.querySelector('.framer-1k18mro, [data-framer-name="Testimonial Card 1"]');
        const card2 = section.querySelector('.framer-1q8094n, [data-framer-name="Testimonial Card 2"]');
        const card3 = section.querySelector('.framer-1j99ufo, [data-framer-name="Testimonial Card 3"]');
        const card4 = section.querySelector('.framer-6idmd8, [data-framer-name="Testimonial Card 4"]');
        const card5 = section.querySelector('.framer-18hgfpp, [data-framer-name="Testimonial Card 5"]');

        const cards = [
          // Card 3: Top-Left (Maya Chen - Dark Glass Card)
          { el: card3, base: { x: -220, y: -130, rot: -6 }, delta: { x: -70, y: -50, rot: -3 } },
          // Card 2: Top-Right (Eliza Stone - Blue Card)
          { el: card2, base: { x: 190, y: -140, rot: 8 }, delta: { x: 70, y: -40, rot: 3 } },
          // Card 4: Far-Left (Jaron Smith - Purple Card)
          { el: card4, base: { x: -230, y: -15, rot: -7 }, delta: { x: -60, y: 15, rot: -2 } },
          // Card 5: Bottom-Left (Jaron Smith - White Card)
          { el: card5, base: { x: -170, y: 110, rot: 5 }, delta: { x: -50, y: 60, rot: 2 } },
          // Card 1: Bottom-Right (Eliza Stone - Lilac Card)
          { el: card1, base: { x: 190, y: 100, rot: -10 }, delta: { x: 60, y: 50, rot: -3 } },
        ];

        // Hover elevation for cards
        cards.forEach(({ el }) => {
          if (!el) return;
          el.style.setProperty("transition", "box-shadow 0.3s ease, filter 0.3s ease", "important");
          el.addEventListener("mouseenter", () => {
            el.style.setProperty("z-index", "15", "important");
            el.style.setProperty("box-shadow", "0px 25px 50px rgba(0,0,0,0.35)", "important");
          });
          el.addEventListener("mouseleave", () => {
            el.style.removeProperty("z-index");
            el.style.removeProperty("box-shadow");
          });
        });

        let ticking = false;

        const updateTestimonials = () => {
          const rect = section.getBoundingClientRect();
          const windowH = window.innerHeight;
          
          // Progress from 0 (entering bottom of screen) to 1 (leaving top of screen)
          const rawProgress = (windowH - rect.top) / (windowH + rect.height);
          const progress = Math.max(0, Math.min(1, rawProgress));
          const offset = (progress - 0.5) * 2; // -1 to +1

          // Responsive multiplier for viewport width
          const mult = Math.min(1.1, Math.max(0.65, window.innerWidth / 1440));

          cards.forEach(({ el, base, delta }) => {
            if (!el) return;
            const curX = (base.x + delta.x * offset) * mult;
            const curY = (base.y + delta.y * offset);
            const curRot = base.rot + delta.rot * offset;

            el.style.setProperty(
              "transform",
              `translate(-50%, -50%) translateX(${curX.toFixed(1)}px) translateY(${curY.toFixed(1)}px) rotate(${curRot.toFixed(1)}deg)`,
              "important"
            );
          });

          ticking = false;
        };

        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateTestimonials);
            ticking = true;
          }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        updateTestimonials();

        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        });
      });

      return () => cleanups.forEach(c => c());
    };

    // 7. Feature Showcase Scroll & Step Indicator (Feature 2: How We Do It)
    const setupFeaturesScroll = () => {
      const sections = document.querySelectorAll('section.framer-1bmus10, [data-framer-name="Features"]');
      if (!sections.length) return () => {};

      const cleanups = [];

      const featureSteps = [
        {
          num: 1,
          title: "Discover, Strategize & Build",
          desc: "Our team develops high-converting pages, funnel architecture, compelling copy, forms, and conversion elements.",
          img: "/assets/feature_funnel_build.jpg",
        },
        {
          num: 2,
          title: "Connect & Automate",
          desc: "We integrate your funnel to automated follow-up sequences, CRM pipelines, and instant lead notification workflows.",
          img: "/assets/feature_automation_crm.jpg",
        },
        {
          num: 3,
          title: "Scale & Convert (AI Calling & Follow-up)",
          desc: "Deploy 24/7 AI calling agents, automated calendar bookings, and live conversion rate optimization.",
          img: "/assets/feature_ai_voice_growth.jpg",
        },
      ];

      sections.forEach((section) => {
        const lineInner = section.querySelector('.framer-131afh2');
        const feature2 = section.querySelector('[data-framer-name="Feature 2"], .framer-9j69ck');
        
        // Find step indicators in Feature 2
        const indicatorWrappers = feature2 ? feature2.querySelectorAll('.framer-1qw0v9m-container, .framer-1b62j3-container, .framer-1q1l2d3-container, [data-framer-name="indicator Line"] > div:not(.framer-13f7i91)') : [];
        const titleEl = feature2 ? feature2.querySelector('.framer-j40m76 p, [data-framer-name="Title"] p') : null;
        const descEl = feature2 ? feature2.querySelector('.framer-1i12jic p, [data-framer-name="Content"] > div:last-child p') : null;
        const imgEls = feature2 ? feature2.querySelectorAll('.feature-step-image, [data-framer-name="Video wrap"] img, [data-framer-name="Video 1"] img') : [];

        let currentActiveStep = 1;

        const setStep = (stepNum) => {
          if (stepNum === currentActiveStep) return;
          currentActiveStep = stepNum;
          const stepData = featureSteps[stepNum - 1];
          if (!stepData) return;

          if (titleEl) titleEl.textContent = stepData.title;
          if (descEl) descEl.textContent = stepData.desc;
          imgEls.forEach(img => {
            img.style.opacity = "0.7";
            img.src = stepData.img;
            setTimeout(() => { img.style.opacity = "1"; }, 150);
          });

          indicatorWrappers.forEach((ind, i) => {
            const numEl = ind.querySelector('.framer-1nq8kco, [data-framer-name="Number"]');
            const iconWrap = ind.querySelector('.framer-1lckanx, [data-framer-name="Icon Wrap"]');
            if (i === stepNum - 1) {
              if (numEl) numEl.style.setProperty("background-color", "rgb(255, 255, 255)", "important");
              if (iconWrap) {
                iconWrap.style.setProperty("transform", "scale(1)", "important");
                iconWrap.style.setProperty("opacity", "1", "important");
              }
            } else {
              if (numEl) numEl.style.setProperty("background-color", "rgba(255, 255, 255, 0.4)", "important");
              if (iconWrap) {
                iconWrap.style.setProperty("transform", "scale(0)", "important");
                iconWrap.style.setProperty("opacity", "0", "important");
              }
            }
          });
        };

        // Make indicators clickable
        indicatorWrappers.forEach((ind, i) => {
          ind.style.cursor = "pointer";
          ind.onclick = () => setStep(i + 1);
        });

        let ticking = false;

        const updateFeatures = () => {
          const rect = section.getBoundingClientRect();
          const windowH = window.innerHeight;
          const totalDist = rect.height;
          if (totalDist <= 0) return;

          const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (totalDist + windowH)));

          if (lineInner) {
            const heightPercent = Math.min(100, Math.max(15, progress * 120));
            lineInner.style.setProperty("height", `${heightPercent.toFixed(1)}%`, "important");
          }

          if (feature2) {
            const f2Rect = feature2.getBoundingClientRect();
            const f2Progress = Math.max(0, Math.min(1, (windowH - f2Rect.top) / (f2Rect.height + windowH * 0.5)));
            if (f2Progress < 0.38) {
              setStep(1);
            } else if (f2Progress < 0.68) {
              setStep(2);
            } else {
              setStep(3);
            }
          }

          ticking = false;
        };

        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateFeatures);
            ticking = true;
          }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        updateFeatures();

        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        });
      });

      return () => cleanups.forEach(c => c());
    };

    // 3b. Feature 1: Automation & Follow-Up Interactive Tabs
    const setupAutomationTabs = () => {
      const images = [
        "/assets/Automated%20Workflow%20Glass%20Dashboard.png",
        "/crm-automation.png",
        "/appointment-workflow.png",
        "/Aicalingagent.png"
      ];

      const feature1Sections = document.querySelectorAll('.framer-btjjzy, [data-framer-name="Feature 1"]');
      if (!feature1Sections.length) return () => {};

      const cleanups = [];

      feature1Sections.forEach((section) => {
        const previewImgs = section.querySelectorAll('.framer-lrvkow img, [data-framer-name="Video"] img, .framer-1cxcrim-container img');
        const tab1List = section.querySelectorAll('.framer-qnf6cd-container');
        const tab2List = section.querySelectorAll('.framer-gydulz-container');
        const tab3List = section.querySelectorAll('.framer-1tf5qck-container');
        const tab4List = section.querySelectorAll('.framer-1snwrig-container');

        const tabGroups = [tab1List, tab2List, tab3List, tab4List];

        const setActiveTab = (index) => {
          const targetSrc = images[index];

          previewImgs.forEach((img) => {
            img.style.transition = "opacity 0.2s ease, transform 0.2s ease";
            img.style.opacity = "0.4";
            img.style.transform = "scale(0.98)";
            setTimeout(() => {
              img.src = targetSrc;
              img.style.opacity = "1";
              img.style.transform = "scale(1)";
            }, 120);
          });

          tabGroups.forEach((group, i) => {
            group.forEach((tabEl) => {
              const card = tabEl.querySelector('.framer-THpZs, [data-highlight="true"]') || tabEl;
              const numBadge = tabEl.querySelector('.framer-6ayu7c, [data-framer-name="Number"]');
              const descEl = tabEl.querySelector('.framer-1p6p93y, [data-framer-name*="Automated sequences"], [data-framer-name*="pipeline"], [data-framer-name*="Confirmation"], [data-framer-name*="Automatically engage"]');
              const iconWrap = tabEl.querySelector('.framer-xtmfu3, [data-framer-name="Icon Wrap"]');

              if (i === index) {
                card.style.setProperty("background-color", "rgba(170, 156, 236, 0.1)", "important");
                if (numBadge) numBadge.style.setProperty("display", "flex", "important");
                if (descEl) descEl.style.setProperty("display", "block", "important");
                if (iconWrap) iconWrap.style.setProperty("background-color", "rgb(56, 26, 201)", "important");
              } else {
                card.style.setProperty("background-color", "rgba(0, 0, 0, 0)", "important");
                if (numBadge) numBadge.style.setProperty("display", "none", "important");
                if (descEl) descEl.style.setProperty("display", "none", "important");
                if (iconWrap) iconWrap.style.setProperty("background-color", "rgba(255, 255, 255, 0.05)", "important");
              }
            });
          });
        };

        tabGroups.forEach((group, tabIndex) => {
          group.forEach((tabEl) => {
            tabEl.style.cursor = "pointer";
            const clickHandler = (e) => {
              e.preventDefault();
              setActiveTab(tabIndex);
            };
            tabEl.addEventListener("click", clickHandler);
            cleanups.push(() => tabEl.removeEventListener("click", clickHandler));
          });
        });

        // Initialize first tab as active
        setActiveTab(0);
      });

      return () => cleanups.forEach((c) => c());
    };

    const cleanupAbout = setupAboutScroll();
    const cleanupCards = setupNumberCardsScroll();
    const cleanupTestimonials = setupTestimonialsScroll();
    const cleanupFeatures = setupFeaturesScroll();
    const cleanupAutomationTabs = setupAutomationTabs();

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("click", handleFaqClick);
      if (cleanupAbout) cleanupAbout();
      if (cleanupCards) cleanupCards();
      if (cleanupTestimonials) cleanupTestimonials();
      if (cleanupFeatures) cleanupFeatures();
      if (cleanupAutomationTabs) cleanupAutomationTabs();
    };
  }, [navigate]);
}
