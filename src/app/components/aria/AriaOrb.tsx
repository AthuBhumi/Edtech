import React from 'react';

export const AriaOrb: React.FC<{ size?: 'sm' | 'md' | 'lg'; animated?: boolean }> = ({ 
  size = 'md',
  animated = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full relative`}>
      <div 
        className={`w-full h-full rounded-full ${animated ? 'animate-aria-spin' : ''}`}
        style={{
          background: 'conic-gradient(from 0deg, #06B6D4, #2563EB, #7C3AED, #06B6D4)'
        }}
      />
      <div 
        className={`absolute inset-0 rounded-full ${animated ? 'animate-aria-glow' : ''}`}
        style={{
          boxShadow: '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(37, 99, 235, 0.3)'
        }}
      />
    </div>
  );
};
