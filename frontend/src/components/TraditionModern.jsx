import React from 'react';
import './TraditionModern.css';
import { IMAGES } from '../assets/images';
import { useApp } from '../context';

export default function TraditionModern() {
  const { t, getWhatsAppUrl } = useApp();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="tradition-section" aria-label="Tradition Meets Contemporary Living">
      <div className="container">
        
        <div className="tradition-grid">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="tradition-content reveal-left">
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>
              {t.tradition.eyebrow}
            </div>

            <h2 className="tradition-title">
              {t.tradition.title} <em>{t.tradition.titleHighlight}</em>
            </h2>

            <p className="tradition-lead">
              {t.tradition.lead}
            </p>

            <div className="tradition-pillars">
              <div className="tradition-pillar-item">
                <div className="pillar-bullet-num">A</div>
                <div className="pillar-bullet-text">
                  <h4>{t.tradition.p1Title}</h4>
                  <p>{t.tradition.p1Text}</p>
                </div>
              </div>

              <div className="tradition-pillar-item">
                <div className="pillar-bullet-num">B</div>
                <div className="pillar-bullet-text">
                  <h4>{t.tradition.p2Title}</h4>
                  <p>{t.tradition.p2Text}</p>
                </div>
              </div>

              <div className="tradition-pillar-item">
                <div className="pillar-bullet-num">C</div>
                <div className="pillar-bullet-text">
                  <h4>{t.tradition.p3Title}</h4>
                  <p>{t.tradition.p3Text}</p>
                </div>
              </div>
            </div>

            <div className="tradition-actions">
              <a
                href="#requirement-form"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, '#requirement-form')}
              >
                <span>{t.tradition.btnPlan}</span>
                <span className="btn-arrow">→</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>{t.tradition.btnChat}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Split Image Showcase */}
          <div className="tradition-media reveal-right">
            <div className="tradition-image-card">
              <img
                src="https://images.woodenstreet.de/image/data/bed-without-storage/lotus-teak-wood-low-floor-upholstered-bed-withut-storage-brass-inlay/new-logo/NEW-IMAGES/King+-size/AI/1.jpg"
                alt="Modern canopy solid wood bed in contemporary bedroom"
                className="tradition-img"
                loading="lazy"
              />
              <div className="tradition-image-badge">
                <strong>{t.tradition.badgeTitle}</strong>
                <span>{t.tradition.badgeSub}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
