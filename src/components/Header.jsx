import React from 'react';
import { NavLink } from 'react-router-dom';
import logoCash from './assets/logoCash.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <img className="cashiswineImg" src={logoCash} alt="logo" />
    <div className="thefourth">
      <nav className="navlist">
        <NavLink className="link" activeClassName="active" exact to="/">
          Accueil
        </NavLink>

        <NavLink className="link" activeClassName="active" exact to="/wine-library">
          Vinothèque
        </NavLink>

        <NavLink className="link" activeClassName="active" exact to="/profile">
          Compte
        </NavLink>
      </nav>
    </div>
    <div className="background">
      <h1>Trouvez des vins prêts à boire accessibles</h1>
    </div>
  </header>
);

export default Header;
