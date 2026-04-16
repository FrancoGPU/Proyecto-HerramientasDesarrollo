import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ContactHero from './ContactHero';
import ContactFormCard from './ContactFormCard';
import ContactInfoCard from './ContactInfoCard';
import './Contact.css';

const Contact = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Ingresa tu nombre completo.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Ingresa un correo válido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'El correo no tiene un formato válido.';
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Ingresa un teléfono de contacto.';
    if (!formData.subject.trim()) nextErrors.subject = 'Indica el motivo de tu mensaje.';
    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Escribe un mensaje con más detalle.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      setStatus('error');
      setFeedbackMessage('Revisa los campos marcados antes de enviar.');
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('Procesando tu mensaje...');

    const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('No se pudo enviar el formulario.');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }

      setStatus('success');
      setFeedbackMessage('Tu mensaje quedó registrado. Nuestro equipo te contactará pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('No pudimos enviar el formulario en este momento. Usa WhatsApp o correo mientras tanto.');
    }
  };

  return (
    <main className="contact-page">
      <ContactHero heroRef={heroRef} heroVisible={heroVisible} />

      <section ref={formRef} className={`contact-content ${formVisible ? 'is-visible' : ''}`}>
        <div className="section-header contact-section-header">
          <div>
            <p className="section-eyebrow">Escríbenos</p>
            <h2 className="section-title">Formulario de contacto profesional</h2>
          </div>
        </div>

        <div className="contact-layout">
          <ContactFormCard
            formData={formData}
            errors={errors}
            status={status}
            feedbackMessage={feedbackMessage}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          <ContactInfoCard infoRef={infoRef} infoVisible={infoVisible} />
        </div>
      </section>
    </main>
  );
};

export default Contact;
