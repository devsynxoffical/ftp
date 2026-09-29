import React from 'react';
import { Briefcase, GraduationCap, Crown, Building2, Scale, BookOpenCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function WhoWeWorkWithSection() {
  const categories = [
    {
      step: 'CATEGORY 01',
      title: 'Agencies & Service Firms',
      icon: <Briefcase size={20} color="#ffffff" />,
      desc: 'Generate better-fit prospects and turn marketing traffic into qualified discovery calls.',
      highlight: 'Turn cold traffic into high-retainer clients',
      accentColor: '#8b5cf6',
      accentGradient: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 100%)',
    },
    {
      step: 'CATEGORY 02',
      title: 'Coaches & Consultants',
      icon: <GraduationCap size={20} color="#ffffff" />,
      desc: 'Build a structured journey that turns interest into applications and sales conversations.',
      highlight: 'Scale enrollment without endless manual DMs',
      accentColor: '#38bdf8',
      accentGradient: 'linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)',
    },
    {
      step: 'CATEGORY 03',
      title: 'High-Ticket Services',
      icon: <Crown size={20} color="#ffffff" />,
      desc: 'Present your offer, qualify prospects, and get serious buyers onto your calendar.',
      highlight: 'Eliminate unvetted low-budget calls',
      accentColor: '#6366f1',
      accentGradient: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
    },
    {
      step: 'CATEGORY 04',
      title: 'B2B & SaaS Companies',
      icon: <Building2 size={20} color="#ffffff" />,
      desc: 'Create a conversion path designed to engage and qualify potential clients before sales steps in.',
      highlight: 'Shorten sales cycle & boost deal velocity',
      accentColor: '#10b981',
      accentGradient: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
    },
    {
      step: 'CATEGORY 05',
      title: 'Professional Services',
      icon: <Scale size={20} color="#ffffff" />,
      desc: 'Turn expertise and credibility into a predictable path toward consultation bookings.',
      highlight: 'Convert high-value local & national clients',
      accentColor: '#06b6d4',
      accentGradient: 'linear-gradient(90deg, #06b6d4 0%, #14b8a6 100%)',
    },
    {
      step: 'CATEGORY 06',
      title: 'Info & Education',
      icon: <BookOpenCheck size={20} color="#ffffff" />,
      desc: 'Use VSLs, low-ticket offers, bridge funnels, and automated journeys to turn attention into buyers.',
      highlight: 'Self-liquidating front-end to high-ticket back-end',
      accentColor: '#eab308',
      accentGradient: 'linear-gradient(90deg, #eab308 0%, #fbbf24 100%)',
    },
  ];

  return (
    <section id="who-we-work-with" style={{ padding: '100px 0', background: '#f8fafc', position: 'relative' }}>
      <div className="container-wide">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 20px',
              borderRadius: '999px',
              background: 'rgba(99, 102, 241, 0.12)',
              color: '#4338ca',
              fontSize: '0.8rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={14} />
            <span>WHO WE WORK WITH</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            BUILT FOR BUSINESSES THAT <br />
            <span style={{ background: '#fef08a', color: '#854d0e', padding: '2px 14px', borderRadius: '8px' }}>
              SELL THROUGH CONVERSATION.
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
            Our funnels are designed for businesses where generating the <strong style={{ color: '#0f172a' }}>right sales conversation</strong> matters more than simply generating clicks or cheap leads.
          </p>
        </div>

        {/* 6 Cards Grid (Matching reference screenshot card design) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '50px',
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '24px',
                padding: '34px 28px 26px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.04)',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = cat.accentColor;
                e.currentTarget.style.boxShadow = `0 20px 45px ${cat.accentColor}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(15, 23, 42, 0.04)';
              }}
            >
              {/* Top Colored Accent Stripe */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: cat.accentGradient,
                }}
              />

              <div>
                {/* Top Row: Pill Tag + Black Icon Circle */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '5px 14px',
                      borderRadius: '999px',
                      background: 'rgba(124, 58, 237, 0.08)',
                      color: '#6d28d9',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cat.step}
                  </span>

                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#0f172a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 16px rgba(15, 23, 42, 0.25)',
                    }}
                  >
                    {cat.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.38rem',
                    fontWeight: 900,
                    color: '#0f172a',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {cat.title}
                </h3>

                {/* Card Description */}
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
                  {cat.desc}
                </p>
              </div>

              {/* Card Footer: Highlight Outcome + Sparkle */}
              <div
                style={{
                  paddingTop: '18px',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 800, color: '#4338ca' }}>
                  <span style={{ color: cat.accentColor }}>✦</span>
                  <span>{cat.highlight}</span>
                </div>
                <Sparkles size={16} style={{ color: cat.accentColor, flexShrink: 0 }} />
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Scarcity Callout Box */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
            borderRadius: '24px',
            padding: '44px 36px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(67, 56, 202, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fef08a', marginBottom: '8px' }}>
            LIMITED CAPACITY ONBOARDING
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '14px',
              letterSpacing: '-0.01em',
            }}
          >
            WE ARE CURRENTLY ONBOARDING ONLY 4 NEW CLIENT BUILDS THIS MONTH.
          </h3>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.95)', maxWidth: '680px', margin: '0 auto 24px auto', lineHeight: 1.5 }}>
            To guarantee 5–10 day delivery and custom high-touch strategy, we strictly cap our build queue. Reserve your spot today.
          </p>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 40px',
              background: '#ffffff',
              color: '#4338ca',
              borderRadius: '999px',
              fontWeight: 900,
              fontSize: '0.98rem',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
          >
            <span>APPLY FOR YOUR FUNNEL BUILD ➔</span>
          </a>
        </div>
      </div>
    </section>
  );
}
