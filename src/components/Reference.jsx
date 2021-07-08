import React from 'react';
import PropTypes from 'prop-types';

function Reference({ reference }) {
  return (
    <div className="bottlesContainer">
      <p>
        <img className="imgbottle1" src={`http://localhost:8000/assets/${reference.picture}`} alt={`${reference.id}`} />
        Appellation :
        {' '}
        {reference.appellation}
        Couleur :
        {' '}
        {reference.color}
        Année :
        {' '}
        {reference.year}
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
  }),

};
Reference.defaultProps = {
  reference: undefined,
};
export default Reference;
