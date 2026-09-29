import React from 'react';
import { Check } from 'lucide-react';

export default function StickyProcessCardsSection() {
  const processCards = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Audit & Strategy',
      bg: 'linear-gradient(180deg, #064e3b 0%, #065f46 60%, #047857 100%)',
      borderColor: '#34d399',
      pinColor: '#10b981',
      tagBg: '#022c22',
      items: [
        'Deep offer breakdown & ICP analysis',
        'Competitor conversion analysis',
        'Traffic source & unit economics audit',
        'Exact conversion goal & KPI definition',
      ],
      rotation: '-2deg',
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      subtitle: 'Copy & Psychological Flow',
      bg: 'linear-gradient(180deg, #0c4a6e 0%, #0369a1 60%, #0284c7 100%)',
      borderColor: '#38bdf8',
      pinColor: '#0ea5e9',
      tagBg: '#082f49',
      items: [
        'High-converting wireframes & page map',
        'Direct-response hook & sales copy',
        'VSL persuasion script & lead magnets',
        'Qualification questionnaire logic',
      ],
      rotation: '1.5deg',
    },
    {
      num: '03',
      title: 'BUILD & CONNECT',
      subtitle: 'Design, Dev & Automations',
      bg: 'linear-gradient(180deg, #312e81 0%, #4338ca 60%, #6366f1 100%)',
      borderColor: '#818cf8',
      pinColor: '#6366f1',
      tagBg: '#1e1b4b',
      items: [
        'Custom high-performance page coding',
        'CRM, Stripe & calendar sync',
        'Multi-touch email & SMS sequences',
        'Dynamic order bumps & upsell flows',
      ],
      rotation: '-1.5deg',
    },
    {
      num: '04',
      title: 'AI CALL & LAUNCH',
      subtitle: 'Voice Bot & Go Live',
      bg: 'linear-gradient(180deg, #581c87 0%, #7e22ce 60%, #9333ea 100%)',
      borderColor: '#c084fc',
      pinColor: '#a855f7',
      tagBg: '#3b0764',
      items: [
        '<60s AI calling agent deployment',
        'End-to-end journey & form testing',
        'Real-time tracking & attribution setup',
        'Live launch & post-launch optimization',
      ],
      rotation: '2deg',
    },
  ];

  return (
    <section id="process" style={{ padding: '100px 0', background: '#0a0714', position: 'relative' }}>
      <div className="container-wide">
        {/* Section Headline */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          <div className="badge-pill-cyan" style={{ marginBottom: '14px' }}>
            HOW WE DO IT
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            DISCOVER <span style={{ color: '#38bdf8' }}>➔</span> STRATEGIZE <span style={{ color: '#818cf8' }}>➔</span> BUILD <span style={{ color: '#c084fc' }}>➔</span> <span className="text-gradient-purple">LAUNCH.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            Every business has a different offer, audience, and buying journey. Here is our exact 4-stage conversion execution roadmap.
          </p>
        </div>

        {/* 4 Colorful Angled Sticky-Note Process Cards (matching reference layout) */}
        <div
          className="four-col-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {processCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                background: card.bg,
                border: `2.5px solid ${card.borderColor}`,
                borderRadius: '24px',
                padding: '36px 26px 30px 26px',
                position: 'relative',
                transform: `rotate(${card.rotation})`,
                boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '390px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) translateY(-10px) scale(1.03)';
                e.currentTarget.style.boxShadow = `0 30px 60px ${card.pinColor}44`;
                e.currentTarget.style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${card.rotation}) translateY(0) scale(1)`;
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.7)';
                e.currentTarget.style.zIndex = '1';
              }}
            >
              {/* Push Pin Icon (matching reference sticky note detail) */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: card.pinColor,
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: '#ffffff',
                    }}
                  >
                    {card.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: card.tagBg,
                      color: '#ffffff',
                      border: `1px solid ${card.borderColor}`,
                    }}
                  >
                    Stage {card.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    marginBottom: '4px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.title}
                </h3>

                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.9)', fontWeight: 700, marginBottom: '20px' }}>
                  {card.subtitle}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
                  {card.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#ffffff', lineHeight: 1.4 }}>
                      <Check size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px', strokeWidth: 3 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
