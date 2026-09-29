import React from 'react';
import { ArrowRight, Sparkles, Zap, Layers, PhoneCall, Bot, Flame, ShieldCheck } from 'lucide-react';
import LogoMarquee from './LogoMarquee';

export default function HeroSection() {
  const trustCards = [
    { icon: <Zap size={22} />, title: 'High-Ticket Funnels', tag: 'Application Flows', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.35)' },
    { icon: <Flame size={22} />, title: 'VSL Video Engines', tag: 'Authority Selling', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.35)' },
    { icon: <Layers size={22} />, title: 'Low-Ticket Funnels', tag: '1-Click Upsells', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.35)' },
    { icon: <Bot size={22} />, title: 'CRM Automation', tag: 'Omnichannel Sync', color: '#A78BFA', bg: 'rgba(167, 139, 250, 0.15)', border: 'rgba(167, 139, 250, 0.35)' },
    { icon: <PhoneCall size={22} />, title: 'AI Calling Agent', tag: '<60s Speed-To-Lead', color: '#818cf8', bg: 'rgba(129, 140, 248, 0.15)', border: 'rgba(129, 140, 248, 0.35)' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '145px',
        paddingBottom: '30px',
        background: 'radial-gradient(ellipse 90% 70% at 50% -10%, #1e1145 0%, #0d0722 45%, #06040f 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Violet & Cyan Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.28) 0%, rgba(56, 189, 248, 0.15) 40%, rgba(6, 4, 15, 0) 75%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Pre-Header Pill (Electric Purple / Cyan Glow) */}
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 22px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(56, 189, 248, 0.15) 100%)',
              border: '1.5px solid rgba(167, 139, 250, 0.4)',
              color: '#DDD6FE',
              fontSize: '0.82rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 25px rgba(124, 58, 237, 0.35)',
            }}
          >
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }} />
            <span>✦ FROM COLD TRAFFIC ➔ TO 9-FIGURE QUALIFIED PIPELINES</span>
          </div>
        </div>

        {/* Massive Bold Headline (White + Electric Violet / Cyan Gradient) */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 5.6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            marginBottom: '22px',
            color: '#ffffff',
            maxWidth: '1050px',
            margin: '0 auto 22px auto',
          }}
        >
          FROM YOUR FIRST LEAD <span style={{ color: '#38bdf8' }}>➔</span> <br />
          <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #DDD6FE 30%, #a78bfa 70%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
            TO BOOKED QUALIFIED CALLS.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.08rem, 1.35vw, 1.25rem)',
            color: '#cbd5e1',
            maxWidth: '780px',
            margin: '0 auto 38px auto',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Turn your traffic into qualified sales calls with a high-converting funnel engineered around your offer, audience, and sales process.
        </p>

        {/* Dual CTA Buttons (Electric Purple Glow + Glass Outline) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '60px',
          }}
        >
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '17px 40px',
              background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #4f46e5 100%)',
              color: '#ffffff',
              fontFamily: 'var(--font-primary)',
              fontSize: '0.98rem',
              fontWeight: 900,
              border: '1.5px solid rgba(255, 255, 255, 0.35)',
              borderRadius: '999px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 12px 35px rgba(124, 58, 237, 0.55), 0 0 25px rgba(99, 102, 241, 0.35)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(124, 58, 237, 0.75), 0 0 35px rgba(99, 102, 241, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(124, 58, 237, 0.55), 0 0 25px rgba(99, 102, 241, 0.35)';
            }}
          >
            <Sparkles size={18} style={{ color: '#DDD6FE' }} />
            <span>BUILD MY FUNNEL NOW</span>
            <ArrowRight size={18} />
          </a>

          <a href="#case-studies" className="btn-outline-white">
            <span>SEE LIVE FUNNELS ➔</span>
          </a>
        </div>

        {/* Bottom 5-Card Trust Strip (Vibrant Colors on Sleek Dark Glass) */}
        <div
          className="five-col-strip"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '14px',
            marginBottom: '40px',
          }}
        >
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(18, 14, 28, 0.9)',
                border: `1.5px solid ${card.border}`,
                borderRadius: '18px',
                padding: '20px 14px',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = card.color;
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 15px 35px ${card.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = card.border;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: card.bg,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px auto',
                  border: `1px solid ${card.border}`,
                }}
              >
                {card.icon}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '3px' }}>
                {card.title}
              </div>
              <div style={{ fontSize: '0.74rem', color: card.color, fontWeight: 800 }}>
                {card.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Partner Strip */}
      <LogoMarquee />
    </section>
  );
}
