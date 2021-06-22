import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ReferenceListContext = createContext();

function ReferenceListProvider({ children }) {
  const [referenceList, setReferenceList] = useState([]);
  const url = 'http://localhost:8000/references';
  React.useEffect(() => {
    axios.get(url)
      .then((response) => (setReferenceList(response.data)));
  }, []);

  return (
    <ReferenceListContext.Provider value={{ referenceList }}>
      {children}
    </ReferenceListContext.Provider>
  );
}

ReferenceListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useReferenceList = () => useContext(ReferenceListContext);

export { ReferenceListProvider, useReferenceList };
