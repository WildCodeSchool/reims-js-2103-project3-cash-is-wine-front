import React from 'react';
import logoCash from './assets/logociw.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <img className="cashiswineImg" src={logoCash} alt="logo" />
    <div className="background">
      <h1 className="flex justify-center text-5xl text-white">
        {' '}
        Trouvez des vins,
        <br />
        {' '}
        prêts à boire et accessibles
      </h1>
    </div>
  </header>
);

export default Header;
