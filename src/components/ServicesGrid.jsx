import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function ServicesGrid() {
  const funnelBuilds = [
    {
      title: 'High-Ticket Funnels',
      desc: 'Move prospects from initial interest to application and booked call.',
      icon: '/images/service-icons/high-ticket-funnels.svg',
      tag: 'High Conversion',
    },
    {
      title: 'Landing Pages',
      desc: 'Focused pages built around one offer and one conversion objective.',
      icon: '/images/service-icons/landing-pages.svg',
      tag: 'Fast Load',
    },
    {
      title: 'VSL Funnels',
      desc: 'Use video-led selling to educate prospects and move them toward action.',
      icon: '/images/service-icons/vsl-funnels.svg',
      tag: 'Authority',
    },
    {
      title: 'Low-Ticket Funnels',
      desc: 'Convert cold traffic into buyers with checkout flows, upsells, and downsells.',
      icon: '/images/service-icons/low-ticket-funnels.svg',
      tag: 'Self-Liquidating',
    },
    {
      title: 'Bridge Funnels',
      desc: 'Warm and pre-frame cold traffic before sending prospects to your primary offer.',
      icon: '/images/service-icons/bridge-funnels.svg',
      tag: 'Trust Engine',
    },
    {
      title: 'Application Funnels',
      desc: 'Collect the information your sales team needs while filtering for better-fit prospects.',
      icon: '/images/service-icons/application-funnels.svg',
      tag: 'Qualification',
    },
  ];

  const automations = [
    {
      title: 'Email & SMS Workflows',
      desc: 'Automated sequences for new leads, nurturing, reminders, follow-ups, and reactivation.',
      icon: '/images/service-icons/email-sms.svg',
      tag: 'Omnichannel',
    },
    {
      title: 'CRM Automation',
      desc: 'Move leads through your pipeline automatically based on their actions and intent.',
      icon: '/images/service-icons/crm-automation.svg',
      tag: 'Pipeline Sync',
    },
    {
      title: 'Appointment Workflows',
      desc: 'Automated confirmation, calendar reminders, rescheduling, and no-show follow-up.',
      icon: '/images/service-icons/appointment-workflows.svg',
      tag: 'Zero No-Shows',
    },
    {
      title: 'AI Calling Agent',
      desc: 'Automatically engage new leads, ask qualifying questions, answer common questions, and book appointments instantly.',
      icon: '/images/service-icons/ai-calling.svg',
      tag: 'AI Voice Tech',
      featured: true,
    },
  ];

  return (
    <section id="services-grid" style={{ padding: '100px 0', background: '#fcfbff', position: 'relative' }}>
      <div className="container-wide">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            COMPLETE CONVERSION STACK
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              color: '#0f0c24',
              marginBottom: '16px',
            }}
          >
            END-TO-END <span className="text-gradient-purple">FUNNEL & AUTOMATION</span> SYSTEMS
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#4c4474', lineHeight: 1.6 }}>
            Everything you need to turn cold visitors into booked, qualified sales calls. No disjointed tools, no leaky buckets.
          </p>
        </div>

        {/* 2-Column Menu Layout (matching reference layout) */}
        <div
          className="two-column-service-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px',
            background: '#ffffff',
            border: '1px solid rgba(108, 92, 231, 0.14)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 20px 50px rgba(108, 92, 231, 0.08)',
          }}
        >
          {/* Column 1: Funnel & Page Builds */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '18px',
                marginBottom: '24px',
                borderBottom: '2px solid rgba(108, 92, 231, 0.3)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: '#0f0c24',
                  letterSpacing: '-0.02em',
                }}
              >
                Funnel & Page Builds
              </h3>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6C5CE7', background: '#ede9fe', padding: '4px 10px', borderRadius: '6px' }}>
                6 Core Frameworks
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {funnelBuilds.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: '#fcfbff',
                    border: '1px solid rgba(108, 92, 231, 0.1)',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f5f3ff';
                    e.currentTarget.style.borderColor = '#6C5CE7';
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(108, 92, 231, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fcfbff';
                    e.currentTarget.style.borderColor = 'rgba(108, 92, 231, 0.1)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: '#ede9fe',
                      border: '1px solid rgba(108, 92, 231, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      padding: '10px',
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f0c24' }}>{item.title}</h4>
                      <span style={{ fontSize: '0.68rem', color: '#6C5CE7', fontWeight: 700, textTransform: 'uppercase' }}>
                        • {item.tag}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#4c4474', lineHeight: 1.45 }}>{item.desc}</p>
                  </div>

                  <ArrowUpRight size={18} style={{ color: '#8b83ba', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Automation & Follow-Up */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '18px',
                marginBottom: '24px',
                borderBottom: '2px solid rgba(108, 92, 231, 0.3)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: '#0f0c24',
                  letterSpacing: '-0.02em',
                }}
              >
                Automation & Follow-Up
              </h3>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6C5CE7', background: '#ede9fe', padding: '4px 10px', borderRadius: '6px' }}>
                4 Conversion Engines
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {automations.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    padding: item.featured ? '20px' : '16px 20px',
                    borderRadius: '16px',
                    background: item.featured ? '#f5f3ff' : '#fcfbff',
                    border: item.featured ? '2px solid #6C5CE7' : '1px solid rgba(108, 92, 231, 0.1)',
                    boxShadow: item.featured ? '0 8px 24px rgba(108, 92, 231, 0.12)' : 'none',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                    if (!item.featured) {
                      e.currentTarget.style.background = '#f5f3ff';
                      e.currentTarget.style.borderColor = '#6C5CE7';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    if (!item.featured) {
                      e.currentTarget.style.background = '#fcfbff';
                      e.currentTarget.style.borderColor = 'rgba(108, 92, 231, 0.1)';
                    }
                  }}
                >
                  <div
                    style={{
                      width: item.featured ? '62px' : '54px',
                      height: item.featured ? '62px' : '54px',
                      borderRadius: '14px',
                      background: item.featured ? '#6C5CE7' : '#ede9fe',
                      border: '1px solid rgba(108, 92, 231, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      padding: '10px',
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: item.featured ? '1.12rem' : '1.05rem', fontWeight: 800, color: item.featured ? '#5846e0' : '#0f0c24' }}>
                        {item.title}
                      </h4>
                      {item.featured && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.68rem', background: '#6C5CE7', color: '#ffffff', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>
                          <Sparkles size={10} /> HOT FEATURE
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#4c4474', lineHeight: 1.45 }}>{item.desc}</p>
                  </div>

                  <ArrowUpRight size={18} style={{ color: item.featured ? '#6C5CE7' : '#8b83ba', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
