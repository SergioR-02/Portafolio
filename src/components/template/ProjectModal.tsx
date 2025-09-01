import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ModalHeader from '../molecules/ModalHeader';
import TechTag from '../atoms/TechTag';
import FeatureItem from '../atoms/FeatureItem';
import ModalActionButton from '../atoms/ModalActionButton';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  fullDescription: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDeployed?: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDeployed }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500/60 dark:bg-gray-900/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal container */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-gray-800 rounded-xl text-left overflow-hidden shadow-xl transform transition-all max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <ModalHeader image={project.image} title={project.title} onClose={onClose} />

          {/* Content */}
          <div className="p-3 sm:p-4 md:p-5">
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-3 sm:mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <TechTag key={index} label={tech} />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-4 sm:mb-5">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Características Principales
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {project.features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} />
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              {isDeployed && (
                <ModalActionButton
                  href={project.liveUrl}
                  icon={<ExternalLink size={16} />}
                  gradient
                >
                  Ver Proyecto
                </ModalActionButton>
              )}
              <ModalActionButton
                href={project.githubUrl}
                icon={<Github size={16} />}
              >
                Ver Código
              </ModalActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;