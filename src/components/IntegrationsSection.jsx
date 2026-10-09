import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    { name: 'Stripe', category: 'Payment Gateway', icon: '💳' },
    { name: 'QuickBooks', category: 'Accounting Sync', icon: '📊' },
    { name: 'Xero', category: 'Bookkeeping', icon: '📈' },
    { name: 'Slack', category: 'Real-Time Alerts', icon: '💬' },
    { name: 'Zapier', category: 'Automated Workflows', icon: '⚡' },
    { name: 'Plaid', category: 'Bank Connectivity', icon: '🏦' },
    { name: 'Salesforce', category: 'CRM & Pipeline', icon: '☁️' },
    { name: 'HubSpot', category: 'Revenue Operations', icon: '🎯' },
  ];

  return (
    <section
      id="intergration"
      style={{
        padding: '120px 0',
        background: '#121214',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 64px auto' }}>
          {/* Badge: 03 integrations */}
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
              03
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
              integrations
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
            Seamless Integrations for a Seamless Financial Life.
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#8f8f8f', maxWidth: '680px', margin: '0 auto' }}>
            Connect with your existing accounting tools, bank accounts, payment processors, and CRMs in just a few clicks.
          </p>
        </div>

        {/* Integration Graphic Card */}
        <div
          style={{
            background: '#1b1b1f',
            border: '1px solid #292929',
            borderRadius: '32px',
            padding: '50px 30px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              maxWidth: '1080px',
              margin: '0 auto 40px auto',
            }}
          >
            {integrations.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#121214',
                  border: '1px solid #292929',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#6262fe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#292929';
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: '#212124',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>{item.name}</div>
                  <div style={{ fontSize: '0.84rem', color: '#8f8f8f', marginTop: '2px' }}>{item.category}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              background: '#381ac9',
              color: '#ffffff',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.94rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(56, 26, 201, 0.35)',
            }}
          >
            <span>Explore All 100+ Integrations</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
