import React, { useEffect, useState, useRef } from 'react';

export default function LogoMarquee() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * 0.25;
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

  const partnerLogos = [
    { name: 'Client 1', img: '/images/client-logo/logo-01.png' },
    { name: 'Client 2', img: '/images/client-logo/logo-02.png' },
    { name: 'Client 3', img: '/images/client-logo/logo-03.png' },
    { name: 'Client 4', img: '/images/client-logo/logo-04.png' },
    { name: 'Client 5', img: '/images/client-logo/logo-05.png' },
    { name: 'Client 6', img: '/images/client-logo/logo-06.png' },
    { name: 'Client 7', img: '/images/client-logo/logo-07.png' },
    { name: 'Client 8', img: '/images/client-logo/logo-08.png' },
    { name: 'Client 10', img: '/images/client-logo/logo-10.png' },
    { name: 'Client 11', img: '/images/client-logo/logo-11.png' },
    { name: 'Client 12', img: '/images/client-logo/logo-12.png' },
    { name: 'Client 13', img: '/images/client-logo/logo-13.png' },
    { name: 'Client 15', img: '/images/client-logo/logo-15.png' },
    { name: 'Client 16', img: '/images/client-logo/logo-16.png' },
    { name: 'Client 17', img: '/images/client-logo/logo-17.png' },
    { name: 'Client 18', img: '/images/client-logo/logo-18.png' },
    { name: 'Client 19', img: '/images/client-logo/logo-19.png' },
    { name: 'Client 20', img: '/images/client-logo/logo-20.png' },
    { name: 'Client 21', img: '/images/client-logo/logo-21.png' },
    { name: 'Client 22', img: '/images/client-logo/logo-22.png' },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '50px 0',
        background: '#06040e',
        borderTop: '1px solid rgba(139, 92, 246, 0.15)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <p
          style={{
            fontSize: '0.84rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#a78bfa',
          }}
        >
          ENGINEERED FOR HIGH-GROWTH BRANDS & SEAMLESS PLATFORM INTEGRATION
        </p>
      </div>

      {/* Edge Gradient Mask */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '140px',
          background: 'linear-gradient(to right, #06040e 0%, transparent 100%)',
          zIndex: 2,
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
          background: 'linear-gradient(to left, #06040e 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Marquee Loop with Scroll Velocity */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          transform: `translate3d(${-scrollOffset}px, 0, 0)`,
          transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
        }}
      >
        <div className="animate-marquee" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <div
              key={index}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(30, 20, 50, 0.8) 0%, rgba(15, 10, 30, 0.95) 100%)',
                border: '1.5px solid rgba(139, 92, 246, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(124, 58, 237, 0.15)',
                flexShrink: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) translateY(-4px)';
                e.currentTarget.style.borderColor = '#a78bfa';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(124, 58, 237, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.35)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(124, 58, 237, 0.15)';
              }}
            >
              <img
                src={partner.img}
                alt={partner.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1) opacity(0.85)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
