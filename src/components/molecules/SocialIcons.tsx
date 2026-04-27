import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
}

const icons = [
  { href: 'https://github.com/SergioR-02', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/sergio-ruiz-75818a28b', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:sergioruiz456@gmail.com', label: 'Email', icon: Mail },
  { href: 'https://drive.google.com/file/d/1CGHsYLzFF-4TdbsIq5Pv1EjEnxPSAhhq/view?usp=drive_link', label: 'CV PDF', icon: FileText },
];

const SocialIcons: React.FC<SocialIconsProps> = ({ className = '' }) => (
  <div className={`flex items-center justify-center space-x-3 mb-6 ${className}`}>
    {icons.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
      >
        <Icon size={20} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
