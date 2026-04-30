import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>Acerca de Álamo Rent</h1>
        <p className="about-subtitle">Tu aliado en movilidad desde 2012</p>
      </section>

      <section className="about-content">
        <p>Esta página está en desarrollo...</p>
      </section>
    </main>
  );
};

export default About;
