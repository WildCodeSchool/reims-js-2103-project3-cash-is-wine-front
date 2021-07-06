import React from 'react';
import PropTypes from 'prop-types';

function Bottle({ bottle }) {
  return (
    <div className="bottlesVinotheque">
      <p className="descriptionBottles">
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
