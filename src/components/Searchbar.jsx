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
      <div className="searchBar">
        <input
          type="search"
          className="form-control"
          placeholder="Rechercher votre bouteille"
          results="0"
          value={text}
          onChange={onChange}
        />
      </div>
      <WineLister text={text} />
    </>
  );
}

export default SearchBar;
