import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';

const CertificationsTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3 mb-6">
      <Award className="w-5 h-5 text-gray-400 dark:text-gray-500" />
      <h2 className="text-2xl font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white">
        {t('experience.certifications.title')}
      </h2>
    </div>
  );
};

export default CertificationsTitle;
