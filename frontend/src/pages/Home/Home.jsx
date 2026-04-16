import React from 'react';
import HeroSection from './HeroSection';
import StatsBar from './StatsBar';
import SearchBar from './SearchBar';
import FeaturedCars from './FeaturedCars';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <HeroSection />
      <StatsBar />
      <SearchBar />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;
