import React, { useState } from 'react';
import { HERO_IMAGE, STATS } from '../../constants/data';
import './HomeCoreSection.css';

// Hero Section Component (integrated)
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

// Stats Bar Component (integrated)
const StatsBar = () => {
  return (
    <div className="stats-bar">
      {STATS.map((stat) => (
        <div key={stat.id} className="stat-item">
          <span className="stat-num">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

// Search Bar Component (integrated)
const SearchBar = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Búsqueda:', formData);
  };

  return (
    <section className="search-section">
      <p className="search-label">Buscar disponibilidad</p>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-field">
          <label className="search-field-label">Recoger en</label>
          <input 
            type="text"
            name="pickup"
            placeholder="Ubicación"
            value={formData.pickup}
            onChange={handleChange}
            required
          />
        </div>
        <div className="search-field">
          <label className="search-field-label">Entregar en</label>
          <select 
            name="dropoff"
            value={formData.dropoff}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="same">Mismo lugar</option>
            <option value="different">Diferente</option>
          </select>
        </div>
        <div className="search-field">
          <label className="search-field-label">Fecha</label>
          <input 
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="search-btn">
          🔍 Buscar
        </button>
      </form>
    </section>
  );
};

// Main HomeCoreSection Component
const HomeCoreSection = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <SearchBar />
    </>
  );
};

export default HomeCoreSection;