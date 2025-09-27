import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = '#667eea' }) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return { width: '16px', height: '16px', borderWidth: '2px' };
      case 'large':
        return { width: '40px', height: '40px', borderWidth: '4px' };
      default:
        return { width: '20px', height: '20px', borderWidth: '3px' };
    }
  };

  const sizeStyle = getSizeStyle();

  return (
    <div
      className="loading-spinner"
      style={{
        ...sizeStyle,
        border: `${sizeStyle.borderWidth} solid #f3f3f3`,
        borderTopColor: color,
        borderRadius: '50%',
        display: 'inline-block',
        animation: 'spin 1s ease-in-out infinite'
      }}
    />
  );
};

export default LoadingSpinner;