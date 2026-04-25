import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';

const WhyWorkWithMe: React.FC = () => {
  const { t } = useTranslation();
  const reasons = t('contact.reasons', { returnObjects: true }) as string[];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6">
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {t('contact.whyTitle')}
      </h4>
      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
        {reasons.map((reason, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyWorkWithMe;
