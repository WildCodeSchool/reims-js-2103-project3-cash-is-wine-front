import React from 'react';
import { Redirect } from 'react-router-dom';

import { useLoginData } from '../contexts/LoginDataContext';
import './Profile.css';

function Login() {
  const { loginData } = useLoginData();

  if (loginData == null) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="formContainer">
      <h1>
        Vinothèque de
        {' '}
        {loginData.email}
      </h1>
      <div className="bottleForm">
        <label className="labelBottle" htmlFor="type">Type</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="Sec" required />
        <label className="labelBottle" htmlFor="appellation">Appellation</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="Chinon" required />
        <label className="labelBottle" htmlFor="year">Millésime</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="2005" required />
        <label className="labelBottle" htmlFor="medal">Récompense/Médaille</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="Elu vin de l'année 2010" />
        <label className="labelBottle" htmlFor="quantity">Quantité</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="6" required />
        <label className="labelImage" htmlFor="labelRecto">Etiquette avant</label>
        <input className="inputImage" type="file" id="labelBottle" name="image" placeholder="Ajoutez votre image" />
        <label className="labelImage" htmlFor="labelVerso">Etiquette arrière</label>
        <input className="inputImage" type="file" id="labelBottle" name="image" placeholder="Ajoutez votre image" />
      </div>
      <div className="btnContainer">
        <button className="btnBottle" type="button">Ajouter une autre bouteille</button>
        <button className="btnBottle" type="submit">Je vends mes bouteilles!</button>
      </div>
    </div>
  );
}

export default Login;
