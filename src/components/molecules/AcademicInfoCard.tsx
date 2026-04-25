import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, CalendarDays, School } from 'lucide-react';

const AcademicInfoCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        <h2 className="text-2xl font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white">{t('skills.academic.title')}</h2>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md">
        <div className="flex items-start">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mr-4">
            <School className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              {t('skills.academic.degree')}
            </h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <CalendarDays className="w-3.5 h-3.5 mr-2" />
              <span className="text-xs">{t('skills.academic.university')}</span>
            </div>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg">
            {t('skills.academic.status')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicInfoCard;
