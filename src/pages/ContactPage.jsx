import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Clock, Mail, Sparkles, ShieldCheck, ArrowRight, Zap, PhoneCall, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    offerType: 'High-Ticket Services / Agency',
    monthlyRevenue: '$10k - $50k/mo',
    primaryGoal: 'Generate More Qualified Booked Calls',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#06040f', color: '#ffffff', paddingTop: '120px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(56, 189, 248, 0.12) 40%, rgba(6, 4, 15, 0) 75%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        {/* Page Top Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 22px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(56, 189, 248, 0.15) 100%)',
              border: '1.5px solid rgba(167, 139, 250, 0.4)',
              color: '#DDD6FE',
              fontSize: '0.82rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '18px',
              boxShadow: '0 4px 25px rgba(124, 58, 237, 0.35)',
            }}
          >
            <Sparkles size={15} style={{ color: '#38bdf8' }} />
            <span>FAST-TRACK ONBOARDING &amp; CONSULTATION</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '18px',
              color: '#ffffff',
            }}
          >
            TELL US ABOUT YOUR OFFER <br />
            <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #DDD6FE 40%, #a78bfa 70%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              &amp; SCALE YOUR CONVERSIONS.
            </span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Fill in your details below to map out the exact custom conversion architecture and acquisition flow your business needs.
          </p>
        </div>

        {/* 2-Column Split: Left Form + Right Authority Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'stretch',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
          className="hero-grid-split"
        >
          {/* Left Form Card */}
          <div
            style={{
              padding: '44px 38px',
              borderRadius: '24px',
              background: 'rgba(18, 14, 28, 0.92)',
              border: '1.5px solid rgba(167, 139, 250, 0.35)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(124, 58, 237, 0.25)',
              backdropFilter: 'blur(16px)',
              position: 'relative',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '50px 20px' }}>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '2px solid #10b981',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
                  Application Received!
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px auto' }}>
                  Thank you, <strong style={{ color: '#38bdf8' }}>{formData.name}</strong>. Our conversion strategist will review your offer and email you within 24 hours with your custom funnel roadmap.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: '14px 32px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 800,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    boxShadow: '0 8px 25px rgba(124, 58, 237, 0.5)',
                  }}
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.65rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      marginBottom: '6px',
                    }}
                  >
                    Tell Us About Your Offer &amp; Traffic
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Fill in your details below to map out the conversion path your business needs.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="hero-grid-split">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1.5px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#a78bfa')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1.5px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#a78bfa')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="hero-grid-split">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1.5px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#a78bfa')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                      Website / Offer Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1.5px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#a78bfa')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '22px' }} className="hero-grid-split">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                      Business Model
                    </label>
                    <select
                      value={formData.offerType}
                      onChange={(e) => setFormData({ ...formData, offerType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: '#1a1333',
                        border: '1.5px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option value="High-Ticket Services / Agency">High-Ticket Services / Agency</option>
                      <option value="Coaching & Consulting">Coaching &amp; Consulting</option>
                      <option value="B2B & Enterprise SaaS">B2B &amp; Enterprise SaaS</option>
                      <option value="Info-Products & Courses">Info-Products &amp; Courses</option>
                      <option value="E-Commerce & DTC">E-Commerce &amp; DTC</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                      Monthly Revenue
                    </label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: '#1a1333',
                        border: '1.5px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Under $10k/mo">Under $10k/mo</option>
                      <option value="$10k - $50k/mo">$10k - $50k/mo</option>
                      <option value="$50k - $100k/mo">$50k - $100k/mo</option>
                      <option value="$100k - $250k/mo">$100k - $250k/mo</option>
                      <option value="$250k+/mo">$250k+/mo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '17px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #4f46e5 100%)',
                    color: '#ffffff',
                    border: '1.5px solid rgba(255, 255, 255, 0.35)',
                    fontSize: '1rem',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.6)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 58, 237, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 58, 237, 0.6)';
                  }}
                >
                  <Send size={18} />
                  <span>BUILD MY FUNNEL NOW</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', fontSize: '0.78rem', color: '#94a3b8' }}>
                  <ShieldCheck size={16} style={{ color: '#34d399' }} />
                  <span>100% Privacy. Zero Spam. 24h Response Guarantee.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Authority Card */}
          <div
            style={{
              padding: '44px 38px',
              borderRadius: '24px',
              background: 'linear-gradient(145deg, #18113c 0%, #0d0922 100%)',
              border: '1.5px solid rgba(167, 139, 250, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fef08a', fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                <Zap size={14} />
                <span>DIRECT ACCESS &amp; SPEED</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.85rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '14px',
                  letterSpacing: '-0.02em',
                }}
              >
                EASY WAY TO RESERVE OUR SERVICE.
              </h3>

              <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '32px' }}>
                Tell us what you're selling, who you're selling it to, and where your traffic is coming from. We'll map out the exact conversion architecture your business needs to scale.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', marginBottom: '2px' }}>
                      5–10 Business Days Delivery
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Fast, reliable turnaround with zero quality compromise
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(167, 139, 250, 0.15)', color: '#a78bfa' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', marginBottom: '2px' }}>
                      Direct Strategy Channel
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 700 }}>
                      hello@funnelsthatprint.com
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#ffffff', marginBottom: '2px' }}>
                      Client-First Conversion Guarantee
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Built for serious founders wanting predictable ROI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '28px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '30px' }}>
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#a78bfa',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a78bfa')}
              >
                <span>← Back to Home Page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
