import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaLightbulb,
  FaUsers,
  FaCogs,
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
import AcademicInfoCard from '../molecules/AcademicInfoCard';
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
  { label: 'AWS', icon: <SiAmazon className="text-amber-500" /> },
  { label: 'Sass', icon: <SiSass className="text-pink-500" /> },
];

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const softSkillsList = t('skills.softSkillsList', { returnObjects: true }) as string[];

  const otherSkills = [
    {
      category: t('skills.design'),
      icon: FaLightbulb,
      skills: ['Figma', 'Adobe XD'],
    },
    {
      category: t('skills.orchestrators'),
      icon: FaCogs,
      skills: ['n8n', 'LangGraph', 'CrewAI', 'LangChain', 'MCPs'],
    },
    {
      category: t('skills.softSkills'),
      icon: FaUsers,
      skills: softSkillsList,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
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
        <AcademicInfoCard />
        <SkillsGrid />
        <div className="mb-8">
          <div className="flex items-center mb-8">
            <FaLightbulb className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('skills.otherSkills')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {otherSkills.map((category, index) => (
              <SkillCategoryCard
                key={index}
                icon={category.icon}
                category={category.category}
                skills={category.skills}
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
