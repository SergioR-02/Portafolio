import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';
import { useTheme } from '../../contexts/ThemeContext';
import GLSLHills from '../ui/glsl-hills';
import ScrollDownIndicator from '../atoms/ScrollDownIndicator';
import { scrollToSection } from '../../utils/scrollTo';

const HeroSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const texts = t('hero.typingTexts', { returnObjects: true }) as string[];
  const firstText = texts[0];

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [firstText]);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else if (displayText.length > 0) {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <section
      id="home"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 transition-[opacity,transform] duration-700 ease-out md:px-8 lg:px-32 ${isDark ? 'bg-black' : 'bg-slate-50'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute inset-0">
        <GLSLHills width="100%" height="100%" cameraZ={120} planeSize={256} speed={0.45} />
      </div>
      <div className={`absolute inset-0 ${isDark ? 'bg-black/35' : 'bg-white/30'}`} />
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <h1 className={`mx-auto text-5xl font-semibold leading-none tracking-tight md:text-7xl lg:text-8xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {t('hero.name')}
        </h1>
        <div className="mt-5 h-8 md:h-10">
          <h2 className={`text-base font-medium md:text-xl lg:text-2xl ${isDark ? 'text-white/85' : 'text-slate-700'}`}>
            <span className="italic font-light">{displayText}</span>
            <span className={`ml-1 animate-pulse ${isDark ? 'text-white' : 'text-slate-700'}`}>|</span>
          </h2>
        </div>
        <div className="mt-10">
          <ScrollDownIndicator onClick={() => scrollToSection('about')} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
