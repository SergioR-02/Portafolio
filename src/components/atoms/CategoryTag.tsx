import React from 'react';

interface CategoryTagProps {
  children: React.ReactNode;
  className?: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ children, className = '' }) => (
  <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${className}`}>
    {children}
  </span>
);

export default CategoryTag;
