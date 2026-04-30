import React, { useEffect } from 'react';
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
  const [storyRef, storyVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

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

      {/* MISSION & VISION SECTION */}
      <section className="about-section about-mision-vision">
        <div className="about-mission-vision-grid">
          <article className="about-mission-card card-base">
            <div className="about-card-icon">🎯</div>
            <h3 className="about-card-title">{ABOUT_MISSION.title}</h3>
            <p className="about-card-text">{ABOUT_MISSION.description}</p>
          </article>

          <article className="about-vision-card card-base">
            <div className="about-card-icon">🔮</div>
            <h3 className="about-card-title">{ABOUT_VISION.title}</h3>
            <p className="about-card-text">{ABOUT_VISION.description}</p>
          </article>
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
