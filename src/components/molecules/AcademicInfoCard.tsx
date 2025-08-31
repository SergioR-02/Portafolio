import React from 'react';
import { PiGraduationCapBold, PiCalendarBold } from 'react-icons/pi';
import { FaSchool } from 'react-icons/fa';

const AcademicInfoCard: React.FC = () => (
  <div className="mb-16">
    <div className="flex items-center mb-6">
      <PiGraduationCapBold className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Información Académica</h2>
    </div>
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-blue-100 dark:border-blue-900 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-lg">
      <div className="flex items-start">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          <FaSchool className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Ingeniería de Sistemas y Computación
          </h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <PiCalendarBold className="w-4 h-4 mr-2" />
            <span className="text-sm">Universidad Nacional de Colombia • 2022-2026</span>
          </div>
        </div>
        <div className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          En curso
        </div>
      </div>
    </div>
  </div>
);

export default AcademicInfoCard;
