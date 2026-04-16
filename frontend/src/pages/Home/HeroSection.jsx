import React from 'react';
import { HERO_IMAGE } from '../../constants/data';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-texture"></div>
      <div className="hero-left">
        <span className="hero-badge">
          <span className="hero-badge-dot"></span>
          Servicio premium de alquiler
        </span>
        <h1 className="hero-title">
          Alquila tu <em>auto de lujo</em>
        </h1>
        <p className="hero-desc">
          Experimenta la libertad de viajar en los vehículos más exclusivos.
          Desde sedanes elegantes hasta SUVs premium, tenemos la opción perfecta para ti.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Explorar Flota</button>
          <button className="btn-ghost">Saber más</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-car-bg"></div>
        <div className="hero-car-glow"></div>
        <div className="car-svg-wrap">
          <img 
            src={HERO_IMAGE} 
            alt="Auto de lujo Álamo Rent"
            className="hero-car-image"
          />
        </div>
        <div className="hero-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
