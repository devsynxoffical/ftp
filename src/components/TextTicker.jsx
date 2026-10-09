import React, { useEffect, useState, useRef } from 'react';

export default function TextTicker({
  text = 'PROVEN PERFORMANCE. TRUSTED BY FINANCE LEADERS.',
  secondaryText = 'FROM SEAMLESS SPEND TO CONFIDENT DECISIONS • UNIFIED MULTI-CURRENCY TREASURY • REAL-TIME CASH INTELLIGENCE',
  speed = '28s',
  reverse = false,
  showDualRows = false,
}) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Scroll reactive translation
            const offset = (window.innerHeight - rect.top) * 0.45;
            setScrollOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [text, text, text, text];
  const subItems = [secondaryText, secondaryText, secondaryText, secondaryText];

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        background: '#0c0c0e',
        borderTop: '1px solid #292929',
        borderBottom: '1px solid #292929',
        padding: '40px 0',
        position: 'relative',
      }}
    >
      {/* Edge gradient masks */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '140px',
          background: 'linear-gradient(to right, #0c0c0e 0%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '140px',
          background: 'linear-gradient(to left, #0c0c0e 0%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Row 1: Primary Text Scrolling Animation with Scroll-Velocity Linking */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          userSelect: 'none',
          transform: `translate3d(${reverse ? scrollOffset : -scrollOffset}px, 0, 0)`,
          transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      >
        <div
          className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            animationDuration: speed,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '24px',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: '"Roboto Condensed", "Geist", -apple-system, sans-serif',
                  fontSize: 'clamp(3.2rem, 7.5vw, 6.8rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.04em',
                  color: '#f4f4f5',
                  whiteSpace: 'nowrap',
                  lineHeight: 1,
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                }}
              >
                {item}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6262fe 0%, #381ac9 100%)',
                  boxShadow: '0 0 16px rgba(98, 98, 254, 0.8)',
                  margin: '0 12px',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional Row 2: Secondary Reverse Ticker */}
      {showDualRows && (
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            width: '100%',
            marginTop: '24px',
            userSelect: 'none',
            transform: `translate3d(${scrollOffset}px, 0, 0)`,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <div
            className="animate-marquee-reverse"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              animationDuration: '34s',
            }}
          >
            {subItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '20px',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: '"Geist", sans-serif',
                    fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#8f8f8f',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </span>
                <span
                  style={{
                    color: '#6262fe',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                  }}
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
