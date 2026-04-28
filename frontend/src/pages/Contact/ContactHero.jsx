import React from 'react';
import { CONTACT_CHANNELS, CONTACT_DETAILS } from '../../constants/data';

const ContactHero = ({ heroRef, heroVisible }) => {
  return (
    <section ref={heroRef} className={`contact-hero ${heroVisible ? 'is-visible' : ''}`}>
      <div className="contact-hero-copy">
        <p className="contact-eyebrow">Contacto directo</p>
        <h1 className="contact-title">Hablemos de tu proximo viaje con precision y respuesta rapida.</h1>
        <p className="contact-description">
          Cuentanos que necesitas y te ayudaremos a organizar la mejor opcion de movilidad.
          El formulario esta listo para trabajar con datos provisionales o con tu endpoint real.
        </p>
        <div className="contact-metrics">
          <div className="contact-metric">
            <strong>15 min</strong>
            <span>respuesta habitual</span>
          </div>
          <div className="contact-metric">
            <strong>24/7</strong>
            <span>canales directos</span>
          </div>
          <div className="contact-metric">
            <strong>{CONTACT_DETAILS.companyName}</strong>
            <span>atencion comercial</span>
          </div>
        </div>
      </div>

      <aside className="contact-panel">
        <p className="contact-panel-label">Canales activos</p>
        {CONTACT_CHANNELS.map((channel) => (
          <a
            key={channel.id}
            className="contact-channel"
            href={channel.href}
            target={channel.label === 'WhatsApp' ? '_blank' : undefined}
            rel={channel.label === 'WhatsApp' ? 'noreferrer' : undefined}
          >
            <div>
              <span className="contact-channel-label">{channel.label}</span>
              <strong className="contact-channel-value">{channel.value}</strong>
            </div>
            <p className="contact-channel-description">{channel.description}</p>
          </a>
        ))}
      </aside>
    </section>
  );
};

export default ContactHero;
