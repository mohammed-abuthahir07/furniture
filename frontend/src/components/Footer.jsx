import React from 'react';
import './Footer.css';
import { useApp } from '../context';

export default function Footer() {
  const { t, getWhatsAppUrl } = useApp();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        
        <div className="footer-main-grid">
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="footer-brand-title">{t.brand.shortName}</span>
              <span className="footer-brand-sub">HERITAGE WOODCRAFT</span>
            </div>
            
            <p className="footer-brand-desc">
              {t.footer.brandDesc}
            </p>

            <div className="footer-wa-box">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa-link"
              >
                <span className="wa-status-dot"></span>
                <span>{t.footer.hotlineLabel} <strong>{t.brand.phoneDisplay}</strong></span>
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.navTitle}</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')}>{t.nav.home}</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>{t.nav.about}</a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.nav.collections}</a>
              </li>
              <li>
                <a href="#craftsmanship" onClick={(e) => handleScrollTo(e, '#craftsmanship')}>{t.nav.craftsmanship}</a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleScrollTo(e, '#why-us')}>{t.nav.whyUs}</a>
              </li>
              <li>
                <a href="#bespoke" onClick={(e) => handleScrollTo(e, '#bespoke')}>{t.nav.bespoke}</a>
              </li>
              <li>
                <a href="#requirement-form" onClick={(e) => handleScrollTo(e, '#requirement-form')}>{t.nav.enquiry}</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Collections Directory */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.categoriesTitle}</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.collections.categories[1]}</a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.collections.categories[2]}</a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.collections.categories[3]}</a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.collections.categories[4]}</a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.collections.categories[5]}</a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.collections.categories[6]}</a>
              </li>
              <li>
                <a href="#collections" onClick={(e) => handleScrollTo(e, '#collections')}>{t.collections.categories[7]}</a>
              </li>
            </ul>
          </div>

          {/* Workshop Details Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer.studioTitle}</h4>
            <div className="footer-contact-info">
              <p>
                <strong>{t.footer.expGallery}</strong> <br />
                {t.brand.address}
              </p>
              <p>
                <strong>{t.footer.studioHours}</strong> <br />
                {t.brand.hours}
              </p>
              <p>
                <strong>{t.footer.archInquiries}</strong> <br />
                <a href={`mailto:${t.brand.email}`} className="footer-email-link">
                  {t.brand.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            {t.footer.copyright}
          </div>
          <div className="footer-motto">
            <span>{t.footer.motto}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
