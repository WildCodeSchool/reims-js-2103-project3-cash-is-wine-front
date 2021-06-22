import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ShowWinary from '../components/ShowWinary';
import { useLoginData } from '../contexts/LoginDataContext';
import './Profile.css';

function Login() {
  const nameInput = useRef();
  const typeInput = useRef();
  const appellationInput = useRef();
  const millesimeInput = useRef();

  const { loginData } = useLoginData();

  if (loginData == null) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="formContainer">
        <h1>
          Vinothèque de
          {' '}
          {loginData.email}
        </h1>
        <div className="bottleForm">
          <label className="labelBottle" htmlFor="type">Type</label>
          <input className="inputBottle" ref={typeInput} type="text" id="text" name="text" placeholder="Sec" required />
          <label className="labelBottle" htmlFor="appellation">Appellation</label>
          <input className="inputBottle" ref={appellationInput} type="text" id="text" name="text" placeholder="Chinon" required />
          <label className="labelBottle" htmlFor="year">Millésime</label>
          <input className="inputBottle" ref={millesimeInput} type="text" id="text" name="text" placeholder="2005" required />
          <label className="labelBottle" htmlFor="medal">Récompense/Médaille</label>
          <input className="inputBottle" type="text" id="text" name="text" placeholder="Elu vin de l'année 2010" />
          <label className="labelBottle" htmlFor="quantity">Quantité</label>
          <input className="inputBottle" ref={nameInput} type="text" id="text" name="text" placeholder="6" required />
          <label className="labelImage" htmlFor="labelRecto">Etiquette avant</label>
          <input className="inputImage" type="file" id="labelBottle" name="image" placeholder="Ajoutez votre image" />
          <label className="labelImage" htmlFor="labelVerso">Etiquette arrière</label>
          <input className="inputImage" type="file" id="labelBottle" name="image" placeholder="Ajoutez votre image" />
        </div>
        <div className="btnContainer">
          <button className="btnBottle" type="button">Ajouter une autre bouteille</button>
          <button
            className="btnBottle"
            type="submit"
            onClick={() => {
              const url = `http://localhost:8000/users/${loginData.userId}/bottles`;
              axios.post(url, {
                name: nameInput.current.value,
                type: typeInput.current.value,
                appellation: appellationInput.current.value,
                year: millesimeInput.current.value,
                reference_id: 1,
              })
                .then((response) => {
                  console.log(response.data);
                });
            }}
          >
            Je vends mes bouteilles!
          </button>
        </div>
      </div>
      <ShowWinary />
    </>
  );
}

export default Login;
