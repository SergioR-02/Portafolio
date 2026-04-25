import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import ContactSocialLinks from '../molecules/ContactSocialLinks';
import ContactInfoList from '../molecules/ContactInfoList';
import WhyWorkWithMe from '../molecules/WhyWorkWithMe';
import StarsBackground from './StarsBackground';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative isolate min-h-screen py-20 overflow-hidden"
    >
      <StarsBackground theme={theme} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8" />
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
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
