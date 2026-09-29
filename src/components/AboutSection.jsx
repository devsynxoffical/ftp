import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="services"
      style={{
        padding: '100px 0',
        position: 'relative',
        background: '#f6f4fe',
      }}
    >
      <div className="container-wide">
        <div
          className="about-grid-split"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left: Copy & Details */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '16px' }}>
              WHAT WE DO
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.2vw, 2.9rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#0f0c24',
                marginBottom: '22px',
              }}
            >
              EVERYTHING YOU NEED TO TURN <span className="text-gradient-purple">TRAFFIC INTO CUSTOMERS.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#3b3363',
                marginBottom: '16px',
              }}
            >
              <strong style={{ color: '#0f0c24', fontWeight: 700 }}>Your funnel is more than a landing page.</strong>
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.7,
                color: '#4c4474',
                marginBottom: '32px',
              }}
            >
              We build the complete conversion journey — from the first click to the booked appointment — combining strategy, funnel development, automation, qualification, and follow-up.
            </p>

            {/* Metrics Counters Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
                padding: '24px 0',
                marginBottom: '32px',
                borderTop: '1px solid rgba(108, 92, 231, 0.15)',
                borderBottom: '1px solid rgba(108, 92, 231, 0.15)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.4rem',
                    fontWeight: 900,
                    color: '#6C5CE7',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  6+ Funnel Types
                </div>
                <div style={{ fontSize: '0.85rem', color: '#4c4474', fontWeight: 600 }}>
                  High-Ticket, VSL, Application & More
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.4rem',
                    fontWeight: 900,
                    color: '#5846e0',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  100% Automated
                </div>
                <div style={{ fontSize: '0.85rem', color: '#4c4474', fontWeight: 600 }}>
                  CRM, SMS, Email & AI Calling
                </div>
              </div>
            </div>

            <a href="#services-grid" className="btn-purple-pill">
              <span>Explore All Capabilities</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: Layered Overlapping Visual Stack */}
          <div style={{ position: 'relative', minHeight: '440px' }}>
            <div
              style={{
                position: 'relative',
                width: '88%',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(108, 92, 231, 0.12)',
                border: '1px solid rgba(108, 92, 231, 0.15)',
                background: '#ffffff',
              }}
            >
              <img
                src="/images/about-stack-1.png"
                alt="Funnel Strategy & Wireframe Blueprint"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '0',
                width: '65%',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(108, 92, 231, 0.2)',
                border: '2px solid #6C5CE7',
                background: '#ffffff',
              }}
            >
              <img
                src="/images/about-stack-2.png"
                alt="Live Pipeline & Automation Integration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Floating Authority Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '20px',
                background: '#ffffff',
                color: '#0f0c24',
                padding: '16px 22px',
                borderRadius: '18px',
                boxShadow: '0 15px 35px rgba(108, 92, 231, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(108, 92, 231, 0.25)',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#6C5CE7',
                  lineHeight: 1,
                }}
              >
                100%
              </span>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: '#4c4474',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginTop: '4px',
                  textAlign: 'center',
                }}
              >
                Custom Built
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
