import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const WineListContext = createContext();

function WineListProvider({ children }) {
  const [wineList, setWineList] = useState([]);
  const url = 'http://localhost:8000/bottles';
  React.useEffect(() => {
    axios.get(url)
      .then((response) => (setWineList(response.data)));
  }, []);

  return (
    <WineListContext.Provider value={{ wineList }}>
      {children}
    </WineListContext.Provider>
  );
}

WineListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useWineList = () => useContext(WineListContext);

export { WineListProvider, useWineList };
