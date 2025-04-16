import React from 'react';

export default function LoadingSpinner({ size = 'medium', className = '' }) {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-6 h-6 border-3',
    large: 'w-10 h-10 border-4'
  };

  const spinnerClass = `${sizeClasses[size]} loader ${className}`;

  return (
    <div className={spinnerClass}></div>
  );
}