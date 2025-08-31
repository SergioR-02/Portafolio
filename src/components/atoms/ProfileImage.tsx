import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className = '' }) => (
  <div className={`w-32 h-32 mx-auto bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full p-1 flex items-center justify-center shadow-lg ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-28 h-28 rounded-full object-cover"
    />
  </div>
);

export default ProfileImage;
