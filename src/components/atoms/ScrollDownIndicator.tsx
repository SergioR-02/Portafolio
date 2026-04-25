import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownIndicatorProps {
  onClick: () => void;
  className?: string;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`absolute left-1/2 transform -translate-x-1/2 text-gray-600 transition-colors duration-200 animate-bounce z-20 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white ${className}`}
  >
    <ChevronDown size={32} />
  </button>
);

export default ScrollDownIndicator;
