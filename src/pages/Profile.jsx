import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ShowWinary from '../components/ShowWinary';
import { useLoginData } from '../contexts/LoginDataContext';
import { useWinary } from '../contexts/WinaryContext';
import './Profile.css';

function Login() {
  const { loginData } = useLoginData();
  const { setWinary } = useWinary();

  if (loginData == null) {
    return <Redirect to="/login" />;
  }

  const [bottleFrontFile, setBottleFrontFile] = useState();
  const [bottleBackFile, setBottleBackFile] = useState();

  const typeInput = useRef();
  const appellationInput = useRef();
  const yearInput = useRef();
  const rewardInput = useRef();

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
      .then((response) => {
        console.log(response.data);
      });
  };

  const dataSubmit = () => {
    const url = `http://localhost:8000/users/${loginData.userId}/bottles`;
    axios.post(url, {
      type: typeInput.current.value,
      appellation: appellationInput.current.value,
      year: yearInput.current.value,
      reward: rewardInput.current.value,
      reference_id: 1,
    })
      .then((response) => {
        setWinary((previousWinary) => ([...previousWinary, response.data]));
      });
  };

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
          <select className="inputBottle" ref={rewardInput}>
            <option value="">--Veuillez choisir une récompense--</option>
            <option value="Récompense N°1">Récompense N°1</option>
            <option value="Récompense N°2">Récompense N°2</option>
            <option value="Récompense N°3">Récompense N°3</option>
          </select>
        </div>
        <div className="btnContainer">
          <button className="btnBottle" type="button">Ajouter une autre bouteille</button>
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
              handleSubmit();
              dataSubmit();
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
