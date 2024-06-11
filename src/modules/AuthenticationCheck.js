import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthenticationCheck = ({ children }) => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthenticationCheck;
