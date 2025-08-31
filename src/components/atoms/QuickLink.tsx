import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface QuickLinkProps {
  label: string;
  to?: string;
  scroll?: boolean;
}

const QuickLink: React.FC<QuickLinkProps> = ({ label, to }) => {
  const navigate = useNavigate();

  if (to) {
    return (
      <Link
        to={to}
        onClick={to === '/'
          ? () => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }
          : undefined
        }
        className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200"
      >
        {label}
      </Link>
    );
  }

  // For scroll link (e.g., Experiencia)
  return (
    <button
      onClick={() => {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const el = document.getElementById('experience');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 40;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 400);
        } else {
          setTimeout(() => {
            const el = document.getElementById('experience');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 40;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 100);
        }
      }}
      className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 bg-transparent border-none"
      style={{ cursor: 'pointer' }}
    >
      {label}
    </button>
  );
};

export default QuickLink;
