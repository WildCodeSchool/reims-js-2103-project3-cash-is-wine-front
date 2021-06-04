import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

function SearchBar({ getQuery }) {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className="searchBar">
      <input
        type="search"
        className="form-control"
        placeholder="Rechercher votre bouteille"
        results="0"
        value={text}
        onChange={() => onChange()}
      />
    </div>
  );
}

SearchBar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default SearchBar;
