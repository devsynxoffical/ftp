import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Users, Filter, BellRing, PhoneCall, CalendarCheck, Sparkles } from 'lucide-react';

export default function AdvantageFlow() {
  const steps = [
    { title: 'TRAFFIC', subtitle: 'Paid, Organic & Outbound', icon: <Users size={22} />, color: '#4f46e5' },
    { title: 'FUNNEL', subtitle: 'High-Converting Copy & UX', icon: <Zap size={22} />, color: '#4f46e5' },
    { title: 'LEAD', subtitle: 'Opt-in & Intent Capture', icon: <CheckCircle2 size={22} />, color: '#4f46e5' },
    { title: 'QUALIFICATION', subtitle: 'Smart Multi-Step Survey', icon: <Filter size={22} />, color: '#4f46e5' },
    { title: 'AUTOMATED FOLLOW-UP', subtitle: 'Instant SMS & Email Triggers', icon: <BellRing size={22} />, color: '#4f46e5' },
    { title: 'AI CALLING', subtitle: '<60s Voice Agent Outreach', icon: <PhoneCall size={22} />, color: '#4f46e5' },
    { title: 'BOOKED CALL', subtitle: 'Qualified Pipeline on Calendar', icon: <CalendarCheck size={22} />, color: '#ffffff', highlight: true },
  ];

  return (
    <section id="advantage" style={{ padding: '100px 0', background: '#f8fafc', position: 'relative' }}>
      <div className="container-wide">
        {/* Section Header with High Contrast */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 56px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 20px',
              borderRadius: '999px',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1.5px solid rgba(99, 102, 241, 0.28)',
              color: '#4338ca',
              fontSize: '0.8rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={14} style={{ color: '#6366f1' }} />
            <span>THE FUNNELS THAT PRINT ADVANTAGE</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#0f172a',
              marginBottom: '16px',
            }}
          >
            ONE STRATEGY. <span style={{ color: '#6366f1' }}>EVERY PIECE</span> <span style={{ color: '#7c3aed' }}>CONNECTED.</span>
          </h2>

          <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.65, fontWeight: 500, maxWidth: '780px', margin: '0 auto' }}>
            A landing page shouldn't operate in a silo. Your funnel shouldn't operate separately from your CRM. And your leads shouldn't wait around for someone to follow up. We connect all moving parts into one frictionless system.
          </p>
        </div>

        {/* Interactive Flowchart Container */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            borderRadius: '24px',
            padding: '40px 24px',
            boxShadow: '0 12px 35px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div
            className="flow-grid-steps"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Step Card */}
                <div
                  style={{
                    background: step.highlight
                      ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
                      : '#f8fafc',
                    border: step.highlight
                      ? '2px solid #6366f1'
                      : '1.5px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '22px 18px',
                    textAlign: 'center',
                    minWidth: '150px',
                    flex: '1 1 140px',
                    boxShadow: step.highlight ? '0 12px 30px rgba(79, 70, 229, 0.35)' : 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    if (!step.highlight) {
                      e.currentTarget.style.borderColor = '#6366f1';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.12)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (!step.highlight) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: step.highlight ? 'rgba(255, 255, 255, 0.2)' : '#e0e7ff',
                      color: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px auto',
                    }}
                  >
                    {step.icon}
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.98rem',
                      fontWeight: 900,
                      color: step.highlight ? '#ffffff' : '#0f172a',
                      letterSpacing: '0.04em',
                      marginBottom: '4px',
                    }}
                  >
                    {step.title}
                  </div>

                  <div
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      color: step.highlight ? '#e0e7ff' : '#64748b',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.subtitle}
                  </div>
                </div>

                {/* Arrow Connector */}
                {idx < steps.length - 1 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6366f1',
                      opacity: 0.9,
                    }}
                  >
                    <ArrowRight size={20} className="flow-arrow-horizontal" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div
            style={{
              marginTop: '36px',
              paddingTop: '24px',
              borderTop: '1px solid #f1f5f9',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
                Average Funnel Lift: <strong style={{ color: '#0f172a' }}>3.2x Higher Qualified Show Rates</strong>
              </span>
            </div>

            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                color: '#ffffff',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.84rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <span>Map Your Conversion Journey</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
