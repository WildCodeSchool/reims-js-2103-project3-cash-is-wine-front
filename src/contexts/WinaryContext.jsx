import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const WinaryContext = createContext();

function WinaryProvider({ children }) {
  const [Winary, setWinary] = useState([]);
  const url = 'http://localhost:8000/users/1/bottle';
  React.useEffect(() => {
    axios.get(url)
      .then((response) => (setWinary(response.data)));
  }, []);

  return (
    <WinaryContext.Provider value={{ Winary }}>
      {children}
    </WinaryContext.Provider>
  );
}

WinaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useWinary = () => useContext(WinaryContext);

export { WinaryProvider, useWinary };
