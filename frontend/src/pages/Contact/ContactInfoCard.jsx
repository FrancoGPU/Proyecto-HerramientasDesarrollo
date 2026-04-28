import React from 'react';
import { CONTACT_DETAILS, CONTACT_FAQ } from '../../constants/data';

const ContactInfoCard = ({ infoRef, infoVisible }) => {
  return (
    <aside ref={infoRef} className={`contact-info-card ${infoVisible ? 'is-visible' : ''}`}>
      <div className="contact-info-block">
        <p className="contact-panel-label">Oficina principal</p>
        <strong>{CONTACT_DETAILS.address}</strong>
        <span>{CONTACT_DETAILS.schedule}</span>
        <span>{CONTACT_DETAILS.responseTime}</span>
      </div>

      <div className="contact-info-block">
        <p className="contact-panel-label">Datos directos</p>
        <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, '')}`}>{CONTACT_DETAILS.phone}</a>
        <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
      </div>

      <div className="contact-info-block contact-faq">
        <p className="contact-panel-label">Preguntas frecuentes</p>
        {CONTACT_FAQ.map((item) => (
          <div key={item.id} className="contact-faq-item">
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ContactInfoCard;
