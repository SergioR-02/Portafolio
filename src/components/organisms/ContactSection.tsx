import React, { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ContactSocialLinks from '../molecules/ContactSocialLinks';
import ContactInfoList from '../molecules/ContactInfoList';
import WhyWorkWithMe from '../molecules/WhyWorkWithMe';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  // Fondo y estrellas
  const stars = useMemo(() => Array.from({ length: 40 }, (_, i) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 2 + 1;
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-80 animate-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }), [theme]);

  const lightBg = 'radial-gradient(circle at 50% 30%, #c7d2fe 0%, #f3f4f6 60%, #e0e7ff 100%)';
  const darkBg = 'radial-gradient(circle at 50% 30%, #312e81 0%, #1e1b4b 20%, #0a0a23 40%, #000 80%, #000 100%)';

  return (
    <section id="contact" className="relative py-20 transition-all duration-700 ease-out transform overflow-hidden">
      {/* Fondo iluminado y estrellado */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full" style={{
          background: theme === 'dark' ? darkBg : lightBg
        }} />
        {stars}
        <div className={`absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${theme === 'dark' ? 'bg-indigo-900 opacity-40' : 'bg-indigo-400 opacity-30'}`} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 flex-col-reverse lg:flex-row lg:grid lg:gap-16">
          <ContactSocialLinks />
          <div className="space-y-8">
            <ContactInfoList />
            <WhyWorkWithMe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
