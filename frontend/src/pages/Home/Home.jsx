import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeCoreSection from './HomeCoreSection';
import HomeShowcaseSection from './HomeShowcaseSection';
import './Home.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (process.env.NODE_ENV !== 'test') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <main className="home">
      <HomeCoreSection />
      <HomeShowcaseSection />
    </main>
  );
};

export default Home;
