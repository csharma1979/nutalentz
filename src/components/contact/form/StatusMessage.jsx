import React from 'react';

const StatusMessage = ({ type, message }) => {
  if (!message) return null;

  const getStatusColor = () => {
    switch (type) {
      case 'error':
        return 'text-red-600';
      case 'success':
        return 'text-green-600';
      default:
        return 'text-brand';
    }
  };

  return (
    <div className={`text-sm ${getStatusColor()}`}>
      {message}
    </div>
  );
};

export default StatusMessage;