import React from 'react';
import PropTypes from 'prop-types';

function Bottle({ bottle }) {
  return (
    <div className="bottlesContainer">
      <img src={`http://localhost:8000/uploads/${bottle.frontImg}`} alt={`${bottle.id}recto`} />
      <img src={`http://localhost:8000/uploads/${bottle.backImg}`} alt={`${bottle.id}verso`} />
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
