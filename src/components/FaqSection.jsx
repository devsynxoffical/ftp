import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does OneFin sync with my existing bank and accounting software?',
      a: 'OneFin uses secure, encrypted Open Banking APIs and direct Plaid integrations to sync real-time transactions with zero manual entry required. We support QuickBooks, Xero, NetSuite, and 10,000+ financial institutions worldwide.',
    },
    {
      q: 'Is my financial data secure on OneFin?',
      a: 'Yes, absolutely. We enforce 256-bit AES bank-grade encryption at rest and in transit, SOC 2 Type II compliance, multi-factor biometric authentication, and strict role-based access controls for your entire team.',
    },
    {
      q: 'Can I issue custom physical and virtual cards for team members?',
      a: 'Yes. You can instantly create virtual cards with pre-set spending limits, category restrictions, and single-use expiry dates. Physical cards can be dispatched worldwide directly to employee addresses.',
    },
    {
      q: 'What are the fees for international payments and multi-currency exchange?',
      a: 'We offer direct mid-market exchange rates with zero hidden markups. Payouts to 140+ countries settle within seconds, with transparent flat fee structures displayed before you hit send.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get full access to all Pro features for 14 days without any commitment. You can cancel at any time with a single click from your account dashboard.',
    },
  ];

  return (
    <section
      id="faq"
      style={{
        padding: '120px 0',
        background: '#121214',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', margin: '0 auto 60px auto' }}>
          {/* Badge: 07 faq */}
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
              07
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
              faq
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
            Got questions? We've got clear answers.
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#8f8f8f', maxWidth: '640px', margin: '0 auto' }}>
            Everything you need to know about setting up, integrating, and scaling your finances with OneFin.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: '#1b1b1f',
                  border: isOpen ? '1px solid #6262fe' : '1px solid #292929',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? '#381ac9' : '#212124',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <Minus size={16} color="#ffffff" /> : <Plus size={16} color="#8f8f8f" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 24px 28px',
                      color: '#8f8f8f',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255,255,255,0.05)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
