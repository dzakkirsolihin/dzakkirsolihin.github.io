import React from 'react';

const LoadingSpinner = ({ size = 'default', className = '' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin`}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

// import LoadingSpinner from '../ui/LoadingSpinner';

// // Penggunaan:
// <LoadingSpinner size="small" /> // atau
// <LoadingSpinner size="default" /> // atau
// <LoadingSpinner size="large" />