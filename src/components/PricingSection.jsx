import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      badge: 'Free Forever',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      period: '/ month',
      description: 'Essential personal and early-stage finance tracking with automated categorisation.',
      features: [
        'Up to 3 connected bank accounts',
        'Basic spend categorisation',
        'Standard digital wallet support',
        'Email customer support',
      ],
      ctaText: 'Get Started Free',
      ctaHref: '/contact',
      highlight: false,
    },
    {
      name: 'Pro',
      badge: 'Most Popular',
      price: billingCycle === 'monthly' ? '$29' : '$24',
      period: '/ month',
      description: 'Comprehensive spend management, corporate card issuance, and automated forecasting.',
      features: [
        'Unlimited connected accounts & cards',
        'Virtual card issuance with custom limits',
        'AI cash-flow runway forecasting',
        'Multi-currency treasury support',
        'Automated receipt matching & export',
        'Priority 24/7 support',
      ],
      ctaText: 'Start 14-Day Free Trial',
      ctaHref: '/contact',
      highlight: true,
    },
    {
      name: 'Enterprise',
      badge: 'Custom Scale',
      price: billingCycle === 'monthly' ? '$99' : '$79',
      period: '/ month',
      description: 'Custom global multi-entity infrastructure with dedicated account manager and SLA.',
      features: [
        'Everything in Pro, plus:',
        'Unlimited team members & granular RBAC',
        'Custom ERP & accounting integrations',
        'Dedicated treasury specialist',
        'Custom SSO & 99.99% uptime SLA',
      ],
      ctaText: 'Contact Enterprise Sales',
      ctaHref: '/contact',
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
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
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          {/* Badge: 05 pricing */}
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
              05
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
              pricing
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
            Simple Plans for Smarter Finances.
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#8f8f8f', maxWidth: '680px', margin: '0 auto 36px auto' }}>
            Choose the plan that fits your growth. No hidden setup fees or contracts.
          </p>

          {/* Billing Cycle Toggle */}
          <div style={{ display: 'inline-flex', background: '#1b1b1f', padding: '4px', borderRadius: '9999px', border: '1px solid #292929' }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                color: billingCycle === 'monthly' ? '#ffffff' : '#8f8f8f',
                background: billingCycle === 'monthly' ? '#381ac9' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                color: billingCycle === 'yearly' ? '#ffffff' : '#8f8f8f',
                background: billingCycle === 'yearly' ? '#381ac9' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: plan.highlight ? '#1b1736' : '#1b1b1f',
                border: plan.highlight ? '1.5px solid #6262fe' : '1px solid #292929',
                borderRadius: '28px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: plan.highlight ? '0 20px 60px rgba(98, 98, 254, 0.2)' : 'none',
              }}
              className="scroll-reveal"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>{plan.name}</span>
                  <span
                    style={{
                      background: plan.highlight ? '#381ac9' : '#212124',
                      color: plan.highlight ? '#ffffff' : '#bebeff',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: '#ffffff' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.94rem', color: '#8f8f8f' }}>{plan.period}</span>
                </div>

                <p style={{ fontSize: '0.96rem', color: '#8f8f8f', lineHeight: 1.55, marginBottom: '28px' }}>
                  {plan.description}
                </p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', marginBottom: '32px' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#efefef', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    What's Included:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {plan.features.map((feat, fidx) => (
                      <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: plan.highlight ? '#6262fe' : '#381ac9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Check size={11} color="#ffffff" />
                        </div>
                        <span style={{ fontSize: '0.92rem', color: '#d9d9d9' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={plan.ctaHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '16px',
                  background: plan.highlight ? '#381ac9' : '#ffffff',
                  color: plan.highlight ? '#ffffff' : '#121214',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.96rem',
                  textDecoration: 'none',
                  boxShadow: plan.highlight ? '0 10px 25px rgba(56, 26, 201, 0.4)' : 'none',
                }}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
