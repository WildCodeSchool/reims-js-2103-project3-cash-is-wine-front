import React from 'react';
import PropTypes from 'prop-types';

function WineBottle({ wine }) {
  return (
    <div className="container">
      <p>
        Domaine :
        {' '}
        {wine.estate}
      </p>
      <p>
        Appellation :
        {' '}
        {wine.appellation}
      </p>
      <p>
        Couleur :
        {' '}
        {wine.color}
      </p>
      <p>
        Année :
        {' '}
        {wine.year}
      </p>
    </div>
  );
}

WineBottle.propTypes = {
  wine: PropTypes.shape({
    estate: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),

};
WineBottle.defaultProps = {
  wine: undefined,
};
export default WineBottle;
