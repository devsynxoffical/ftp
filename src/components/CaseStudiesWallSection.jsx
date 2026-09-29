import React, { useState } from 'react';
import { X, Sparkles, ExternalLink, ZoomIn } from 'lucide-react';

export default function CaseStudiesWallSection() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Real client work proofs downloaded from repository
  const caseStudies = [
    {
      id: 1,
      title: 'High-Ticket VSL & Application Flow',
      niche: 'Agency & High-Ticket Consulting',
      image: '/workprof/wp-001.webp',
      stats: '+340% Pipeline ROI • $185k/mo Added',
      category: 'HIGH-TICKET',
      statColor: '#fbbf24',
      badgeColor: '#6366f1',
    },
    {
      id: 2,
      title: 'Automated B2B Demo Acquisition',
      niche: 'B2B Enterprise & Tech Services',
      image: '/workprof/wp-002.webp',
      stats: '4.8x Return On Ad Spend',
      category: 'VSL',
      statColor: '#38bdf8',
      badgeColor: '#0284c7',
    },
    {
      id: 3,
      title: 'Self-Liquidating Low-Ticket Stack',
      niche: 'Digital Products & Education',
      image: '/workprof/wp-003.webp',
      stats: '68% Order Bump Rate • $142 AOV',
      category: 'LOW-TICKET',
      statColor: '#34d399',
      badgeColor: '#059669',
    },
    {
      id: 4,
      title: 'Omnichannel AI Voice Booking Engine',
      niche: 'Professional Services',
      image: '/workprof/wp-004.webp',
      stats: '89% Show-Up Rate • <60s Response',
      category: 'AI CALLING',
      statColor: '#a78bfa',
      badgeColor: '#7c3aed',
    },
    {
      id: 5,
      title: 'Coaching Enrollment & Pre-Frame Funnel',
      niche: 'High-Ticket Mentorship',
      image: '/workprof/wp-005.webp',
      stats: '42 Qualified Calls Booked Weekly',
      category: 'HIGH-TICKET',
      statColor: '#fbbf24',
      badgeColor: '#6366f1',
    },
    {
      id: 6,
      title: 'Enterprise Calendar Qualification Flow',
      niche: 'SaaS & Custom Solutions',
      image: '/workprof/wp-006.webp',
      stats: '100% CRM & Calendar Sync',
      category: 'VSL',
      statColor: '#38bdf8',
      badgeColor: '#0284c7',
    },
    {
      id: 7,
      title: 'Tripwire + Multi-Tier Upsell Funnel',
      niche: 'Info-Marketing & Courses',
      image: '/workprof/wp-007.webp',
      stats: '$0 CAC Front-End Acquisition',
      category: 'LOW-TICKET',
      statColor: '#34d399',
      badgeColor: '#059669',
    },
    {
      id: 8,
      title: 'AI Lead Reactivation & SMS Pipeline',
      niche: 'Local & National Services',
      image: '/workprof/wp-008.webp',
      stats: '24/7 Autonomous Booking',
      category: 'AI CALLING',
      statColor: '#a78bfa',
      badgeColor: '#7c3aed',
    },
    {
      id: 9,
      title: 'Agency Scale & Client Retention Engine',
      niche: 'Marketing & Ad Agencies',
      image: '/workprof/wp-009.webp',
      stats: '$4,500 Retainer Won In 48h',
      category: 'HIGH-TICKET',
      statColor: '#fbbf24',
      badgeColor: '#6366f1',
    },
    {
      id: 10,
      title: 'Direct-Response VSL Funnel Architecture',
      niche: 'Consulting & B2B',
      image: '/workprof/wp-010.webp',
      stats: '5.2x ROAS Scaling to $75k/mo',
      category: 'VSL',
      statColor: '#38bdf8',
      badgeColor: '#0284c7',
    },
    {
      id: 11,
      title: '1-Click Dynamic Upsell & Order Bumps',
      niche: 'E-Learning & Digital Books',
      image: '/workprof/wp-011.webp',
      stats: '+44% Immediate Revenue Lift',
      category: 'LOW-TICKET',
      statColor: '#34d399',
      badgeColor: '#059669',
    },
    {
      id: 12,
      title: 'Autonomous Inbound Lead Qualification',
      niche: 'High-Growth Tech & Services',
      image: '/workprof/wp-012.webp',
      stats: '92% Accurate Lead Vetting',
      category: 'AI CALLING',
      statColor: '#a78bfa',
      badgeColor: '#7c3aed',
    },
  ];

  const filtered = activeFilter === 'ALL'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section id="case-studies" style={{ padding: '90px 0', background: '#06040a', position: 'relative' }}>
      <div className="container-wide">
        {/* Solid Indigo/Violet Banner Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4338ca 75%, #6366f1 100%)',
            borderRadius: '24px',
            padding: '48px 32px',
            textAlign: 'center',
            marginBottom: '40px',
            boxShadow: '0 15px 40px rgba(67, 56, 202, 0.45)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(0, 0, 0, 0.35)',
              color: '#fef08a',
              fontSize: '0.74rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
            }}
          >
            <Sparkles size={12} />
            <span>TRANSPARENT CLIENT EVIDENCE</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              marginBottom: '10px',
            }}
          >
            WE SHOW YOU <span style={{ background: '#ffffff', color: '#4338ca', padding: '0 12px', borderRadius: '6px' }}>EVERYTHING.</span>
          </h2>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.92)', maxWidth: '650px', margin: '0 auto 24px auto' }}>
            Real client funnels, live conversion architectures, and the exact pipelines we built to generate qualified calls.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {['ALL', 'HIGH-TICKET', 'VSL', 'LOW-TICKET', 'AI CALLING'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  background: activeFilter === filter ? '#ffffff' : 'rgba(0,0,0,0.3)',
                  color: activeFilter === filter ? '#4338ca' : '#ffffff',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.25s ease',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Real Work Proofs Grid - Full Screenshots Without Extra Description */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'start',
            marginBottom: '44px',
          }}
        >
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveImage(proj)}
              style={{
                background: 'rgba(18, 14, 28, 0.95)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid rgba(255, 255, 255, 0.12)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.65)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = proj.badgeColor;
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 20px 45px ${proj.badgeColor}44`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.65)';
              }}
            >
              {/* Full Uncropped Screenshot */}
              <div style={{ position: 'relative', width: '100%', background: '#0a0714' }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />

                {/* Floating Category Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: proj.badgeColor,
                    color: '#ffffff',
                    fontSize: '0.7rem',
                    fontWeight: 900,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                  }}
                >
                  {proj.category}
                </div>

                {/* Hover Zoom Icon Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  }}
                >
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="/contact" className="btn-fire">
            <span>GET A FUNNEL LIKE THIS FOR YOUR OFFER ➔</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal for Real Work Proofs */}
      {activeImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            background: 'rgba(4, 2, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '960px',
              width: '100%',
              maxHeight: '90vh',
              background: '#0d0922',
              border: '2px solid rgba(167, 139, 250, 0.4)',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 30px 80px rgba(0,0,0,0.95)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', background: '#120d30' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{activeImage.title}</h3>
                <p style={{ fontSize: '0.82rem', color: activeImage.statColor, fontWeight: 700 }}>{activeImage.niche} • {activeImage.stats}</p>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', color: '#ffffff', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ overflowY: 'auto', maxHeight: 'calc(90vh - 85px)', padding: '20px', background: '#080514' }}>
              <img
                src={activeImage.image}
                alt={activeImage.title}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
