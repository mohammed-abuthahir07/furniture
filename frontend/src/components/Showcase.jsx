import React from 'react';
import './Showcase.css';
import { IMAGES } from '../assets/images';
import { useApp } from '../context';

export default function Showcase() {
  const { t, getWhatsAppUrl } = useApp();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="showcase-section" aria-label="Editorial Brand Billboard">
      <div className="showcase-bg-wrap">
        <img
          src="https://www.mitre10.co.nz/medias/sys_master/staticcontent/h4f/h77/11245269712926/Full-Width-Nara-Outdoor-Furniture-Collection-2/Full-Width-Nara-Outdoor-Furniture-Collection-2.webp"
          alt="Artisanal outdoor veranda wooden daybed"
          className="showcase-bg-img"
          loading="lazy"
        />
        <div className="showcase-overlay"></div>
      </div>

      <div className="container showcase-container">
        <div className="showcase-content reveal-scale">
          <div className="showcase-eyebrow">
            <span>{t.showcase.eyebrow}</span>
          </div>

          <h2 className="showcase-title">
            {t.showcase.titleLine1} <br />
            <em>{t.showcase.titleHighlight}</em>
          </h2>

          <p className="showcase-quote">
            {t.showcase.quote}
          </p>

          <div className="showcase-actions">
            <a
              href="#requirement-form"
              className="btn btn-primary"
              onClick={(e) => handleScrollTo(e, '#requirement-form')}
            >
              <span>{t.showcase.btnCustom}</span>
              <span className="btn-arrow">→</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              <span>{t.showcase.btnChat}</span>
            </a>
          </div>

          <div className="showcase-specs-row">
            <div className="showcase-spec">
              <strong>{t.showcase.metric1Val}</strong>
              <span>{t.showcase.metric1Label}</span>
            </div>
            <div className="showcase-spec-divider"></div>
            <div className="showcase-spec">
              <strong>{t.showcase.metric2Val}</strong>
              <span>{t.showcase.metric2Label}</span>
            </div>
            <div className="showcase-spec-divider"></div>
            <div className="showcase-spec">
              <strong>{t.showcase.metric3Val}</strong>
              <span>{t.showcase.metric3Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
