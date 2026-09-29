import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section
      style={{
        padding: '110px 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #f6f4fe 0%, #ede9fe 100%)',
        overflow: 'hidden',
        borderTop: '1px solid rgba(108, 92, 231, 0.12)',
      }}
    >
      {/* Background Accent Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(108, 92, 231, 0.18) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '840px' }}>
        <div className="badge-pill" style={{ marginBottom: '18px', background: '#ffffff', boxShadow: '0 4px 15px rgba(108, 92, 231, 0.1)' }}>
          <Sparkles size={14} />
          <span>START YOUR BUILD TODAY</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: '#0f0c24',
            marginBottom: '20px',
          }}
        >
          READY TO BUILD A FUNNEL THAT <span className="text-gradient-purple">PRINTS?</span>
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
            color: '#3b3363',
            lineHeight: 1.65,
            marginBottom: '36px',
            maxWidth: '680px',
            margin: '0 auto 36px auto',
          }}
        >
          Tell us what you're selling, who you're selling it to, and where your traffic is coming from. We'll map out the conversion path your business needs.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <a
            href="#booking-form"
            className="btn-primary"
            style={{
              padding: '18px 44px',
              fontSize: '1.08rem',
              fontWeight: 900,
              boxShadow: '0 10px 40px rgba(108, 92, 231, 0.4)',
            }}
          >
            <span>BUILD MY FUNNEL</span>
            <ArrowRight size={20} />
          </a>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', fontSize: '0.88rem', color: '#4c4474', fontWeight: 600 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} style={{ color: '#6C5CE7' }} />
              5–10 Day Delivery
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} style={{ color: '#6C5CE7' }} />
              Full Stack Integration
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} style={{ color: '#6C5CE7' }} />
              Zero Lock-In
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
