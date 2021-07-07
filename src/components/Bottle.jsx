import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Bottle({ bottle }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bottlesVinotheque">
      <p className="descriptionBottles">
        <div className="bottleimg">
          <img className="imgbottle" src={`http://localhost:8000/uploads/${bottle.frontImg}`} alt={`${bottle.id}recto`} />
          <img className="imgbottle" src={`http://localhost:8000/uploads/${bottle.backImg}`} alt={`${bottle.id}verso`} />
        </div>
        <span>Type :</span>
        {' '}
        {bottle.type}
        <br />
        <span>Appellation :</span>
        {' '}
        {bottle.appellation}
        <br />
        <span>Année :</span>
        {' '}
        {bottle.year}
        <br />
        {' '}
        <span>Récompense :</span>
        {' '}
        {bottle.reward}
        <br />
        <span>Quantité :</span>
        {' '}
        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} id="quantity" name="quantity" min="1" />
        <br />
        <span>Quantité :</span>
        {' '}
        <h2>
          {(bottle.price / 2) * quantity}
          {' '}
          €
        </h2>
        <button type="button" onClick={() => {}}>Sauvegarder</button>
      </p>
    </div>
  );
}

Bottle.propTypes = {
  bottle: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    reward: PropTypes.string,
    frontImg: PropTypes.string,
    backImg: PropTypes.string,
    price: PropTypes.number,
  }),

};
Bottle.defaultProps = {
  bottle: undefined,
};
export default Bottle;
