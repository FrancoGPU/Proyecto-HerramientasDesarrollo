import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div>
        <h2 className="cta-title">¿Listo para tu próximo viaje?</h2>
        <p className="cta-sub">Reserva ahora y obtén 10% de descuento en tu primera renta</p>
      </div>
      <button className="btn-dark">Reservar mi auto →</button>
    </div>
  );
};

export default CallToAction;
