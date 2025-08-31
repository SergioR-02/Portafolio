import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MobileNavLinksProps {
  navItems: Array<{ id: string; label: string; to?: string; scroll?: boolean }>;
  activeNav: string;
  setActiveNav: (id: string) => void;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ navItems, setActiveNav, setIsMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2">
      {navItems.map((item) => (
        item.to ? (
          <button
            key={item.id}
            onClick={() => {
              navigate(item.to!);
              setIsMenuOpen(false);
              setActiveNav(item.id);
              if (item.to === '/') {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
          >
            {item.label}
          </button>
        ) : (
          <button
            key={item.id}
            onClick={() => {
              if (window.location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById(item.id);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 40;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                  setActiveNav(item.id);
                  setIsMenuOpen(false);
                }, 400);
              } else {
                setTimeout(() => {
                  const el = document.getElementById(item.id);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 40;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                  setActiveNav(item.id);
                  setIsMenuOpen(false);
                }, 100);
              }
            }}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
          >
            {item.label}
          </button>
        )
      ))}
    </div>
  );
};

export default MobileNavLinks;
