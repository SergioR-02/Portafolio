
import React from 'react';
import { FaReact, FaNodeJs, FaStripe, FaAngular, FaPython } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiFirebase, SiSocketdotio, SiPwa, SiFastapi, SiOpenai, SiTailwindcss, SiPrisma, SiSupabase } from 'react-icons/si';

interface TechTagProps {
  label: string;
}

const iconMap: Record<string, React.ReactNode> = {
  'React': <FaReact className="inline mr-1 text-blue-500" />,
  'TypeScript': <SiTypescript className="inline mr-1 text-blue-700" />,
  'Node.js': <FaNodeJs className="inline mr-1 text-green-600" />,
  'PostgreSQL': <SiPostgresql className="inline mr-1 text-blue-800" />,
  'Stripe': <FaStripe className="inline mr-1 text-indigo-500" />,

  'Firebase': <SiFirebase className="inline mr-1 text-yellow-500" />,
  'Socket.io': <SiSocketdotio className="inline mr-1 text-gray-700" />,
  'PWA': <SiPwa className="inline mr-1 text-purple-500" />,
  'Angular': <FaAngular className="inline mr-1 text-red-600" />,

  'Python': <FaPython className="inline mr-1 text-yellow-700" />,
  'FastAPI': <SiFastapi className="inline mr-1 text-teal-600" />,

  'OpenAI': <SiOpenai className="inline mr-1 text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="inline mr-1 text-teal-400" />,
  'Prisma': <SiPrisma className="inline mr-1 text-gray-900" />,
  'Supabase': <SiSupabase className="inline mr-1 text-green-700" />,
};

const TechTag: React.FC<TechTagProps> = ({ label }) => (
  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full flex items-center gap-1">
    {iconMap[label]}
    {label}
  </span>
);

export default TechTag;
