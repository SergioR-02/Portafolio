import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollSpy } from './useScrollSpy';

const LANDING_SECTIONS = ['home', 'about', 'experience', 'projects', 'skills'];

export function useHeaderLogic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, setTheme } = useTheme();
  const { t } = useTranslation();
  const location = useLocation();

  const isLandingPage = location.pathname === '/';
  const scrollActive = useScrollSpy(LANDING_SECTIONS, isLandingPage);
  const activeNav = isLandingPage ? scrollActive : location.pathname.slice(1);

  useEffect(() => {
    if (theme !== 'dark') setTheme('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home'), anchor: 'home' },
    { id: 'about', label: t('nav.about'), anchor: 'about' },
    { id: 'experience', label: t('nav.experience'), anchor: 'experience' },
    { id: 'projects', label: t('nav.projects'), anchor: 'projects' },
    { id: 'skills', label: t('nav.skills'), anchor: 'skills' },
    { id: 'contact', label: t('nav.contact'), to: '/contact' },
  ];

  return {
    isMenuOpen,
    setIsMenuOpen,
    isScrolled,
    activeNav,
    theme,
    toggleTheme,
    navItems,
  };
}
