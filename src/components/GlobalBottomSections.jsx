import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Eye, PhoneCall, Zap } from "lucide-react";
import Footer from "./Footer";
import "../styles/home-finora.css";

export default function GlobalBottomSections({ showProof } = {}) {
  const location = useLocation();
  const shouldShowProof = showProof !== undefined ? showProof : !location.pathname.startsWith("/workproof");

  const [activePost, setActivePost] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const [proofCategory, setProofCategory] = useState("ALL");
  const [lightboxProof, setLightboxProof] = useState(null);

  const teWrapRef = useRef(null);
  const finRef = useRef(null);

  // Testimonial Cards
  const testimonials = [
    {
      tag: "Verified Client",
      quote: "Before FTP, we were losing half our leads to slow follow-up. Their funnel and AI speed-to-lead system doubled our booked call rate within 10 days.",
      author: "Marcus Vance",
      role: "Founder, ScaleOps B2B",
      class: "tc k",
      x: -455,
      y: -235,
      r: -4,
    },
    {
      tag: "Agency Owner",
      quote: "The VSL funnel they built converted cold traffic at 8.4% on a $5k offer. Best ROI we've ever had on agency infrastructure.",
      author: "David Chen",
      role: "Managing Director, HyperGrowth",
      class: "tc b",
      x: 440,
      y: -250,
      r: 5,
    },
    {
      tag: "E-Commerce",
      quote: "The low-ticket bridge funnel generated $42k in front-end revenue while acquiring customers at a negative CAC.",
      author: "Elena Rostova",
      role: "CMO, NovaSkin Global",
      class: "tc m",
      x: -530,
      y: 40,
      r: -6,
    },
    {
      tag: "Consulting",
      quote: "Automated SMS and AI voice follow-ups boosted our show-up rates from 55% to 88%. Absolute game changer.",
      author: "Sarah Jenkins",
      role: "Partner, Apex Advisory",
      class: "tc wh",
      x: -300,
      y: 285,
      r: 3,
    },
    {
      tag: "High-Ticket SaaS",
      quote: "Flawless execution from strategy to copy and CRM automations. We scaled from $40k/mo to $120k/mo in under 90 days.",
      author: "Alex Tremblay",
      role: "Co-Founder, PipelineAI",
      class: "tc l",
      x: 470,
      y: 150,
      r: -3,
    },
  ];

  // Featured Work Proof Items (59+ Real Builds)
  const homeProofs = [
    {
      id: 1,
      title: "High-Ticket B2B Lead Acquisition Architecture",
      category: "HIGH-TICKET",
      image: "/workprof/wp-001.webp",
      metric: "84% Qualification Ratio",
    },
    {
      id: 2,
      title: "8-Figure Automated VSL Video Funnel Engine",
      category: "VSL",
      image: "/workprof/wp-002.webp",
      metric: "+$180k/mo Revenue Lift",
    },
    {
      id: 3,
      title: "High-Converting Low-Ticket Bridge & Upsell Engine",
      category: "LOW-TICKET",
      image: "/workprof/wp-003.webp",
      metric: "Zero CAC Acquisition",
    },
    {
      id: 4,
      title: "24/7 AI Voice Calling Agent & Live CRM Sync",
      category: "AI CALLING",
      image: "/workprof/wp-004.webp",
      metric: "<60s Speed-to-Lead",
    },
    {
      id: 5,
      title: "Enterprise Consulting Application & Calendar System",
      category: "HIGH-TICKET",
      image: "/workprof/wp-005.webp",
      metric: "4.8x ROAS On Ad Spend",
    },
    {
      id: 6,
      title: "VSL Drop-Off Recovery & Multi-Channel Pipeline",
      category: "VSL",
      image: "/workprof/wp-006.webp",
      metric: "91% Show-Up Rate",
    },
  ];

  const proofCategories = ["ALL", "HIGH-TICKET", "VSL", "LOW-TICKET", "AI CALLING"];
  const filteredHomeProofs = proofCategory === "ALL"
    ? homeProofs
    : homeProofs.filter((item) => item.category === proofCategory);

  // Blog Posts with User Images
  const blogPosts = [
    {
      tag: "Funnel Strategy",
      date: "Jan 18, 2026",
      title: "Why VSL Funnels Outperform Standard Landing Pages in 2026",
      badges: ["Conversion", "VSL Strategy"],
      class: "p1",
      img: "/assets/bento_vsl_funnels.jpg",
    },
    {
      tag: "AI Automation",
      date: "Jan 24, 2026",
      title: "How AI Voice Calling Agents Book 40% More Calls from Cold Traffic",
      badges: ["AI Calling", "Speed-to-Lead"],
      class: "p2",
      img: "/Aicalingagent.png",
    },
    {
      tag: "Offer Architecture",
      date: "Feb 02, 2026",
      title: "The 3 Irresistible Offer Stacks That Scale High-Ticket B2B",
      badges: ["Offer Stacking", "B2B"],
      class: "p3",
      img: "/assets/bento_high_ticket_funnels.jpg",
    },
    {
      tag: "Follow-Up Systems",
      date: "Feb 10, 2026",
      title: "The 7-Day Multi-Channel Lead Reactivation Blueprint",
      badges: ["SMS & Email", "Retention"],
      class: "p4",
      img: "/assets/Automated Workflow Glass Dashboard.png",
    },
  ];

  // FAQs
  const faqItems = [
    {
      q: "How fast can my funnel be built and launched?",
      a: "Our standard turnaround is 14 business days from kickoff to final launch. This includes full copy, custom design, CRM integration, calendar setup, automation workflows, and tracking pixels.",
    },
    {
      q: "Do you write all the copy and script the videos?",
      a: "Yes. Our team writes all sales copy, VSL scripts, headlines, email/SMS sequences, and qualifying form questions based on deep audience and offer research.",
    },
    {
      q: "What CRM and software platforms do you work with?",
      a: "We work seamlessly with GoHighLevel, HubSpot, Zapier, Stripe, Calendly, ActiveCampaign, Make, Meta Ads, Google Ads, and all major advertising and CRM platforms.",
    },
    {
      q: "What makes Funnels That Print different from standard agencies?",
      a: "We don't just give you a Figma design or a cookie-cutter template. We engineer a full-stack conversion machine: high-converting pages, battle-tested copy, automated follow-ups, and AI calling agents built to scale revenue.",
    },
    {
      q: "Can you integrate 24/7 AI voice calling into my existing CRM?",
      a: "Absolutely. We set up autonomous AI voice agents that call new leads within 60 seconds, qualify their budget and timeline, and book appointments directly into your calendar.",
    },
  ];

  // Scroll and Interactive Animation Engine
  useEffect(() => {
    const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max);

    const handleScroll = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // Testimonials 3D Stage Parallax
      if (teWrapRef.current) {
        const r = teWrapRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const p = clamp(-r.top / (teWrapRef.current.offsetHeight - vh));
          const e = p * p * (3 - 2 * p);
          const tein = teWrapRef.current.querySelector(".in");
          if (tein) {
            tein.style.opacity = String(clamp((p - 0.2) / 0.45));
            tein.style.transform = `scale(${0.9 + 0.1 * e})`;
          }
          const cards = teWrapRef.current.querySelectorAll(".tc");
          cards.forEach((c) => {
            const x = Number(c.getAttribute("data-x")) || 0;
            const yy = Number(c.getAttribute("data-y")) || 0;
            const rr = Number(c.getAttribute("data-r")) || 0;
            const k = 0.16 + 0.84 * e;
            c.style.transform = `translate(calc(-50% + ${x * k * (vw / 1440)}px), calc(-50% + ${yy * k * (vh / 900)}px)) rotate(${rr * (2.2 - 1.2 * e)}deg)`;
          });
        }
      }

      // Final CTA Kinetic Parallax Words Sliding
      if (finRef.current) {
        const r = finRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const k = (r.top + r.height / 2 - vh / 2) / vh;
          const finWords = finRef.current.querySelectorAll(".d");
          finWords.forEach((d) => {
            const dx = Number(d.getAttribute("data-dx")) || 0;
            d.style.transform = `translate3d(${k * dx * (vw / 1440)}px, 0, 0)`;
          });
        }
      }
    };

    // Reveal Intersection Observer
    const sel = ".kick, .h2, .sheet .lead, #faq .lead, .post, .faq, .more, .stores, .fcard, .proof-card";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          entry.target.classList.add("in");
          setTimeout(() => entry.target.classList.remove("sr", "in"), 1900);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document.querySelectorAll(sel).forEach((el) => {
      if (el.closest("#tewrap")) return;
      el.classList.add("sr");
      observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-finora global-bottom-stack">
      {/* ==================== TESTIMONIALS & LIGHT SECTIONS ==================== */}
      <section className="sheet" style={{ overflow: "visible" }}>
        {/* Testimonials 3D Stage */}
        <div id="tewrap" ref={teWrapRef}>
          <div className="te" id="te">
            <div className="in" id="tein">
              <div className="kick" style={{ transform: "rotate(-6deg)" }}>
                <b>04</b>
                <span style={{ background: "#fff", color: "var(--ink)" }}>TESTIMONIALS</span>
              </div>
              <h2 className="d h2">TRUSTED BY 7 & 8-FIGURE OPERATORS.</h2>
              <p className="lead" style={{ marginTop: "18px", color: "#a9a9b2" }}>
                Real results from verified client funnels, VSL launches, and AI speed-to-lead systems.
              </p>
              <div className="rate">
                <span>★ 4.9/5 Average Rating</span>
                <span>★ $14.8M+ Generated For Clients</span>
              </div>
            </div>

            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={t.class}
                data-x={t.x}
                data-y={t.y}
                data-r={t.r}
              >
                <u>{t.tag}</u>
                <br />
                {t.quote}
                <small>
                  {t.author}
                  <span>{t.role}</span>
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== WORK PROOF SHOWCASE ==================== */}
        {shouldShowProof && (
          <div className="sec box center proof-sec" id="proof">
            <div className="kick">
              <b>05</b>
              <span>VERIFIED WORK PROOF</span>
            </div>
            <h2 className="d h2">59+ HIGH-CONVERTING LIVE BUILDS.</h2>
            <p className="lead" style={{ marginTop: "20px" }}>
              Real client architectures, VSL presentation funnels, and automated AI calling pipelines engineered for massive ROI.
            </p>

            {/* Category Filter Tabs */}
            <div className="proof-filters">
              {proofCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`proof-filter-btn ${proofCategory === cat ? "active" : ""}`}
                  onClick={() => setProofCategory(cat)}
                >
                  {cat === "ALL" ? "ALL BUILDS (59+)" : cat}
                </button>
              ))}
            </div>

            {/* Glass Card Grid */}
            <div className="proof-grid">
              {filteredHomeProofs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="proof-card"
                  onClick={() => setLightboxProof(item)}
                  aria-label={`View ${item.title}`}
                >
                  <div className="proof-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="proof-img"
                      loading="lazy"
                    />
                    <span className="proof-pill">{item.category}</span>
                    <div className="proof-zoom-icon">
                      <Eye size={18} />
                    </div>
                  </div>
                  <div className="proof-info">
                    <b>{item.title}</b>
                    <span>⚡ {item.metric}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Explore all button */}
            <div style={{ marginTop: "40px" }}>
              <Link to="/workproof" className="btn v" style={{ padding: "14px 28px", fontSize: "14px" }}>
                <span>Explore All 59+ Verified Proofs</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

        {/* ==================== BLOG PREVIEW WITH REAL IMAGES ==================== */}
        <div className="sec box center" id="blog" style={{ paddingTop: "20px" }}>
          <div className="kick">
            <b>06</b>
            <span>CONVERSION BLOG</span>
          </div>
          <h2 className="d h2">GROW YOUR FUNNEL IQ.</h2>
          <p className="lead" style={{ marginTop: "20px" }}>
            Practical advice, case studies, and the latest conversion frameworks from our agency vault.
          </p>

          <div className="posts" id="posts">
            {blogPosts.map((post, idx) => (
              <button
                key={idx}
                type="button"
                className={`post ${post.class} ${activePost === idx ? "on" : ""}`}
                onMouseEnter={() => setActivePost(idx)}
                onFocus={() => setActivePost(idx)}
              >
                <div className="pic">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="blog-pic-img"
                  />
                  <div className="ov">
                    <u>{post.tag}</u>
                    <b>{post.title}</b>
                    <small style={{ opacity: 0.8, marginTop: "8px" }}>{post.date}</small>
                    <Link to="/blog" className="btn w">
                      Read Article
                    </Link>
                  </div>
                </div>
                <div className="meta">
                  <small>{post.date}</small>
                  <b>{post.title}</b>
                  {post.badges.map((b, bIdx) => (
                    <span key={bIdx}>{b}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <Link
            to="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "36px",
              color: "var(--vio2)",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            <span>View all articles & case studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="dark sec" id="faq">
        <div className="box center">
          <div className="kick">
            <b>07</b>
            <span>FAQS</span>
          </div>
          <h2 className="d h2">
            GOT QUESTIONS?
            <br />
            WE HAVE CLEAR ANSWERS.
          </h2>

          <div className="faq" id="faqs">
            {faqItems.map((item, idx) => (
              <div key={idx} className={`q ${openFaq === idx ? "on" : ""}`}>
                <button
                  type="button"
                  aria-expanded={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <b>{idx + 1}</b>
                  <span>{item.q}</span>
                  <i></i>
                </button>
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="more">
            <b>Still have a specific question about your offer?</b>
            Send us a message and our team will map out your best conversion path.{" "}
            <Link to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA BANNER ==================== */}
      <section className="dark fin" id="cta" ref={finRef}>
        <span className="soc" style={{ left: "22%", top: "18%", background: "#e53935" }}>
          ▶
        </span>
        <span className="soc" style={{ right: "20%", top: "14%", background: "#0a66c2", animationDelay: "-1s" }}>
          in
        </span>
        <span className="soc" style={{ right: "30%", top: "40%", background: "#000", animationDelay: "-2s" }}>
          𝕏
        </span>
        <span className="soc" style={{ left: "30%", top: "62%", background: "linear-gradient(45deg,#f9a03f,#d6249f)", animationDelay: "-3s" }}>
          📸
        </span>

        <div className="d" data-dx="-90">
          STRATEGY.
        </div>
        <div className="d" data-dx="110">
          AUTOMATION.
        </div>
        <div className="d" data-dx="-70">
          REVENUE.
        </div>

        <div className="stores">
          <Link to="/contact" className="btn v">
            <Zap size={16} />
            <span>Tell us what you sell & BUILD MY FUNNEL</span>
          </Link>
          <Link to="/contact" className="btn w">
            <PhoneCall size={16} />
            <span>Map out your path & BOOK A STRATEGY CALL</span>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal for Work Proof */}
      {lightboxProof && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            background: "rgba(5, 5, 8, 0.94)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setLightboxProof(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxProof(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              fontSize: "20px",
            }}
            aria-label="Close Preview"
          >
            ✕
          </button>
          <div
            style={{
              maxWidth: "920px",
              width: "100%",
              background: "rgba(18, 18, 24, 0.95)",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.85)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxProof.image}
              alt={lightboxProof.title}
              style={{ width: "100%", maxHeight: "70vh", objectFit: "contain", background: "#09090c", display: "block" }}
            />
            <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <h4 style={{ color: "#fff", margin: "0 0 4px 0", fontSize: "16px", fontWeight: 700 }}>{lightboxProof.title}</h4>
                <span style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 600 }}>⚡ {lightboxProof.metric}</span>
              </div>
              <Link to="/contact" className="btn v" style={{ padding: "10px 20px", fontSize: "13px" }}>
                <span>Build This For Me</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ==================== GLOBAL FOOTER ==================== */}
      <Footer />
    </div>
  );
}
