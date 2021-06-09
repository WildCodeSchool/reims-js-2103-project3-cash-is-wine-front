import React from 'react';
import PropTypes from 'prop-types';

function WineBottle({ wine }) {
  return (
    <div className="container">
      <p>
        Estate :
        {wine.estate}
      </p>
      <p>
        Appellation :
        {wine.appellation}
      </p>
      <p>
        Color :
        {wine.color}
      </p>
      <p>
        Year :
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
