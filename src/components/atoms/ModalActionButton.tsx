import React from 'react';

interface ModalActionButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  gradient?: boolean;
}

const ModalActionButton: React.FC<ModalActionButtonProps> = ({ href, icon, children, gradient }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md font-semibold text-sm transition-all duration-200
      ${gradient ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
  >
    {icon}
    <span>{children}</span>
  </a>
);

export default ModalActionButton;
