import React from 'react';
import Title from '../atoms/Title';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => (
  <div className={`text-center mb-16 ${className}`}>
    <Title level={2} className="text-4xl md:text-5xl mb-4">{children}</Title>
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
  </div>
);

export default SectionTitle;
