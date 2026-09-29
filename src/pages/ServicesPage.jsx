import React from 'react';
import { Sparkles, PhoneCall, Layers, Bot, Zap, ArrowRight, Check, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      id: 'high-ticket',
      title: 'High-Ticket Funnel Architecture',
      tag: 'FLAGSHIP ENGINE',
      badgeColor: '#6366f1',
      desc: 'Engineered for agencies, consultants, and premium service firms selling $3k–$50k+ offers. We craft psychological qualification flows that weed out tire-kickers and pack calendars with pre-sold decision makers.',
      benefits: [
        'Custom direct-response copy written by senior conversion strategists',
        'Multi-step dynamic qualification questionnaires',
        'Seamless integration with Calendly, GoHighLevel & HubSpot',
        'Average +285% qualified appointment lift',
      ],
      icon: <Layers size={28} style={{ color: '#6366f1' }} />,
      stat: '+340% Pipeline ROI',
    },
    {
      id: 'vsl-engines',
      title: 'VSL & Video Persuasion Funnels',
      tag: 'CONVERSION PSYCHOLOGY',
      badgeColor: '#0284c7',
      desc: 'Convert cold traffic into hungry buyers before they even speak to your sales team. We script, design, and engineer full VSL acquisition funnels with embedded objection handling and high-converting micro-commitments.',
      benefits: [
        'Hollywood-grade direct-response persuasion frameworks',
        'Custom interactive video players with timestamped action gates',
        'Fast-loading sub-second video hosting integration',
        'Proven to increase sales call closing rates by 2.4x',
      ],
      icon: <Zap size={28} style={{ color: '#38bdf8' }} />,
      stat: '4.8x Return On Ad Spend',
    },
    {
      id: 'low-ticket',
      title: 'Low-Ticket & 1-Click Upsell Stacks',
      tag: 'SELF-LIQUIDATING',
      badgeColor: '#059669',
      desc: 'Acquire customers for free with self-liquidating front-end digital offers and dynamic 1-click upsell sequences that immediately pay off customer acquisition costs (CAC).',
      benefits: [
        'High-converting checkout pages with animated order bumps',
        'Post-purchase 1-click upsell and downsell logic',
        'Stripe & PayPal frictionless checkout optimization',
        '68% average order bump attach rate',
      ],
      icon: <CheckCircle2 size={28} style={{ color: '#34d399' }} />,
      stat: '$142 Average Order Value',
    },
    {
      id: 'ai-calling',
      title: '<60s AI Voice Calling Agents',
      tag: 'AUTONOMOUS SPEED-TO-LEAD',
      badgeColor: '#7c3aed',
      desc: 'When a prospect submits an application, our custom AI calling agent dials them in under 60 seconds, qualifies their budget, answers their questions in natural human voice, and secures their calendar spot.',
      benefits: [
        '<60 second instant speed-to-lead response time',
        'Ultra-realistic human conversational latency (<500ms)',
        'Automatic CRM status sync and live calendar booking',
        'Surges call show-up rates to 89%+',
      ],
      icon: <PhoneCall size={28} style={{ color: '#a78bfa' }} />,
      stat: '89% Show-Up Rate Guarantee',
    },
    {
      id: 'crm-automation',
      title: 'Omnichannel CRM & SMS Automations',
      tag: 'MAXIMUM SHOW RATES',
      badgeColor: '#d97706',
      desc: 'Eliminate no-shows and revive lost leads with multi-touch automated follow-up sequences across SMS, email, voice drops, and calendar pre-framing.',
      benefits: [
        'Full GoHighLevel, HubSpot, Zapier, and webhook orchestration',
        'Dynamic multi-day reminder sequences with video pre-framing',
        'Automated lead reactivation campaigns for dormant databases',
        'Zero manual chasing required from your sales reps',
      ],
      icon: <Bot size={28} style={{ color: '#fbbf24' }} />,
      stat: '100% Automated Workflow',
    },
  ];

  return (
    <div style={{ paddingTop: '100px', background: '#06040f', minHeight: '100vh', color: '#ffffff' }}>
      {/* Hero Header */}
      <section style={{ padding: '60px 0 50px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 20px',
              borderRadius: '999px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1.5px solid rgba(167, 139, 250, 0.4)',
              color: '#c4b5fd',
              fontSize: '0.82rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={15} style={{ color: '#a78bfa' }} />
            <span>END-TO-END CONVERSION ARCHITECTURE</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            EVERY CAPABILITY YOU NEED <br />
            <span className="text-gradient-purple">TO PRINT QUALIFIED PIPELINE.</span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              maxWidth: '740px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            From custom psychology-driven landing pages to &lt;60s AI calling agents and automated CRM orchestration, we engineer complete conversion engines that turn marketing attention into high-ticket revenue.
          </p>

          <Link to="/contact" className="btn-fire">
            <span>GET YOUR CUSTOM FUNNEL BUILT ➔</span>
          </Link>
        </div>
      </section>

      {/* Detailed Services Stack */}
      <section style={{ padding: '40px 0 90px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {services.map((srv, idx) => (
              <div
                key={srv.id}
                style={{
                  background: 'rgba(18, 14, 28, 0.9)',
                  border: '1.5px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '24px',
                  padding: '40px 36px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '36px',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
                className="hero-grid-split"
              >
                {/* Left Col: Overview */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {srv.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 900,
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: `${srv.badgeColor}22`,
                        color: srv.badgeColor,
                        border: `1px solid ${srv.badgeColor}44`,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {srv.tag}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)',
                      fontWeight: 900,
                      color: '#ffffff',
                      marginBottom: '14px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {srv.title}
                  </h2>

                  <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '24px' }}>
                    {srv.desc}
                  </p>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 18px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: '#38bdf8',
                    }}
                  >
                    <span>✦ Benchmark: {srv.stat}</span>
                  </div>
                </div>

                {/* Right Col: Benefits Card */}
                <div
                  style={{
                    background: 'rgba(10, 6, 20, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '28px 24px',
                  }}
                >
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                    What You Get:
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {srv.benefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.45 }}>
                        <Check size={18} style={{ color: '#34d399', flexShrink: 0, marginTop: '2px', strokeWidth: 3 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <Link
                      to="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#38bdf8',
                        fontSize: '0.86rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                      }}
                    >
                      <span>Inquire about this capability</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
