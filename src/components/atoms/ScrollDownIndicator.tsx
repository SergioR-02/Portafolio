import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownIndicatorProps {
  onClick: () => void;
  className?: string;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 animate-bounce z-20 ${className}`}
    style={{ marginTop: '2rem' }}
  >
    <ChevronDown size={32} />
  </button>
);

export default ScrollDownIndicator;
