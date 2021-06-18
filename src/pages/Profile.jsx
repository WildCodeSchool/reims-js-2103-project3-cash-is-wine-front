import React from 'react';
import { Redirect } from 'react-router-dom';
import ShowWinary from '../components/ShowWinary';
import { useLoginData } from '../contexts/LoginDataContext';

function Login() {
  const { loginData } = useLoginData();
  console.log(loginData.userId);

  if (loginData == null) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <h1>
        Vinothèque de
        {' '}
        {loginData.email}
      </h1>
      <ShowWinary />
    </>
  );
}

export default Login;
