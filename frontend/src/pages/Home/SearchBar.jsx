import React, { useState } from 'react';
import './SearchBar.css';

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

export default SearchBar;
