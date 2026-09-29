import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck } from 'lucide-react';

export default function SocialProofCollageSection() {
  const photos = [
    { src: '/images/team/gaurav.webp', title: 'Strategy & Growth Leadership' },
    { src: '/images/portfolio-1.png', title: 'High-Ticket VSL Architecture' },
    { src: '/images/about-stack-1.png', title: 'Conversion UX Wireframing' },
    { src: '/images/team/rahul.webp', title: 'Technical Automation & AI Calling' },
    { src: '/images/portfolio-2.png', title: 'B2B Demo Acquisition Flow' },
    { src: '/images/portfolio-3.png', title: 'Low-Ticket 1-Click Upsell Stack' },
  ];

  return (
    <section style={{ padding: '100px 0', background: '#f8fafc', position: 'relative' }}>
      <div className="container-wide">
        {/* Top Header Split (matching reference layout) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 18px',
                borderRadius: '999px',
                background: 'rgba(99, 102, 241, 0.12)',
                color: '#4338ca',
                fontSize: '0.8rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
              }}
            >
              <Sparkles size={14} />
              <span>BEHIND THE SCENES &amp; PROOF</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              BUILDING REPEATABLE GROWTH <br />
              <span style={{ background: '#fef08a', color: '#854d0e', padding: '2px 12px', borderRadius: '8px' }}>
                FOR SCALING BRANDS.
              </span>
            </h2>
          </div>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              background: '#0f172a',
              color: '#ffffff',
              borderRadius: '999px',
              fontWeight: 900,
              fontSize: '0.92rem',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(15, 23, 42, 0.25)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <span>JOIN THE WAITLIST ➔</span>
          </a>
        </div>

        {/* Masonry / Photo Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {photos.map((photo, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6366f1';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.08)';
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />

              {/* Gradient Bottom Title Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 18px 14px 18px',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.92) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff' }}>
                  {photo.title}
                </span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
