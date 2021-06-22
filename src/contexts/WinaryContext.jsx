import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useLoginData } from './LoginDataContext';

const WinaryContext = createContext();

function WinaryProvider({ children }) {
  const { loginData } = useLoginData();

  const [winary, setWinary] = useState([]);

  React.useEffect(() => {
    if (loginData != null) {
      const url = `http://localhost:8000/users/${loginData.userId}/bottles`;
      axios.get(url)
        .then((response) => (setWinary(response.data)));
    }
  }, [loginData]);

  return (
    <WinaryContext.Provider value={{ winary }}>
      {children}
    </WinaryContext.Provider>
  );
}

WinaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useWinary = () => useContext(WinaryContext);

export { WinaryProvider, useWinary };
