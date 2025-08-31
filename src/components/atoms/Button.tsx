import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}


const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`rounded-lg font-semibold transition-transform duration-150 ease-in-out ${className} hover:scale-105`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
