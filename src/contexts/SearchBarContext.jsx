import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBarContext = createContext();

function SearchBarProvider({ children }) {
  const [searchBar, setSearchBar] = useState('');

  return (
    <SearchBarContext.Provider value={{ searchBar, setSearchBar }}>
      {children}
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useSearchBar = () => useContext(SearchBarContext);

export { SearchBarProvider, useSearchBar };
