import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap } from 'lucide-react';
import Title from '../atoms/Title';

const CertificationsTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-2xl text-indigo-600 dark:text-indigo-400"><Zap /></span>
      <Title level={2} className="text-3xl md:text-4xl">{t('experience.certifications.title')}</Title>
    </div>
  );
};

export default CertificationsTitle;
