import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
export default function ProtectedRoute({ element: Component, isAuthenticated, ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
}
