import React, { useRef /* , useState */ } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import logoCash from './assets/logociw.png';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (
        emailInput.current.value !== ''
        && passwordInput.current.value !== ''
        && confirmPasswordInput.current.value !== ''
        && passwordInput.current.value === confirmPasswordInput.current.value
      ) {
        // setRegister('Vous êtes inscrit avec succès');
        toast.success('Vous êtes inscrit avec succès', toastConfig);
      } else {
        // setRegister('Veuillez vérifier votre email ou mot de passe');
        toast.error('Veuillez vérifier votre email ou mot de passe', toastConfig);
      }

      const user = {
        email: emailInput.current.value,
        password: passwordInput.current.value,
        confirmPassword: confirmPasswordInput.current.value,
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
          <label className="labelmdp" htmlFor="password">Confirmer votre mot de passe</label>
          <input className="inputs" ref={confirmPasswordInput} type="password" id="password" name="password" />
          {/*
          <button className="button1" type="submit">S&apos;enregistrer</button> */}
          <div>
            <button className="button1" type="submit">
              S&apos;enregistrer
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
