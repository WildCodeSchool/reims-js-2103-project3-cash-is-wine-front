import React, { useState, useRef } from 'react';
import axios from 'axios';

function Form() {
  const [estimation, setEstimation] = useState();
  const typeInput = useRef();
  const appellationInput = useRef();
  const yearInput = useRef();
  const rewardInput = useRef();

  return (
    <div className="formContainer">
      <h1>
        Estimez vos bouteilles en quelques clics !
      </h1>
      <div className="bottleForm">
        <label className="labelBottle" htmlFor="type">Type</label>
        <input className="inputBottle" ref={typeInput} type="text" id="text" name="text" placeholder="Sec" required />
        <label className="labelBottle" htmlFor="appellation">Appellation</label>
        <input className="inputBottle" ref={appellationInput} type="text" id="text" name="text" placeholder="Chinon" required />
        <label className="labelBottle" htmlFor="year">Millésime</label>
        <input className="inputBottle" ref={yearInput} type="text" id="text" name="text" placeholder="2005" required />
        <label className="labelBottle" htmlFor="medal">
          Récompense/Médaille
        </label>
        <select className="inputBottle" ref={rewardInput}>
          <option value="">--Veuillez choisir une récompense--</option>
          <option value="Récompense N°1">Récompense N°1</option>
          <option value="Récompense N°2">Récompense N°2</option>
          <option value="Récompense N°3">Récompense N°3</option>
        </select>
        <label className="labelBottle" htmlFor="price">
          Prix:
          {estimation}
        </label>
      </div>
      <div className="btnContainer">
        <button className="btnBottle" type="button">Ajouter une autre bouteille</button>
        <button
          className="btnBottle"
          type="button"
          onClick={() => {
            const body = {
              type: typeInput.current.value,
              appellation: appellationInput.current.value,
              year: parseInt(yearInput.current.value, 10),
              reward: rewardInput.current.value,
            };
            const url = `http://localhost:8000/prices?${Object.keys(body).map((key) => `${key}=${body[key]}`).join('&')}`;
            axios.get(url)
              .then((response) => {
                setEstimation(response.data.price);
                console.log(response.data.price);
              });
          }}
        >
          Estimation
        </button>
      </div>
    </div>
  );
}

export default Form;
