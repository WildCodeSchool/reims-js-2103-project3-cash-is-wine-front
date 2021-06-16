import React, { useRef } from 'react';
import './Register.css';
import { NavLink } from 'react-router-dom';
import logoCash from './assets/logociw.png';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      const user = {
        email: emailInput.current.value,
        password: passwordInput.current.value,
      };
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      };
      fetch('http://localhost:8000/users', config).then((res) => res.json()).then((data) => {
        console.log(data);
      });
    }}
    >
      <div className="box1">
        {link('/', 'Accueil')}
        <div className="child">
          <img className="cashiswineImg" src={logoCash} alt="logo" />
          <label className="labelRegister" htmlFor="email">Email</label>
          <input className="inputs" ref={emailInput} type="email" id="email" name="email" placeholder="cashinwine@mail.com" />
          <label className="labelmdp" htmlFor="password">Mot de passe</label>
          <input className="inputs" ref={passwordInput} type="password" id="password" name="password" />
          <button className="button1" type="submit">S&apos;enregistrer</button>
        </div>
      </div>
    </form>
  );
}

export default Register;
