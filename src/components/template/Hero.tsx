import React from 'react';
import HeroSection from '../organisms/HeroSection';

const scrollToExperience = () => {
  const experienceSection = document.getElementById('experience');
  if (experienceSection) {
    experienceSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.scrollBy({ top: -40, left: 0, behavior: 'smooth' });
    }, 400);
  }
};

const Hero: React.FC = () => <HeroSection scrollToExperience={scrollToExperience} />;

export default Hero;