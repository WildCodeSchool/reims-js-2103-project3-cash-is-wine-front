import React, { useState } from 'react';
import './Searchbar.css';
import WineLister from './WineLister';

function SearchBar() {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="search-box">
        <input
          type="search"
          className="search-box-input"
          placeholder="Rechercher votre bouteille"
          results="0"
          value={text}
          onChange={onChange}
        />
        <button type="button" className="search-box-btn">
          <i className="search-box-icon material-icons">➤</i>
        </button>
      </div>
      <WineLister text={text} />
    </>
  );
}

export default SearchBar;
