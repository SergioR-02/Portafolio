import React from 'react';

interface SkillIconProps {
  label: string;
  icon: React.ReactNode;
}

const SkillIcon: React.FC<SkillIconProps> = ({ label, icon }) => (
  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-900 dark:text-gray-100 text-md font-medium shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
    {icon}
    {label}
  </span>
);

export default SkillIcon;
