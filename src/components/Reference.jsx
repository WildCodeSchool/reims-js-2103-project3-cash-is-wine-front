import React from 'react';
import PropTypes from 'prop-types';
import './Reference.css';

function Reference({ reference }) {
  return (
    <div className="bottlesContainer">
      <p className="bottle-description">
        <img className="imgbottle1" src={`http://localhost:8000/assets/${reference.picture}`} alt={`${reference.id}`} />
        <span className="descriptionText"> Appellation :</span>
        {' '}
        <span className="appellation">{reference.appellation}</span>
        <br />
        <section>
          <span className="descriptionText">Couleur :</span>
          <span className="color">{reference.color}</span>
          {' '}
          -
          {' '}
          <span className="descriptionText">Année :</span>
          <span className="year">{reference.year}</span>
        </section>
        <section>
          Prix :
          {' '}
          <span className="priceBottles">
            {reference.price}
            €
          </span>
        </section>
      </p>
    </div>
  );
}

Reference.propTypes = {
  reference: PropTypes.shape({
    id: PropTypes.number.isRequired,
    estate: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    picture: PropTypes.string,
    color: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),

};
Reference.defaultProps = {
  reference: undefined,
};
export default Reference;
