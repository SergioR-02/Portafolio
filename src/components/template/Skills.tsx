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
  SiAmazon,
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
  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/85 dark:text-gray-100">
    <span className="text-base">{icon}</span>
    {label}
  </span>
);

const allTech = [
  { label: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { label: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { label: 'React', icon: <SiReact className="text-cyan-500" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { label: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { label: 'Express', icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
  { label: 'Python', icon: <FaPython className="text-amber-500" /> },
  { label: 'Django', icon: <SiDjango className="text-emerald-800" /> },
  { label: 'MySQL', icon: <SiMysql className="text-sky-600" /> },
  { label: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { label: 'Docker', icon: <FaDocker className="text-sky-500" /> },
  { label: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { label: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white" /> },
  { label: 'GitHub Actions', icon: <SiGithubactions className="text-gray-900 dark:text-white" /> },
  { label: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  { label: 'Sass', icon: <SiSass className="text-pink-500" /> },
];

const IC = 'w-3.5 h-3.5 text-gray-500 dark:text-gray-400 shrink-0';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const softSkillsList = t('skills.softSkillsList', { returnObjects: true }) as string[];

  const otherSkills = [
    {
      category: t('skills.design'),
      skills: [
        { label: 'Figma',    icon: <SiFigma    className={IC} /> },
        { label: 'Adobe XD', icon: <PenTool    className={IC} /> },
      ],
    },
    {
      category: t('skills.orchestrators'),
      skills: [
        { label: 'n8n',        icon: <Workflow   className={IC} /> },
        { label: 'LangGraph',  icon: <GitBranch  className={IC} /> },
        { label: 'CrewAI',     icon: <Users2     className={IC} /> },
        { label: 'LangChain',  icon: <Link2      className={IC} /> },
        { label: 'MCPs',       icon: <Cpu        className={IC} /> },
      ],
    },
    {
      category: t('skills.softSkills'),
      skills: softSkillsList.map(skill => ({
        label: skill,
        icon: <Check className={IC} />,
      })),
    },
  ];

  return (
    <section id="skills" className="py-20">
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
