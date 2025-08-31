import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../atoms/ThemeToggle';
import NavLinks from '../molecules/NavLinks';
import MobileNavLinks from '../molecules/MobileNavLinks';
import { useHeaderLogic } from '../../hooks/useHeaderLogic';

const Header: React.FC = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isScrolled,
    activeNav,
    setActiveNav,
    theme,
    toggleTheme,
    setTheme,
    navItems,
  } = useHeaderLogic();

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white dark:bg-gray-900${isScrolled ? ' shadow-xl bg-gray-100 dark:bg-gray-950' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {'</>'}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavLinks navItems={navItems} activeNav={activeNav} setActiveNav={setActiveNav} />
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} isScrolled={isScrolled} />
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <MobileNavLinks navItems={navItems} activeNav={activeNav} setActiveNav={setActiveNav} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;