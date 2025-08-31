import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavLinkProps {
  id: string;
  label: string;
  to?: string;
  activeNav: string;
  setActiveNav: (id: string) => void;
  scroll?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ id, label, to, activeNav, setActiveNav }) => {
  const navigate = useNavigate();

  if (to) {
    return (
      <Link
        to={to}
        onClick={to === '/'
          ? () => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveNav(id);
              }, 100);
            }
          : () => setActiveNav(id)
        }
        className={`group relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${activeNav === id ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
      >
        {label}
        <span className="absolute left-0 bottom-0 w-full" style={{ height: '2px' }}>
          <span className={`block h-full ${activeNav === id ? 'bg-indigo-600 dark:bg-indigo-400 scale-x-100' : 'bg-indigo-600 dark:bg-indigo-400 scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 origin-left`}></span>
        </span>
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 40;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            setActiveNav(id);
          }, 400);
        } else {
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 40;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            setActiveNav(id);
          }, 100);
        }
      }}
      className={`group relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 bg-transparent border-none ${activeNav === id ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
      style={{ cursor: 'pointer' }}
    >
      {label}
      <span className="absolute left-0 bottom-0 w-full" style={{ height: '2px' }}>
        <span className={`block h-full ${activeNav === id ? 'bg-indigo-600 dark:bg-indigo-400 scale-x-100' : 'bg-indigo-600 dark:bg-indigo-400 scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 origin-left`}></span>
      </span>
    </button>
  );
};

export default NavLink;
