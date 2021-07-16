import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useReferenceList } from '../contexts/ReferenceListContext';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="btnBottle">{text}</NavLink>;

function Form() {
  const { referenceList } = useReferenceList();

  const [estimation, setEstimation] = useState();
  const [appellation, setAppellation] = useState();
  const [color, setColor] = useState();
  const [type, setType] = useState();
  const [year, setYear] = useState();
  const rewardInput = useRef();

  useEffect(() => {
    setColor();
    setType();
    setYear();
    setEstimation();
  }, [appellation]);

  return (
    <div className="formContainer">
      <h1 className="estimateTitle">
        Estimez vos bouteilles en quelques clics !
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
            {[...new Set(referenceList
              .filter((reference) => reference.appellation === appellation)
              .map((ref) => ref.color))]
              .map((oneColor) => (<option>{oneColor}</option>))}
          </select>
        </>
        )}

        {color && (
        <>
          <label className="labelBottle" htmlFor="type">Type</label>
          <select className="inputBottle" onChange={(event) => setType(event.target.value)}>
            <option value="">--Veuillez choisir un type--</option>
            {[...new Set(referenceList
              .filter((reference) => reference.appellation === appellation
                  && reference.color === color)
              .map((ref) => ref.type))]
              .map((onetype) => (<option>{onetype}</option>))}
          </select>
        </>
        )}

        {type && (
        <>
          <label className="labelBottle" htmlFor="year">Millésime</label>
          <select className="inputBottle" onChange={(event) => setYear(event.target.value)}>
            <option value="">--Veuillez choisir un millésime--</option>
            {[...new Set(referenceList
              .filter((reference) => reference.appellation === appellation
                  && reference.color === color
                  && reference.type === type)
              .map((ref) => ref.year))]
              .map((oneYear) => (<option>{oneYear}</option>))}
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
                  && reference.year === parseInt(year, 10),
            )
              .map((ref) => (<option>{ref.reward}</option>))}
          </select>
        </>
        )}
        <div className="Bottleprice" htmlFor="price">
          {estimation && (
          <div>
            <p>
              Prix estimé :
              {' '}
              {estimation}
              {' '}
              €
            </p>
          </div>
          )}
        </div>
      </div>
      <div className="btnEstimateContainer">
        { link('/login', 'Se connecter', 'btnBottle') }
        <button
          className="btnBottle"
          type="button"
          onClick={() => {
            const body = {
              type,
              appellation,
              year,
              reward: rewardInput.current.value,
            };
            const url = `${process.env.REACT_APP_API_URL}/prices?${Object.keys(body).map((key) => `${key}=${body[key]}`).join('&')}`;
            axios.get(url)
              .then((response) => {
                setEstimation(response.data.price / 2);
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
