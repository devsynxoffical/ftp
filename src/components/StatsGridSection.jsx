import React from 'react';
import { TrendingUp, Users, CalendarCheck, Zap, Sparkles } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function StatsGridSection() {
  const stats = [
    {
      value: '$50M+',
      label: 'PIPELINE GENERATED',
      desc: 'Across 100+ custom engineered acquisition funnels',
      icon: <TrendingUp size={24} style={{ color: '#fbbf24' }} />,
      glowColor: '#fbbf24',
    },
    {
      value: '340%',
      label: 'CONVERSION BOOST',
      desc: 'Average qualified appointment increase from existing traffic',
      icon: <Zap size={24} style={{ color: '#38bdf8' }} />,
      glowColor: '#38bdf8',
    },
    {
      value: '89%',
      label: 'SHOW-UP RATE',
      desc: 'With automated multi-channel SMS & AI calling confirmation',
      icon: <CalendarCheck size={24} style={{ color: '#34d399' }} />,
      glowColor: '#34d399',
    },
    {
      value: '5–10 DAYS',
      label: 'FAST TURNAROUND',
      desc: 'Complete strategy, copy, build, automation & launch',
      icon: <Users size={24} style={{ color: '#a78bfa' }} />,
      glowColor: '#a78bfa',
    },
  ];

  return (
    <section style={{ padding: '90px 0', background: '#ffffff', position: 'relative' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: '#e0e7ff',
              color: '#4338ca',
              fontSize: '0.8rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={14} />
            <span>TRACK RECORD OF EXCELLENCE</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            $50M+ IN PIPELINE. <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '2px 12px', borderRadius: '8px' }}>12+ YEARS</span> OF EXPERIENCE.
          </h2>
        </div>

        {/* 4 Rich Royal Indigo & Electric Violet Gradient Cards */}
        <div
          className="four-col-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 55%, #1e1b4b 100%)',
                borderRadius: '22px',
                padding: '36px 24px',
                textAlign: 'center',
                color: '#ffffff',
                boxShadow: '0 15px 35px rgba(30, 27, 75, 0.3)',
                border: '1.5px solid rgba(99, 102, 241, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.45)';
                e.currentTarget.style.borderColor = '#818cf8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(30, 27, 75, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
              }}
            >
              <div>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px auto',
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.4rem, 3.4vw, 3rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <AnimatedCounter value={item.value} />
                </div>

                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    color: '#38bdf8',
                  }}
                >
                  {item.label}
                </div>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.45 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
