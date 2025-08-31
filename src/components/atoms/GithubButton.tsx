import React from 'react';
import { Github } from 'lucide-react';

interface GithubButtonProps {
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const GithubButton: React.FC<GithubButtonProps> = ({ href, className = '', onClick }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors duration-200 ${className}`}
    onClick={onClick}
  >
    <Github size={20} />
  </a>
);

export default GithubButton;
