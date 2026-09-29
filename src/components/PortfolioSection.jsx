import React, { useState } from 'react';
import { Eye, X, ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'High-Ticket VSL & Application Funnel',
      category: 'Agency & High-Ticket Coaching',
      image: '/images/portfolio-1.png',
      stats: '4.8x ROAS • $185k/mo Added Pipeline',
      description: 'Engineered high-converting video sales letter page with two-step application questionnaire and instant calendar qualification flow.',
    },
    {
      id: 2,
      title: 'Automated B2B Demo & Acquisition System',
      category: 'B2B & Enterprise Services',
      image: '/images/portfolio-2.png',
      stats: '+320% Qualified Discovery Calls',
      description: 'Streamlined prospect pre-framing and CRM routing to eliminate unvetted meetings and fill account executives’ schedules.',
    },
    {
      id: 3,
      title: 'Low-Ticket Offer & 1-Click Upsell Stack',
      category: 'E-Learning & Digital Products',
      image: '/images/portfolio-3.png',
      stats: '68% Order Bump Rate • $142 AOV',
      description: 'Self-liquidating acquisition funnel with dynamic order bumps, multi-tiered upsells, and automated abandoned cart recovery.',
    },
    {
      id: 4,
      title: 'Omnichannel Voice & SMS Booking Journey',
      category: 'Professional Services',
      image: '/images/portfolio-4.png',
      stats: '89% Show-Up Rate • &lt; 60s Follow-Up',
      description: 'Integrated bridge page funnel connected with AI calling agents and multi-touch SMS reminders to eliminate no-shows.',
    },
  ];

  return (
    <section id="portfolio" style={{ padding: '100px 0', background: '#fcfbff', position: 'relative' }}>
      <div className="container-wide">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            PORTFOLIO
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#0f0c24',
              marginBottom: '16px',
            }}
          >
            BUILT FOR CONVERSION. <span className="text-gradient-purple">NOT JUST FOR SHOW.</span>
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#4c4474', lineHeight: 1.6 }}>
            Every project starts with a clear business objective. Here's how we've built high-converting customer journeys around different acquisition goals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(108, 92, 231, 0.14)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(108, 92, 231, 0.06)',
              }}
              onClick={() => setActiveImage(proj)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6C5CE7';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(108, 92, 231, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108, 92, 231, 0.14)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(108, 92, 231, 0.06)';
              }}
            >
              {/* Card Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: '#ede9fe',
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Floating Category Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    color: '#5846e0',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '5px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(108, 92, 231, 0.25)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 12px rgba(108, 92, 231, 0.1)',
                  }}
                >
                  {proj.category}
                </div>

                {/* Hover Quick View Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(15, 12, 36, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  }}
                  className="preview-overlay"
                >
                  <div
                    style={{
                      background: '#6C5CE7',
                      color: '#ffffff',
                      padding: '10px 18px',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Eye size={16} />
                    <span>View Case Study</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.22rem',
                      fontWeight: 800,
                      color: '#0f0c24',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {proj.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#6C5CE7',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '10px',
                    }}
                    dangerouslySetInnerHTML={{ __html: proj.stats }}
                  />

                  <p style={{ fontSize: '0.86rem', color: '#4c4474', lineHeight: 1.5 }}>
                    {proj.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#6C5CE7',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    marginTop: '18px',
                  }}
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(15, 12, 36, 0.85)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              background: '#ffffff',
              border: '1px solid rgba(108, 92, 231, 0.25)',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 30px 80px rgba(15, 12, 36, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 28px',
                borderBottom: '1px solid rgba(108, 92, 231, 0.12)',
                background: '#fcfbff',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f0c24' }}>{activeImage.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#6C5CE7', fontWeight: 700 }}>{activeImage.category}</p>
              </div>

              <button
                onClick={() => setActiveImage(null)}
                style={{
                  background: '#ede9fe',
                  border: 'none',
                  color: '#0f0c24',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image View */}
            <div style={{ overflowY: 'auto', maxHeight: 'calc(90vh - 90px)', padding: '24px' }}>
              <img
                src={activeImage.image}
                alt={activeImage.title}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
