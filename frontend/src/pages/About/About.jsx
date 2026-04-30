import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  ABOUT_HERO,
  ABOUT_STORY,
  ABOUT_MISSION,
  ABOUT_VISION,
  ABOUT_VALUES,
  ABOUT_TEAM_STATS
} from '../../constants/data';
import './About.css';

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [principlesRef, principlesVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <section ref={heroRef} className={`about-hero ${heroVisible ? 'is-visible' : ''}`}>
        <div className="about-hero-content">
          <p className="section-eyebrow">Nuestra Historia</p>
          <h1 className="about-hero-title">{ABOUT_HERO.title}</h1>
          <p className="about-hero-subtitle">{ABOUT_HERO.subtitle}</p>
          <p className="about-hero-description">{ABOUT_HERO.description}</p>
        </div>
      </section>
      {/* MISSION & VISION SECTION - REDISEÑADA */}
      <section ref={principlesRef} className={`about-section about-principles ${principlesVisible ? 'is-visible' : ''}`}>
        <div className="about-principles-grid">
          <div className="about-principle-item">
            <h2 className="about-principle-title">🎯 Misión</h2>
            <p className="about-principle-text">{ABOUT_MISSION.description}</p>
          </div>

          <div className="about-principle-divider"></div>

          <div className="about-principle-item">
            <h2 className="about-principle-title">🔮 Visión</h2>
            <p className="about-principle-text">{ABOUT_VISION.description}</p>
          </div>
        </div>
      </section>

      {/* STORY TIMELINE SECTION */}
      <section ref={storyRef} className={`about-section about-story ${storyVisible ? 'is-visible' : ''}`}>
        <div className="section-header about-section-header">
          <div>
            <p className="section-eyebrow">Línea de Tiempo</p>
            <h2 className="section-title">Nuestro Viaje</h2>
          </div>
        </div>

        <div className="about-timeline">
          {ABOUT_STORY.map((item, index) => (
            <div key={item.id} className="about-timeline-item">
              <div className="about-timeline-marker">
                <span className="about-timeline-year">{item.year}</span>
              </div>
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">{item.title}</h3>
                <p className="about-timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES SECTION */}
      <section ref={valuesRef} className={`about-section about-values ${valuesVisible ? 'is-visible' : ''}`}>
        <div className="section-header about-section-header">
          <div>
            <p className="section-eyebrow">Nuestros Valores</p>
            <h2 className="section-title">Lo que nos define</h2>
          </div>
        </div>

        <div className="about-values-grid">
          {ABOUT_VALUES.map((value) => (
            <article key={value.id} className="about-value-card card-base">
              <div className="about-value-icon">{value.icon}</div>
              <h3 className="about-value-title">{value.title}</h3>
              <p className="about-value-description">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef} className={`about-stats ${statsVisible ? 'is-visible' : ''}`}>
        <div className="section-header about-section-header">
          <div>
            <p className="section-eyebrow">Por los números</p>
            <h2 className="section-title">Nuestro Impacto</h2>
          </div>
        </div>

        <div className="about-stats-grid">
          {ABOUT_TEAM_STATS.map((stat) => (
            <div key={stat.id} className="about-stat-item">
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
