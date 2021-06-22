import React from 'react';
import { NavLink } from 'react-router-dom';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Banner() {
  return (
    <div className="background">
      <div className="backgroundh1">
        <h2>
          {' '}
          Prêts à faire du tri
          <br />
          {' '}
          dans votre cave ?
        </h2>
        <div className="linkLogin">
          {link('/estimate', 'Estimez votre vin')}
        </div>
      </div>
      <h1 className="mainh1">
        TROUVEZ DES VINS À MATURITÉ ET ACCESSIBLES.
      </h1>
    </div>
  );
}

export default Banner;
