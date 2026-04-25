import React from 'react';

interface SkillItem {
  label: string;
  icon?: React.ReactNode;
}

interface SkillCategoryCardProps {
  category: string;
  skills: SkillItem[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, skills }) => (
  <div className="grid grid-cols-[170px_1fr] gap-6 py-5 items-start">
    <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 pt-0.5 leading-tight break-words">
      {category}
    </span>
    <div className="flex flex-wrap gap-x-7 gap-y-3">
      {skills.map(({ label, icon }, idx) => (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {icon}
          {label}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCategoryCard;
