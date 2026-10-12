import React from 'react';
import './Contact.css';
import { useApp } from '../context';

export default function Contact() {
  const { t, getWhatsAppUrl } = useApp();

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Atelier Location">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-up">
          <div className="section-eyebrow">{t.contact.eyebrow}</div>
          <h2 className="section-title">
            {t.contact.title} <em>{t.contact.titleHighlight}</em>
          </h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="contact-cards-grid">
          
          {/* WhatsApp Direct Card */}
          <div className="contact-card highlight-card reveal-up">
            <div className="contact-card-icon wa-bg">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.33 13.71C14.17 13.96 13.71 14.5 13.57 14.66C13.43 14.82 13.29 14.84 13.04 14.72C12.8 14.6 12.01 14.34 11.08 13.51C10.35 12.86 9.86 12.06 9.72 11.82C9.58 11.57 9.7 11.44 9.83 11.32C9.94 11.21 10.08 11.03 10.2 10.89C10.33 10.75 10.49 10.17 10.43 10.05C10.37 9.93 9.87 8.7 9.67 8.19C9.47 7.69 9.27 7.76 9.12 7.75H8.65C8.49 7.75 8.22 7.81 7.99 8.06C7.77 8.31 7.14 8.9 7.14 10.1C7.14 11.3 8.01 12.46 8.13 12.62C8.26 12.79 9.85 15.24 12.29 16.29C12.87 16.54 13.32 16.69 13.67 16.8C14.25 16.99 14.78 16.96 15.2 16.9C15.67 16.83 16.65 16.31 16.85 15.74C17.06 15.16 17.06 14.67 17 14.57C16.94 14.47 16.82 14.41 16.57 14.39Z" />
              </svg>
            </div>
            <span className="contact-card-badge">{t.contact.card1Badge}</span>
            <h3 className="contact-card-title">{t.contact.card1Title}</h3>
            <p className="contact-card-info">
              {t.contact.card1Info}
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-val wa-link"
            >
              {t.brand.phoneDisplay} →
            </a>
          </div>

          {/* Workshop Location */}
          <div className="contact-card reveal-up delay-100">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="contact-card-badge">{t.contact.card2Badge}</span>
            <h3 className="contact-card-title">{t.contact.card2Title}</h3>
            <p className="contact-card-info">
              {t.brand.address}
            </p>
            <span className="contact-card-val text-muted-val">
              {t.brand.hours}
            </span>
          </div>

          {/* Email Enquiry */}
          <div className="contact-card reveal-up delay-200">
            <div className="contact-card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span className="contact-card-badge">{t.contact.card3Badge}</span>
            <h3 className="contact-card-title">{t.contact.card3Title}</h3>
            <p className="contact-card-info">
              {t.contact.card3Info}
            </p>
            <a href={`mailto:${t.brand.email}`} className="contact-card-val">
              {t.brand.email}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
