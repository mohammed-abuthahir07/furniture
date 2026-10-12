import React from 'react';
import './About.css';
import { IMAGES } from '../assets/images';
import { useApp } from '../context';

export default function About() {
  const { t, getWhatsAppUrl } = useApp();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section" aria-label="About Varnam Heritage Woodcraft">
      <div className="container">
        
        <div className="about-grid">
          
          {/* Left Column: Artisanal Imagery & Heritage Badge */}
          <div className="about-media-col reveal-left">
            <div className="about-image-wrapper">
              <img
                src="https://www.khaticraft.com/web/image/product.template/4947/image_1920?unique=d2557ee"
                alt="Handcrafted solid teak bed master joinery"
                className="about-main-img"
                loading="lazy"
              />
              <div className="about-img-frame-accent"></div>
              
              {/* Secondary Layered Image */}
              <div className="about-secondary-card reveal-scale delay-200">
                <img
                  src={IMAGES.aboutSecondary}
                  alt="Sculpted coffee table detail"
                  className="about-secondary-img"
                  loading="lazy"
                />
                <div className="secondary-card-label">
                  <span>{t.about.secondaryLabel}</span>
                </div>
              </div>

              {/* Heritage Seal */}
              <div className="heritage-seal">
                <div className="seal-inner">
                  <span className="seal-year">{t.about.sealYear}</span>
                  <span className="seal-number">{t.about.sealNumber}</span>
                  <span className="seal-text">{t.about.sealText}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story */}
          <div className="about-content-col reveal-right">
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>
              {t.about.eyebrow}
            </div>

            <h2 className="about-heading">
              {t.about.title} <em>{t.about.titleHighlight}</em>
            </h2>

            <p className="about-lead">
              {t.about.lead}
            </p>

            <p className="about-body">
              {t.about.p1}
            </p>

            <p className="about-body">
              {t.about.p2}
            </p>

            {/* Heritage Stats Grid */}
            <div className="about-stats-grid reveal-up delay-300">
              {t.about.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="about-actions reveal-up delay-400">
              <a
                href="#craftsmanship"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, '#craftsmanship')}
              >
                <span>{t.about.btnCraft}</span>
                <span className="btn-arrow">→</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>{t.about.btnConsult}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
