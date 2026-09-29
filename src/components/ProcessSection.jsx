import React from 'react';
import { Search, Compass, Hammer, Cable, CheckSquare2, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      name: 'DISCOVER',
      icon: <Search size={22} style={{ color: '#6C5CE7' }} />,
      desc: 'We understand your offer, ideal customer, traffic source, sales process, and conversion goal.',
    },
    {
      num: '02',
      name: 'STRATEGIZE',
      icon: <Compass size={22} style={{ color: '#6C5CE7' }} />,
      desc: 'We determine what your prospect needs to see, understand, and believe before taking the next step.',
    },
    {
      num: '03',
      name: 'BUILD',
      icon: <Hammer size={22} style={{ color: '#6C5CE7' }} />,
      desc: 'Our team develops the pages, funnel flow, high-converting copy, forms, and conversion elements.',
    },
    {
      num: '04',
      name: 'CONNECT',
      icon: <Cable size={22} style={{ color: '#6C5CE7' }} />,
      desc: 'We integrate your CRM, calendar, email, SMS, workflows, tracking, and AI calling where required.',
    },
    {
      num: '05',
      name: 'TEST',
      icon: <CheckSquare2 size={22} style={{ color: '#6C5CE7' }} />,
      desc: 'We test the complete journey to make sure pages, forms, integrations, notifications, and automations work flawlessly.',
    },
    {
      num: '06',
      name: 'LAUNCH',
      icon: <Rocket size={22} style={{ color: '#6C5CE7' }} />,
      desc: 'Your funnel goes live and is ready to receive traffic and print qualified booked appointments.',
    },
  ];

  return (
    <section id="process" style={{ padding: '100px 0', background: '#fcfbff', position: 'relative' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            HOW WE DO IT
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
            WE BUILD AROUND <span className="text-gradient-purple">YOUR SALES PROCESS.</span>
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#4c4474', lineHeight: 1.6 }}>
            Every business has a different offer, audience, and buying journey. So we don't force your business into a rigid cookie-cutter template.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(108, 92, 231, 0.14)',
                borderRadius: '20px',
                padding: '32px 28px',
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px rgba(108, 92, 231, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6C5CE7';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(108, 92, 231, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108, 92, 231, 0.14)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(108, 92, 231, 0.05)';
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.8rem',
                      fontWeight: 900,
                      color: '#6C5CE7',
                    }}
                  >
                    {step.num}
                  </span>

                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#ede9fe',
                      border: '1px solid rgba(108, 92, 231, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#0f0c24',
                    marginBottom: '10px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {step.name}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#4c4474', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  height: '3px',
                  width: '100%',
                  background: '#f1effa',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${((idx + 1) / 6) * 100}%`,
                    background: 'linear-gradient(90deg, #6C5CE7 0%, #A78BFA 100%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
