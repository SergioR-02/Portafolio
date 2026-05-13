import React from 'react';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';

type BlurFadeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const BlurFade: React.FC<BlurFadeProps> = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-[opacity,filter,transform] duration-700 ease-out ${isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default BlurFade;