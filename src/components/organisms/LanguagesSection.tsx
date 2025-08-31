import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import CategoryTag from '../atoms/CategoryTag';

const LanguagesSection: React.FC = () => (
  <div className="mt-14 text-center">
    <div className="flex items-center justify-start mb-2">
      <FaGlobeAmericas className="w-7 h-7 text-blue-600 dark:text-blue-400 mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Idiomas</h2>
    </div>
    <div className="flex flex-row justify-start gap-4 mt-4 rounded-xl py-4">
      <CategoryTag className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-md">Español: Nativo</CategoryTag>
      <CategoryTag className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-md">Inglés: Intermedio</CategoryTag>
    </div>
  </div>
);

export default LanguagesSection;
