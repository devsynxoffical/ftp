import React from 'react';
import { Briefcase, GraduationCap, Crown, Building2, Scale, BookOpenCheck } from 'lucide-react';

export default function WhoWeWorkWith() {
  const categories = [
    {
      title: 'Agencies',
      icon: <Briefcase size={24} style={{ color: '#6C5CE7' }} />,
      desc: 'Generate better-fit prospects and turn marketing traffic into qualified discovery calls.',
      highlight: 'Turn cold traffic into high-retainer clients',
    },
    {
      title: 'Coaches & Consultants',
      icon: <GraduationCap size={24} style={{ color: '#6C5CE7' }} />,
      desc: 'Build a structured journey that turns interest into applications and high-ticket sales conversations.',
      highlight: 'Scale enrollment without endless manual DMs',
    },
    {
      title: 'High-Ticket Service Providers',
      icon: <Crown size={24} style={{ color: '#6C5CE7' }} />,
      desc: 'Present your offer with authority, qualify prospects, and get serious buyers onto your calendar.',
      highlight: 'Eliminate unvetted low-budget calls',
    },
    {
      title: 'B2B Companies',
      icon: <Building2 size={24} style={{ color: '#6C5CE7' }} />,
      desc: 'Create a conversion path designed to engage and qualify enterprise clients before your sales team steps in.',
      highlight: 'Shorten sales cycle & boost deal velocity',
    },
    {
      title: 'Professional Services',
      icon: <Scale size={24} style={{ color: '#6C5CE7' }} />,
      desc: 'Turn domain expertise and credibility into a predictable, automated path toward consultation bookings.',
      highlight: 'Convert high-value local & national clients',
    },
    {
      title: 'Information & Education Businesses',
      icon: <BookOpenCheck size={24} style={{ color: '#6C5CE7' }} />,
      desc: 'Use VSLs, low-ticket offers, bridge funnels, and automated journeys to turn attention into buyers.',
      highlight: 'Self-liquidating front-end to high-ticket back-end',
    },
  ];

  return (
    <section id="who-we-work-with" style={{ padding: '100px 0', background: '#f6f4fe', position: 'relative' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            WHO WE WORK WITH
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
            BUILT FOR BUSINESSES THAT <span className="text-gradient-purple">SELL THROUGH CONVERSATION.</span>
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#4c4474', lineHeight: 1.6 }}>
            Our funnels are designed for businesses where generating the <strong style={{ color: '#0f0c24' }}>right sales conversation</strong> matters more than simply generating vanity clicks or cheap leads.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '24px',
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(108, 92, 231, 0.14)',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(108, 92, 231, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6C5CE7';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(108, 92, 231, 0.12)';
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
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#ede9fe',
                    border: '1px solid rgba(108, 92, 231, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {cat.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#0f0c24',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {cat.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#4c4474', lineHeight: 1.6, marginBottom: '20px' }}>
                  {cat.desc}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(108, 92, 231, 0.1)',
                  fontSize: '0.8rem',
                  color: '#5846e0',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ color: '#6C5CE7' }}>✦</span>
                <span>{cat.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
