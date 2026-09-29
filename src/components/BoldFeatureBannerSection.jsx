import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BoldFeatureBannerSection() {
  return (
    <section style={{ position: 'relative', paddingBottom: '90px', marginTop: '40px' }}>
      {/* High-Impact Solid Indigo / Electric Violet Banner */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 75%, #6366f1 100%)',
          padding: '100px 24px 150px 24px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(67, 56, 202, 0.45)',
          overflow: 'hidden',
        }}
      >
        {/* Background Wave Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/images/banner-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            mixBlendMode: 'overlay',
          }}
        />

        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fef08a',
              fontSize: '0.82rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} />
            <span>ENGINEERED FOR RECORD BREAKING CONVERSIONS</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '20px',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            WE CRAFT WORLD-CLASS <br />
            <span style={{ background: '#ffffff', color: '#4338ca', padding: '2px 14px', borderRadius: '8px', display: 'inline-block', margin: '4px 0' }}>
              PERFORMANCE FUNNELS
            </span> <br />
            TO HIT YOUR REVENUE GOALS.
          </h2>

          <p
            style={{
              fontSize: '1.12rem',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '720px',
              margin: '0 auto 32px auto',
              fontWeight: 500,
            }}
          >
            Turn your marketing attention into qualified discovery calls with custom copywriting, seamless CRM automation, and &lt;60s AI calling agents.
          </p>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: '#ffffff',
              color: '#4338ca',
              borderRadius: '999px',
              fontWeight: 900,
              fontSize: '1.02rem',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
            }}
          >
            <span>BUILD MY FUNNEL NOW</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* 3 Overlapping Analytics & Mockup Cards (matching reference layout below red banner) */}
      <div className="container-wide" style={{ marginTop: '-85px', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="hero-grid-split"
        >
          <div
            style={{
              background: '#120e28',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(251, 191, 36, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(251, 191, 36, 0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <img
              src="/images/hero-funnel-mockup.png"
              alt="High-Ticket Funnel Architecture"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px 20px', background: '#161022', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>High-Ticket Application Engine</div>
                <div style={{ fontSize: '0.76rem', color: '#fbbf24', fontWeight: 700 }}>+285% Qualified Appointment Lift</div>
              </div>
              <span style={{ background: '#fef08a', color: '#78350f', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 900 }}>4.8x ROAS</span>
            </div>
          </div>

          <div
            style={{
              background: '#120e28',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(56, 189, 248, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(56, 189, 248, 0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <img
              src="/images/about-stack-1.png"
              alt="Conversion Wireframing & Strategy"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px 20px', background: '#161022', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>Conversion Copy & Wireframing</div>
                <div style={{ fontSize: '0.76rem', color: '#38bdf8', fontWeight: 700 }}>100% Custom Tailored Strategy</div>
              </div>
              <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 900 }}>UX SYNC</span>
            </div>
          </div>

          <div
            style={{
              background: '#120e28',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(16, 185, 129, 0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <img
              src="/images/ai-calling-preview.png"
              alt="AI Calling & Live CRM Sync"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px 20px', background: '#161022', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>&lt;60s AI Voice Agent Calling</div>
                <div style={{ fontSize: '0.76rem', color: '#34d399', fontWeight: 700 }}>89% Show-Up Rate Guarantee</div>
              </div>
              <span style={{ background: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 900 }}>AI SYNC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
