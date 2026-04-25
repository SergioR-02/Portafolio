import React from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarDays, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  date: string;
  description: string;
  link?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, date, description, link }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200">
      <div>
        <div className="flex items-center gap-1.5 mb-3">
          <CalendarDays className="w-3 h-3 text-gray-400 dark:text-gray-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">{date}</span>
        </div>
        <h3 className="text-base font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white leading-snug mb-3">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
      {link && (
        <div className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {t('common.viewMore')}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
