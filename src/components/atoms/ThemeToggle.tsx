import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
  isScrolled: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme, isScrolled }) => (
  <button
    onClick={toggleTheme}
    className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 border border-indigo-400 ${isScrolled ? 'bg-gray-100 dark:bg-gray-950' : 'bg-white dark:bg-gray-900'} text-gray-700 dark:text-gray-300`}
    aria-label="Toggle theme"
  >
    {theme === 'light'
      ? <Moon size={22} color="#3b82f6" style={{ verticalAlign: 'middle' }} />
      : <Sun size={22} color="#facc15" style={{ verticalAlign: 'middle' }} />
    }
  </button>
);

export default ThemeToggle;
