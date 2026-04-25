import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2 } from 'lucide-react';
import { FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub, FaBitbucket } from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSass,
  SiMysql, SiMongodb, SiDjango, SiExpress,
  SiGithubactions, SiJavascript, SiReact,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type TechItem = { label: string; icon: IconType };

const ICON_CLASS = 'w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0';

const SkillsGrid: React.FC = () => {
  const { t } = useTranslation();

  const rows: { key: string; label: string; items: TechItem[] }[] = [
    {
      key: 'frontend',
      label: t('skills.frontend'),
      items: [
        { label: 'JavaScript', icon: SiJavascript },
        { label: 'TypeScript', icon: SiTypescript },
        { label: 'React', icon: SiReact },
        { label: 'Next.js', icon: SiNextdotjs },
        { label: 'Tailwind CSS', icon: SiTailwindcss },
        { label: 'Sass', icon: SiSass },
      ],
    },
    {
      key: 'backend',
      label: t('skills.backend'),
      items: [
        { label: 'Node.js', icon: FaNodeJs },
        { label: 'Express', icon: SiExpress },
        { label: 'Python', icon: FaPython },
        { label: 'Django', icon: SiDjango },
      ],
    },
    {
      key: 'databases',
      label: t('skills.databases'),
      items: [
        { label: 'MySQL', icon: SiMysql },
        { label: 'MongoDB', icon: SiMongodb },
      ],
    },
    {
      key: 'devops',
      label: t('skills.devops'),
      items: [
        { label: 'Docker', icon: FaDocker },
        { label: 'GitHub Actions', icon: SiGithubactions },
      ],
    },
    {
      key: 'versionControl',
      label: t('skills.versionControl'),
      items: [
        { label: 'Git', icon: FaGitAlt },
        { label: 'GitHub', icon: FaGithub },
        { label: 'Bitbucket', icon: FaBitbucket },
      ],
    },
  ];

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        <h2 className="text-2xl font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white">
          {t('skills.techTitle')}
        </h2>
      </div>

      <div className="divide-y-2 divide-gray-200 dark:divide-gray-700">
        {rows.map(({ key, label, items }) => (
          <div key={key} className="grid grid-cols-[170px_1fr] gap-6 py-5 items-start">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 pt-0.5 leading-tight break-words">
              {label}
            </span>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {items.map(({ label: techLabel, icon: Icon }) => (
                <span
                  key={techLabel}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <Icon className={ICON_CLASS} />
                  {techLabel}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
