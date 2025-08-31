import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExternalLinkButtonProps {
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({ href, className = '', onClick }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors duration-200 ${className}`}
    onClick={onClick}
  >
    <ExternalLink size={20} />
  </a>
);

export default ExternalLinkButton;
