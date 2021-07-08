import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLoginData } from '../contexts/LoginDataContext';
import { useWinary } from '../contexts/WinaryContext';

function Bottle({ bottle }) {
  const { loginData } = useLoginData();
  const [quantity, setQuantity] = useState(bottle.quantity);

  const { winary, setWinary } = useWinary();

  console.log(bottle);
  useEffect(() => {
    setQuantity(bottle.quantity);
  }, [bottle.quantity]);

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
        <span className="titlesBottles">Type :</span>
        {' '}
        {bottle.type}
        <br />
        <span className="titlesBottles">Appellation :</span>
        {' '}
        {bottle.appellation}
        <br />
        <span className="titlesBottles">Année :</span>
        {' '}
        {bottle.year}
        <br />
        <span className="titlesBottles">Récompense :</span>
        {' '}
        {bottle.reward}
        <h1 className="titleQuantity">Quantité :</h1>
        <input type="number" className="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} id="quantity" name="quantity" min="1" />
        <p className="resultPrice">
          Prix total :
          {' '}
          <span className="prices">{(bottle.price / 2) * quantity}</span>
          {' '}
          €
        </p>

        <button
          className="saveBtn"
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
      <div className="Btn-Trash">
        <button
          type="button"
          className="trash"
          onClick={() => {
            const url = `http://localhost:8000/users/${loginData.userId}/bottles/${bottle.id}`;
            axios.delete(url)
              .then(() => (
                setWinary(winary.filter((bottleInWinary) => bottleInWinary.id !== bottle.id))
              ));
          }}
        >
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
          />
        </button>
      </div>
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
