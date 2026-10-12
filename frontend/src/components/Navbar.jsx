import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useApp } from '../context';

export default function Navbar() {
  const { language, toggleLanguage, theme, toggleTheme, t, getWhatsAppUrl } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.collections, href: '#collections' },
    { label: t.nav.craftsmanship, href: '#craftsmanship' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.bespoke, href: '#bespoke' },
    { label: t.nav.enquiry, href: '#requirement-form' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Brand Identity / Logo */}
          <a href="#hero" className="navbar-brand" onClick={(e) => handleLinkClick(e, '#hero')}>
            <div className="brand-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01" />
              </svg>
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">{t.brand.shortName}</span>
              <span className="brand-tagline">HERITAGE WOODCRAFT</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Controls: Language + Theme Switcher + WhatsApp CTA */}
          <div className="navbar-actions">
            
            {/* Language Switcher (Desktop) */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="lang-switcher-btn desktop-ctrl"
              aria-label="Toggle Language English / Tamil"
              title="Change Language"
            >
              <span className={`lang-opt ${language === 'en' ? 'active-lang' : ''}`}>EN</span>
              <span className="lang-sep">|</span>
              <span className={`lang-opt ${language === 'ta' ? 'active-lang' : ''}`}>தமிழ்</span>
            </button>

            {/* Light / Dark Mode Toggle (Desktop) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn desktop-ctrl"
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* WhatsApp CTA (Desktop) */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-wa-btn desktop-wa-btn"
              aria-label="Chat on WhatsApp"
            >
              <svg className="wa-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.33 13.71C14.17 13.96 13.71 14.5 13.57 14.66C13.43 14.82 13.29 14.84 13.04 14.72C12.8 14.6 12.01 14.34 11.08 13.51C10.35 12.86 9.86 12.06 9.72 11.82C9.58 11.57 9.7 11.44 9.83 11.32C9.94 11.21 10.08 11.03 10.2 10.89C10.33 10.75 10.49 10.17 10.43 10.05C10.37 9.93 9.87 8.7 9.67 8.19C9.47 7.69 9.27 7.76 9.12 7.75H8.65C8.49 7.75 8.22 7.81 7.99 8.06C7.77 8.31 7.14 8.9 7.14 10.1C7.14 11.3 8.01 12.46 8.13 12.62C8.26 12.79 9.85 15.24 12.29 16.29C12.87 16.54 13.32 16.69 13.67 16.8C14.25 16.99 14.78 16.96 15.2 16.9C15.67 16.83 16.65 16.31 16.85 15.74C17.06 15.16 17.06 14.67 17 14.57C16.94 14.47 16.82 14.41 16.57 14.39Z" />
              </svg>
              <span>{t.nav.whatsappBtn}</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Drawer */}
      <aside className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Mobile Menu">
        <div className="mobile-nav-header">
          <div className="brand-text-wrap">
            <span className="brand-title">{t.brand.shortName}</span>
            <span className="brand-tagline">HERITAGE WOODCRAFT</span>
          </div>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile Quick Toggles for Language & Theme */}
        <div className="mobile-controls-row">
          <button
            type="button"
            onClick={toggleLanguage}
            className="mobile-toggle-pill"
            aria-label="Toggle Language"
          >
            <span className={language === 'en' ? 'pill-active' : ''}>EN</span>
            <span className="pill-sep">/</span>
            <span className={language === 'ta' ? 'pill-active' : ''}>தமிழ்</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="mobile-toggle-pill"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? `🌙 ${t.nav.themeDark}` : `☀️ ${t.nav.themeLight}`}
          </button>
        </div>

        <nav className="mobile-nav-body">
          <ul className="mobile-nav-list">
            {navLinks.map((link, idx) => (
              <li key={link.href} className="mobile-nav-item">
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span className="mobile-nav-num">0{idx + 1}</span>
                  <span className="mobile-nav-text">{link.label}</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp full-width"
          >
            <span>{t.nav.whatsappBtn}</span>
            <span>+91 86820 96578</span>
          </a>
          <p className="mobile-studio-info">
            {t.brand.address}
          </p>
        </div>
      </aside>
    </>
  );
}
