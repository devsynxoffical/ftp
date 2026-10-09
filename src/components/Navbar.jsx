import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work Proof', href: '/workproof' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '24px',
        left: '0',
        right: '0',
        zIndex: 99999,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 24px',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1240px',
        }}
      >
        {/* 1. Left: Funnels That Print Brand Logo */}
        <Link
          to="/"
          style={{
            pointerEvents: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            padding: '4px 0',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6262fe 0%, #381ac9 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 14px rgba(98, 98, 254, 0.45)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </div>
          <span
            style={{
              fontFamily: '"Geist", "Inter", sans-serif',
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            Funnels That Print
          </span>
        </Link>

        {/* 2. Center: Floating Glass Nav Capsule */}
        <nav
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            padding: '5px 8px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                  background: active ? 'rgba(255, 255, 255, 0.16)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  }
                }}
              >
                {active && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      display: 'inline-block',
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                    }}
                  />
                )}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* 3. Right: Floating White Pill CTA Button */}
        <div style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 24px',
              background: '#ffffff',
              color: '#121214',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25), inset 0 -2px 1px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25), inset 0 -2px 1px rgba(0, 0, 0, 0.15)';
            }}
          >
            Contact us
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            pointerEvents: 'auto',
            position: 'absolute',
            top: '74px',
            left: '20px',
            right: '20px',
            background: 'rgba(18, 18, 22, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '24px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                style={{
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  textDecoration: 'none',
                  background: active ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            style={{
              marginTop: '10px',
              padding: '14px 20px',
              background: '#ffffff',
              color: '#121214',
              borderRadius: '12px',
              fontWeight: 800,
              textAlign: 'center',
              textDecoration: 'none',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
