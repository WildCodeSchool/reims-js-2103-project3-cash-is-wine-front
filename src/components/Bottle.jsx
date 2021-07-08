import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLoginData } from '../contexts/LoginDataContext';

function Bottle({ bottle }) {
  const { loginData } = useLoginData();
  const [quantity, setQuantity] = useState(bottle.quantity);

  return (
    <div className="bottlesVinotheque">
      <p className="descriptionBottles">
        <div className="Btn-Trash">
          <button
            type="button"
            className="trash"
            onClick={() => {
              const url = `http://localhost:8000/users/${loginData.userId}/bottles/${bottle.id}`;
              axios.delete(url)
                .then(() => true);
            }}
          >
            <FontAwesomeIcon
              icon={faTrash}
              size="lg"
            />
          </button>
        </div>
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
        <button
          type="button"
          onClick={() => {
            const url = `http://localhost:8000/users/${loginData.userId}/bottles/${bottle.id}`;
            axios.put(url, {
              quantity,
            });
          }}
        >
          Sauvegarder
        </button>
      </p>
    </div>
  );
}

Bottle.propTypes = {
  bottle: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    reward: PropTypes.string,
    frontImg: PropTypes.string,
    backImg: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),

};
Bottle.defaultProps = {
  bottle: undefined,
};
export default Bottle;
