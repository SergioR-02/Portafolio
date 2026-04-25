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
          <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-gray-900 dark:text-gray-300 mb-3 mt-10">
            {t('nav.contact')}
          </h2>
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
