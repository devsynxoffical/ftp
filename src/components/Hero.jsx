import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ scrollY = 0 }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '100px',
        paddingBottom: '140px',
        overflow: 'hidden',
        textAlign: 'center',
        background: '#ffffff',
        minHeight: '1240px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* 1. Hero Background SVG Vector */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1920px',
          height: '810px',
          backgroundImage: 'url(/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* 2. Framer Gradient Overlay (framer-7yy0jx) with 2BOV7PCdHy8KOdzjtUawNXYnaoQ.png */}
      <div
        style={{
          position: 'absolute',
          top: '392px',
          left: 0,
          right: 0,
          bottom: 0,
          height: '914px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%, rgb(45, 21, 207) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '823px',
            display: 'block',
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png"
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectPosition: 'center',
              objectFit: 'fill',
            }}
          />
        </div>
      </div>

      {/* Hero Master Graphics & Text Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1280px',
          height: '1046px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* ========================================================================= */}
        {/* HERO GRAPHICS: PHONE + FROSTED CAPSULE + 4 FLOATING DATA CARDS */}
        {/* ========================================================================= */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: `translateX(-50%) translate3d(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px, 0)`,
            width: '512px',
            height: '1046px',
            transition: 'transform 0.15s ease-out',
            pointerEvents: 'none',
          }}
        >
          {/* Frosted Glass Capsule Shape (framer-rbqmm: width 896px, height 600px, top 192px) */}
          <div
            style={{
              position: 'absolute',
              top: '192px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '896px',
              height: '600px',
              borderRadius: '100px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.95) 100%)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              boxShadow: 'inset 0 4px 60px rgba(255, 255, 255, 0.45)',
              zIndex: 1,
            }}
          />

          {/* Top-Left Behind Card: Your Balance $80K (opacity 0.49 in Framer) */}
          <div
            style={{
              position: 'absolute',
              top: '71px',
              left: '-95px',
              width: '333px',
              zIndex: 1,
              transform: `rotate(-28deg) translate3d(${mousePos.x * -0.4}px, ${scrollY * -0.15 + mousePos.y * -0.4}px, 0)`,
              opacity: 0.52,
              filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.06))',
              willChange: 'transform',
            }}
          >
            <img
              src="/assets/vjfNXT3YtLcFhZPYvUQA52BP4o.png"
              alt="Your Balance Card"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Top-Right Behind Card: Revenue Growth Pill (opacity 0.49 in Framer) */}
          <div
            style={{
              position: 'absolute',
              top: '208px',
              left: '241px',
              width: '333px',
              zIndex: 1,
              transform: `rotate(18deg) translate3d(${mousePos.x * 0.4}px, ${scrollY * -0.18 + mousePos.y * 0.4}px, 0)`,
              opacity: 0.52,
              filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.06))',
              willChange: 'transform',
            }}
          >
            <img
              src="/assets/OBaLn3NhNxon0JBcph43NiC8nw.png"
              alt="Revenue Growth Pill"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Center 3D Smartphone (Phone Img: width 512px, height 1046px) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '512px',
              transform: `translate3d(0, ${scrollY * -0.06}px, 0)`,
              zIndex: 2,
              willChange: 'transform',
            }}
          >
            <img
              src="/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png"
              alt="OneFin 3D Smartphone"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 30px 70px rgba(0, 0, 0, 0.24))',
              }}
            />
          </div>

          {/* Front-Left Data Card: Pay Widget ($27.40K /week, exact 256px wide, rotate 9deg in Framer) */}
          <div
            style={{
              position: 'absolute',
              top: '325px',
              left: '-107px',
              width: '256px',
              zIndex: 3,
              transform: `rotate(9deg) translate3d(${mousePos.x * -0.5}px, ${scrollY * -0.22 + mousePos.y * -0.5}px, 0)`,
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.14))',
              willChange: 'transform',
            }}
          >
            <img
              src="/assets/LLKlVGCKmbBn9ZfaasOGfBKso.png"
              alt="Pay Widget"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* HERO CONTENT: LAYERED HEADLINE, COPY & CTA BUTTONS (top: 415px) */}
        {/* ========================================================================= */}
        <div
          style={{
            position: 'absolute',
            top: '415px',
            left: 0,
            right: 0,
            zIndex: 10,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 16px',
          }}
        >
          {/* Main Headline */}
          <h1
            style={{
              fontFamily: '"Roboto Condensed", var(--font-geist), sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.045em',
              margin: '0 auto 14px auto',
              textTransform: 'uppercase',
              width: '100%',
              maxWidth: '1280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.5rem, 5.2vw, 5.2rem)',
                lineHeight: 0.94,
                color: '#381ac9',
                background: 'linear-gradient(180deg, #381ac9 0%, #4338ca 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                whiteSpace: 'nowrap',
              }}
            >
              WE BUILD FUNNELS THAT
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.3rem, 4.8vw, 4.8rem)',
                lineHeight: 0.96,
                color: '#121214',
                whiteSpace: 'nowrap',
                marginTop: '4px',
              }}
            >
              PRINT BOOKED QUALIFIED CALLS.
            </span>
          </h1>

          {/* Subtitle & CTA container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.2rem)',
                color: '#333336',
                maxWidth: '680px',
                margin: '14px auto 26px auto',
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              Turn your traffic into qualified sales calls with a high-converting funnel built around your offer, audience and sales process.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
            {/* Primary Framer-styled Glowing Gradient Button */}
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, rgb(109, 85, 226) 0%, rgb(40, 17, 156) 100%)',
                boxShadow: '0px 1px 2px 0px rgba(40, 16, 162, 0.37), 0px 3px 3px 0px rgba(40, 16, 162, 0.32), 0px 8px 5px 0px rgba(40, 16, 162, 0.19), 0px 13px 5px 0px rgba(40, 16, 162, 0.06)',
                textDecoration: 'none',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0px 15px 35px rgba(40, 16, 162, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0px 1px 2px 0px rgba(40, 16, 162, 0.37), 0px 3px 3px 0px rgba(40, 16, 162, 0.32), 0px 8px 5px 0px rgba(40, 16, 162, 0.19), 0px 13px 5px 0px rgba(40, 16, 162, 0.06)';
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(180deg, rgb(98, 98, 254) 0%, rgb(56, 26, 201) 100%)',
                  padding: '12px 32px',
                  borderRadius: '20px',
                  boxShadow: 'inset 0px 1px 1px 0px rgb(255, 255, 255), inset 0px -2px 2px 0px rgb(40, 16, 155), inset 0px 0px 8px 0px rgba(203, 196, 234, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  Book now
                </span>
                <ArrowRight size={18} color="#ffffff" />
              </div>
            </a>

            {/* Secondary Dark Pill Button like Framer */}
            <a
              href="#benefit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 28px',
                borderRadius: '9999px',
                background: 'rgba(18, 18, 20, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.98rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 30, 34, 0.95)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(18, 18, 20, 0.88)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              See our work
            </a>
          </div>
        </div>

          {/* Logo Marquee */}
          <div
            style={{
              marginTop: '110px',
              width: '100%',
              maxWidth: '1200px',
              overflow: 'hidden',
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '50px',
                animation: 'ticker-scroll 32s linear infinite',
                width: 'max-content',
              }}
            >
              {[
                '/images/client-logo/logo-01.png',
                '/images/client-logo/logo-02.png',
                '/images/client-logo/logo-03.png',
                '/images/client-logo/logo-04.png',
                '/images/client-logo/logo-05.png',
                '/images/client-logo/logo-06.png',
                '/images/client-logo/logo-07.png',
                '/images/client-logo/logo-08.png',
                '/images/client-logo/logo-10.png',
                '/images/client-logo/logo-11.png',
                '/images/client-logo/logo-12.png',
                '/images/client-logo/logo-13.png',
                '/images/client-logo/logo-15.png',
                '/images/client-logo/logo-16.png',
                '/images/client-logo/logo-17.png',
                '/images/client-logo/logo-18.png',
                '/images/client-logo/logo-19.png',
                '/images/client-logo/logo-20.png',
                '/images/client-logo/logo-21.png',
                '/images/client-logo/logo-22.png',
                '/images/client-logo/logo-01.png',
                '/images/client-logo/logo-02.png',
                '/images/client-logo/logo-03.png',
                '/images/client-logo/logo-04.png',
                '/images/client-logo/logo-05.png',
                '/images/client-logo/logo-06.png',
                '/images/client-logo/logo-07.png',
                '/images/client-logo/logo-08.png',
                '/images/client-logo/logo-10.png',
                '/images/client-logo/logo-11.png',
                '/images/client-logo/logo-12.png',
                '/images/client-logo/logo-13.png',
                '/images/client-logo/logo-15.png',
                '/images/client-logo/logo-16.png',
                '/images/client-logo/logo-17.png',
                '/images/client-logo/logo-18.png',
                '/images/client-logo/logo-19.png',
                '/images/client-logo/logo-20.png',
                '/images/client-logo/logo-21.png',
                '/images/client-logo/logo-22.png',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="client logo"
                  style={{
                    height: '34px',
                    width: 'auto',
                    opacity: 0.8,
                    filter: 'brightness(0) invert(1)',
                    objectFit: 'contain',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Signature Framer Triple Layer Stadium Border Curves at Bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          pointerEvents: 'none',
          zIndex: 4,
          height: '144px',
        }}
      >
        {/* Layer 1 - Bottom: 1210px wide, rgb(150, 150, 255) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: 'min(1210px, 92vw)',
            height: '144px',
            background: 'rgba(150, 150, 255, 0.45)',
            borderRadius: '80px 80px 0 0',
          }}
        />
        {/* Layer 2 - Middle: 1316px wide, rgb(190, 190, 255) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: 'min(1316px, 96vw)',
            height: '115px',
            background: 'rgba(215, 215, 255, 0.6)',
            borderRadius: '80px 80px 0 0',
          }}
        />
        {/* Layer 3 - Top: 100% wide white transition cap */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '80px',
            background: '#ffffff',
            borderRadius: '120px 120px 0 0',
          }}
        />
      </div>
    </section>
  );
}
