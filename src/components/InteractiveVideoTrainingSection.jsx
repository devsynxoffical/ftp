import React, { useState } from 'react';
import { Play, Sparkles, Volume2, Pause } from 'lucide-react';

export default function InteractiveVideoTrainingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playlist = [
    {
      id: 0,
      title: 'AI Calling Agent Live Demo',
      duration: '4:15 min',
      desc: 'Watch how our AI voice agent dials new opt-ins in <60 seconds, qualifies their budget, and books appointments.',
      tag: 'HOT FEATURE',
      tagColor: '#38bdf8',
    },
    {
      id: 1,
      title: 'High-Ticket VSL Funnel Architecture',
      duration: '6:40 min',
      desc: 'The exact psychology, page layout, and application questionnaire that generated $185k/mo added pipeline.',
      tag: 'CONVERSION UX',
      tagColor: '#a78bfa',
    },
    {
      id: 2,
      title: 'Automated CRM & SMS Follow-Up',
      duration: '5:20 min',
      desc: 'How we eliminate no-shows and reactivate dormant leads with multi-touch automated follow-up sequences.',
      tag: 'AUTOMATION',
      tagColor: '#10b981',
    },
    {
      id: 3,
      title: 'Low-Ticket Tripwire & 1-Click Upsells',
      duration: '8:10 min',
      desc: 'Structure self-liquidating front-end offers that pay for ad spend while booking high-ticket back-end clients.',
      tag: 'SCALE BLUEPRINT',
      tagColor: '#fbbf24',
    },
  ];

  return (
    <section style={{ padding: '90px 0', background: '#07050d', position: 'relative' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill-cyan" style={{ marginBottom: '14px' }}>
            CONVERSION ARCHITECTURE IN ACTION
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.08,
            }}
          >
            WATCH HOW OUR FUNNELS <span className="text-gradient-purple">PRINT BOOKED CALLS.</span>
          </h2>
        </div>

        {/* Video Player + Playlist Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.65fr',
            gap: '30px',
            alignItems: 'stretch',
          }}
          className="hero-grid-split"
        >
          {/* Left Playlist Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {playlist.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx);
                    setIsPlaying(true);
                  }}
                  style={{
                    background: isSelected ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(20, 14, 30, 0.95) 100%)' : 'rgba(18, 14, 28, 0.65)',
                    border: isSelected ? '2px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '18px 20px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 10px 30px rgba(99, 102, 241, 0.25)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, color: item.tagColor, textTransform: 'uppercase' }}>
                      {item.tag}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>{item.duration}</span>
                  </div>

                  <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Main Video Player Container */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #0f0b1a 100%)',
              border: '2px solid rgba(99, 102, 241, 0.45)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(99, 102, 241, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
              padding: '32px',
            }}
          >
            {/* Top Bar of Video */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.7)', padding: '6px 16px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span style={{ fontSize: '0.76rem', color: '#ffffff', fontWeight: 800 }}>LIVE DEMO MASTERCLASS</span>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#fef08a', fontWeight: 800 }}>{playlist[activeTab].duration}</span>
            </div>

            {/* Center Big Play Button & Title */}
            <div style={{ textAlign: 'center', margin: 'auto 0', zIndex: 2 }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                  border: '3px solid rgba(255, 255, 255, 0.6)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  cursor: 'pointer',
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                aria-label="Play video demo"
              >
                {isPlaying ? <Pause size={36} /> : <Play size={36} style={{ marginLeft: '4px' }} />}
              </button>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '8px',
                }}
              >
                {playlist[activeTab].title}
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#e2e8f0', maxWidth: '500px', margin: '0 auto' }}>
                {isPlaying ? 'Playing live conversion walkthrough...' : 'Click to watch full technical walkthrough & proof'}
              </p>
            </div>

            {/* Bottom Audio Wave / Timeline */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2, paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                <Volume2 size={16} style={{ color: '#38bdf8' }} />
                <span>Audio Waveform Simulated</span>
              </div>
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '20px' }}>
                {[12, 20, 8, 26, 14, 22, 10, 28, 16, 10, 22, 14, 18, 8].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      width: '3px',
                      height: isPlaying ? `${h}px` : '4px',
                      background: isPlaying ? '#38bdf8' : '#94a3b8',
                      borderRadius: '2px',
                      transition: 'height 0.2s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
