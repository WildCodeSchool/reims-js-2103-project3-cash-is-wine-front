import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLoginData } from '../contexts/LoginDataContext';

function Bottle({ bottle }) {
  const { loginData } = useLoginData();
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
      </p>
      <div className="Btn-Trash">
        <button
          type="button"
          className="trash"
          onClick={() => {
            const url = `http://localhost:8000/users/${loginData.userId}/bottles/${bottle.id}`;
            axios.delete(url)
              .then((response) => console.log(response.data));
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
    year: PropTypes.string.isRequired,
    reward: PropTypes.string,
    frontImg: PropTypes.string,
    backImg: PropTypes.string,
  }),

};
Bottle.defaultProps = {
  bottle: undefined,
};
export default Bottle;
