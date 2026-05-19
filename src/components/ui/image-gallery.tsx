import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, className = '' }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div
        className={`rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] bg-[#0b0d12] flex items-center justify-center p-4 h-80 lg:h-[32rem] ${className}`}
      >
        <img src={images[0]} alt={title} className="h-full w-full object-contain" />
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] flex flex-col h-[26rem] lg:h-[36rem] ${className}`}
    >
      {/* Main image */}
      <div className="flex-1 bg-[#0b0d12] dark:bg-[#080a0d] flex items-center justify-center p-3 lg:p-4 overflow-hidden">
        <img
          key={activeIdx}
          src={images[activeIdx]}
          alt={`${title} ${activeIdx + 1}`}
          className="h-full w-full object-contain animate-fade-in"
          style={{ animation: 'galleryFade 0.25s ease' }}
        />
      </div>

      {/* Thumbnails — horizontal strip bottom */}
      <div className="flex gap-px bg-gray-200 dark:bg-gray-800 h-20 lg:h-24 shrink-0 overflow-x-auto">
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`relative shrink-0 w-24 lg:w-28 h-full flex items-center justify-center p-2 transition-all duration-200 focus:outline-none
              ${activeIdx === idx
                ? 'bg-white dark:bg-slate-700'
                : 'bg-[#0b0d12] dark:bg-[#080a0d] opacity-50 hover:opacity-80'
              }`}
          >
            <img
              src={src}
              alt={`${title} ${idx + 1}`}
              className="max-h-full max-w-full object-contain"
            />
            {activeIdx === idx && (
              <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes galleryFade {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
