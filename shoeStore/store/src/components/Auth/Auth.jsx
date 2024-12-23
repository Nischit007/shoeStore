import React from 'react';
import { useLocation } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';

const Auth = () => {
  const location = useLocation();

  return <>{location.pathname === '/register' ? <Registration /> : <Login />}</>;
};

export default Auth;
