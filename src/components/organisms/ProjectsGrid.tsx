import React from 'react';
import ProjectCard from '../molecules/ProjectCard';

interface ProjectsGridProps {
  projects: any[];
}

const COLS = 3;

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const remainder = projects.length % COLS;
  const placeholders = remainder === 0 ? 0 : COLS - remainder;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-200/70 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-800/80">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 dark:bg-slate-800">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
        {Array.from({ length: placeholders }).map((_, i) => (
          <div key={`ph-${i}`} className="min-h-[18rem] bg-white dark:bg-slate-950" />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
