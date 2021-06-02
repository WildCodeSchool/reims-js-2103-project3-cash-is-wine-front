import React from 'react';
import logoCash from './asset/logoCash.png';

const Header = () => (
  <header className="header">
    <div className="slogan">
      <img className="cashiswineImg" src={logoCash} alt="logo" />
      <h1>
        CASHISWINE
        <br />
        Trouvez des vins prêts à boire accessibles
      </h1>
    </div>
  </header>
);

export default Header;
