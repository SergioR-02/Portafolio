import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const isES = i18n.language === 'es';

  return (
    <button
      onClick={() => i18n.changeLanguage(isES ? 'en' : 'es')}
      className="px-2.5 py-1 text-xs font-bold rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle language"
    >
      {isES ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle;
