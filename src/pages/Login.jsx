import React, { useRef } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import logoCash from './assets/logociw.png';

import { useLoginData } from '../contexts/LoginDataContext';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Login() {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const {
    loginData, setLoginData,
  } = useLoginData();

  if (loginData != null) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="box2">
      {link('/', 'Accueil')}
      <div className="child2">
        <img className="cashiswineImg" src={logoCash} alt="logo" />
        <label className="labelLogin" htmlFor="email">Email</label>
        <input className="inputName" ref={usernameInput} type="email" id="email" name="email" placeholder="cashinwine@mail.com" />
        <label className="labelPassword" htmlFor="email">Mot de passe</label>
        <input className="inputPassword" ref={passwordInput} type="password" id="password" name="password" />
        <button
          className="ButtonLogin"
          type="button"
          onClick={() => {
            const url = 'http://localhost:8000/login';
            axios.post(url, {
              email: usernameInput.current.value,
              password: passwordInput.current.value,
            })
              .then((response) => {
                setLoginData(response.data);
              });
          }}
        >
          Connexion
        </button>
      </div>
    </div>
  );
}

export default Login;
