import React from 'react';
import { CARS } from '../../constants/data';
import './FeaturedCars.css';

const FeaturedCars = () => {
  const handleViewAll = () => {
    console.log('Ver todos los modelos');
    // Aquí puedes agregar navegación o scroll
  };

  const handleReserve = (carName) => {
    console.log('Reservar:', carName);
  };

  return (
    <section className="fleet-section">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">Nuestra flota</p>
          <h2 className="section-title">Vehículos destacados</h2>
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
  );
};

export default FeaturedCars;
