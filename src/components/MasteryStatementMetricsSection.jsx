import React, { useState, useEffect } from 'react';
import { Check, Sparkles, RefreshCw, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function MasteryStatementMetricsSection() {
  // Rotating typing effect
  const rotatingWords = [
    'AI-workflows',
    'AI-voice agents',
    'Speed-to-Lead logic',
    'High-Converting Copy',
    'Omnichannel CRM sync',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = rotatingWords[currentWordIndex];
    let timer;

    if (!isDeleting && displayedText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? fullWord.substring(0, prev.length - 1) : fullWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  const metrics = [
    {
      label: 'Service businesses & brands scaled with the system',
      number: '500+',
    },
    {
      label: 'Typical turnaround time from kickoff to live traffic',
      number: '5–10d',
    },
    {
      label: 'Pipeline revenue generated across custom funnels',
      number: '$50M+',
    },
    {
      label: 'Founders mentored on offer structure & conversion',
      number: '100+',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        padding: '50px 0 45px 0',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #4338ca 70%, #1e1b4b 100%)',
        overflow: 'hidden',
        color: '#ffffff',
      }}
    >
      {/* Dynamic Fluid Wave Lines Background */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 250 C 300 120, 700 380, 1100 200 C 1300 110, 1500 280, 1600 220"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeDasharray="8 8"
        />
        <path
          d="M-100 480 C 250 350, 650 620, 1050 420 C 1300 300, 1500 500, 1600 430"
          stroke="#a78bfa"
          strokeWidth="3"
        />
        <path
          d="M-100 700 C 350 580, 800 780, 1200 620 C 1400 540, 1550 680, 1600 650"
          stroke="#38bdf8"
          strokeWidth="2"
        />
      </svg>

      <div className="container-wide" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {/* Top Split: Left Stamp Badge + Right Large Typography Statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '170px 1fr',
            gap: '32px',
            alignItems: 'center',
            marginBottom: '36px',
          }}
          className="hero-grid-split"
        >
          {/* Left Stamp Badge */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                border: '2px dashed rgba(255, 255, 255, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px auto',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 25px rgba(167, 139, 250, 0.3)',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  border: '1.5px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Check size={22} strokeWidth={3} />
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#e0e7ff', lineHeight: 1.35 }}>
              Crafted by Humans. <br />
              <span style={{ color: '#a78bfa' }}>Accelerated by AI.</span>
            </div>
          </div>

          {/* Right Statement with Interactive Typing Pill */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(1.6rem, 2.6vw, 2.35rem)',
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}
            >
              Over 12 years, we've refined our Design &amp; Funnel Architecture expertise and combined it with{' '}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '3px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)',
                  fontSize: '0.82em',
                  fontWeight: 800,
                  verticalAlign: 'middle',
                  margin: '0 4px',
                  color: '#38bdf8',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  minWidth: '150px',
                }}
              >
                <RefreshCw size={15} className="animate-spin-slow" style={{ color: '#38bdf8' }} />
                <span>{displayedText}</span>
                <span className="typing-cursor">|</span>
              </span>{' '}
              to help ambitious teams{' '}
              <span style={{ color: '#ffffff', fontWeight: 800 }}>move faster,</span>{' '}
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontWeight: 600 }}>
                build smarter, and raise the bar.
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom 2x2 Metric Cards Grid (Fit compactly into single screen) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '18px',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
          className="hero-grid-split"
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ maxWidth: '320px' }}>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#475569',
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </p>
              </div>

              <div>
                <AnimatedCounter
                  value={item.number}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(2.4rem, 3.8vw, 3.2rem)',
                    fontWeight: 600,
                    color: '#0f172a',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    display: 'inline-block',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blinkCursor 0.8s infinite;
          color: #38bdf8;
          font-weight: 400;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
