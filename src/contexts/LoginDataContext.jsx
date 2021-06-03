import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// create context

const LoginDataContext = createContext();

// encapsulate the global state inside a provider

function LoginDataProvider({ children }) {
  const [loginData, setLoginData] = useState(); // start from undefined: no logged user

  return (
    <LoginDataContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginDataContext.Provider>
  );
}

LoginDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

// make a shortcut for useContext

const useLoginData = () => useContext(LoginDataContext);

// export helpers

export { LoginDataProvider, useLoginData };
