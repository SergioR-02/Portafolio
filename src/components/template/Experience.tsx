import React from 'react';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';
import CertificationsTitle from '../molecules/CertificationsTitle';
import SectionTitle from '../molecules/SectionTitle';
import CertificationCard from '../molecules/CertificationCard';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experiencia Laboral */}
        <div className="mb-16">
          <SectionTitle>Experiencia Laboral</SectionTitle>
          <div className="relative min-h-[220px] border-l-2 border-gray-500 dark:border-gray-100 pl-6">
            {/* Círculo en la barra vertical */}
            <span className="absolute -left-[8px] top-1 w-3.5 h-3.5 bg-gray-500 dark:bg-gray-100 rounded-full border-2 border-gray-500 dark:border-gray-100"></span>
            <div>
              <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400">Mayo 2024 – Actualidad</span>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">Frontend Developer</h3>
              <span className="block text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Sitlen</span>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
                Diseño e implementación de interfaces web responsivas con enfoque en accesibilidad y experiencia de usuario, integración de nuevas funcionalidades siguiendo buenas prácticas y patrones de diseño, y optimización del rendimiento y SEO del producto.
              </p>
            </div>
          </div>
        </div>
        {/* Certificaciones */}
        <div>
          <CertificationsTitle />
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-0 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <CertificationCard
              title="Desarrollo Web Full Stack"
              date="Diciembre 2024"
              description="Formación integral en desarrollo web moderno: uso de Node.js y Express para el backend, React y Tailwind CSS para la creación de interfaces dinámicas y responsivas, implementación de patrones de diseño y manejo de bases de datos relacionales y no relacionales."
              link="https://certificados.talentotech.co/?cc=1015992343&cert=2584663820#pdf"
            />
            <CertificationCard
              title="Programa ONE Front-end"
              date="Julio 2024"
              description="Certificación internacional en desarrollo frontend con Oracle y Alura. Formación en React con uso de hooks, manejo de React Router para navegación, integración de librerías externas, diseño responsivo, consumo de APIs y aplicación de buenas prácticas de programación. "
              link="https://app.aluracursos.com/program/certificate/900e9ca1-8847-48d1-85f4-76b5cf2fec05?lang"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;