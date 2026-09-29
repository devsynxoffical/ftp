import React from 'react';
import { Star, Award } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Funnels That Print completely transformed our acquisition pipeline. We went from struggling with unvetted calls to booking 40+ highly qualified enterprise calls every single month on autopilot.",
      name: "Marcus Vance",
      role: "Founder, ScalePoint Media",
      metric: "+340% Pipeline ROI",
      avatar: "/images/team/gaurav.webp",
    },
    {
      quote: "The combination of high-converting copywriting with their AI calling agent is pure magic. Our show-up rate surged to 89% and our sales team spends 100% of their time closing rather than chasing.",
      name: "Elena Rostova",
      role: "Managing Director, Apex Consulting",
      metric: "89% Show-Up Rate",
      avatar: "/images/team/rahul.webp",
    },
  ];

  return (
    <section style={{ padding: '100px 0', background: '#fcfbff', position: 'relative' }}>
      <div className="container-wide">
        <div
          className="about-grid-split"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left: Client Reviews Cards */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '14px' }}>
              PROVEN RESULTS
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#0f0c24',
                marginBottom: '16px',
              }}
            >
              CLIENT FEEDBACK & <span className="text-gradient-purple">RESULTS.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#4c4474', lineHeight: 1.65, marginBottom: '32px' }}>
              Hear how high-growth businesses have transformed their sales pipeline and revenue predictability with Funnels That Print.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(108, 92, 231, 0.16)',
                    borderRadius: '20px',
                    padding: '28px 24px',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(108, 92, 231, 0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6C5CE7';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(108, 92, 231, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(108, 92, 231, 0.16)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(108, 92, 231, 0.06)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} style={{ color: '#6C5CE7', fill: '#6C5CE7' }} />
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        color: '#5846e0',
                        background: '#ede9fe',
                        border: '1px solid #DDD6FE',
                        padding: '3px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      {t.metric}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.94rem', color: '#2d2650', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '18px' }}>
                    "{t.quote}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #6C5CE7',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f0c24' }}>{t.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#655d8f' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Expert Visual */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(108, 92, 231, 0.2)',
                boxShadow: '0 25px 70px rgba(108, 92, 231, 0.15)',
                background: '#ffffff',
              }}
            >
              <img
                src="/images/team/gaurav.webp"
                alt="Funnels That Print Architecture Team"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Floating Experience Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '-20px',
                background: '#ffffff',
                border: '1px solid rgba(108, 92, 231, 0.25)',
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 15px 35px rgba(108, 92, 231, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6C5CE7 0%, #A78BFA 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Award size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f0c24' }}>Conversion Architecture</div>
                <div style={{ fontSize: '0.76rem', color: '#655d8f' }}>Built for scale & maximum pipeline ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
