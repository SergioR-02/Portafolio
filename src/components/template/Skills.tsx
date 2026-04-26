import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layers, Check, Workflow, GitBranch, Users2, Link2, Cpu, PenTool } from 'lucide-react';
import {
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiDjango,
  SiExpress,
  SiFigma,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import SkillsGrid from '../organisms/SkillsGrid';
import SkillCategoryCard from '../molecules/SkillCategoryCard';
import LanguagesSection from '../organisms/LanguagesSection';
import BlurFade from '../ui/BlurFade';
import Marquee from '../ui/Marquee';

type SkillBadgeProps = {
  label: string;
  icon: React.ReactNode;
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ label, icon }) => (
  <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/85 dark:text-gray-100">
    <span className="text-base">{icon}</span>
    {label}
  </span>
);

const allTech = [
  { label: 'TypeScript', icon: <SiTypescript className="text-blue-500 transition-colors duration-300 hover:text-blue-600 dark:text-blue-400" /> },
  { label: 'JavaScript', icon: <SiJavascript className="text-yellow-400 transition-colors duration-300 hover:text-yellow-300 dark:text-yellow-300" /> },
  { label: 'React', icon: <SiReact className="text-cyan-500 transition-colors duration-300 hover:text-cyan-400 dark:text-cyan-400" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="text-gray-900 transition-colors duration-300 hover:text-black dark:text-white dark:hover:text-gray-200" /> },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 transition-colors duration-300 hover:text-teal-300 dark:text-teal-300" /> },
  { label: 'Node.js', icon: <FaNodeJs className="text-green-600 transition-colors duration-300 hover:text-green-500 dark:text-green-500" /> },
  { label: 'Express', icon: <SiExpress className="text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" /> },
  { label: 'Python', icon: <FaPython className="text-amber-500 transition-colors duration-300 hover:text-amber-400 dark:text-amber-400" /> },
  { label: 'Django', icon: <SiDjango className="text-emerald-800 transition-colors duration-300 hover:text-emerald-700 dark:text-emerald-500" /> },
  { label: 'MySQL', icon: <SiMysql className="text-sky-600 transition-colors duration-300 hover:text-sky-500 dark:text-sky-500" /> },
  { label: 'MongoDB', icon: <SiMongodb className="text-green-600 transition-colors duration-300 hover:text-green-500 dark:text-green-500" /> },
  { label: 'Docker', icon: <FaDocker className="text-sky-500 transition-colors duration-300 hover:text-sky-400 dark:text-sky-400" /> },
  { label: 'Git', icon: <FaGitAlt className="text-orange-600 transition-colors duration-300 hover:text-orange-500 dark:text-orange-500" /> },
  { label: 'GitHub', icon: <FaGithub className="text-gray-900 transition-colors duration-300 hover:text-black dark:text-white dark:hover:text-gray-200" /> },
  { label: 'GitHub Actions', icon: <SiGithubactions className="text-gray-900 transition-colors duration-300 hover:text-black dark:text-gray-300 dark:hover:text-white" /> },
  { label: 'Figma', icon: <SiFigma className="text-pink-500 transition-colors duration-300 hover:text-pink-400 dark:text-pink-400" /> },
  { label: 'Sass', icon: <SiSass className="text-pink-500 transition-colors duration-300 hover:text-pink-400 dark:text-pink-400" /> },
];

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const softSkillsList = t('skills.softSkillsList', { returnObjects: true }) as string[];

  const otherSkills = [
    {
      category: t('skills.design'),
      skills: [
        { label: 'Figma',    icon: <SiFigma className="text-gray-500 transition-colors duration-300 group-hover:text-pink-500 dark:text-gray-400" /> },
        { label: 'Adobe XD', icon: <PenTool className="text-gray-500 transition-colors duration-300 group-hover:text-fuchsia-500 dark:text-gray-400" /> },
      ],
    },
    {
      category: t('skills.orchestrators'),
      skills: [
        { label: 'n8n',        icon: <Workflow className="text-gray-500 transition-colors duration-300 group-hover:text-sky-600 dark:text-gray-400" /> },
        { label: 'LangGraph',  icon: <GitBranch className="text-gray-500 transition-colors duration-300 group-hover:text-indigo-600 dark:text-gray-400" /> },
        { label: 'CrewAI',     icon: <Users2 className="text-gray-500 transition-colors duration-300 group-hover:text-emerald-600 dark:text-gray-400" /> },
        { label: 'LangChain',  icon: <Link2 className="text-gray-500 transition-colors duration-300 group-hover:text-teal-600 dark:text-gray-400" /> },
        { label: 'MCPs',       icon: <Cpu className="text-gray-500 transition-colors duration-300 group-hover:text-orange-600 dark:text-gray-400" /> },
      ],
    },
    {
      category: t('skills.softSkills'),
      skills: softSkillsList.map(skill => ({
        label: skill,
        icon: <Check className="text-gray-500 transition-colors duration-300 group-hover:text-emerald-600 dark:text-gray-400" />,
      })),
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-gray-900 dark:text-gray-300 mb-3 mt-10">
            {t('nav.skills')}
          </h2>
        </div>
        <BlurFade delay={100} className="mb-16 block w-full -mx-2 sm:-mx-4 lg:-mx-8">
          <div>
            <Marquee duration={45} gap={12}>
              {allTech.map(({ label, icon }) => (
                <SkillBadge key={label} label={label} icon={icon} />
              ))}
            </Marquee>
            <div className="mt-4">
              <Marquee duration={45} reverse gap={12}>
                {[...allTech].reverse().map(({ label, icon }) => (
                  <SkillBadge key={label} label={label} icon={icon} />
                ))}
              </Marquee>
            </div>
          </div>
        </BlurFade>
        <SkillsGrid />
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <h2 className="text-2xl font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white">
              {t('skills.otherSkills')}
            </h2>
          </div>
          <div className="divide-y-2 divide-gray-200 dark:divide-gray-700">
            {otherSkills.map((cat, index) => (
              <SkillCategoryCard
                key={index}
                category={cat.category}
                skills={cat.skills}
              />
            ))}
          </div>
        </div>
        <LanguagesSection />
      </div>
    </section>
  );
};

export default Skills;
