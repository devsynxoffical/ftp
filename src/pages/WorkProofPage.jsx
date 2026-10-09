import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  ExternalLink, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  PhoneCall
} from "lucide-react";
import GlobalBottomSections from "../components/GlobalBottomSections";

// Generate full proof items list from the 59 images
const TOTAL_PROOFS = 59;

const categories = [
  { id: "ALL", label: "ALL" },
  { id: "HIGH-TICKET", label: "HIGH-TICKET" },
  { id: "VSL", label: "VSL" },
  { id: "LOW-TICKET", label: "LOW-TICKET" },
  { id: "AI CALLING", label: "AI CALLING" },
];

const categoryAssigner = (i) => {
  const mod = i % 4;
  if (mod === 1) return "HIGH-TICKET";
  if (mod === 2) return "VSL";
  if (mod === 3) return "LOW-TICKET";
  return "AI CALLING";
};

const proofTitles = [
  "High-Ticket B2B Lead Acquisition Architecture",
  "8-Figure Automated VSL Video Funnel",
  "High-Converting Low-Ticket Bridge & Upsell Engine",
  "24/7 AI Voice Calling Agent & Live CRM Sync",
  "Multi-Channel Lead Qualification Workflow",
  "Consulting Application Funnel & Calendar Engine",
  "Webinar Conversion & Automated Follow-Up Stack",
  "E-Commerce Micro-Offer Checkout Optimizer",
  "Automated SMS & Voice Reactivation Campaign",
  "High-ROAS Paid Acquisition Landing Flow",
  "Enterprise Pipeline Booking & Show-Up Engine",
  "High-Ticket Close Acceleration Funnel",
  "VSL Drop-Off Recovery & Retargeting Sequence",
  "Low-Ticket Membership Acquisition Funnel",
  "AI Outbound Prospecting & Voice Booking Pipeline",
];

const PROOF_ITEMS = Array.from({ length: TOTAL_PROOFS }, (_, idx) => {
  const num = idx + 1;
  const numStr = String(num).padStart(3, "0");
  const category = categoryAssigner(num);
  const title = proofTitles[idx % proofTitles.length] + ` #${num}`;
  
  return {
    id: num,
    title,
    category,
    image: `/workprof/wp-${numStr}.webp`,
    badge: category,
  };
});

export default function WorkProofPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredProofs = activeCategory === "ALL" 
    ? PROOF_ITEMS 
    : PROOF_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextProof = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProofs.length);
    }
  };

  const prevProof = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredProofs.length) % filteredProofs.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextProof();
      if (e.key === "ArrowLeft") prevProof();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredProofs]);

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#121214", position: "relative" }}>
      
      {/* 1. Light Theme Header & Hero Container Matching Other Pages */}
      <div
        style={{
          position: "relative",
          background: "#ffffff",
          paddingTop: "140px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        {/* Ambient Top Header Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "640px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src="/assets/brDjQ9FKiJg6kFs0X0MVPgSRyiw.png"
            alt="Header Glow"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              opacity: 0.85,
            }}
          />
        </div>

        {/* Hero Content (Clean Light Theme) */}
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(56, 26, 201, 0.07)",
              border: "1px solid rgba(56, 26, 201, 0.18)",
              borderRadius: "9999px",
              padding: "8px 22px",
              marginBottom: "28px",
              backdropFilter: "blur(10px)",
            }}
          >
            <ShieldCheck size={16} color="#381ac9" />
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#381ac9",
              }}
            >
              TRANSPARENT CLIENT EVIDENCE & WORK PROOF VAULT
            </span>
          </div>

          {/* Main Title (Dark crisp typography with clean gradient highlight) */}
          <h1
            style={{
              fontFamily: '"Geist", "Inter", sans-serif',
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              marginBottom: "24px",
              textTransform: "uppercase",
              color: "#121214",
            }}
          >
            59+ VERIFIED PROOFS.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #381ac9 0%, #6262fe 50%, #121214 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REAL CLIENT FUNNELS & PIPELINES.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.18rem",
              lineHeight: 1.65,
              color: "#525256",
              maxWidth: "780px",
              margin: "0 auto 50px auto",
              fontWeight: 500,
            }}
          >
            Browse our complete library of live client funnel builds, CRM dashboards, appointment booking graphs, and verified acquisition workflows. Click any image to inspect full-resolution proof.
          </p>

          {/* 4 Stat Cards (Clean Light Theme with subtle shadows & borders) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              maxWidth: "1080px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e8e8ed",
                borderRadius: "24px",
                padding: "28px 24px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "#381ac9", letterSpacing: "-0.04em" }}>$50M+</div>
              <div style={{ fontSize: "0.95rem", color: "#525256", fontWeight: 700, marginTop: "6px" }}>
                Generated Pipeline
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e8e8ed",
                borderRadius: "24px",
                padding: "28px 24px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "#121214", letterSpacing: "-0.04em" }}>340%</div>
              <div style={{ fontSize: "0.95rem", color: "#525256", fontWeight: 700, marginTop: "6px" }}>
                Average Booking Lift
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e8e8ed",
                borderRadius: "24px",
                padding: "28px 24px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "#121214", letterSpacing: "-0.04em" }}>89%</div>
              <div style={{ fontSize: "0.95rem", color: "#525256", fontWeight: 700, marginTop: "6px" }}>
                Show-Up Rate
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e8e8ed",
                borderRadius: "24px",
                padding: "28px 24px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div style={{ fontSize: "2.8rem", fontWeight: 900, color: "#381ac9", letterSpacing: "-0.04em" }}>59+</div>
              <div style={{ fontSize: "0.95rem", color: "#525256", fontWeight: 700, marginTop: "6px" }}>
                Verified Proofs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Proof Vault Gallery Area (Dark Theme Cards & Filter System) */}
      <div style={{ background: "#121214", color: "#ffffff", padding: "70px 0 100px 0", position: "relative" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "50px",
              padding: "8px",
              background: "rgba(255, 255, 255, 0.04)",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              maxWidth: "760px",
              margin: "0 auto 50px auto",
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const count = cat.id === "ALL" 
                ? TOTAL_PROOFS 
                : PROOF_ITEMS.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    background: isSelected
                      ? "linear-gradient(135deg, #6262fe 0%, #381ac9 100%)"
                      : "transparent",
                    color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.65)",
                    border: isSelected
                      ? "1px solid rgba(178, 178, 255, 0.4)"
                      : "1px solid transparent",
                    padding: "10px 24px",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: isSelected ? "0 4px 16px rgba(98, 98, 254, 0.35)" : "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      padding: "2px 7px",
                      borderRadius: "9999px",
                      background: isSelected ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.08)",
                      color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "24px",
              marginBottom: "80px",
            }}
          >
            {filteredProofs.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                style={{
                  background: "linear-gradient(180deg, rgba(33, 33, 36, 0.85) 0%, rgba(20, 20, 22, 0.85) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(178, 178, 255, 0.4)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.45), 0 0 24px rgba(98, 98, 254, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "260px",
                    background: "#1a1a1e",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />

                  {/* Floating Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      background: "rgba(18, 18, 20, 0.75)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "9999px",
                      padding: "4px 12px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      color: "#b2b2ff",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.badge}
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div
                    className="inspect-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(18, 18, 20, 0.4)",
                      opacity: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      backdropFilter: "blur(4px)",
                      transition: "opacity 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  >
                    <Eye size={18} />
                    <span>Inspect Proof</span>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div style={{ padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.96rem", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                      Proof #{item.id}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.55)" }}>
                      Verified Client Build
                    </div>
                  </div>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#b2b2ff",
                    }}
                  >
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Strategy Call CTA */}
          {/* Bottom CTA Card */}
          <div
            style={{
              background: "linear-gradient(180deg, rgba(24, 24, 30, 0.9) 0%, rgba(14, 14, 18, 0.98) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "32px",
              padding: "60px 32px",
              textAlign: "center",
              marginBottom: "40px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 35px rgba(124, 58, 237, 0.12)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                backgroundColor: "rgba(139, 92, 246, 0.12)",
                border: "1px solid rgba(167, 139, 250, 0.25)",
                color: "#c4b5fd",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              <Sparkles size={14} color="#a78bfa" />
              <span>Bespoke Conversion Infrastructure</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
                color: "#ffffff",
                fontFamily: '"Roboto Condensed", "Geist", sans-serif',
                textTransform: "uppercase",
              }}
            >
              Ready For Your Own High-Converting Funnel?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "640px",
                margin: "0 auto 32px auto",
                lineHeight: 1.6,
              }}
            >
              We design, write, build, and automate high-ticket funnels with guaranteed conversion lift. Turn your traffic into predictable revenue.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #4f46e5 100%)",
                  color: "#ffffff",
                  padding: "16px 32px",
                  borderRadius: "16px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px -4px rgba(124, 58, 237, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 14px 30px -4px rgba(124, 58, 237, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px -4px rgba(124, 58, 237, 0.5)";
                }}
              >
                <span>Build My Funnel</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  padding: "16px 28px",
                  borderRadius: "16px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <PhoneCall size={16} />
                <span>Book A Strategy Call</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredProofs[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "background 0.2s ease",
            }}
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevProof}
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextProof}
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={filteredProofs[lightboxIndex].image}
              alt={filteredProofs[lightboxIndex].title}
              style={{
                maxWidth: "100%",
                maxHeight: "78vh",
                objectFit: "contain",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6)",
              }}
            />
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>
                Proof #{filteredProofs[lightboxIndex].id} &bull; {filteredProofs[lightboxIndex].category}
              </div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "4px" }}>
                {lightboxIndex + 1} of {filteredProofs.length} verified proofs
              </div>
            </div>
          </div>
        </div>
      )}

      <GlobalBottomSections />
    </div>
  );
}
