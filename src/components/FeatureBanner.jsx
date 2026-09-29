import React from 'react';
import { ArrowRight, Flame, Target, Magnet } from 'lucide-react';

export default function FeatureBanner() {
  const cards = [
    {
      icon: <Target size={24} style={{ color: '#6C5CE7' }} />,
      title: 'High-Ticket Funnels',
      description: 'Move prospects seamlessly from initial curiosity to qualified application and calendar-booked sales call.',
      badge: 'B2B & High-Ticket',
    },
    {
      icon: <Flame size={24} style={{ color: '#6C5CE7' }} />,
      title: 'VSL Funnels',
      description: 'Leverage video-led persuasion to educate prospects, build deep authority, and inspire decisive action.',
      badge: 'High Conversion',
      highlighted: true,
    },
    {
      icon: <Magnet size={24} style={{ color: '#6C5CE7' }} />,
      title: 'Low-Ticket Funnels',
      description: 'Convert cold traffic into paying buyers with structured offer stacks, 1-click upsells, and order bumps.',
      badge: 'Self-Liquidating',
    },
  ];

  return (
    <section style={{ position: 'relative', paddingBottom: '90px', marginTop: '40px' }}>
      {/* Background Banner Container */}
      <div
        style={{
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(21, 16, 54, 0.88), rgba(21, 16, 54, 0.94)), url("/images/banner-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '90px 24px 130px 24px',
          textAlign: 'center',
          borderTop: '1px solid rgba(108, 92, 231, 0.2)',
          borderBottom: '1px solid rgba(108, 92, 231, 0.2)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge-pill" style={{ background: 'rgba(108, 92, 231, 0.25)', border: '1px solid rgba(167, 139, 250, 0.4)', color: '#DDD6FE', marginBottom: '16px' }}>
            ENGINEERED TO CONVERT
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#ffffff',
              marginBottom: '18px',
            }}
          >
            BUILT FOR CONVERSION. <span style={{ color: '#A78BFA' }}>NOT JUST FOR SHOW.</span>
          </h2>

          <p
            style={{
              fontSize: '1.08rem',
              color: '#DDD6FE',
              lineHeight: 1.6,
              marginBottom: '28px',
              maxWidth: '680px',
              margin: '0 auto 28px auto',
            }}
          >
            Every business has a different offer, audience, and buying journey. We engineer the exact conversion path that turns attention into predictable sales conversations.
          </p>

          <a href="#booking-form" className="btn-primary">
            <span>Start Your Build</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* 3 Overlapping Floating Cards */}
      <div className="container" style={{ marginTop: '-75px', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{
                background: card.highlighted ? '#ffffff' : '#ffffff',
                color: '#0f0c24',
                padding: '36px 30px',
                borderRadius: '20px',
                boxShadow: '0 20px 45px rgba(108, 92, 231, 0.12), 0 4px 15px rgba(0,0,0,0.04)',
                border: card.highlighted ? '2px solid #6C5CE7' : '1px solid rgba(108, 92, 231, 0.14)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 28px 60px rgba(108, 92, 231, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(108, 92, 231, 0.12)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: '#ede9fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {card.icon}
                  </div>
                  <span className="badge-pill-light">{card.badge}</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: '#0f0c24',
                    marginBottom: '12px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#4c4474',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {card.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#6C5CE7',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                }}
              >
                <span>Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
