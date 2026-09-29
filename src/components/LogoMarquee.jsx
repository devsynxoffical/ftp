import React from 'react';
import { Sparkles } from 'lucide-react';

export default function LogoMarquee() {
  const logos = [
    'logo-01.png', 'logo-02.png', 'logo-03.png', 'logo-04.png', 'logo-05.png',
    'logo-06.png', 'logo-07.png', 'logo-08.png', 'logo-10.png', 'logo-11.png',
    'logo-12.png', 'logo-13.png', 'logo-15.png', 'logo-16.png', 'logo-17.png',
    'logo-18.png', 'logo-19.png', 'logo-20.png', 'logo-21.png', 'logo-22.png',
  ];

  // Distinct vibrant neon circular rings (Strictly no red or orange)
  const ringThemes = [
    { border: '#8b5cf6', shadow: 'rgba(139, 92, 246, 0.4)', bg: 'rgba(139, 92, 246, 0.04)' },
    { border: '#06b6d4', shadow: 'rgba(6, 182, 212, 0.4)', bg: 'rgba(6, 182, 212, 0.04)' },
    { border: '#38bdf8', shadow: 'rgba(56, 189, 248, 0.4)', bg: 'rgba(56, 189, 248, 0.04)' },
    { border: '#10b981', shadow: 'rgba(16, 185, 129, 0.4)', bg: 'rgba(16, 185, 129, 0.04)' },
    { border: '#6366f1', shadow: 'rgba(99, 102, 241, 0.4)', bg: 'rgba(99, 102, 241, 0.04)' },
    { border: '#eab308', shadow: 'rgba(234, 179, 8, 0.4)', bg: 'rgba(234, 179, 8, 0.04)' },
    { border: '#14b8a6', shadow: 'rgba(20, 184, 166, 0.4)', bg: 'rgba(20, 184, 166, 0.04)' },
    { border: '#a855f7', shadow: 'rgba(168, 85, 247, 0.4)', bg: 'rgba(168, 85, 247, 0.04)' },
    { border: '#3b82f6', shadow: 'rgba(59, 130, 246, 0.4)', bg: 'rgba(59, 130, 246, 0.04)' },
  ];

  return (
    <section
      style={{
        padding: '65px 0 75px 0',
        background: '#ffffff',
        borderTop: '1px solid rgba(108, 92, 231, 0.12)',
        borderBottom: '1px solid rgba(108, 92, 231, 0.12)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 22px',
            borderRadius: '999px',
            background: 'rgba(124, 58, 237, 0.08)',
            border: '1.5px solid rgba(124, 58, 237, 0.22)',
            color: '#6d28d9',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <Sparkles size={15} style={{ color: '#7c3aed' }} />
          <span>ENGINEERED FOR HIGH-GROWTH BRANDS &amp; SEAMLESS PLATFORM INTEGRATION</span>
        </div>
      </div>

      {/* Gradient Fade Overlays */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '180px',
          background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '180px',
          background: 'linear-gradient(270deg, #ffffff 0%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Marquee Track with Circular Logo Badges */}
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          padding: '16px 0',
        }}
      >
        {[...logos, ...logos].map((logo, idx) => {
          const theme = ringThemes[idx % ringThemes.length];
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: '138px',
                height: '138px',
                borderRadius: '50%',
                background: '#ffffff',
                border: `3px solid ${theme.border}`,
                boxShadow: `0 10px 30px ${theme.shadow}, inset 0 0 16px ${theme.bg}`,
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                padding: '22px',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)';
                e.currentTarget.style.boxShadow = `0 20px 45px ${theme.border}66, inset 0 0 24px ${theme.bg}`;
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.style.filter = 'grayscale(0%) opacity(1)';
                  img.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${theme.shadow}, inset 0 0 16px ${theme.bg}`;
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.style.filter = 'grayscale(100%) opacity(0.85)';
                  img.style.transform = 'scale(1)';
                }
              }}
            >
              <img
                src={`/images/client-logo/${logo}`}
                alt={`Partner ${idx}`}
                style={{
                  maxWidth: '92px',
                  maxHeight: '62px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(100%) opacity(0.85)',
                  transition: 'all 0.3s ease',
                  display: 'block',
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
