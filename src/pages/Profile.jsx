import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ShowWinary from '../components/ShowWinary';
import { useLoginData } from '../contexts/LoginDataContext';
import './Profile.css';

function Login() {
  const { loginData } = useLoginData();
  const [bottleFrontFile, setBottleFrontFile] = useState();
  const [bottleBackFile, setBottleBackFile] = useState();

  const changeFront = (e) => {
    setBottleFrontFile(e.target.files[0]);
  };

  const changeBack = (e) => {
    setBottleBackFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('bottleFront', bottleFrontFile);
    formData.append('bottleBack', bottleBackFile);
    const url = 'http://localhost:8000/upload';
    axios.post(url, formData)
      .then((response) => (console.log(response.data)));
  };

  if (loginData == null) {
    return <Redirect to="/login" />;
  }

  const typeInput = useRef();
  const appellationInput = useRef();
  const yearInput = useRef();
  const rewardInput = useRef();

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
          <input className="inputBottle" ref={yearInput} type="text" id="text" name="text" placeholder="2005" required />
          <label className="labelBottle" htmlFor="medal">
            Récompense/Médaille
          </label>
          <select name="labelBottle" ref={rewardInput}>
            <option value="labelBottle">--Veuillez choisir une récompense--</option>
            <option value="">Récompense N°1</option>
            <option value="">Récompense N°2</option>
            <option value="">Récompense N°3</option>
          </select>
          <label className="labelBottle" htmlFor="price">Prix</label>
          <input className="inputBottle" type="text" id="text" name="text" required />
        </div>
        <div className="btnContainer">
          <button className="btnBottle" type="button">Ajouter une autre bouteille</button>
          <input className="inputBottle" type="text" id="text" name="text" placeholder="6" required />
          <label className="labelImage" htmlFor="labelRecto">Etiquette avant</label>
          <input className="inputImage" type="file" id="labelRecto" name="fileFront" placeholder="Ajoutez votre image" onChange={changeFront} />
          <label className="labelImage" htmlFor="labelVerso">Etiquette arrière</label>
          <input className="inputImage" type="file" id="labelVerso" name="fileBack" placeholder="Ajoutez votre image" onChange={changeBack} />
        </div>
        <div className="btnContainer">
          <button className="btnBottle" type="button" onClick={handleSubmit}>Ajouter une image</button>
          <button
            className="btnBottle"
            type="submit"
            onClick={() => {
              const url = `http://localhost:8000/users/${loginData.userId}/bottles`;
              axios.post(url, {
                type: typeInput.current.value,
                appellation: appellationInput.current.value,
                year: yearInput.current.value,
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
