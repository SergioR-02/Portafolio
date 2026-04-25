import React from 'react';
import { useTranslation } from 'react-i18next';
import QuickLink from '../atoms/QuickLink';

const QuickLinks: React.FC = () => {
  const { t } = useTranslation();

  const links = [
    { label: t('nav.home'), anchor: 'home' },
    { label: t('nav.experience'), anchor: 'experience' },
    { label: t('nav.projects'), anchor: 'projects' },
    { label: t('nav.skills'), anchor: 'skills' },
    { label: t('nav.contact'), to: '/contact' },
  ];

  return (
    <ul className="space-y-2">
      {links.map((link, idx) => (
        <li key={idx}>
          <QuickLink {...link} />
        </li>
      ))}
    </ul>
  );
};

export default QuickLinks;
