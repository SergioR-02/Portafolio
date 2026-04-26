import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className = '' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`w-32 h-32 mx-auto rounded-full p-[3px] flex items-center justify-center shadow-lg transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900 shadow-black/30'
          : 'bg-gradient-to-br from-slate-200 via-white to-slate-300 shadow-slate-200/70'
      } ${className}`}
    >
      <div className={`w-full h-full rounded-full p-[2px] ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
