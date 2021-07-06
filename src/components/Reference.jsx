import React from 'react';
import PropTypes from 'prop-types';

function Reference({ reference }) {
  return (
    <div className="bottlesContainer">
      <p>
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
    estate: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),

};
Reference.defaultProps = {
  reference: undefined,
};
export default Reference;
