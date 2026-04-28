import React from 'react';
import HeroSection from './HeroSection';
import StatsBar from './StatsBar';
import SearchBar from './SearchBar';
import './HomeCoreSection.css';

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