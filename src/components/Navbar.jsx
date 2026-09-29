import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles, Flame, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '/services', isRoute: true },
    { name: 'Work Proof', href: '/workproof', isRoute: true },
    { name: 'How We Do It', href: '/#process' },
    { name: 'Who We Help', href: '/#who-we-work-with' },
    { name: 'Advantage', href: '/#advantage' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '10px 16px' : '16px 20px',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      {/* Floating Modern Dark Glass Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          background: scrolled
            ? 'rgba(10, 6, 22, 0.92)'
            : 'rgba(14, 9, 28, 0.82)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1.5px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '999px',
          padding: '8px 18px 8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: '16px',
          boxShadow: scrolled
            ? '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(124, 58, 237, 0.25)'
            : '0 12px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(124, 58, 237, 0.15)',
          transition: 'all 0.35s ease',
          pointerEvents: 'auto',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            flexShrink: 0,
            transition: 'transform 0.25s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="/images/logo.svg"
            alt="Funnels That Print"
            style={{
              height: '32px',
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 0 12px rgba(167, 139, 250, 0.35))',
            }}
          />
        </Link>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '4px 6px',
            borderRadius: '999px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'nowrap',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link, idx) => {
            const isActive = link.isRoute && location.pathname === link.href;
            return link.isRoute ? (
              <Link
                key={idx}
                to={link.href}
                style={{
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  background: isActive ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(124, 58, 237, 0.5) 100%)' : 'transparent',
                  border: isActive ? '1px solid rgba(167, 139, 250, 0.4)' : '1px solid transparent',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  padding: '7px 14px',
                  borderRadius: '999px',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#cbd5e1';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={idx}
                href={link.href}
                style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  padding: '7px 14px',
                  borderRadius: '999px',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, whiteSpace: 'nowrap' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 20px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #4f46e5 100%)',
              color: '#ffffff',
              fontSize: '0.84rem',
              fontWeight: 800,
              textDecoration: 'none',
              border: '1.5px solid rgba(255, 255, 255, 0.35)',
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.5), 0 0 15px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.25s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 58, 237, 0.7), 0 0 25px rgba(99, 102, 241, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.5), 0 0 15px rgba(99, 102, 241, 0.3)';
            }}
          >
            <Sparkles size={14} style={{ color: '#DDD6FE', flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>Contact Us</span>
            <ArrowRight size={14} style={{ flexShrink: 0 }} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              color: '#ffffff',
              width: '38px',
              height: '38px',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Floating Card */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: '16px',
            right: '16px',
            background: 'rgba(12, 8, 25, 0.98)',
            backdropFilter: 'blur(28px)',
            border: '1.5px solid rgba(167, 139, 250, 0.3)',
            borderRadius: '24px',
            padding: '22px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(124, 58, 237, 0.2)',
            pointerEvents: 'auto',
          }}
        >
          {navLinks.map((link, idx) => (
            link.isRoute ? (
              <Link
                key={idx}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 700,
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: location.pathname === link.href ? 'rgba(124, 58, 237, 0.25)' : 'transparent',
                  border: location.pathname === link.href ? '1px solid rgba(167, 139, 250, 0.4)' : 'none',
                }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '10px 14px',
                  borderRadius: '12px',
                  transition: 'background 0.2s ease',
                }}
              >
                {link.name}
              </a>
            )
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              marginTop: '8px',
              width: '100%',
              padding: '14px',
              textAlign: 'center',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
              color: '#ffffff',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 10px 30px rgba(124, 58, 237, 0.5)',
            }}
          >
            <span>Contact Us &amp; Build Funnel</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
