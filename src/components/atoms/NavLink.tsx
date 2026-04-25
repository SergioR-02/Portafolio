import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavLinkProps {
  id: string;
  label: string;
  anchor?: string;
  to?: string;
  activeNav: string;
  onClose?: () => void;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const NavLink: React.FC<NavLinkProps> = ({ id, label, anchor, to, activeNav, onClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = activeNav === id;

  const handleClick = () => {
    onClose?.();
    if (to) {
      navigate(to);
      return;
    }
    if (anchor) {
      if (pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(anchor), 300);
      } else {
        scrollToSection(anchor);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 bg-transparent border-none cursor-pointer ${
        isActive
          ? 'text-indigo-600 dark:text-indigo-400 font-bold'
          : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
      }`}
    >
      {label}
      <span className="absolute left-0 bottom-0 w-full" style={{ height: '2px' }}>
        <span
          className={`block h-full ${
            isActive
              ? 'bg-indigo-600 dark:bg-indigo-400 scale-x-100'
              : 'bg-indigo-600 dark:bg-indigo-400 scale-x-0 group-hover:scale-x-100'
          } transition-transform duration-300 origin-left`}
        />
      </span>
    </button>
  );
};

export default NavLink;
