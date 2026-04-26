import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import StarsBackground from '../organisms/StarsBackground';
import { PROJECT_META } from '../../data/projects';

interface TranslatedProject {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { theme } = useTheme();

  const meta = PROJECT_META.find(p => p.id === Number(id));
  const translatedItems = t('projects.items', { returnObjects: true }) as TranslatedProject[];
  const translated = translatedItems.find(p => p.id === Number(id));

  if (!meta || !translated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          ← {t('nav.projects')}
        </Link>
      </div>
    );
  }

  const project = { ...meta, ...translated };
  const index = String(meta.id).padStart(2, '0');

  return (
    <section className="relative isolate min-h-screen py-20 overflow-hidden">
      <StarsBackground theme={theme} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-12 cursor-pointer"
        >
          <ArrowLeft className="w-3 h-3" />
          {t('nav.projects')}
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.42em] text-gray-300 dark:text-gray-600 mb-3">
            {index}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight mb-5">
            {project.title}
          </h1>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-medium uppercase tracking-[0.18em] bg-white/80 text-gray-600 border border-gray-200 px-2.5 py-1 rounded-full dark:bg-slate-900/70 dark:text-gray-400 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
            {project.isDeployed && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900 dark:text-white hover:opacity-60 transition-opacity duration-200 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t('common.viewProject')}
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              {t('common.viewCode')}
            </a>
          </div>

          {/* Image */}
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] dark:border-gray-800 dark:bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4">
            {t('nav.about')}
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.fullDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-5">
            {t('common.mainFeatures')}
          </p>
          <ul className="space-y-3.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;
