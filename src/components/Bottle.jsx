import React from 'react';
import PropTypes from 'prop-types';

function Bottle({ bottle }) {
  return (
    <div className="container">
      <p>
        Name :
        {' '}
        {bottle.name}
      </p>
      <p>
        User :
        {' '}
        {bottle.user_id}
      </p>
    </div>
  );
}

Bottle.propTypes = {
  bottle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    user_id: PropTypes.string.isRequired,
  }),

};
Bottle.defaultProps = {
  bottle: undefined,
};
export default Bottle;
