import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/Button';
import { scrollToSection } from '../../utils/scrollTo';

const HeroButtons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 justify-center mb-8">
      <Button
        onClick={() => scrollToSection('projects')}
        className="bg-indigo-600 text-white dark:bg-purple-600 dark:text-white hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors px-6 py-2 rounded-lg shadow-md"
      >
        {t('hero.viewProjects')}
      </Button>
      <a
        href="https://drive.google.com/file/d/1d5ckFTCSephhdBYMrK_ECwPFp3SZPK2B/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors px-6 py-2 rounded-lg shadow-md">
          {t('hero.downloadCV')}
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;
