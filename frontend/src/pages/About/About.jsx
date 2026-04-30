import React, { useEffect } from 'react';
import { ABOUT_HERO, ABOUT_STORY, ABOUT_TEAM } from '../../constants/data';
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
        <h1>{ABOUT_HERO.title}</h1>
        <p className="about-tagline">{ABOUT_HERO.subtitle}</p>
      </section>

      <section className="about-main">
        <h2>Nuestra Historia</h2>
        <p>{ABOUT_HERO.description}</p>
        {ABOUT_STORY.map((story) => (
          <div key={story.id} className="about-story-item">
            <h3>{story.year}: {story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </section>

      <section className="about-team">
        <h2>{ABOUT_TEAM.title}</h2>
        <p>{ABOUT_TEAM.members}</p>
      </section>
    </main>
  );
};

export default About;
