import React from 'react';
import './WhyUs.css';
import { useApp } from '../context';

export default function WhyUs() {
  const { t } = useApp();

  return (
    <section id="why-us" className="whyus-section" aria-label="Why Choose Varnam Woodcraft">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-up">
          <div className="section-eyebrow">{t.whyUs.eyebrow}</div>
          <h2 className="section-title">
            {t.whyUs.title} <em>{t.whyUs.titleHighlight}</em>
          </h2>
          <p className="section-subtitle">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Why Choose Us Cards Grid */}
        <div className="whyus-grid">
          {t.whyUs.items.map((item, index) => (
            <div
              key={item.title}
              className="whyus-card reveal-up"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="whyus-icon-wrap">
                <span className="whyus-icon">{item.icon}</span>
              </div>
              <h3 className="whyus-card-title">{item.title}</h3>
              <p className="whyus-card-desc">{item.description}</p>
              <div className="whyus-card-hover-border"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
