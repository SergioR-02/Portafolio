import React from 'react';
import SocialIcons from '../molecules/SocialIcons';
import QuickLinks from '../molecules/QuickLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
          {/* Brand Section */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mi Portafolio
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras que combinan funcionalidad excepcional con diseño elegante.
            </p>
            <SocialIcons />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <QuickLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Mi Portafolio. Sergio Ruiz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;