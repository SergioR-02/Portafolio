import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectModal from './ProjectModal';
import ProjectsGrid from '../organisms/ProjectsGrid';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  fullDescription: string;
  features: string[];
  isDeployed?: boolean;
}

const PROJECT_META = [
  {
    id: 1,
    image: '/DevCampus.svg',
    technologies: ['React', 'TypeScript', 'Strapi', 'SQLite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/SergioR-02/DevCampus',
    liveUrl: 'https://dev-campus-two.vercel.app',
    isDeployed: true,
  },
  {
    id: 2,
    image: '/NutriVisionAI.svg',
    technologies: ['React', 'Python', 'Tailwind CSS', 'FastAPI', 'Gemini', 'OpenCV'],
    githubUrl: 'https://github.com/SergioR-02/NutriVision',
    liveUrl: 'https://example.com',
    isDeployed: false,
  },
  {
    id: 3,
    image: '/EventosUnal.svg',
    technologies: ['React', 'TypeScript', 'Vite', 'Strapi', 'Tailwind CSS', 'Docker', 'Vercel'],
    githubUrl: 'https://github.com/SergioR-02/Eventos_Unal',
    liveUrl: 'https://eventos-unal.vercel.app',
    isDeployed: true,
  },
  {
    id: 4,
    image: '/ObjetosPerdidos.svg',
    technologies: ['React', 'Sass', 'MySQL', 'Node.js', 'TypeScript', 'Express'],
    githubUrl: 'https://github.com/SergioR-02/Software_Engineering/tree/main/Proyecto',
    liveUrl: 'https://test-bay-iota-63.vercel.app',
    isDeployed: true,
  },
  {
    id: 5,
    image: '/EcoScan.svg',
    technologies: ['Three.js', 'React', 'Python', 'Flask', 'YOLOv5', 'WebSockets', 'OpenAI API'],
    githubUrl: 'https://github.com/SergioR-02/computacion-visual-grupo/tree/main/proyecto',
    liveUrl: 'https://example.com',
    isDeployed: false,
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { t } = useTranslation();

  const translatedItems = t('projects.items', { returnObjects: true }) as Array<{
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
  }>;

  const projects: ProjectItem[] = PROJECT_META.map((meta) => {
    const translated = translatedItems.find((item) => item.id === meta.id)!;
    return { ...meta, ...translated };
  });

  return (
    <>
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
              {t('projects.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
          <ProjectsGrid projects={projects} onSelect={setSelectedProject} />
        </div>
      </section>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDeployed={selectedProject?.isDeployed}
      />
    </>
  );
};

export default Projects;
