import React, { useState } from 'react';
import './RequirementForm.css';
import { BRAND } from '../data/furnitureData';
import { useApp } from '../context';

export default function RequirementForm() {
  const { t } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    category: '',
    wood: '',
    timeline: '',
    requirement: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.form.errors.name;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = t.form.errors.phoneRequired;
    } else if (cleanPhone.length < 10) {
      newErrors.phone = t.form.errors.phoneInvalid;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t.form.errors.emailRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t.form.errors.emailInvalid;
    }

    if (!formData.address.trim()) {
      newErrors.address = t.form.errors.address;
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = t.form.errors.reqRequired;
    } else if (formData.requirement.trim().length < 8) {
      newErrors.requirement = t.form.errors.reqShort;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Build formatted localized WhatsApp message
    const message = `${t.form.waGreeting}

*${t.form.waClientName}:* ${formData.name.trim()}
*${t.form.waPhone}:* ${formData.phone.trim()}
*${t.form.waEmail}:* ${formData.email.trim()}
*${t.form.waAddress}:* ${formData.address.trim()}
${formData.category.trim() ? `*${t.form.waCategory}:* ${formData.category.trim()}\n` : ''}${formData.wood.trim() ? `*${t.form.waWood}:* ${formData.wood.trim()}\n` : ''}${formData.timeline.trim() ? `*${t.form.waTimeline}:* ${formData.timeline.trim()}\n` : ''}
*${t.form.waReqHeading}:*
${formData.requirement.trim()}

${t.form.waClosing}`;

    const waUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 350);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      category: '',
      wood: '',
      timeline: '',
      requirement: '',
    });
    setErrors({});
    setSubmittedSuccess(false);
  };

  return (
    <section id="requirement-form" className="form-section" aria-label="Furniture Requirement and Consultation Form">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-up">
          <div className="section-eyebrow">{t.form.eyebrow}</div>
          <h2 className="section-title">
            {t.form.title} <em>{t.form.titleHighlight}</em>
          </h2>
          <p className="section-subtitle">
            {t.form.subtitle}
          </p>
        </div>

        <div className="form-wrapper reveal-scale">
          {submittedSuccess ? (
            <div className="form-success-card">
              <div className="success-icon-wrap">✓</div>
              <h3 className="success-title">{t.form.successTitle}</h3>
              <p className="success-desc">
                {t.form.successDesc}
              </p>
              <p className="success-note">
                {t.form.successNote}
              </p>
              
              <div className="success-actions">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-whatsapp"
                >
                  <span>{t.form.reopenBtn}</span>
                  <span className="btn-arrow">→</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="btn btn-secondary"
                >
                  <span>{t.form.resetBtn}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="requirement-form">
              
              {/* Row 1: Name & Phone */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="form-name" className="form-label">
                    {t.form.nameLabel} <span className="req-star">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    autoComplete="name"
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="form-phone" className="form-label">
                    {t.form.phoneLabel} <span className="req-star">*</span>
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.form.phonePlaceholder}
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>

              {/* Row 2: Email & Address */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="form-email" className="form-label">
                    {t.form.emailLabel} <span className="req-star">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    autoComplete="email"
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="form-address" className="form-label">
                    {t.form.addressLabel} <span className="req-star">*</span>
                  </label>
                  <input
                    id="form-address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={t.form.addressPlaceholder}
                    className={`form-input ${errors.address ? 'has-error' : ''}`}
                    autoComplete="street-address"
                  />
                  {errors.address && <span className="field-error">{errors.address}</span>}
                </div>
              </div>

              {/* Row 3: All Input Tags for Category, Hardwood, Timeline */}
              <div className="form-grid-3">
                <div className="form-group">
                  <label htmlFor="form-category" className="form-label">
                    {t.form.categoryLabel}
                  </label>
                  <input
                    id="form-category"
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder={t.form.categoryPlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-wood" className="form-label">
                    {t.form.woodLabel}
                  </label>
                  <input
                    id="form-wood"
                    type="text"
                    name="wood"
                    value={formData.wood}
                    onChange={handleChange}
                    placeholder={t.form.woodPlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-timeline" className="form-label">
                    {t.form.timelineLabel}
                  </label>
                  <input
                    id="form-timeline"
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder={t.form.timelinePlaceholder}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Row 4: Furniture Requirement Description */}
              <div className="form-group">
                <label htmlFor="form-requirement" className="form-label">
                  {t.form.requirementLabel} <span className="req-star">*</span>
                </label>
                <textarea
                  id="form-requirement"
                  name="requirement"
                  rows="4"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder={t.form.requirementPlaceholder}
                  className={`form-textarea ${errors.requirement ? 'has-error' : ''}`}
                ></textarea>
                {errors.requirement && <span className="field-error">{errors.requirement}</span>}
              </div>

              {/* Submit Row */}
              <div className="form-submit-row">
                <div className="form-privacy-note">
                  🔒 <span>{t.form.privacyNote}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-whatsapp form-submit-btn"
                >
                  <svg className="wa-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.27 15.11 13.67 14.88 13.59C14.66 13.51 14.5 13.47 14.33 13.71C14.17 13.96 13.71 14.5 13.57 14.66C13.43 14.82 13.29 14.84 13.04 14.72C12.8 14.6 12.01 14.34 11.08 13.51C10.35 12.86 9.86 12.06 9.72 11.82C9.58 11.57 9.7 11.44 9.83 11.32C9.94 11.21 10.08 11.03 10.2 10.89C10.33 10.75 10.49 10.17 10.43 10.05C10.37 9.93 9.87 8.7 9.67 8.19C9.47 7.69 9.27 7.76 9.12 7.75H8.65C8.49 7.75 8.22 7.81 7.99 8.06C7.77 8.31 7.14 8.9 7.14 10.1C7.14 11.3 8.01 12.46 8.13 12.62C8.26 12.79 9.85 15.24 12.29 16.29C12.87 16.54 13.32 16.69 13.67 16.8C14.25 16.99 14.78 16.96 15.2 16.9C15.67 16.83 16.65 16.31 16.85 15.74C17.06 15.16 17.06 14.67 17 14.57C16.94 14.47 16.82 14.41 16.57 14.39Z" />
                  </svg>
                  <span>{isSubmitting ? t.form.submittingBtn : t.form.submitBtn}</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
