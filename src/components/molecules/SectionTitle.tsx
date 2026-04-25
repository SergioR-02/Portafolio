import React from 'react';
import Title from '../atoms/Title';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => (
  <div className={`text-center mb-16 ${className}`}>
    <Title level={2} className="text-4xl md:text-5xl mb-4">{children}</Title>
    <div className="mb-8" />
  </div>
);

export default SectionTitle;
