import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLoginData } from '../contexts/LoginDataContext';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Navbar() {
  const { loginData } = useLoginData();
  return (
    <nav>
      {link('/', 'Accueil')}
      {loginData == null ? (
        <>
          {link('/wine-library', 'Vinothèque')}
        </>
      ) : (
        <>
          {link('/profile', 'Compte')}
        </>
      )}
    </nav>
  );
}

export default Navbar;
