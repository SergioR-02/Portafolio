import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const WhyWorkWithMe: React.FC = () => {
  const { t } = useTranslation();
  const reasons = t('contact.reasons', { returnObjects: true }) as string[];

  return (
    <div className="bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4">
        {t('contact.whyTitle')}
      </h4>
      <ul className="space-y-2.5">
        {reasons.map((reason, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400 dark:text-gray-500" />
            <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyWorkWithMe;
