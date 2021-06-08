import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const WineListContext = createContext();

// encapsulate the global state inside a provider

function WineListProvider({ children }) {
  const [wineList, setWineList] = useState([]); // start from undefined: no logged user

  return (
    <WineListContext.Provider value={{ wineList, setWineList }}>
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
