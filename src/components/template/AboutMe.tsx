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

          {/* Left: bio */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">
              {t('nav.about')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block italic font-light text-gray-400 dark:text-gray-400 text-3xl md:text-4xl">
                {t('hero.greeting')}
              </span>
              <span className="block mt-2 font-extrabold">
                {t('hero.name')}.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300">
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

          {/* Right: academic card */}
          <div className="rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/90 p-6 dark:bg-gray-900/80 md:p-8">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">
              {t('skills.academic.title')}
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-1">
                  {t('skills.academic.status')}
                </p>
                <p className="text-lg font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
                  {t('skills.academic.degree')}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {t('skills.academic.university')}
                </p>
              </div>
              <div className="h-px bg-gray-200 dark:bg-gray-700" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-2">
                  {t('about.focusLabel')}
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {t('about.focusText')}
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
