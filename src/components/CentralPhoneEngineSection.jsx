import React from 'react';
import { ArrowRight, Zap, Bot, PhoneCall, Layers, Sparkles } from 'lucide-react';

export default function CentralPhoneEngineSection() {
  return (
    <section style={{ padding: '100px 0 80px 0', background: '#f8fafc', position: 'relative' }}>
      <div className="container-wide">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: '#e0e7ff',
              color: '#4338ca',
              fontSize: '0.8rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={14} />
            <span>ALL-IN-ONE GROWTH ARCHITECTURE</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.1,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            YOUR COMPLETE <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '2px 12px', borderRadius: '8px' }}>CONVERSION</span> &amp; GROWTH ENGINE.
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
            Your funnel is more than a landing page. We build the complete conversion journey — from the first click to the booked appointment — combining strategy, funnel development, automation, qualification, and follow-up.
          </p>
        </div>

        {/* Central Device Mockup + 4 Colorful Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr 1fr',
            gap: '30px',
            alignItems: 'center',
            maxWidth: '1220px',
            margin: '0 auto',
          }}
          className="hero-grid-split"
        >
          {/* Left 2 Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Card 1: Electric Indigo Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
                border: '1.5px solid rgba(99, 102, 241, 0.45)',
                borderRadius: '22px',
                padding: '26px',
                boxShadow: '0 15px 35px rgba(49, 46, 129, 0.25)',
                transition: 'all 0.3s ease',
                color: '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(99, 102, 241, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(49, 46, 129, 0.25)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ padding: '8px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '10px', color: '#38bdf8' }}>
                  <Zap size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>High-Ticket Funnels</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.5 }}>
                Move prospects seamlessly from initial curiosity to qualified application and calendar-booked discovery call.
              </p>
            </div>

            {/* Card 2: Sky Blue Card */}
            <div
              style={{
                background: '#ffffff',
                border: '2px solid #38bdf8',
                borderRadius: '22px',
                padding: '26px',
                boxShadow: '0 15px 35px rgba(56, 189, 248, 0.15)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(56, 189, 248, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(56, 189, 248, 0.15)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ padding: '8px', background: '#e0f2fe', borderRadius: '10px', color: '#0284c7' }}>
                  <Layers size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0f172a' }}>VSL &amp; Landing Pages</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                Use video-led selling to educate prospects, build instant authority, and drive qualified conversion action.
              </p>
            </div>
          </div>

          {/* Central Device Container */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '32px',
                padding: '14px',
                background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
                border: '2px solid #e2e8f0',
                boxShadow: '0 30px 80px rgba(15, 23, 42, 0.18), 0 0 40px rgba(99, 102, 241, 0.15)',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              <img
                src="/images/about-stack-2.png"
                alt="Funnels That Print Engine"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  display: 'block',
                }}
              />

              {/* Central Floating Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(124, 58, 237, 0.5)',
                }}
              >
                100% Custom Built Funnel Architecture
              </div>
            </div>
          </div>

          {/* Right 2 Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Card 3: Emerald Green Card */}
            <div
              style={{
                background: '#ffffff',
                border: '2px solid #10b981',
                borderRadius: '22px',
                padding: '26px',
                boxShadow: '0 15px 35px rgba(16, 185, 129, 0.15)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(16, 185, 129, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(16, 185, 129, 0.15)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ padding: '8px', background: '#dcfce7', borderRadius: '10px', color: '#15803d' }}>
                  <Bot size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0f172a' }}>CRM &amp; Automations</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                Move leads through your pipeline automatically based on their behavior, actions, and intent signals.
              </p>
            </div>

            {/* Card 4: Electric Violet Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #2e1065 0%, #581c87 50%, #7c3aed 100%)',
                border: '1.5px solid rgba(167, 139, 250, 0.45)',
                borderRadius: '22px',
                padding: '26px',
                boxShadow: '0 15px 35px rgba(124, 58, 237, 0.25)',
                transition: 'all 0.3s ease',
                color: '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(124, 58, 237, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(124, 58, 237, 0.25)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ padding: '8px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '10px', color: '#DDD6FE' }}>
                  <PhoneCall size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>AI Calling Agent</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.5 }}>
                Automatically engage new leads in &lt;60s, ask qualifying questions, and book qualified calls directly into your calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
