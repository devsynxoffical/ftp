import React, { useState } from 'react';
import { PhoneCall, Bot, CheckCircle2, Play, Pause } from 'lucide-react';

export default function AiCallingSpotlight() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      style={{
        padding: '90px 0',
        background: '#f6f4fe',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-wide">
        <div
          className="about-grid-split"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left: Interactive Preview Graphic */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(108, 92, 231, 0.2)',
                boxShadow: '0 25px 70px rgba(108, 92, 231, 0.15)',
                background: '#ffffff',
              }}
            >
              <img
                src="/images/ai-calling-preview.png"
                alt="AI Calling Agent Live Dashboard"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>

            {/* Floating Live Call Simulation Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                right: '20px',
                background: '#ffffff',
                border: '1px solid rgba(108, 92, 231, 0.25)',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 15px 40px rgba(108, 92, 231, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#6C5CE7',
                    border: 'none',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(108, 92, 231, 0.4)',
                  }}
                  aria-label="Play AI audio sample"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
                </button>
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f0c24', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>AI Lead Qualification Audio</span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6C5CE7', display: 'inline-block' }}></span>
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#655d8f' }}>
                    {isPlaying ? 'Simulating live conversation...' : 'Click to hear human-like voice response'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '24px' }}>
                {[14, 22, 8, 28, 16, 24, 10, 30, 18, 12].map((height, i) => (
                  <span
                    key={i}
                    style={{
                      width: '3px',
                      height: isPlaying ? `${height}px` : '6px',
                      background: isPlaying ? '#6C5CE7' : '#c4b5fd',
                      borderRadius: '3px',
                      transition: 'height 0.2s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Copy & Key Benefits */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '16px' }}>
              <Bot size={14} />
              <span>NEXT-GEN AI AUTOMATION</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#0f0c24',
                marginBottom: '18px',
              }}
            >
              AI CALLING AGENTS THAT <span className="text-gradient-purple">QUALIFY & BOOK 24/7.</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#4c4474', lineHeight: 1.65, marginBottom: '24px' }}>
              Never let a hot lead go cold. Our AI calling agents instantly dial inbound leads within 60 seconds, have natural human-sounding conversations, ask qualification questions, and place qualified prospects straight onto your sales calendar.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div style={{ padding: '16px', borderRadius: '14px', background: '#ffffff', border: '1px solid rgba(108, 92, 231, 0.15)', boxShadow: '0 4px 15px rgba(108, 92, 231, 0.05)' }}>
                <div style={{ color: '#6C5CE7', fontWeight: 800, fontSize: '1.2rem', marginBottom: '4px' }}>&lt; 60s</div>
                <div style={{ fontSize: '0.82rem', color: '#4c4474' }}>Speed-to-lead response time for every inbound opt-in</div>
              </div>

              <div style={{ padding: '16px', borderRadius: '14px', background: '#ffffff', border: '1px solid rgba(108, 92, 231, 0.15)', boxShadow: '0 4px 15px rgba(108, 92, 231, 0.05)' }}>
                <div style={{ color: '#5846e0', fontWeight: 800, fontSize: '1.2rem', marginBottom: '4px' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: '#4c4474' }}>CRM & Calendar Sync with full call transcript & recording</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#0f0c24', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: '#6C5CE7', flexShrink: 0 }} />
                <span>Filters out low-budget tire-kickers before your reps ever talk to them</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#0f0c24', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: '#6C5CE7', flexShrink: 0 }} />
                <span>Handles rescheduling, reminders, and automated reactivation for old lead lists</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#0f0c24', fontWeight: 600 }}>
                <CheckCircle2 size={18} style={{ color: '#6C5CE7', flexShrink: 0 }} />
                <span>Seamless integration with GoHighLevel, HubSpot, Close, and Salesforce</span>
              </li>
            </ul>

            <a href="#booking-form" className="btn-primary">
              <span>Deploy AI Calling for Your Funnel</span>
              <PhoneCall size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
