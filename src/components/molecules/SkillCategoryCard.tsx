import React from 'react';
import CategoryTag from '../atoms/CategoryTag';

interface SkillCategoryCardProps {
  icon: React.ElementType;
  category: string;
  skills: string[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ icon: Icon, category, skills }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 bg-white dark:bg-gray-900">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-purple-600 mr-3" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <CategoryTag key={idx} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800">{skill}</CategoryTag>
      ))}
    </div>
  </div>
);

export default SkillCategoryCard;
