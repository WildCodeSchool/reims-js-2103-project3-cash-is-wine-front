import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../components/Form';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Estimate() {
  return (
    <>
      <div className="box2">
        {link('/', 'Accueil')}
      </div>
      <Form />
    </>
  );
}

export default Estimate;
