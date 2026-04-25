import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';
import SocialIcons from '../molecules/SocialIcons';

const AboutMe: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
              {t('nav.about')}
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
              <span className="block italic font-thin text-gray-500 dark:text-gray-300 text-3xl md:text-4xl">
                {t('hero.greeting')}
              </span>
              <span className="block mt-2">
                {t('hero.name')}
                <span className="text-indigo-600 dark:text-indigo-400">.</span>
              </span>
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              <Trans
                i18nKey="hero.bio"
                components={{
                  bold: <strong className="font-semibold text-gray-900 dark:text-white" />,
                }}
              />
            </p>
            <div className="mt-8">
              <SocialIcons className="justify-start space-x-4 mb-0" />
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80 md:p-8">
            <div className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
              {t('skills.academic.title')}
            </div>
            <div className="space-y-5">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t('skills.academic.status')}</div>
                <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{t('skills.academic.degree')}</div>
                <div className="text-gray-600 dark:text-gray-300">{t('skills.academic.university')}</div>
              </div>
              <div className="h-px bg-gray-200 dark:bg-gray-700" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Focus</div>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Desarrollo de software con visión sistémica. Diseño arquitecturas frontend y backend que soportan interfaces limpias y escalables, priorizando el rendimiento, la mantenibilidad del código y una excelente experiencia funcional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;