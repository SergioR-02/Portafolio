import React from 'react';
import { Briefcase, Code2, Cpu, Home, Mail, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHeaderLogic } from '../../hooks/useHeaderLogic';
import { PillNav, type PillNavItem } from '../ui/futuristic-nav';

const ICON_SIZE = 18;

const NAV_ICONS: Record<string, React.ReactNode> = {
  home:       <Home       size={ICON_SIZE} />,
  about:      <User       size={ICON_SIZE} />,
  experience: <Briefcase  size={ICON_SIZE} />,
  projects:   <Code2      size={ICON_SIZE} />,
  skills:     <Cpu        size={ICON_SIZE} />,
  contact:    <Mail       size={ICON_SIZE} />,
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 10;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const Header: React.FC = () => {
  const { isScrolled, activeNav, theme, toggleTheme, navItems } = useHeaderLogic();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pillItems: PillNavItem[] = navItems.map((item) => ({
    id:    item.id,
    label: item.label,
    icon:  NAV_ICONS[item.id] ?? <span className="text-xs">{item.label[0]}</span>,
  }));

  function handleItemClick(id: string) {
    const item = navItems.find((n) => n.id === id);
    if (!item) return;

    if (item.to) {
      navigate(item.to);
      return;
    }
    if (item.anchor) {
      if (pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(item.anchor!), 300);
      } else {
        scrollToSection(item.anchor);
      }
    }
  }

  return (
    <PillNav
      items={pillItems}
      activeId={activeNav}
      isScrolled={isScrolled}
      theme={theme}
      toggleTheme={toggleTheme}
      language={i18n.language}
      onLanguageToggle={() =>
        i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
      }
      onItemClick={handleItemClick}
    />
  );
};

export default Header;
