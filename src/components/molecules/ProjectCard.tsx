import React from 'react';
import ExternalLinkButton from '../atoms/ExternalLinkButton';
import GithubButton from '../atoms/GithubButton';
import TechTag from '../atoms/TechTag';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    isDeployed?: boolean;
  };
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => (
  <div
    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
    style={{ animationDelay: `${index * 100}ms` }}
    onClick={onClick}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
          {project.isDeployed && (
            <ExternalLinkButton href={project.liveUrl} onClick={e => e.stopPropagation()} />
          )}
          <GithubButton href={project.githubUrl} onClick={e => e.stopPropagation()} />
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <TechTag key={techIndex} label={tech} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
