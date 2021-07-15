import React, { useRef, useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import ShowWinary from '../components/ShowWinary';
import { useLoginData } from '../contexts/LoginDataContext';
import { useWinary } from '../contexts/WinaryContext';
import { useReferenceList } from '../contexts/ReferenceListContext';
import './Profile.css';

const link = (path, text, dcButton) => (
  <div className="closeButton">
    <NavLink
      to={path}
      exact
      activeClassName="active"
      className={dcButton ?? 'link'}
    >
      {text}
    </NavLink>
  </div>
);

function Login() {
  const { loginData } = useLoginData();
  const { winary, setWinary } = useWinary();
  const { referenceList } = useReferenceList();

  if (loginData == null) {
    return <Redirect to="/login" />;
  }

  const [bottleFrontFile, setBottleFrontFile] = useState();
  const [bottleBackFile, setBottleBackFile] = useState();

  const [appellation, setAppellation] = useState();
  const [color, setColor] = useState();
  const [type, setType] = useState();
  const [year, setYear] = useState();
  const rewardInput = useRef();

  const changeFront = (e) => {
    setBottleFrontFile(e.target.files[0]);
  };

  const changeBack = (e) => {
    setBottleBackFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    let imageFront;
    let imageBack;
    const formData = new FormData();
    formData.append('bottleFront', bottleFrontFile);
    formData.append('bottleBack', bottleBackFile);
    const uploadUrl = `${process.env.REACT_APP_API_URL}/upload`;
    const bottleUrl = `${process.env.REACT_APP_API_URL}/users/${loginData.userId}/bottles`;
    axios.post(uploadUrl, formData)
      .then((response) => {
        if (response.status === 500) {
          alert('hello');
        }
        if (response.data.imageFront != null) {
          console.log(response);
          imageFront = response.data.imageFront.originalname;
        }
        if (response.data.imageBack != null) {
          console.log(response);
          imageBack = response.data.imageBack.originalname;
        }
        axios.post(bottleUrl, {
          type,
          appellation,
          year,
          reward: rewardInput.current.value,
          frontImg: imageFront,
          backImg: imageBack,
          quantity: 1,
        })
          .then((res) => {
            setWinary((previousWinary) => ([res.data, ...previousWinary]));
          });
      });
  };

  return (
    <>
      { link('/logout', 'Déconnexion', 'dcButton') }

      <div className="formContainer">
        <h1 className="titleWinary">
          Vinothèque de
          {' '}
          {loginData.email}
        </h1>
        <div className="bottleForm">
          {referenceList && (
            <>
              <label className="labelBottle" htmlFor="appellation">Appellation</label>
              <select className="inputBottle" value={appellation} onChange={(event) => setAppellation(event.target.value)}>
                <option value="">--Veuillez choisir une appellation--</option>
                {[...new Set(referenceList.map((ref) => ref.appellation))].map(
                  (appell) => (<option>{appell}</option>),
                )}
              </select>
            </>
          )}

          {appellation && (
            <>
              <label className="labelBottle" htmlFor="type">Couleur</label>
              <select className="inputBottle" value={color} onChange={(event) => setColor(event.target.value)}>
                <option value="">--Veuillez choisir une couleur--</option>
                {referenceList.filter(
                  (reference) => reference.appellation === appellation,
                )
                  .map((ref) => (<option value={`${ref.color}`}>{ref.color}</option>))}
              </select>
            </>
          )}

          {color && (
            <>
              <label className="labelBottle" htmlFor="type">Type</label>
              <select className="inputBottle" onChange={(event) => setType(event.target.value)}>
                <option value="">--Veuillez choisir un type--</option>
                {referenceList.filter(
                  (reference) => reference.appellation === appellation && reference.color === color,
                )
                  .map((ref) => (<option value={`${ref.type}`}>{ref.type}</option>))}
              </select>
            </>
          )}

          {type && (
            <>
              <label className="labelBottle" htmlFor="year">Millésime</label>
              <select className="inputBottle" onChange={(event) => setYear(event.target.value)}>
                <option value="">--Veuillez choisir un millésime--</option>
                {referenceList.filter(
                  (reference) => reference.appellation === appellation
              && reference.color === color
              && reference.type === type,
                )
                  .map((ref) => (<option value={`${ref.year}`}>{ref.year}</option>))}
              </select>
            </>
          )}

          {year && (
            <>
              <label className="labelBottle" htmlFor="medal">
                Récompense/Médaille
              </label>
              <select className="inputBottle" ref={rewardInput}>
                <option value="">--Veuillez choisir une récompense--</option>
                {referenceList.filter(
                  (reference) => reference.appellation === appellation
            && reference.color === color
            && reference.type === type
            && reference.year === year,
                )
                  .map((ref) => (<option value={`${ref.reward}`}>{ref.reward}</option>))}
              </select>
            </>
          )}
        </div>
        <div className="etiquetteContainer">
          <label className="labelImage" htmlFor="labelRecto">Etiquette</label>
          <input className="inputImage" type="file" id="labelRecto" name="fileFront" placeholder="Ajoutez votre image" onChange={changeFront} />
          <div className="divtruc">
            <label className="labelImage" htmlFor="labelVerso">Contre etiquette</label>
            <input className="inputImage" type="file" id="labelVerso" name="fileBack" placeholder="Ajoutez votre image" onChange={changeBack} />
          </div>
        </div>
        <div className="btnContainer">
          <button
            className="btnBottle"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Ajouter à la vinothèque
          </button>
        </div>
      </div>
      <section className="bottleCountContainer" htmlFor="bottleCount">
        <h1 className="bottleCount">
          {' '}
          Vous possédez
          {'  '}
          {winary.reduce((acc, bottle) => acc + bottle.quantity, 0)}
          {'  '}
          bouteilles
        </h1>
      </section>
      <ShowWinary />
    </>
  );
}

export default Login;
