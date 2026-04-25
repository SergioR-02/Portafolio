import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguagesSection: React.FC = () => {
  const { t } = useTranslation();

  const languages = [
    { label: 'Spanish', code: 'ES', value: t('skills.languages.spanish') },
    { label: 'English', code: 'EN', value: t('skills.languages.english') },
  ];

  return (
    <div className="mt-14">
      <div className="flex items-center gap-3 mb-4">
        <Globe className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        <h2 className="text-2xl font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white">
          {t('skills.languages.title')}
        </h2>
      </div>
      <div className="divide-y-2 divide-gray-200 dark:divide-gray-700">
        {languages.map(({ label, code, value }) => (
          <div key={label} className="grid grid-cols-[170px_1fr] gap-6 py-5 items-start">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 pt-0.5 break-words">
              {label}
            </span>
            <span className="inline-flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="inline-flex items-center justify-center w-8 h-5 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-[9px] font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 shrink-0">
                {code}
              </span>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
