import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { useTheme } from '../../contexts/ThemeContext';
import ProjectsGrid from '../organisms/ProjectsGrid';
import StarsBackground from '../organisms/StarsBackground';

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
  isDeployed?: boolean;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  const projects: Project[] = [
    {
      id: 1,
      title: 'DevCampus - Plataforma de Cursos',
      description: 'Plataforma moderna de cursos online con búsqueda, filtros dinámicos y un panel de administración completo construido con Strapi.',
      image: '/DevCampus.svg',
      technologies: ['React', 'TypeScript', 'Strapi', 'SQLite', 'Tailwind CSS'],
      githubUrl: 'https://github.com/SergioR-02/DevCampus',
      liveUrl: 'https://dev-campus-two.vercel.app',
      fullDescription: 'Una plataforma de cursos online moderna construida con React y Strapi CMS. Permite a los usuarios explorar, ver su temario, buscar cursos por título y filtrarlos dinámicamente por nivel de dificultad. Incluye un diseño responsive, tema oscuro y un panel de administración para la gestión de contenido.',
      features: ['Búsqueda avanzada por título', 'Filtros dinámicos por nivel', 'Diseño responsivo', 'Tema oscuro moderno', 'Renderizado de Rich Text'],
      isDeployed: true
    },
    {
      id: 2,
      title: 'NutriVision AI - Análisis Nutricional',
      description: 'Plataforma que utiliza IA para detectar ingredientes en imágenes de alimentos y calcular su información nutricional en tiempo real.',
      image: '/NutriVisionAI.svg',
      technologies: ['React', 'Python', 'Tailwind CSS', 'FastAPI', 'Gemini', 'OpenCV'],
      githubUrl: 'https://github.com/SergioR-02/NutriVision',
      liveUrl: 'https://example.com',
      fullDescription: 'Una aplicación web que integra Inteligencia Artificial para analizar imágenes de alimentos. El sistema utiliza Google Gemini para detectar ingredientes, OpenCV para procesar la imagen y generar *bounding boxes*, y presenta los resultados con un análisis nutricional completo y una visualización 3D interactiva.',
      features: ['Detección de ingredientes con IA', 'Bounding boxes sobre alimentos', 'Carga de imágenes drag & drop', 'API RESTful con FastAPI', 'Visualización 3D interactiva'],
      isDeployed: false
    },
    {
      id: 3,
      title: 'Eventos UNAL - Sistema de Gestión de Eventos',
      description: 'Gestión y visualización de eventos de la Universidad Nacional de Colombia (React + Strapi).',
      image: '/EventosUnal.svg',
      technologies: ['React', 'TypeScript', 'Vite', 'Strapi', 'Tailwind CSS', 'Docker', 'Vercel'],
      githubUrl: 'https://github.com/SergioR-02/Eventos_Unal',
      liveUrl: 'https://eventos-unal.vercel.app',
      fullDescription: 'Sistema web para la gestión y visualización de eventos de la Universidad Nacional de Colombia. Frontend en React + TypeScript + Vite y backend con Strapi v5 como Headless CMS. Incluye búsqueda dinámica, filtros por categoría, vistas detalladas, diseño responsive y modo claro/oscuro. Dockerizado y desplegado en Vercel (frontend) y Strapi Cloud (backend).',
      features: ['Listado y búsqueda dinámica de eventos', 'Filtrado por categoría', 'Vista detallada de cada evento', 'Renderizado de Rich Text con @strapi/blocks-react-renderer', 'Modo claro/oscuro persistente', 'Dockerización y despliegue en la nube'],
      isDeployed: true
    },

    {
      id: 4,
      title: 'Objetos Perdidos UNAL',
      description: 'Plataforma para gestionar objetos perdidos y encontrados en la Universidad Nacional, construida con arquitectura MVC y Atomic Design.',
      image: '/ObjetosPerdidos.svg',
      technologies: ['React','Sass', 'MySQL', 'Node.js', 'TypeScript', 'Express'],
      githubUrl: 'https://github.com/SergioR-02/Software_Engineering/tree/main/Proyecto',
      liveUrl: 'https://test-bay-iota-63.vercel.app',
      fullDescription: 'Una plataforma web completa diseñada para gestionar eficientemente la pérdida y recuperación de objetos en los campus de la UNAL. Utiliza una arquitectura MVC en el backend con Express y TypeScript, y un sistema de diseño Atómico en el frontend con React para máxima escalabilidad y mantenimiento.',
      features: ['Autenticación segura con JWT', 'Testing & Development', 'Creación y gestión de reportes', 'Arquitectura backend MVC', 'Diseño frontend Atómico'],
      isDeployed: true
    },
    {
      id: 5,
      title: 'EcoScan 3D - Análisis de Reciclaje con IA',
      description: 'Plataforma que utiliza IA para identificar y clasificar residuos a partir de imágenes, ofreciendo recomendaciones de reciclaje y visualizaciones 3D interactivas.',
      image: '/EcoScan.svg',
      technologies: ['Three.js', 'React', 'Python', 'Flask', 'YOLOv5', 'WebSockets', 'OpenAI API'],
      githubUrl: 'https://github.com/SergioR-02/computacion-visual-grupo/tree/main/proyecto',
      liveUrl: 'https://example.com',
      fullDescription: 'EcoScan 3D es una innovadora plataforma web que educa sobre el reciclaje. Permite a los usuarios analizar residuos subiendo una imagen o usando su cámara en tiempo real. La aplicación combina la detección de objetos con YOLOv5, la generación de consejos personalizados con ChatGPT y una visualización 3D interactiva con Three.js, creando una experiencia educativa y atractiva.',
      features: ['Detección de residuos con IA (YOLOv5)', 'Visualización 3D interactiva', 'Consejos de reciclaje con ChatGPT', 'Análisis desde imagen estática', 'Detección en tiempo real (Cámara)', 'Comunicación vía WebSockets'],
      isDeployed: false
    }
  ];

  return (
    <>
      <section id="projects" className="relative py-20 transition-all duration-700 ease-out transform overflow-hidden">
        {/* Fondo iluminado y estrellado */}
        <StarsBackground theme={theme} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 mt-10">
              Mis Proyectos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Una selección de proyectos que demuestran mi experiencia en desarrollo web moderno y diseño innovador.
            </p>
          </div>
          <ProjectsGrid projects={projects} onSelect={setSelectedProject} />
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        isDeployed={selectedProject?.isDeployed}
      />
    </>
  );
};

export default Projects;