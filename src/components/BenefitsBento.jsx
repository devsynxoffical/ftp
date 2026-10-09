import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function BenefitsBento() {
  return (
    <section
      id="benefit"
      style={{
        padding: '120px 0',
        background: '#121214',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 64px auto' }}>
          {/* Badge: 01 benefits */}
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
              01
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
              benefits
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
            Financial Control, Simplified.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: '#8f8f8f',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Our platform unites spending, saving, investing, and forecasting — giving you the clarity, control, and confidence to make smarter financial decisions every day.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
        >
          {/* Card 1 (Span 7): Simplify your spend */}
          <div
            style={{
              gridColumn: 'span 12',
              background: '#1b1b1f',
              border: '1px solid #292929',
              borderRadius: '28px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '460px',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="bento-col-7 scroll-reveal"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#28119c',
                  color: '#bebeff',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  marginBottom: '18px',
                  textTransform: 'uppercase',
                }}
              >
                <Zap size={13} />
                <span>Smart Spend Management</span>
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                Simplify your spend
              </h3>
              <p style={{ fontSize: '1rem', color: '#8f8f8f', lineHeight: 1.6, maxWidth: '520px' }}>
                Automatically organize expenses by type, card, and priority with intelligent categorisation and automated limits.
              </p>
            </div>

            {/* Asset Preview Graphic */}
            <div
              style={{
                marginTop: '32px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #292929',
                background: '#121214',
                padding: '16px',
              }}
            >
              <img
                src="/assets/MTWvVbpvgADVbsJWtetKoSw9k0.png"
                alt="Spend Breakdown"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Card 2 (Span 5): Get smart financial action */}
          <div
            style={{
              gridColumn: 'span 12',
              background: '#1b1b1f',
              border: '1px solid #292929',
              borderRadius: '28px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '460px',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="bento-col-5 scroll-reveal"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#212124',
                  color: '#9696ff',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  marginBottom: '18px',
                  textTransform: 'uppercase',
                }}
              >
                <span>Insights</span>
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                Get smart financial action
              </h3>
              <p style={{ fontSize: '1rem', color: '#8f8f8f', lineHeight: 1.6 }}>
                AI-driven analysis reveals cash-flow patterns and flags subscription leaks in real time.
              </p>
            </div>

            <div
              style={{
                marginTop: '32px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #292929',
                background: '#121214',
                padding: '16px',
              }}
            >
              <img
                src="/assets/pZ1TXGZjH7YWJsEXFgwkbMF4l4.png"
                alt="Insights Graph"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Card 3 (Span 5): Customized for your flow */}
          <div
            style={{
              gridColumn: 'span 12',
              background: '#1b1b1f',
              border: '1px solid #292929',
              borderRadius: '28px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
            }}
            className="bento-col-5 scroll-reveal"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#212124',
                  color: '#9696ff',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  marginBottom: '18px',
                  textTransform: 'uppercase',
                }}
              >
                <span>Automations</span>
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                Customized for your flow
              </h3>
              <p style={{ fontSize: '1rem', color: '#8f8f8f', lineHeight: 1.6 }}>
                Personalize approval rules, automated recurring budgets, and tailored visual reports effortlessly.
              </p>
            </div>

            <div
              style={{
                marginTop: '28px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #292929',
                background: '#121214',
                padding: '16px',
              }}
            >
              <img
                src="/assets/QI4Qj1ZM7uFgNfZZXBYJ79HXTWk.png"
                alt="Flow Builder"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Card 4 (Span 7): Secure every step */}
          <div
            style={{
              gridColumn: 'span 12',
              background: '#1b1b1f',
              border: '1px solid #292929',
              borderRadius: '28px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
            }}
            className="bento-col-7 scroll-reveal"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#28119c',
                  color: '#bebeff',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  marginBottom: '18px',
                  textTransform: 'uppercase',
                }}
              >
                <ShieldCheck size={13} />
                <span>Bank-Grade Infrastructure</span>
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                Secure every step
              </h3>
              <p style={{ fontSize: '1rem', color: '#8f8f8f', lineHeight: 1.6, maxWidth: '520px' }}>
                End-to-end 256-bit encryption, biometric authentication, and granular multi-factor controls protect every transaction.
              </p>
            </div>

            <div
              style={{
                marginTop: '28px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #292929',
                background: '#121214',
                padding: '16px',
              }}
            >
              <img
                src="/assets/A6FxHZ4VnALOG85Zj2DqCMmZsU.png"
                alt="Security Shield"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .bento-col-7 {
            grid-column: span 7 !important;
          }
          .bento-col-5 {
            grid-column: span 5 !important;
          }
        }
      `}</style>
    </section>
  );
}
