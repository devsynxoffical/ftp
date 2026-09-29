import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BoldPurpleBannerSection() {
  return (
    <section style={{ position: 'relative', paddingBottom: '90px', marginTop: '40px' }}>
      {/* High-Impact Solid Brand Purple Banner (matching reference red banner) */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #3724c9 0%, #6C5CE7 50%, #5846e0 100%)',
          padding: '100px 24px 150px 24px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(108, 92, 231, 0.4)',
          overflow: 'hidden',
        }}
      >
        {/* Background Subtle Wave Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/images/banner-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            mixBlendMode: 'overlay',
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: '#ffffff',
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
            className="text-impact"
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '20px',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            WE CRAFT WORLD-CLASS <br />
            <span style={{ background: '#ffffff', color: '#3724c9', padding: '2px 14px', borderRadius: '8px', display: 'inline-block', margin: '4px 0' }}>
              HIGH-CONVERTING FUNNELS
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
            href="#booking-form"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: '#ffffff',
              color: '#3724c9',
              borderRadius: '999px',
              fontWeight: 900,
              fontSize: '1.02rem',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
            }}
          >
            <span>BUILD MY FUNNEL NOW</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* 3 Overlapping Analytics & Mockup Cards (matching reference layout below banner) */}
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
              border: '2px solid rgba(167, 139, 250, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(108, 92, 231, 0.25)',
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
            <div style={{ padding: '16px 20px', background: '#161133' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>High-Ticket Application Engine</div>
              <div style={{ fontSize: '0.76rem', color: '#A78BFA' }}>+285% Qualified Appointment Lift</div>
            </div>
          </div>

          <div
            style={{
              background: '#120e28',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(167, 139, 250, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(108, 92, 231, 0.25)',
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
            <div style={{ padding: '16px 20px', background: '#161133' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>Conversion Copy & UX Wireframing</div>
              <div style={{ fontSize: '0.76rem', color: '#A78BFA' }}>100% Custom Tailored Strategy</div>
            </div>
          </div>

          <div
            style={{
              background: '#120e28',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(167, 139, 250, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(108, 92, 231, 0.25)',
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
            <div style={{ padding: '16px 20px', background: '#161133' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>&lt;60s AI Voice Agent Calling</div>
              <div style={{ fontSize: '0.76rem', color: '#A78BFA' }}>89% Show-Up Rate Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
