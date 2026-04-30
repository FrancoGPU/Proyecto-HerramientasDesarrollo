import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CARS, TESTIMONIALS, WHY_CHOOSE_US } from '../../constants/data';
import './HomeShowcaseSection.css';

const HomeShowcaseSection = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    console.log('Ver todos los modelos');
  };

  const handleReserve = (carName) => {
    navigate('/contacto', { state: { autoSeleccionado: carName } });
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <>
      <section className="fleet-section" id="servicios">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Nuestra flota</p>
            <h2 className="section-title">Vehiculos destacados</h2>
          </div>
          <button
            onClick={handleViewAll}
            className="section-link"
            aria-label="Ver todos los modelos disponibles"
          >
            Ver todos los modelos →
          </button>
        </div>
        <div className="fleet-grid">
          {CARS.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-img-area" style={{ backgroundColor: car.category === 'premium' ? '#1a1a1a' : '#f0ede6' }}>
                <span className="car-category-tag">{car.category.toUpperCase()}</span>
                <img
                  src={car.image}
                  alt={car.model}
                  className="car-image"
                  loading="lazy"
                />
              </div>
              <div className="car-info">
                <h3 className="car-name">{car.model}</h3>
                <div className="car-specs">
                  {car.specs.map((spec, idx) => (
                    <div key={idx} className="car-spec">
                      <span className="spec-icon">✓</span>
                      <span className="spec-text">{spec}</span>
                    </div>
                  ))}
                </div>
                <div className="car-footer">
                  <div className="car-price">
                    <span className="price-label">desde</span>
                    <strong className="price-amount">{car.price}</strong>
                    <span className="price-unit">{car.priceUnit}</span>
                  </div>
                  <button
                    className="btn-reserve"
                    onClick={() => handleReserve(car.model)}
                  >
                    RESERVAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-section" id="quienes-somos">
        <div className="why-left">
          <p className="section-eyebrow">¿Por que Alamo?</p>
          <h2 className="section-title">
            Razones para elegir<em>nos</em>
          </h2>
          <p className="why-desc">
            Llevamos mas de una decada brindando experiencias de movilidad turistica unicas.
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

      <section className="testimonials">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Testimonio de clientes</p>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          </div>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="testi-card">
              <div className="testi-stars">{renderStars(testimonial.rating)}</div>
              <p className="testi-text">"{testimonial.text}"</p>
              <p className="testi-author">{testimonial.author}</p>
              <p className="testi-origin">{testimonial.origin}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-section">
        <div>
          <h2 className="cta-title">¿Listo para tu proximo viaje?</h2>
          <p className="cta-sub">Reserva ahora y obten 10% de descuento en tu primera renta</p>
        </div>
        <button 
          className="btn-dark" 
          onClick={() => navigate('/contacto')}
        >
          Reservar mi auto →
        </button>
      </div>
    </>
  );
};

export default HomeShowcaseSection;