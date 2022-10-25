import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { authRouter } from './app/router';
import AuthLayout from './features/auth/AuthLayout';

function App() {
  return <AuthLayout><RouterProvider router={authRouter} /></AuthLayout>;
}

export default App;
