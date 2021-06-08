import React from 'react';
import { Redirect } from 'react-router-dom';

import { useLoginData } from '../contexts/LoginDataContext';

function Login() {
  const { loginData } = useLoginData();

  if (loginData == null) {
    return <Redirect to="/login" />;
  }

  return (
    <h1>
      Vinothèque de
      {loginData.username}
    </h1>
  );
}

export default Login;
