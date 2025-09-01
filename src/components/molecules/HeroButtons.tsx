import React from 'react';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';

const HeroButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 justify-center mb-8">
      <Button
        onClick={() => navigate('/projects')}
        className="bg-indigo-600 text-white dark:bg-purple-600 dark:text-white hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors px-6 py-2 rounded-lg shadow-md"
      >
        Ver Proyectos
      </Button>
      <a href="/Sergio-Alejandro-Ruiz-Hurtado-CV.pdf" download="Sergio-Alejandro-Ruiz-Hurtado-CV.pdf" target="_blank" rel="noopener noreferrer">
        <Button
          className="bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors px-6 py-2 rounded-lg shadow-md"
        >
          Descargar CV
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;
