import React from 'react';
import SkillIcon from '../atoms/SkillIcon';
import { FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub, FaBitbucket, FaCode } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSass, SiMysql, SiMongodb, SiDjango, SiExpress, SiGithubactions, SiJavascript } from 'react-icons/si';

const SkillsGrid: React.FC = () => (
  <div className="mb-16">
    <div className="flex items-center justify-start mb-8">
      <FaCode className="w-7 h-7 text-indigo-600 dark:text-indigo-400 mr-3" />
      <h2 className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white">Lenguajes y Tecnología</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-400 hover:shadow-xl">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Backend</h3>
        <div className="flex flex-wrap gap-4">
          <SkillIcon label="TypeScript" icon={<SiTypescript className="text-blue-700" />} />
          <SkillIcon label="NodeJS" icon={<FaNodeJs className="text-green-600" />} />
          <SkillIcon label="Express" icon={<SiExpress className="text-gray-700" />} />
          <SkillIcon label="Python" icon={<FaPython className="text-yellow-700" />} />
          <SkillIcon label="Django" icon={<SiDjango className="text-green-900" />} />
        </div>
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-8 mb-4">Bases de datos</h3>
        <div className="flex flex-wrap gap-4">
          <SkillIcon label="MySQL" icon={<SiMysql className="text-blue-600" />} />
          <SkillIcon label="MongoDB" icon={<SiMongodb className="text-green-700" />} />
        </div>
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-8 mb-4">DevOps / CI/CD</h3>
        <div className="flex flex-wrap gap-4">
          <SkillIcon label="Docker" icon={<FaDocker className="text-blue-500" />} />
          <SkillIcon label="GitHub Actions" icon={<SiGithubactions className="text-gray-900" />} />
          <SkillIcon label="AWS" icon={<span className="text-lg">☁️</span>} />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-400 hover:shadow-xl">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Frontend</h3>
        <div className="flex flex-wrap gap-4">
          <SkillIcon label="JavaScript" icon={<SiJavascript className="text-yellow-400" />} />
          <SkillIcon label="Next.js" icon={<SiNextdotjs className="text-black dark:text-white" />} />
          <SkillIcon label="React" icon={<FaNodeJs className="text-blue-500" />} />
          <SkillIcon label="Tailwind CSS" icon={<SiTailwindcss className="text-teal-400" />} />
          <SkillIcon label="Sass" icon={<SiSass className="text-pink-400" />} />
        </div>
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-8 mb-4">Control de versiones</h3>
        <div className="flex flex-wrap gap-4">
          <SkillIcon label="Git" icon={<FaGitAlt className="text-orange-600" />} />
          <SkillIcon label="GitHub" icon={<FaGithub className="text-gray-900 dark:text-white" />} />
          <SkillIcon label="Bitbucket" icon={<FaBitbucket className="text-blue-700" />} />
        </div>
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-8 mb-4">Metodologías</h3>
        <div className="flex flex-wrap gap-4">
          <SkillIcon label="Agile (Scrum)" icon={<span className="text-lg">🌀</span>} />
        </div>
      </div>
    </div>
  </div>
);

export default SkillsGrid;
