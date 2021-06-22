import React from 'react';

function Form() {
  return (
    <div className="formContainer">
      <h1>
        Estimez vos bouteilles en quelques clics !!!
      </h1>
      <div className="bottleForm">
        <label className="labelBottle" htmlFor="type">Type</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="Sec" required />
        <label className="labelBottle" htmlFor="appellation">Appellation</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="Chinon" required />
        <label className="labelBottle" htmlFor="year">Millésime</label>
        <input className="inputBottle" type="text" id="text" name="text" placeholder="2005" required />
        <label className="labelBottle" htmlFor="medal">
          Récompense/Médaille
        </label>
        <select name="labelBottle">
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
        <button className="btnBottle" type="submit">Estimation</button>
      </div>
    </div>
  );
}

export default Form;
