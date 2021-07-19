import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../layout';
import LoginView from '../views/PersonView';

const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'login', element: <LoginView /> },
        { path: '/', element: <Navigate to="/login" /> },
      ]
    },
  ];
  
export default routes;