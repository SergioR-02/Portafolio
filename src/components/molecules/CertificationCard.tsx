import React from 'react';
import Button from '../atoms/Button';
import Title from '../atoms/Title';


interface CertificationCardProps {
  title: string;
  date: string;
  description: string;
  link?: string;
}



const CertificationCard: React.FC<CertificationCardProps> = ({ title, date, description, link }) => (
  <div className="flex flex-col justify-between h-full bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-md max-w-sm mx-auto">
    <div>
      <div className="flex items-center gap-2 mb-1">
        {/* Icono de certificado SVG */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2L12.09 7.26L17.5 7.27L13.18 10.97L15.27 16.23L10 12.53L4.73 16.23L6.82 10.97L2.5 7.27L7.91 7.26L10 2Z" fill="#6366f1"/>
        </svg>
        <Title level={3} className="text-lg">{title}</Title>
      </div>
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2H6ZM7 4V3H13V4H7ZM4 6H16V16H4V6Z" fill="#6366f1"/>
        </svg>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-2 mb-4">{description}</p>
    </div>
    <div className="flex justify-start mt-4">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="rounded-lg font-semibold transition-transform duration-150 ease-in-out bg-indigo-600 text-white dark:bg-purple-600 dark:text-white hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors px-6 py-2 shadow-md hover:scale-105"
          >
            Ver más
          </Button>
        </a>
      ) : (
        <Button
          className="rounded-lg font-semibold transition-transform duration-150 ease-in-out bg-indigo-600 text-white dark:bg-purple-600 dark:text-white hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors px-6 py-2 shadow-md hover:scale-105"
        >
          Ver más
        </Button>
      )}
    </div>
  </div>
);

export default CertificationCard;
