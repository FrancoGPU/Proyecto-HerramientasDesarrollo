import React from 'react';
import { WHY_CHOOSE_US } from '../../constants/data';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-left">
        <p className="section-eyebrow">¿Por qué Álamo?</p>
        <h2 className="section-title">
          Razones para elegir<em>nos</em>
        </h2>
        <p className="why-desc">
          Llevamos más de una década brindando experiencias de movilidad turística únicas.
          Cada auto, cada ruta, cada cliente importa.
        </p>
      </div>
      <div className="why-features">
        {WHY_CHOOSE_US.map((feature) => (
          <div key={feature.id} className="why-card">
            <div className="why-icon">{feature.icon}</div>
            <h3 className="why-card-title">{feature.title}</h3>
            <p className="why-card-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
