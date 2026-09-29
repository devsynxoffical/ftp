import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Maximize2, Sparkles, X, Play } from 'lucide-react';

export default function VideoTestimonialsWallSection() {
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [unmutedId, setUnmutedId] = useState(null);

  const videoRefs = useRef({});

  const toggleSound = (id, e) => {
    e.stopPropagation();
    if (unmutedId === id) {
      setUnmutedId(null);
      if (videoRefs.current[id]) {
        videoRefs.current[id].muted = true;
      }
    } else {
      // Mute all other videos first
      Object.keys(videoRefs.current).forEach((key) => {
        if (videoRefs.current[key]) {
          videoRefs.current[key].muted = true;
        }
      });
      setUnmutedId(id);
      if (videoRefs.current[id]) {
        videoRefs.current[id].muted = false;
        videoRefs.current[id].play().catch(() => {});
      }
    }
  };

  const openFullscreen = (videoData, e) => {
    if (e) e.stopPropagation();
    setActiveModalVideo(videoData);
  };

  // Video data organized by columns exactly matching reference
  const col1Videos = [
    {
      id: 'p1',
      src: '/images/testimonials/portrait-1.mp4',
      badge: 'MASSIVE ROAS SCALE',
      badgeBg: 'rgba(99, 102, 241, 0.25)',
      badgeColor: '#a5b4fc',
      name: 'Mohanded',
      role: 'Social Media Marketing Agency Germany',
      quote: '"Massive ROAS Growth Across eCommerce, Skincare, Supplements & More"',
      aspect: 'portrait',
      height: '460px',
    },
    {
      id: 's1',
      src: '/images/testimonials/square-1.mp4',
      badge: '2,000+ REGISTRATIONS',
      badgeBg: 'rgba(16, 185, 129, 0.25)',
      badgeColor: '#6ee7b7',
      name: 'Faith',
      role: 'Kingdom Impact Summit Founder',
      quote: '"2,000+ Verified Registrations for Virtual Summit with Custom Funnel"',
      aspect: 'square',
      height: '320px',
    },
  ];

  const col2Videos = [
    {
      id: 'l1',
      src: '/images/testimonials/landscape-1.mp4',
      badge: '2 LEADS IN 24H',
      badgeBg: 'rgba(6, 182, 212, 0.25)',
      badgeColor: '#67e8f9',
      name: 'Giulia',
      role: 'MVA Marketing Agency Founder',
      quote: '"From 1 Lead in 3 Months to 2 Verified MVA Leads in Under 24 Hours"',
      aspect: 'landscape',
      height: '245px',
    },
    {
      id: 'l2',
      src: '/images/testimonials/landscape-2.mp4',
      badge: '1:1 LIVE CASE',
      badgeBg: 'rgba(168, 85, 247, 0.25)',
      badgeColor: '#d8b4fe',
      name: 'Edgar & Jeremi',
      role: 'Co-Founders, High-Ticket Funnel Agency',
      quote: '"Winning High-Ticket Clients While Generating Incredible Results For Their Clients Too"',
      aspect: 'landscape',
      height: '245px',
    },
    {
      id: 'l3',
      src: '/images/testimonials/landscape-3.mp4',
      badge: '50% CPL REDUCTION',
      badgeBg: 'rgba(234, 179, 8, 0.25)',
      badgeColor: '#fde047',
      name: 'Alex & Team',
      role: 'Paid Acquisition & Growth',
      quote: '"50% CPL Reduction & Record Booked Calls on Cold Paid Traffic"',
      aspect: 'landscape',
      height: '270px',
    },
  ];

  const col3Videos = [
    {
      id: 'p2',
      src: '/images/testimonials/portrait-2.mp4',
      badge: '$4,500 RETAINER WON',
      badgeBg: 'rgba(16, 185, 129, 0.25)',
      badgeColor: '#6ee7b7',
      name: 'Edgar',
      role: 'Agency Owner',
      quote: '"Landed a $4,500 High-Ticket Client at Just $7 Per Lead"',
      subHighlight: '✦ $1,500/mo • 3-month retainer',
      aspect: 'portrait',
      height: '460px',
    },
    {
      id: 'l3b',
      src: '/images/testimonials/landscape-3.mp4',
      badge: 'SCALE READY PIPELINE',
      badgeBg: 'rgba(99, 102, 241, 0.25)',
      badgeColor: '#a5b4fc',
      name: 'Marcus',
      role: 'ScalePoint Media',
      quote: '"Automated qualification flow filtered out low-budget leads instantly."',
      aspect: 'square',
      height: '320px',
    },
  ];

  const renderVideoCard = (item) => {
    const isUnmuted = unmutedId === item.id;

    return (
      <div
        key={item.id}
        onClick={() => openFullscreen(item)}
        style={{
          position: 'relative',
          borderRadius: '22px',
          overflow: 'hidden',
          background: '#0a0614',
          border: '1.5px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.65)',
          height: item.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.6)';
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(124, 58, 237, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.65)';
        }}
      >
        {/* HTML5 Video Element with Full Natural Aspect View (No Weird Cropping) */}
        <video
          ref={(el) => (videoRefs.current[item.id] = el)}
          src={item.src}
          autoPlay
          loop
          muted={!isUnmuted}
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            background: '#000000',
            zIndex: 1,
          }}
        />

        {/* Top Floating Badge */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            padding: '14px 16px',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${item.badgeBg}`,
              color: item.badgeColor,
              fontSize: '0.72rem',
              fontWeight: 900,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: item.badgeColor,
                boxShadow: `0 0 8px ${item.badgeColor}`,
              }}
            />
            <span>{item.badge}</span>
          </div>
        </div>

        {/* Bottom Dark Gradient Scrim with Subtitles & Controls */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            padding: '40px 16px 14px 16px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(6, 4, 15, 0.7) 40%, rgba(6, 4, 15, 0.96) 100%)',
          }}
        >
          {/* Subtitle Details */}
          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '3px' }}>
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                {item.name}
              </span>
              <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>
                • {item.role}
              </span>
            </div>
            <p
              style={{
                fontSize: '0.78rem',
                color: '#e2e8f0',
                lineHeight: 1.35,
                margin: 0,
                fontWeight: 500,
                textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              }}
            >
              {item.quote}
            </p>
            {item.subHighlight && (
              <span style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 800, display: 'block', marginTop: '3px' }}>
                {item.subHighlight}
              </span>
            )}
          </div>

          {/* Action Pills (Unmute & Expand) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '6px' }}>
            <button
              onClick={(e) => toggleSound(item.id, e)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '999px',
                background: isUnmuted ? 'rgba(99, 102, 241, 0.85)' : 'rgba(0, 0, 0, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
            >
              {isUnmuted ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span>{isUnmuted ? 'Mute' : 'Unmute'}</span>
            </button>

            <button
              onClick={(e) => openFullscreen(item, e)}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
              title="Watch full video"
            >
              <Maximize2 size={13} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="video-testimonials"
      style={{
        padding: '100px 0 90px 0',
        background: '#06040f',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 20px',
              borderRadius: '999px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1.5px solid rgba(167, 139, 250, 0.35)',
              color: '#c4b5fd',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={14} style={{ color: '#a78bfa' }} />
            <span>AUTHENTIC CLIENT RESULTS &amp; CASE STUDIES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            HEAR DIRECTLY FROM FOUNDERS <br />
            <span className="text-gradient-purple">WHO SCALE WITH US.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.6, fontWeight: 500 }}>
            Real founders, agency owners, and high-ticket service providers sharing their actual pipeline and revenue growth with Funnels That Print.
          </p>
        </div>

        {/* 3-Column Video Wall Grid (Fit onto screen with exact portrait/landscape layout) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            alignItems: 'start',
          }}
          className="three-col-video-grid"
        >
          {/* Column 1: Portrait + Square */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {col1Videos.map((v) => renderVideoCard(v))}
          </div>

          {/* Column 2: 3 Stacked Landscape */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {col2Videos.map((v) => renderVideoCard(v))}
          </div>

          {/* Column 3: Portrait + Square */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {col3Videos.map((v) => renderVideoCard(v))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="/contact" className="btn-fire">
            <span>GET A HIGH-CONVERTING FUNNEL BUILT FOR YOUR OFFER ➔</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {activeModalVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 3000,
            background: 'rgba(3, 2, 8, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '800px',
              width: '100%',
              background: '#0d091e',
              border: '2px solid rgba(167, 139, 250, 0.4)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 22px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#130e28',
              }}
            >
              <div>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                  {activeModalVideo.name}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: '8px' }}>
                  {activeModalVideo.role}
                </span>
              </div>
              <button
                onClick={() => setActiveModalVideo(null)}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Video Player with Full Controls */}
            <div style={{ position: 'relative', background: '#000000', maxHeight: '70vh', display: 'flex', justifyContent: 'center' }}>
              <video
                src={activeModalVideo.src}
                controls
                autoPlay
                playsInline
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  background: '#000000',
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .three-col-video-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
