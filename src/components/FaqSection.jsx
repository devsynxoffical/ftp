import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What does Funnels That Print build?',
      a: 'We build conversion-focused funnels and the supporting systems around them, including landing pages, high-ticket funnels, VSLs, low-ticket funnels, bridge funnels, application flows, automations, CRM workflows, and AI calling.',
    },
    {
      q: 'Can you build the funnel from scratch?',
      a: 'Yes. We handle the complete end-to-end scope: conversion strategy, wireframing, copywriting, UI/UX design, custom frontend development, CRM/calendar integrations, tracking, and automation.',
    },
    {
      q: 'Can you work with my existing funnel?',
      a: 'Yes. If you already have an existing funnel or landing page, we can audit, optimize, rebuild, or connect it with the follow-up and AI calling systems you need to maximize pipeline conversions.',
    },
    {
      q: 'Do you build low-ticket funnels?',
      a: 'Yes. We can build the complete customer journey, including sales pages, high-converting checkout flows, 1-click upsells, downsells, order bumps, and automated post-purchase sequences.',
    },
    {
      q: 'What is a bridge funnel?',
      a: 'A bridge funnel prepares and warms up a prospect before they reach your primary offer. It is particularly useful when sending cold traffic toward an offer that requires additional education, authority, or trust.',
    },
    {
      q: 'What does the AI Calling Agent do?',
      a: 'It automatically engages new leads in under 60 seconds, conducts an intelligent two-way conversation, asks qualifying questions, answers common FAQs, and helps move qualified prospects straight onto your sales calendar.',
    },
    {
      q: 'Can you set up my automations?',
      a: 'Yes. We build comprehensive workflows for lead nurturing, email, SMS, appointment reminders, no-show follow-ups, lead reactivation, pipeline stage movement, and internal team notifications.',
    },
    {
      q: 'Do you integrate with CRMs?',
      a: 'Yes. We connect your funnel with platforms like GoHighLevel, HubSpot, ActiveCampaign, Close, Salesforce, Stripe, Zapier, Make, and your calendar booking tools.',
    },
    {
      q: 'Do I need paid advertising?',
      a: 'No. Your funnel can work effectively with paid ads (Meta, Google, YouTube, LinkedIn), organic social traffic, email newsletters, outbound campaigns, referrals, or partner channels.',
    },
    {
      q: 'How long does a funnel take to build?',
      a: 'Most projects take approximately 5–10 business days, depending on the scope, number of pages, custom integrations, and automation requirements.',
    },
    {
      q: 'Do you guarantee results?',
      a: 'A funnel\'s performance depends on multiple variables, including offer strength, target market, traffic quality, and sales execution. We don\'t promise an arbitrary number of appointments. Our focus is engineering high-standard infrastructure to give your traffic the highest mathematical probability of becoming a qualified booked call.',
    },
  ];

  return (
    <section id="faq" style={{ padding: '100px 0', background: '#f6f4fe', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} />
            <span>GOT QUESTIONS?</span>
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
            FREQUENTLY ASKED <span className="text-gradient-purple">QUESTIONS</span>
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#4c4474', lineHeight: 1.6 }}>
            Everything you need to know about working with Funnels That Print, our process, and our systems.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: isOpen ? '1.5px solid #6C5CE7' : '1px solid rgba(108, 92, 231, 0.14)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 10px 30px rgba(108, 92, 231, 0.1)' : '0 2px 8px rgba(108, 92, 231, 0.04)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#0f0c24',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: isOpen ? '#6C5CE7' : '#0f0c24',
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? '#6C5CE7' : '#ede9fe',
                      color: isOpen ? '#ffffff' : '#6C5CE7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 26px 24px 26px',
                      fontSize: '0.96rem',
                      color: '#4c4474',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(108, 92, 231, 0.1)',
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
