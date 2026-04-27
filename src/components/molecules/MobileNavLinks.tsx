import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollTo';

interface NavItem {
  id: string;
  label: string;
  anchor?: string;
  to?: string;
}

interface MobileNavLinksProps {
  navItems: NavItem[];
  activeNav: string;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ navItems, activeNav, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (item: NavItem) => {
    setIsMenuOpen(false);
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
  };

  return (
    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${
            activeNav === item.id
              ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30'
              : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default MobileNavLinks;
