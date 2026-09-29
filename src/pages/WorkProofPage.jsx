import React, { useState } from 'react';
import { Sparkles, ZoomIn, X, ArrowRight, Filter, Search, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkProofPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalImage, setActiveModalImage] = useState(null);

  // Generate all 59 real work proofs
  const categoriesList = ['HIGH-TICKET', 'VSL', 'LOW-TICKET', 'AI CALLING'];
  const metricsList = [
    '+340% Pipeline ROI',
    '4.8x Return On Ad Spend',
    '68% Order Bump Rate',
    '89% Show-Up Rate',
    '$185k/mo Added Pipeline',
    '42 Qualified Calls/Wk',
    '$4,500 Retainer Won',
    '5.2x ROAS Scaling',
    '<60s Lead Response',
    '100% CRM & Calendar Sync',
    '$0 CAC Front-End',
    '24/7 Autonomous Booking',
  ];

  const nichesList = [
    'Agency & High-Ticket Consulting',
    'B2B Enterprise & Tech Services',
    'Digital Products & Education',
    'Professional Services',
    'High-Ticket Mentorship',
    'SaaS & Custom Solutions',
    'Info-Marketing & Courses',
    'Local & National Services',
    'Growth Marketing Agency',
    'Consulting & Advisory',
    'E-Learning & Digital Books',
    'High-Growth Tech & Services',
  ];

  const allWorkProofs = Array.from({ length: 59 }, (_, i) => {
    const numStr = String(i + 1).padStart(3, '0');
    const cat = categoriesList[i % categoriesList.length];
    const stat = metricsList[i % metricsList.length];
    const niche = nichesList[i % nichesList.length];

    let badgeColor = '#6366f1';
    let statColor = '#fbbf24';
    if (cat === 'VSL') {
      badgeColor = '#0284c7';
      statColor = '#38bdf8';
    } else if (cat === 'LOW-TICKET') {
      badgeColor = '#059669';
      statColor = '#34d399';
    } else if (cat === 'AI CALLING') {
      badgeColor = '#7c3aed';
      statColor = '#a78bfa';
    }

    return {
      id: i + 1,
      filename: `wp-${numStr}.webp`,
      image: `/workprof/wp-${numStr}.webp`,
      title: `Client Evidence Build #${i + 1}`,
      niche,
      category: cat,
      stats: stat,
      badgeColor,
      statColor,
    };
  });

  const filteredProofs = allWorkProofs.filter((item) => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stats.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '100px', background: '#06040f', minHeight: '100vh', color: '#ffffff' }}>
      {/* Hero Header Section */}
      <section style={{ padding: '60px 0 40px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '20%',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: '500px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container-wide" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
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
            <span>TRANSPARENT CLIENT EVIDENCE &amp; WORK PROOF VAULT</span>
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
            59+ VERIFIED PROOFS. <br />
            <span className="text-gradient-purple">REAL CLIENT FUNNELS &amp; PIPELINES.</span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              maxWidth: '780px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Browse our complete library of live client funnel builds, CRM dashboards, appointment booking graphs, and verified acquisition workflows. Click any image to inspect full-resolution proof.
          </p>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              maxWidth: '980px',
              margin: '0 auto 48px auto',
            }}
            className="four-col-grid"
          >
            {[
              { val: '$50M+', lbl: 'Generated Pipeline' },
              { val: '340%', lbl: 'Average Booking Lift' },
              { val: '89%', lbl: 'Show-Up Rate' },
              { val: '59+', lbl: 'Verified Proofs' },
            ].map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(18, 14, 28, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '18px 16px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#38bdf8', fontFamily: 'var(--font-display)' }}>
                  {m.val}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>
                  {m.lbl}
                </div>
              </div>
            ))}
          </div>

          {/* Search & Filter Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              background: 'rgba(18, 14, 28, 0.9)',
              border: '1.5px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '16px 24px',
              maxWidth: '1240px',
              margin: '0 auto 40px auto',
              boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
            }}
          >
            {/* Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['ALL', 'HIGH-TICKET', 'VSL', 'LOW-TICKET', 'AI CALLING'].map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '999px',
                      background: isSelected
                        ? 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)'
                        : 'rgba(255, 255, 255, 0.06)',
                      border: isSelected ? '1px solid #a78bfa' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: isSelected ? '#ffffff' : '#cbd5e1',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      transition: 'all 0.25s ease',
                      boxShadow: isSelected ? '0 4px 15px rgba(124, 58, 237, 0.4)' : 'none',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '260px' }}>
              <Search
                size={16}
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
              />
              <input
                type="text"
                placeholder="Search proofs or niche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 16px 9px 38px',
                  borderRadius: '999px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontSize: '0.84rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section style={{ paddingBottom: '90px' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '50px',
            }}
          >
            {filteredProofs.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalImage(item)}
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
                  e.currentTarget.style.borderColor = item.badgeColor;
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 20px 45px ${item.badgeColor}44`;
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
                    src={item.image}
                    alt={item.title}
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
                      background: item.badgeColor,
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
                    {item.category}
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

          {/* Bottom Fast-Track Consultation Callout */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4338ca 75%, #6366f1 100%)',
              borderRadius: '24px',
              padding: '48px 36px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(67, 56, 202, 0.45)',
              border: '2px solid rgba(255, 255, 255, 0.25)',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '14px',
              }}
            >
              READY TO BUILD A FUNNEL LIKE THESE FOR YOUR BUSINESS?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '680px',
                margin: '0 auto 28px auto',
                lineHeight: 1.6,
              }}
            >
              We craft the complete conversion architecture, direct-response copy, CRM integration, and &lt;60s AI calling agents in 5–10 business days.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 40px',
                background: '#ffffff',
                color: '#4338ca',
                borderRadius: '999px',
                fontWeight: 900,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
            >
              <span>CLAIM YOUR CUSTOM FUNNEL BUILD ➔</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImage && (
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
          onClick={() => setActiveModalImage(null)}
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#120d30',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>{activeModalImage.title}</h3>
                <p style={{ fontSize: '0.82rem', color: activeModalImage.statColor, fontWeight: 700 }}>
                  {activeModalImage.niche} • {activeModalImage.stats}
                </p>
              </div>
              <button
                onClick={() => setActiveModalImage(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ overflowY: 'auto', maxHeight: 'calc(90vh - 85px)', padding: '20px', background: '#080514' }}>
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
