import React from 'react';
import { Redirect } from 'react-router-dom';
import ShowWinary from '../components/ShowWinary';
import { useLoginData } from '../contexts/LoginDataContext';
import './Profile.css';

function Login() {
  const { loginData } = useLoginData();

  if (loginData == null) {
    return <Redirect to="/login" />;
  }
  return (
    <ShowWinary />
  );
}

export default Login;
