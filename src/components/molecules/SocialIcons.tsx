import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
}

const icons = [
  {
    href: 'https://github.com/SergioR-02',
    label: 'GitHub',
    icon: Github,
    hover: 'hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900',
  },
  {
    href: 'https://www.linkedin.com/in/sergio-ruiz-75818a28b',
    label: 'LinkedIn',
    icon: Linkedin,
    hover: 'hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900',
  },
  {
    href: 'mailto:sergioruiz456@gmail.com',
    label: 'Email',
    icon: Mail,
    hover: 'hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900',
  },
  {
    href: 'https://drive.google.com/file/d/1CHmy46AHCYsGI-5WMDKeoXVzOkF8N2HT/view?usp=sharing',
    label: 'CV PDF',
    icon: FileText,
    hover: 'hover:bg-red-600 hover:text-white dark:hover:bg-red-400 dark:hover:text-gray-900',
  },
];

const SocialIcons: React.FC<SocialIconsProps> = ({ className = '' }) => (
  <div className={`flex items-center justify-center space-x-6 mb-6 ${className}`}>
    {icons.map(({ href, label, icon: Icon, hover }, idx) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`p-3 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full transform hover:scale-110 transition-all duration-300 ${hover}`}
      >
        <Icon size={24} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
