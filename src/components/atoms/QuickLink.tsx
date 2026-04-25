import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface QuickLinkProps {
  label: string;
  anchor?: string;
  to?: string;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 10;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

const QuickLink: React.FC<QuickLinkProps> = ({ label, anchor, to }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (to) {
    return (
      <Link to={to} className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200">
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        if (!anchor) return;
        if (pathname !== '/') {
          navigate('/');
          setTimeout(() => scrollToSection(anchor), 300);
        } else {
          scrollToSection(anchor);
        }
      }}
      className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 bg-transparent border-none cursor-pointer"
    >
      {label}
    </button>
  );
};

export default QuickLink;
