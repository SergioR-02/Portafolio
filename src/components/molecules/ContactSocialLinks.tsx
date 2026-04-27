import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileImage from '../atoms/ProfileImage';
import { Github, Linkedin, FileText } from 'lucide-react';

const links = [
  { href: 'https://github.com/SergioR-02', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sergio-ruiz-75818a28b', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://drive.google.com/file/d/1d5ckFTCSephhdBYMrK_ECwPFp3SZPK2B/view?usp=sharing', icon: FileText, label: 'CV (PDF)' },
];

const ContactSocialLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-auto">
      <div className="mb-6">
        <ProfileImage src="/Profile.svg" alt="Sergio" />
      </div>
      <h3 className="text-xl font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white mb-5">
        {t('contact.connectWith')}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Icon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSocialLinks;
