import React, { useEffect, useState, useRef } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const offset = (window.innerHeight - rect.top) * 0.28;
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

  const row1 = [
    {
      name: 'Sophia Reynolds',
      role: 'VP of Finance at Horizon Tech',
      image: '/assets/5INzhiR9y5rJfQCaOayOHoPOfjg.png',
      quote: 'OneFin replaced three different tools for us. The real-time spend visibility and automated receipt matching saved our accounting team over 15 hours every single week.',
      rating: 5,
      company: 'Horizon Tech',
      growth: '+42% Speed',
    },
    {
      name: 'Marcus Vance',
      role: 'Founder & CEO at ScaleUp Lab',
      image: '/assets/Ac3bMgSW1PeXPdo406en50kNGO8.png',
      quote: 'The multi-currency treasury and cash flow forecasting are second to none. We scaled to 12 countries without hiring additional back-office staff.',
      rating: 5,
      company: 'ScaleUp Lab',
      growth: '12 Countries',
    },
    {
      name: 'Elena Rostova',
      role: 'Operations Director at Apex Design',
      image: '/assets/WbMb10Qm7vsT0sxiL3jMdQbJ8Y.png',
      quote: 'The UX is gorgeous and so fast. Issuing virtual cards with custom budget caps took under 10 seconds. Absolutely essential for modern business.',
      rating: 5,
      company: 'Apex Design',
      growth: '<10s Issuance',
    },
    {
      name: 'David Sterling',
      role: 'Head of Treasury at Lumina Capital',
      image: '/assets/Ac3bMgSW1PeXPdo406en50kNGO8.png',
      quote: 'Zero reconciliation discrepancies since switching. The automated FX hedging and direct ERP sync eliminated month-end closing panic completely.',
      rating: 5,
      company: 'Lumina Capital',
      growth: '0 Errors',
    },
  ];

  const row2 = [
    {
      name: 'Amara Chen',
      role: 'FinOps Lead at Velocity Network',
      image: '/assets/5INzhiR9y5rJfQCaOayOHoPOfjg.png',
      quote: 'Granular spending rules with instant SMS approvals saved us from thousands in accidental SaaS over-charges. Truly indispensable software.',
      rating: 5,
      company: 'Velocity',
      growth: '$45K Saved',
    },
    {
      name: 'Liam Gallagher',
      role: 'Chief Financial Officer at NextWave',
      image: '/assets/WbMb10Qm7vsT0sxiL3jMdQbJ8Y.png',
      quote: 'Our executive board loves the dynamic dashboard reports. Real-time cash runway visualisations give our investors total peace of mind.',
      rating: 5,
      company: 'NextWave',
      growth: '100% Clarity',
    },
    {
      name: 'Kavita Patel',
      role: 'Global Controller at HyperScale Inc',
      image: '/assets/Ac3bMgSW1PeXPdo406en50kNGO8.png',
      quote: 'Multi-entity consolidation that used to take three days now happens continuously in the background. Game-changer for international finance.',
      rating: 5,
      company: 'HyperScale',
      growth: '3 Days → Real-time',
    },
    {
      name: 'Oliver Wright',
      role: 'Managing Partner at Beacon Ventures',
      image: '/assets/5INzhiR9y5rJfQCaOayOHoPOfjg.png',
      quote: 'We mandate OneFin across all our portfolio companies. Standardized treasury controls and instant card issuance make scaling seamless.',
      rating: 5,
      company: 'Beacon',
      growth: 'Portfolio Standard',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        padding: '120px 0',
        background: '#0c0c0e',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(98, 98, 254, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 64px auto' }}>
          {/* Badge: 04 testimonials */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <div
              style={{
                transform: 'rotate(-12deg)',
                background: '#212124',
                border: '1px solid #292929',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#8f8f8f',
              }}
            >
              04
            </div>
            <div
              style={{
                transform: 'rotate(6deg)',
                background: '#212124',
                border: '1px solid #292929',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#efefef',
                textTransform: 'lowercase',
              }}
            >
              testimonials
            </div>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Trusted by Professionals, Loved by Everyone.
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#8f8f8f', maxWidth: '680px', margin: '0 auto' }}>
            Hear how modern finance teams, founders, and high-growth brands rely on OneFin every day to manage their bottom line.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Testimonial Ticker Rows with Scroll Dynamics */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Side fade masks */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '140px',
            background: 'linear-gradient(to right, #0c0c0e 0%, transparent 100%)',
            zIndex: 4,
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
            zIndex: 4,
            pointerEvents: 'none',
          }}
        />

        {/* Row 1: Leftward Ticker */}
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            marginBottom: '24px',
            transform: `translate3d(${-scrollOffset}px, 0, 0)`,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <div
            className="animate-marquee"
            style={{
              display: 'flex',
              gap: '24px',
              animationDuration: '38s',
            }}
          >
            {[...row1, ...row1, ...row1].map((t, idx) => (
              <div
                key={idx}
                style={{
                  width: '380px',
                  background: 'rgba(27, 27, 31, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid #292929',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(98, 98, 254, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(98, 98, 254, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#292929';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#facc15" color="#facc15" />
                      ))}
                    </div>
                    {/* Impact pill */}
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '3px 9px',
                        borderRadius: '999px',
                        background: 'rgba(98, 98, 254, 0.15)',
                        border: '1px solid rgba(98, 98, 254, 0.3)',
                        color: '#bebeff',
                      }}
                    >
                      {t.growth}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.96rem', color: '#d9d9d9', lineHeight: 1.6, marginBottom: '24px' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #381ac9' }}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {t.name}
                      <CheckCircle2 size={13} color="#6262fe" />
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#8f8f8f' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Ticker (Opposing Direction) */}
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            transform: `translate3d(${scrollOffset}px, 0, 0)`,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
          }}
        >
          <div
            className="animate-marquee-reverse"
            style={{
              display: 'flex',
              gap: '24px',
              animationDuration: '42s',
            }}
          >
            {[...row2, ...row2, ...row2].map((t, idx) => (
              <div
                key={idx}
                style={{
                  width: '380px',
                  background: 'rgba(27, 27, 31, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid #292929',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(98, 98, 254, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(98, 98, 254, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#292929';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#facc15" color="#facc15" />
                      ))}
                    </div>
                    {/* Impact pill */}
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '3px 9px',
                        borderRadius: '999px',
                        background: 'rgba(98, 98, 254, 0.15)',
                        border: '1px solid rgba(98, 98, 254, 0.3)',
                        color: '#bebeff',
                      }}
                    >
                      {t.growth}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.96rem', color: '#d9d9d9', lineHeight: 1.6, marginBottom: '24px' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #381ac9' }}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {t.name}
                      <CheckCircle2 size={13} color="#6262fe" />
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#8f8f8f' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
