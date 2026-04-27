import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectsGrid from '../organisms/ProjectsGrid';
import { PROJECT_META } from '../../data/projects';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const translatedItems = t('projects.items', { returnObjects: true }) as Array<{
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
  }>;

  const projects = PROJECT_META.map((meta) => {
    const translated = translatedItems.find(item => item.id === meta.id)!;
    return { ...meta, ...translated };
  });

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-4xl font-bold uppercase tracking-[0.35em] text-gray-900 dark:text-gray-300 mb-3 mt-10">
            {t('nav.projects')}
          </p>
        </div>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
