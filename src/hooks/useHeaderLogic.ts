import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export function useHeaderLogic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('home');
  const { theme, toggleTheme, setTheme } = useTheme();
  const location = useLocation();

  // Establecer el tema oscuro por defecto al montar
  useEffect(() => {
    if (theme !== 'dark') {
      setTheme('dark');
    }
  }, []);

  // Sincroniza el nav activo con la ruta
  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash === '#experience' || window.location.hash === '#experience') {
        setActiveNav('experience');
      } else if (location.hash === '#skills' || window.location.hash === '#skills') {
        setActiveNav('skills');
      } else if (location.hash === '#contact' || window.location.hash === '#contact') {
        setActiveNav('contact');
      } else {
        setActiveNav('home');
      }
    } else if (location.pathname === '/projects') {
      setActiveNav('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === '/skills') {
      setActiveNav('skills');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === '/contact') {
      setActiveNav('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveNav('home');
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio', to: '/' },
    { id: 'experience', label: 'Experiencia', scroll: true },
    { id: 'projects', label: 'Proyectos', to: '/projects' },
    { id: 'skills', label: 'Habilidades', to: '/skills' },
    { id: 'contact', label: 'Contacto', to: '/contact' }
  ];

  return {
    isMenuOpen,
    setIsMenuOpen,
    isScrolled,
    activeNav,
    setActiveNav,
    theme,
    toggleTheme,
    setTheme,
    navItems,
  };
}
