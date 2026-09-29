import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#04020a',
        borderTop: '1.5px solid rgba(167, 139, 250, 0.2)',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: '#c4b5fd',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '18px' }}>
              <img
                src="/images/logo.svg"
                alt="Funnels That Print"
                style={{ height: '36px', width: 'auto' }}
              />
            </a>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#c4b5fd', marginBottom: '20px' }}>
              Funnels. Automation. Follow-Up. AI. Built around conversion. We transform cold traffic into predictable qualified booked calls.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <span className="badge-pill" style={{ fontSize: '0.7rem', padding: '4px 12px' }}>
                <Sparkles size={11} /> 100% Conversion Architecture
              </span>
            </div>
          </div>

          {/* Quick Links: Capabilities */}
          <div>
            <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Funnels & Builds
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', padding: 0 }}>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>High-Ticket Funnels</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Landing Pages</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>VSL Funnels</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Low-Ticket Funnels</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Bridge Funnels</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Application Funnels</a></li>
            </ul>
          </div>

          {/* Quick Links: Automations */}
          <div>
            <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Automation & AI
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', padding: 0 }}>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Email & SMS Workflows</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>CRM Pipeline Automation</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Appointment Workflows</a></li>
              <li><a href="#services-grid" style={{ color: '#c4b5fd', textDecoration: 'none' }}>AI Calling Agents</a></li>
              <li><a href="#advantage" style={{ color: '#c4b5fd', textDecoration: 'none' }}>The FTP Advantage</a></li>
            </ul>
          </div>

          {/* Direct Consultation / Quick Contact */}
          <div>
            <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Start A Project
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#c4b5fd', marginBottom: '14px', lineHeight: 1.5 }}>
              Ready to turn traffic into qualified booked calls?
            </p>
            <a
              href="/contact"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '0.86rem' }}
            >
              <span>Build My Funnel ➔</span>
            </a>
          </div>
        </div>

        {/* Giant Glowing Impact Brand Statement in Footer (matching reference "9 FIGURES SCALING" footer) */}
        <div style={{ textAlign: 'center', margin: '40px 0 30px 0', borderTop: '1px solid rgba(167, 139, 250, 0.15)', paddingTop: '50px' }}>
          <div
            className="text-impact"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 7.2rem)',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
              background: 'linear-gradient(180deg, #ffffff 0%, #A78BFA 60%, #4f39f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 50px rgba(108, 92, 231, 0.5)',
            }}
          >
            FUNNELS THAT PRINT
          </div>
          <p style={{ fontSize: '0.88rem', color: '#c4b5fd', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800, marginTop: '14px' }}>
            Funnels • Automation • Follow-Up • AI • Built Around Conversion
          </p>
        </div>

        {/* Subfooter */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} Funnels That Print. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#9d94cc', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#9d94cc', textDecoration: 'none' }}>Terms of Service</a>
            <a href="/contact" style={{ color: '#A78BFA', textDecoration: 'none', fontWeight: 700 }}>Contact Strategy Team</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
