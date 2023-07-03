import React from 'react';
import './errorMessage.scss';

const ErrorMessage = ({ title, message }) => {
  return (
    <div className="error-message">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
