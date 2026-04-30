import React, { useEffect } from 'react';
import {
  SERVICES_BOOKING_STEPS,
  SERVICES_COVERAGES,
  SERVICES_EXTRAS,
  SERVICES_FAQ,
  SERVICES_MAIN,
  SERVICES_REQUIREMENTS
} from '../../constants/data';
import './Service.css';

const Services = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="services-page">
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="section-eyebrow">Servicios</p>
          <h1 className="section-title">Nuestros servicios</h1>
        </div>
      </section>

      <section className="services-section" aria-label="Servicios">

        <div className="services-main-grid" aria-label="Servicios principales">
          {SERVICES_MAIN.map((service) => (
            <article key={service.title} className="service-card">
              <h2 className="service-card-title">{service.title}</h2>
              <p className="service-card-text">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="services-info-grid">
          <article className="services-info-card" aria-label="Coberturas y seguros">
            <h2 className="services-card-title">Coberturas y seguros</h2>
            <ul className="services-list">
              {SERVICES_COVERAGES.map((item) => (
                <li key={item} className="services-list-item">
                  <span className="services-list-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="services-info-card" aria-label="Extras">
            <h2 className="services-card-title">Extras (add-ons)</h2>
            <ul className="services-list">
              {SERVICES_EXTRAS.map((item) => (
                <li key={item} className="services-list-item">
                  <span className="services-list-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="services-process-card" aria-label="Proceso de reserva">
          <h2 className="services-card-title">Proceso de reserva (pasos)</h2>
          <ol className="services-steps">
            {SERVICES_BOOKING_STEPS.map((step, index) => (
              <li key={step} className="services-step">
                <span className="services-step-num" aria-hidden="true">{index + 1}</span>
                <span className="services-step-label">{step}</span>
              </li>
            ))}
          </ol>
        </article>

        <div className="services-bottom-grid">
          <article className="services-info-card" aria-label="Requisitos">
            <h2 className="services-card-title">Requisitos</h2>
            <ul className="services-list">
              {SERVICES_REQUIREMENTS.map((item) => (
                <li key={item} className="services-list-item">
                  <span className="services-list-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="services-info-card" aria-label="Preguntas frecuentes">
            <h2 className="services-card-title">Preguntas frecuentes (FAQ)</h2>
            <div className="services-faq">
              {SERVICES_FAQ.map((item) => (
                <div key={item.id} className="services-faq-item">
                  <strong className="services-faq-question">{item.question}</strong>
                  <p className="services-faq-answer">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Services;