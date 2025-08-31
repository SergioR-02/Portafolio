import React from 'react';
import QuickLink from '../atoms/QuickLink';

const quickLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Experiencia', scroll: true },
  { label: 'Proyectos', to: '/projects' },
  { label: 'Habilidades', to: '/skills' },
  { label: 'Contacto', to: '/contact' }
];

const QuickLinks: React.FC = () => (
  <ul className="space-y-2">
    {quickLinks.map((link, idx) => (
      <li key={idx}>
        <QuickLink {...link} />
      </li>
    ))}
  </ul>
);

export default QuickLinks;
