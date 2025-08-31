import React from 'react';
import ProjectCard from '../molecules/ProjectCard';

interface ProjectsGridProps {
  projects: any[];
  onSelect: (project: any) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onSelect }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        onClick={() => onSelect(project)}
        index={index}
      />
    ))}
  </div>
);

export default ProjectsGrid;
