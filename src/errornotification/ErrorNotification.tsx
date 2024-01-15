// src/components/ErrorNotification.tsx
import React from 'react';

interface ErrorNotificationProps {
  message: string;
  onClose: () => void;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ message, onClose }) => {
  return (
    <div className="error-notification">
      <p className="error-text">{message}</p>
      <button onClick={onClose} className="close-button">
        <span>&times;</span>
      </button>
    </div>
  );
};

export default ErrorNotification;