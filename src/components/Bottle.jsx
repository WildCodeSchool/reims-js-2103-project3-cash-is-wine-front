import React from 'react';
import PropTypes from 'prop-types';

function Bottle({ bottle }) {
  return (
    <div className="container">
      <p>
        Type :
        {' '}
        {bottle.type}
      </p>
      <p>
        Appellation :
        {' '}
        {bottle.appellation}
      </p>
      <p>
        Year :
        {' '}
        {bottle.year}
      </p>
    </div>
  );
}

Bottle.propTypes = {
  bottle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),

};
Bottle.defaultProps = {
  bottle: undefined,
};
export default Bottle;
