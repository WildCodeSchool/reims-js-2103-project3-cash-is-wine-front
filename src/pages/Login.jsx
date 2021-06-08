import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';

import { useLoginData } from '../contexts/LoginDataContext';

function Login() {
  const { loginData, setLoginData } = useLoginData();
  const usernameInput = useRef();

  if (loginData != null) {
    return <Redirect to="/profile" />;
  }

  return (
    <>
      <input ref={usernameInput} />
      <button
        type="button"
        onClick={() => {
          setLoginData({ username: usernameInput.current.value });
        }}
      >
        Connexion
      </button>
    </>
  );
}

export default Login;
