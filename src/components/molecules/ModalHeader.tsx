import React from 'react';
import { X } from 'lucide-react';

interface ModalHeaderProps {
  image: string;
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ image, title, onClose }) => (
  <div className="relative">
    <img
      src={image}
      alt={title}
      className="w-full h-40 sm:h-56 object-cover" // reduced height
    />
    <button
      onClick={onClose}
      className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
    >
      <X size={18} />
    </button>
  </div>
);

export default ModalHeader;
