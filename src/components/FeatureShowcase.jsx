import React, { useState } from 'react';
import { ArrowRight, Check, CreditCard, Shield, TrendingUp, Wallet, Sparkles } from 'lucide-react';

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'spend',
      title: 'Spend Management',
      badge: 'Real-Time Control',
      headline: 'Control business spend before it happens',
      description: 'Issue physical and virtual corporate cards with customized limits, automated receipt capture, and real-time reconciliation into your accounting software.',
      image: '/assets/6CbwTWOUsbOpSNj52T15yRoxGM.png',
      bullets: [
        'Instant multi-currency virtual card issuance',
        'Custom per-card spending rules and automated approval flows',
        'Zero-touch receipt matching via mobile camera or email',
      ],
    },
    {
      id: 'payments',
      title: 'Digital Payments',
      badge: 'Global Rail',
      headline: 'Pay and get paid. Quickly, safely, globally.',
      description: 'Send local and cross-border payments with zero hidden fees. Seamlessly accept payments via card, ACH, wire, and digital wallets with sub-second settlements.',
      image: '/assets/UL7hK3woLUjXU0LpurNkooViFeA.png',
      bullets: [
        'Instant global payouts in 140+ currencies',
        'Transparent mid-market FX rates with zero markups',
        'Smart retry routing with 99.98% authorization rates',
      ],
    },
    {
      id: 'wealth',
      title: 'Investments & Wealth',
      badge: 'Growth Engine',
      headline: 'Grow your wealth with confidence.',
      description: 'Automated portfolio rebalancing, high-yield treasury management, and institutional-grade forecasting tools that keep your surplus capital working 24/7.',
      image: '/assets/TMNxftgk8yXRurYjmU8hiedCo.png',
      bullets: [
        'Automated sweeps into yield-bearing government treasuries',
        'Predictive runway models with dynamic cash-flow stress testing',
        'Real-time valuation dashboard for liquid and illiquid assets',
      ],
    },
  ];

  const current = features[activeTab];

  return (
    <section
      id="features"
      style={{
        padding: '120px 0',
        background: '#0c0c0e',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          {/* Badge: 02 features */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <div
              style={{
                transform: 'rotate(-12deg)',
                background: '#212124',
                border: '1px solid #292929',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#8f8f8f',
              }}
            >
              02
            </div>
            <div
              style={{
                transform: 'rotate(6deg)',
                background: '#212124',
                border: '1px solid #292929',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#efefef',
                textTransform: 'lowercase',
              }}
            >
              features
            </div>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Everything Finance. Unified.
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#8f8f8f', maxWidth: '680px', margin: '0 auto' }}>
            From spend tracking to global payments and automated wealth intelligence, OneFin delivers a unified command center.
          </p>
        </div>

        {/* Tab Selector Capsule Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              background: '#1b1b1f',
              padding: '6px',
              borderRadius: '9999px',
              border: '1px solid #292929',
              gap: '4px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {features.map((feat, index) => {
              const active = activeTab === index;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(index)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    border: 'none',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    color: active ? '#ffffff' : '#8f8f8f',
                    background: active ? '#381ac9' : 'transparent',
                    boxShadow: active ? '0 4px 20px rgba(56, 26, 201, 0.4)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {feat.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Display Panel */}
        <div
          style={{
            background: '#18181c',
            border: '1px solid #292929',
            borderRadius: '32px',
            padding: '50px',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="scroll-reveal"
        >
          {/* Left Text Column */}
          <div style={{ gridColumn: 'span 12' }} className="feat-col-text">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#28119c',
                color: '#bebeff',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 14px',
                borderRadius: '999px',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={13} />
              <span>{current.badge}</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              {current.headline}
            </h3>

            <p style={{ fontSize: '1.05rem', color: '#8f8f8f', lineHeight: 1.65, marginBottom: '28px' }}>
              {current.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {current.bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: '#381ac9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} color="#ffffff" />
                  </div>
                  <span style={{ fontSize: '0.96rem', color: '#d9d9d9', fontWeight: 500 }}>{bullet}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: '#ffffff',
                color: '#121214',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.94rem',
                textDecoration: 'none',
              }}
            >
              <span>Explore {current.title}</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Image Graphic Preview */}
          <div style={{ gridColumn: 'span 12' }} className="feat-col-img">
            <div
              style={{
                background: '#121214',
                borderRadius: '24px',
                padding: '20px',
                border: '1px solid #292929',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              }}
            >
              <img
                src={current.image}
                alt={current.title}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
                onError={(e) => {
                  e.currentTarget.src = '/assets/6CbwTWOUsbOpSNj52T15yRoxGM.png';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .feat-col-text {
            grid-column: span 6 !important;
          }
          .feat-col-img {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
}
