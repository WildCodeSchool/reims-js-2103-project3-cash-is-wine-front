import React from 'react';
import './Searchbar.css';
import { useSearchBar } from '../contexts/SearchBarContext';

function SearchBar() {
  const { searchBar, setSearchBar } = useSearchBar();

  const onChange = (event) => {
    setSearchBar(event.target.value);
  };
  return (
    <>
      <div className="search-box">
        <input
          type="search"
          className="search-box-input"
          placeholder="Rechercher votre bouteille"
          results="0"
          value={searchBar}
          onChange={onChange}
        />
        <button type="button" className="search-box-btn">
          <i className="search-box-icon material-icons">➤</i>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
