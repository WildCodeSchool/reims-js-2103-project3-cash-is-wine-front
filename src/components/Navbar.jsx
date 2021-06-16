import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLoginData } from '../contexts/LoginDataContext';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Navbar() {
  const { loginData } = useLoginData();

  return (
    <nav className="navBar">
      {loginData == null ? (
        <>
          {link('/register', 'Créer un compte')}
        </>
      ) : (
        <>
          {link('/profile', 'Mon compte')}
          {link('/logout', 'Déconnexion')}
        </>
      )}
    </nav>
  );
}

export default Navbar;
