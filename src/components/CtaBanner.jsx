import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section
      id="cta"
      style={{
        padding: '80px 0 120px 0',
        background: '#121214',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #381ac9 0%, #1e106a 100%)',
            borderRadius: '36px',
            padding: '70px 48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(56, 26, 201, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          {/* Background Ambient Star Light */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '800px',
              height: '400px',
              background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                color: '#ffffff',
                marginBottom: '24px',
                textTransform: 'uppercase',
              }}
            >
              Clarity. Confidence. <br />
              <span style={{ color: '#c4b5fd' }}>Control.</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.6,
                marginBottom: '40px',
              }}
            >
              Join thousands of businesses managing spend, global payments, and automated treasury with OneFin.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  background: '#ffffff',
                  color: '#121214',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                }}
              >
                <span>Get Started Now</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 30px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                }}
              >
                <span>Talk to Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
