import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="font-['Patua_One']">Rafa</span>
      <span className="font-['Pacifico']">Travels</span>
    </span>
  );
}; 