import React, { useState } from 'react';

interface VisualImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

export const VisualImage: React.FC<VisualImageProps> = ({ src, alt, className = "", overlay = false }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`flex items-center justify-center bg-linear-to-br from-[#07111d] to-[#0b2a3a] text-white/45 text-[10px] tracking-[0.14em] uppercase font-medium ${className}`}>
        <span>Imagem temporária</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#0b1625] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setError(true)}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center block"
      />
      {overlay && <div className="absolute inset-0 bg-brand-dark/25 pointer-events-none" />}
    </div>
  );
};
