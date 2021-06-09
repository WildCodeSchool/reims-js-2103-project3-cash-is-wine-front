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
    <div className="search-box">
      <input
        type="search"
        className="search-box-input"
        placeholder="Rechercher votre bouteille"
        results="0"
        value={text}
        onChange={() => onChange()}
      />
      <button type="button" className="search-box-btn">
        <i className="search-box-icon material-icons">Go</i>
      </button>
    </div>

  );
}

SearchBar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default SearchBar;
