import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import {
  SiReact, SiTypescript, SiStrapi, SiSqlite, SiTailwindcss,
  SiPython, SiFastapi, SiOpencv, SiDocker, SiNodedotjs,
  SiMysql, SiExpress, SiThreedotjs, SiFlask,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type TechEntry = { icon: IconType; color: string };

const TECH: Record<string, TechEntry> = {
  'React':        { icon: SiReact,       color: 'text-cyan-400' },
  'TypeScript':   { icon: SiTypescript,  color: 'text-blue-400' },
  'Strapi':       { icon: SiStrapi,      color: 'text-indigo-400' },
  'SQLite':       { icon: SiSqlite,      color: 'text-sky-400' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-teal-400' },
  'Python':       { icon: SiPython,      color: 'text-amber-400' },
  'FastAPI':      { icon: SiFastapi,     color: 'text-emerald-400' },
  'OpenCV':       { icon: SiOpencv,      color: 'text-purple-400' },
  'Docker':       { icon: SiDocker,      color: 'text-sky-400' },
  'Node.js':      { icon: SiNodedotjs,   color: 'text-green-400' },
  'MySQL':        { icon: SiMysql,       color: 'text-blue-300' },
  'Express':      { icon: SiExpress,     color: 'text-gray-300' },
  'Three.js':     { icon: SiThreedotjs,  color: 'text-gray-300' },
  'Flask':        { icon: SiFlask,       color: 'text-gray-300' },
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image: string;
    technologies: readonly string[];
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const imageTop    = index % 2 === 1;
  const numberRight = Math.floor(index / 2) % 2 === 1;
  const num = String(index + 1).padStart(2, '0');

  const cardShell = isDark
    ? 'bg-[#0f1115] text-white'
    : 'bg-white text-slate-950';

  const imageShell = isDark
    ? 'bg-[#0b0d12]'
    : 'bg-slate-50';

  const numberClass = isDark
    ? 'text-2xl md:text-[2rem] font-medium text-white/55 group-hover:text-white/80'
    : 'text-2xl md:text-[2rem] font-medium text-slate-500 group-hover:text-slate-800';

  const titleClass = isDark
    ? 'text-[0.84rem] md:text-[0.92rem] font-semibold uppercase tracking-[0.24em] text-white/90 leading-tight transition-colors duration-300 group-hover:text-white'
    : 'text-[0.84rem] md:text-[0.92rem] font-semibold uppercase tracking-[0.24em] text-slate-700 leading-tight transition-colors duration-300 group-hover:text-slate-950';

  const Meta = (
    <div className={`shrink-0 p-4 md:p-5 flex items-start gap-3 md:gap-4 ${numberRight ? 'flex-row-reverse' : ''}`}>
      <span className={`${numberClass} leading-none shrink-0 select-none tabular-nums transition-colors duration-300`}>
        {num}
      </span>
      <div className={`flex flex-col gap-2 min-w-0 ${numberRight ? 'items-end text-right' : 'items-start'}`}>
        <h3 className={titleClass}>
          {project.title}
        </h3>
        <div className={`flex flex-wrap gap-2 ${numberRight ? 'justify-end' : ''}`}>
          {project.technologies.slice(0, 5).map((tech, i) => {
            const entry = TECH[tech];
            if (!entry) return null;
            const { icon: Icon, color } = entry;
            return (
              <Icon
                key={i}
                title={tech}
                  className={`w-4 h-4 ${color} grayscale group-hover:grayscale-0 transition-all duration-300`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  const Img = (
    <div className={`h-44 md:h-48 flex items-center justify-center overflow-hidden p-5 ${imageShell}`}>
      <img
        src={project.image}
        alt={project.title}
        className={`max-h-full max-w-full object-contain transition-all duration-500 ${isDark ? 'brightness-75 group-hover:brightness-100' : 'brightness-95 group-hover:brightness-100'}`}
      />
    </div>
  );

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`group flex flex-col cursor-pointer border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 ${cardShell}`}
    >
      {imageTop ? <>{Img}{Meta}</> : <>{Meta}{Img}</>}
    </Link>
  );
};

export default ProjectCard;
