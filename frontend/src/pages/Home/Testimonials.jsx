import React from 'react';
import { TESTIMONIALS } from '../../constants/data';
import './Testimonials.css';

const Testimonials = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
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
  );
};

export default Testimonials;
