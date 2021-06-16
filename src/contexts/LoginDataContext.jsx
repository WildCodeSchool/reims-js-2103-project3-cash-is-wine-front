import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';

const LoginDataContext = createContext();

function LoginDataProvider({ children }) {
  const [loginData, setLoginData] = useState();

  return (
    <LoginDataContext.Provider value={{
      loginData, setLoginData,
    }}
    >
      {children}
    </LoginDataContext.Provider>
  );
}

LoginDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useLoginData = () => useContext(LoginDataContext);

export { LoginDataProvider, useLoginData };
