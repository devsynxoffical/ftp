import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, Mail, Sparkles, ShieldCheck } from 'lucide-react';

export default function BookingFormSection() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="booking-form"
      style={{
        padding: '100px 0',
        background: '#fcfbff',
        position: 'relative',
      }}
    >
      <div className="container-wide">
        <div
          className="about-grid-split"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '50px',
            alignItems: 'center',
          }}
        >
          {/* Left: White Consultation Card */}
          <div
            style={{
              padding: '44px 38px',
              borderRadius: '24px',
              background: '#ffffff',
              border: '1px solid rgba(108, 92, 231, 0.16)',
              boxShadow: '0 25px 60px rgba(108, 92, 231, 0.1), 0 4px 20px rgba(0,0,0,0.03)',
              position: 'relative',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#ede9fe',
                    color: '#6C5CE7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f0c24', marginBottom: '12px' }}>
                  Application Received!
                </h3>
                <p style={{ color: '#4c4474', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our funnel strategist will review your offer and email you within 24 hours with your custom conversion architecture blueprint.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-purple-pill"
                  style={{ margin: '0 auto' }}
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <span className="badge-pill-light" style={{ marginBottom: '10px' }}>
                    FAST-TRACK ONBOARDING
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.85rem',
                      fontWeight: 900,
                      color: '#0f0c24',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}
                  >
                    Tell Us About Your Offer & Traffic
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#655d8f', marginTop: '6px' }}>
                    Fill in your details below to map out the conversion path your business needs.
                  </p>
                </div>

                {/* Form Fields Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#3b3363', textTransform: 'uppercase', marginBottom: '6px' }}>
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
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DDD6FE',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: '#0f0c24',
                        background: '#fcfbff',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#3b3363', textTransform: 'uppercase', marginBottom: '6px' }}>
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
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DDD6FE',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: '#0f0c24',
                        background: '#fcfbff',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#3b3363', textTransform: 'uppercase', marginBottom: '6px' }}>
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
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DDD6FE',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: '#0f0c24',
                        background: '#fcfbff',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#3b3363', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Website / Offer Link
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DDD6FE',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: '#0f0c24',
                        background: '#fcfbff',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#3b3363', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Business Model
                    </label>
                    <select
                      value={formData.offerType}
                      onChange={(e) => setFormData({ ...formData, offerType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DDD6FE',
                        fontSize: '0.88rem',
                        outline: 'none',
                        color: '#0f0c24',
                        background: '#fcfbff',
                      }}
                    >
                      <option>High-Ticket Services / Agency</option>
                      <option>Coach / Consultant</option>
                      <option>B2B Software / Enterprise</option>
                      <option>E-Learning / Digital Product</option>
                      <option>Professional Services</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#3b3363', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Monthly Revenue
                    </label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #DDD6FE',
                        fontSize: '0.88rem',
                        outline: 'none',
                        color: '#0f0c24',
                        background: '#fcfbff',
                      }}
                    >
                      <option>Under $10k/mo</option>
                      <option>$10k - $50k/mo</option>
                      <option>$50k - $150k/mo</option>
                      <option>$150k+/mo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '1rem',
                    fontWeight: 900,
                    borderRadius: '12px',
                  }}
                >
                  <Sparkles size={18} />
                  <span>BUILD MY FUNNEL NOW</span>
                  <Send size={16} />
                </button>

                <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '0.76rem', color: '#655d8f', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <ShieldCheck size={14} style={{ color: '#6C5CE7' }} />
                  <span>100% Privacy. Zero Spam. 24h Response Guarantee.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Details Column */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '14px' }}>
              DIRECT ACCESS & SPEED
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#0f0c24',
                marginBottom: '18px',
              }}
            >
              EASY WAY TO RESERVE <span className="text-gradient-purple">OUR SERVICE.</span>
            </h2>

            <p style={{ fontSize: '1.02rem', color: '#4c4474', lineHeight: 1.65, marginBottom: '28px' }}>
              Tell us what you're selling, who you're selling it to, and where your traffic is coming from. We'll map out the exact conversion architecture your business needs to scale.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid rgba(108, 92, 231, 0.15)',
                  boxShadow: '0 4px 15px rgba(108, 92, 231, 0.05)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: '#6C5CE7',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f0c24' }}>5–10 Business Days Delivery</div>
                  <div style={{ fontSize: '0.82rem', color: '#4c4474' }}>Fast, reliable turnaround with zero quality compromise</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid rgba(108, 92, 231, 0.15)',
                  boxShadow: '0 4px 15px rgba(108, 92, 231, 0.05)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: '#5846e0',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f0c24' }}>Direct Strategy Channel</div>
                  <div style={{ fontSize: '0.82rem', color: '#4c4474' }}>hello@funnelsthatprint.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
