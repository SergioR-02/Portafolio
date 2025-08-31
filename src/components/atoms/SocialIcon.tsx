import React from 'react';

interface SocialIconProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300"
  >
    <Icon size={20} />
  </a>
);

export default SocialIcon;
