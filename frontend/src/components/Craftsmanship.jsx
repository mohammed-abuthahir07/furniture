import React from 'react';
import './Craftsmanship.css';
import { useApp } from '../context';

export default function Craftsmanship() {
  const { t } = useApp();

  return (
    <section id="craftsmanship" className="craftsmanship-section" aria-label="Artisanal Craftsmanship and Techniques">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-up">
          <div className="section-eyebrow">{t.craftsmanship.eyebrow}</div>
          <h2 className="section-title">
            {t.craftsmanship.title} <em>{t.craftsmanship.titleHighlight}</em>
          </h2>
          <p className="section-subtitle">
            {t.craftsmanship.subtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {t.craftsmanship.pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="pillar-card reveal-up"
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="pillar-header">
                <span className="pillar-num">{pillar.number}</span>
                <span className="pillar-badge">{pillar.badge}</span>
              </div>

              <h3 className="pillar-title">{pillar.title}</h3>
              <div className="pillar-sub">{pillar.subtitle}</div>
              <p className="pillar-desc">{pillar.description}</p>
              
              <div className="pillar-decor-line"></div>
            </div>
          ))}
        </div>

        {/* Craftsmanship Bottom Callout Banner */}
        <div className="craft-banner reveal-scale delay-300">
          <div className="craft-banner-icon">🌿</div>
          <div className="craft-banner-text">
            <h4>{t.craftsmanship.bannerTitle}</h4>
            <p>{t.craftsmanship.bannerText}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
