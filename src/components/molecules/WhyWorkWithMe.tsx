import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  'Código limpio y documentado',
  'Adaptabilidad a distintos entornos y tecnologías',
  'Orientación a la experiencia del usuario',
  'Actualización constante en nuevas tecnologías'
];

const WhyWorkWithMe: React.FC = () => (
  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6">
    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
      ¿Por qué trabajar conmigo?
    </h4>
    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
      {reasons.map((reason, idx) => (
        <li key={idx} className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>{reason}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default WhyWorkWithMe;
