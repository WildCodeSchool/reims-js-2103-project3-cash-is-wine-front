import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const WineListContext = createContext();

// encapsulate the global state inside a provider

function WineListProvider({ children }) {
  const [wineList, setWineList] = useState([]);
  const url = 'http://localhost:8000/bottles';
  React.useEffect(() => {
    axios.get(url)
      .then((response) => (setWineList(response.data)));
  }, []); // start from undefined: no logged user

  return (
    <WineListContext.Provider value={{ wineList }}>
      {children}
    </WineListContext.Provider>
  );
}

WineListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

// make a shortcut for useContext

const useWineList = () => useContext(WineListContext);

// export helpers

export { WineListProvider, useWineList };
