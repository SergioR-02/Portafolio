import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';
import CertificationsTitle from '../molecules/CertificationsTitle';
import SectionTitle from '../molecules/SectionTitle';
import CertificationCard from '../molecules/CertificationCard';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle>{t('experience.title')}</SectionTitle>
          <div className="relative min-h-[220px] border-l-2 border-gray-500 dark:border-gray-100 pl-6">
            <span className="absolute -left-[8px] top-1 w-3.5 h-3.5 bg-gray-500 dark:bg-gray-100 rounded-full border-2 border-gray-500 dark:border-gray-100"></span>
            <div>
              <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400">{t('experience.period')}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{t('experience.position')}</h3>
              <span className="block text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{t('experience.company')}</span>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
                {t('experience.description')}
              </p>
            </div>
          </div>
        </div>
        <div>
          <CertificationsTitle />
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-0 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <CertificationCard
              title={t('experience.certifications.devcamp.title')}
              date={t('experience.certifications.devcamp.date')}
              description={t('experience.certifications.devcamp.description')}
              link="https://certificados.talentotech.co/?cc=1015992343&cert=2584663820#pdf"
            />
            <CertificationCard
              title={t('experience.certifications.oracle.title')}
              date={t('experience.certifications.oracle.date')}
              description={t('experience.certifications.oracle.description')}
              link="https://app.aluracursos.com/program/certificate/900e9ca1-8847-48d1-85f4-76b5cf2fec05?lang"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
