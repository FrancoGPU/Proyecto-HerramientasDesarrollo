import React from 'react';

const ContactFormCard = ({ formData, errors, status, feedbackMessage, onChange, onSubmit }) => {
  return (
    <form className="contact-form-card" onSubmit={onSubmit} noValidate>
      <div className="contact-grid-fields">
        <label className="contact-field">
          <span>Nombre completo</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Tu nombre"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <small className="contact-error">{errors.name}</small> : null}
        </label>

        <label className="contact-field">
          <span>Correo electronico</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="tu@correo.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <small className="contact-error">{errors.email}</small> : null}
        </label>

        <label className="contact-field">
          <span>Telefono</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="+51 987 654 321"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <small className="contact-error">{errors.phone}</small> : null}
        </label>

        <label className="contact-field">
          <span>Asunto</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={onChange}
            placeholder="Reserva, cotizacion o consulta"
            aria-invalid={Boolean(errors.subject)}
          />
          {errors.subject ? <small className="contact-error">{errors.subject}</small> : null}
        </label>

        <label className="contact-field contact-field-full">
          <span>Mensaje</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={onChange}
            placeholder="Cuentanos fechas, destino, numero de personas o cualquier detalle relevante."
            rows="6"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <small className="contact-error">{errors.message}</small> : null}
        </label>
      </div>

      <div className="contact-form-footer">
        <p className={`contact-feedback ${status}`}>
          {feedbackMessage || 'Tu mensaje se enviara con validacion y confirmacion visual.'}
        </p>
        <button type="submit" className="btn-dark contact-submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  );
};

export default ContactFormCard;
