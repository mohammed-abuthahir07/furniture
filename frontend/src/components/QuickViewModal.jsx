import React, { useEffect } from 'react';
import './QuickViewModal.css';
import { useApp } from '../context';

export default function QuickViewModal({ item, onClose }) {
  const { t, getItemEnquiryUrl } = useApp();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close details"
        >
          ✕
        </button>

        <div className="modal-grid">
          
          {/* Modal Media */}
          <div className="modal-media">
            <img src={item.image} alt={item.title} className="modal-image" />
            {item.tag && <span className="modal-tag">{item.tag}</span>}
          </div>

          {/* Modal Content */}
          <div className="modal-content">
            <div className="modal-eyebrow">{item.category} • {t.modal.badge}</div>
            <h2 className="modal-title">{item.title}</h2>

            <p className="modal-desc">{item.description}</p>

            <div className="modal-specs-box">
              <div className="spec-row">
                <span className="spec-key">{t.modal.hardwoodLabel}</span>
                <span className="spec-val">{item.wood}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">{t.modal.dimsLabel}</span>
                <span className="spec-val">{item.dimensions}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">{t.modal.joineryLabel}</span>
                <span className="spec-val">{item.highlight}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">{t.modal.finishLabel}</span>
                <span className="spec-val">{t.modal.finishVal}</span>
              </div>
            </div>

            <div className="modal-features-list">
              <div className="feat-chip">✓ {t.modal.feat1}</div>
              <div className="feat-chip">✓ {t.modal.feat2}</div>
              <div className="feat-chip">✓ {t.modal.feat3}</div>
            </div>

            <div className="modal-actions">
              <a
                href={getItemEnquiryUrl(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp modal-wa-btn"
              >
                <svg className="wa-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.33 13.71C14.17 13.96 13.71 14.5 13.57 14.66C13.43 14.82 13.29 14.84 13.04 14.72C12.8 14.6 12.01 14.34 11.08 13.51C10.35 12.86 9.86 12.06 9.72 11.82C9.58 11.57 9.7 11.44 9.83 11.32C9.94 11.21 10.08 11.03 10.2 10.89C10.33 10.75 10.49 10.17 10.43 10.05C10.37 9.93 9.87 8.7 9.67 8.19C9.47 7.69 9.27 7.76 9.12 7.75H8.65C8.49 7.75 8.22 7.81 7.99 8.06C7.77 8.31 7.14 8.9 7.14 10.1C7.14 11.3 8.01 12.46 8.13 12.62C8.26 12.79 9.85 15.24 12.29 16.29C12.87 16.54 13.32 16.69 13.67 16.8C14.25 16.99 14.78 16.96 15.2 16.9C15.67 16.83 16.65 16.31 16.85 15.74C17.06 15.16 17.06 14.67 17 14.57C16.94 14.47 16.82 14.41 16.57 14.39Z" />
                </svg>
                <span>{t.modal.btnEnquire}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
