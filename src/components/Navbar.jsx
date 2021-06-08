import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLoginData } from '../contexts/LoginDataContext';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Navbar() {
  const { loginData } = useLoginData();

  return (
    <nav>
      {link('/', 'Home')}
      {loginData == null ? (
        <>
          {link('/login', 'Login')}
          {link('/register', 'Register')}
        </>
      ) : (
        <>
          {link('/profile', 'Profile')}
          {link('/logout', 'Logout')}
        </>
      )}
    </nav>
  );
}

export default Navbar;
