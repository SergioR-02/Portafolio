import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<TitleProps> = ({ children, className = '', level = 2 }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`font-bold text-gray-900 dark:text-white ${className}`}>{children}</Tag>
  );
};

export default Title;
