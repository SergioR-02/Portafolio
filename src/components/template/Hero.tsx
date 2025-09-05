import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../organisms/HeroSection';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToExperience = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('experience');
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 40;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 400);
    } else {
      setTimeout(() => {
        const el = document.getElementById('experience');
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 40;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return <HeroSection scrollToExperience={scrollToExperience} />;
};

export default Hero;