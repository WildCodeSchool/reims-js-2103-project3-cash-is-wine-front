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
        Année :
        {' '}
        {bottle.year}
      </p>
      <p>
        Récompense :
        {' '}
        {bottle.reward}
      </p>
    </div>
  );
}

Bottle.propTypes = {
  bottle: PropTypes.shape({
    type: PropTypes.string.isRequired,
    appellation: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    reward: PropTypes.string,
  }),

};
Bottle.defaultProps = {
  bottle: undefined,
};
export default Bottle;
