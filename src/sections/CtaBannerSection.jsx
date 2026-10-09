import React from "react";
import { Link } from "react-router-dom";
import { Zap, PhoneCall, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CtaBannerSection() {
  const highlights = [
    "14-Day Fast-Track Delivery",
    "Turnkey Automations & CRM",
    "High-Converting Sales Copy",
    "AI Qualification & Follow-up",
  ];

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      color: "#ef4444",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      color: "#0ea5e9",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      color: "#3b82f6",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
        </svg>
      )
    },
    {
      name: "Twitter / X",
      href: "https://x.com/",
      color: "#ffffff",
      svg: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      color: "#ec4899",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
  ];

  return (
    <section
      id="cta"
      style={{
        position: "relative",
        padding: "90px 24px 110px",
        backgroundColor: "#09090b",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "450px",
          background: "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.28) 0%, rgba(99, 102, 241, 0.12) 40%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Main CTA Card */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(180deg, rgba(24, 24, 30, 0.9) 0%, rgba(14, 14, 18, 0.98) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            borderRadius: "36px",
            padding: "64px 32px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Subtle Grid Pattern Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          />

          {/* Top Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(139, 92, 246, 0.12)",
              border: "1px solid rgba(167, 139, 250, 0.3)",
              color: "#c4b5fd",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "28px",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
            }}
          >
            <Sparkles size={14} color="#a78bfa" />
            <span>Ready To Scale Your Sales Machine?</span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(34px, 5.5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              textTransform: "uppercase",
              maxWidth: "920px",
              margin: "0 auto 20px",
              fontFamily: '"Roboto Condensed", "Geist", sans-serif',
            }}
          >
            READY TO BUILD A FUNNEL{" "}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              THAT PRINTS?
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
              maxWidth: "680px",
              margin: "0 auto 36px",
            }}
          >
            Stop losing qualified prospects to broken funnels and slow follow-ups. We engineer, write, and automate complete conversion systems that turn traffic into booked sales calls.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "44px",
            }}
          >
            {/* Primary CTA */}
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 28px",
                background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #4f46e5 100%)",
                color: "#ffffff",
                borderRadius: "18px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow: "0 10px 30px -5px rgba(124, 58, 237, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 15px 35px -5px rgba(124, 58, 237, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(124, 58, 237, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <Zap size={18} fill="#ffffff" stroke="none" />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.85, letterSpacing: "0.05em" }}>
                  Tell us what you sell
                </div>
                <div style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>
                  BUILD MY FUNNEL
                </div>
              </div>
              <ArrowUpRight size={18} style={{ opacity: 0.8 }} />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 28px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#ffffff",
                borderRadius: "18px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(10px)",
                transition: "all 0.25s ease",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <PhoneCall size={16} color="#ffffff" />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.7, letterSpacing: "0.05em" }}>
                  Map out your path
                </div>
                <div style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>
                  BOOK A STRATEGY CALL
                </div>
              </div>
            </Link>
          </div>

          {/* Key Value Highlights */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "28px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(255, 255, 255, 0.75)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={16} color="#a78bfa" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Social Channels Strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "32px",
            }}
          >
            <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.05em", marginRight: "8px" }}>
              Connect with us:
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
