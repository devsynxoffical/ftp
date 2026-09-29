import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Flame } from 'lucide-react';

export default function KnockoutAuthorityBannerSection() {
  return (
    <section style={{ padding: '80px 0', background: '#05030a', position: 'relative', overflow: 'hidden' }}>
      <div className="container-wide">
        <div
          style={{
            position: 'relative',
            background: 'linear-gradient(145deg, #130e2e 0%, #0c081d 50%, #06040f 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(139, 92, 246, 0.45)',
            boxShadow: '0 30px 90px rgba(124, 58, 237, 0.3), 0 0 60px rgba(56, 189, 248, 0.2)',
            padding: '70px 40px 50px 40px',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Royal Purple Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Massive 3D Cutout Typography in Background */}
          <div
            className="text-impact"
            style={{
              position: 'absolute',
              top: '48%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(7rem, 20vw, 17rem)',
              color: 'rgba(255, 255, 255, 0.05)',
              letterSpacing: '0.04em',
              lineHeight: 0.8,
              userSelect: 'none',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              textShadow: '0 0 80px rgba(124, 58, 237, 0.4)',
              WebkitTextStroke: '2px rgba(139, 92, 246, 0.3)',
            }}
          >
            SCALE
          </div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px', margin: '0 auto' }}>
            {/* Top Founder / Strategist Avatar Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                padding: '8px 22px',
                borderRadius: '999px',
                marginBottom: '28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src="/images/team/gaurav.webp"
                alt="Strategy Team"
                style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <span style={{ fontSize: '0.84rem', fontWeight: 900, color: '#fef08a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                FUNNELS THAT PRINT • CONVERSION ARCHITECTURE
              </span>
            </div>

            <h2
              className="text-impact"
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
                color: '#ffffff',
                lineHeight: 1.02,
                marginBottom: '18px',
                textShadow: '0 0 40px rgba(124, 58, 237, 0.5)',
              }}
            >
              READY TO BUILD A FUNNEL <br />
              <span className="text-gradient-purple">THAT ACTUALLY PRINTS?</span>
            </h2>

            <p style={{ fontSize: '1.12rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '36px', maxWidth: '660px', margin: '0 auto 36px auto', fontWeight: 500 }}>
              Stop leaving money on the table with cookie-cutter templates and leaky acquisition flows. We engineer the complete conversion system for you.
            </p>

            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 48px',
                background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #38bdf8 100%)',
                color: '#ffffff',
                borderRadius: '999px',
                fontWeight: 900,
                fontSize: '1.05rem',
                textDecoration: 'none',
                boxShadow: '0 12px 40px rgba(124, 58, 237, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 18px 50px rgba(124, 58, 237, 0.85)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(124, 58, 237, 0.6)';
              }}
            >
              <span>CLAIM YOUR CUSTOM FUNNEL BUILD ➔</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
