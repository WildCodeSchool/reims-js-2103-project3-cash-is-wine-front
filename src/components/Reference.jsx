import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import './Reference.css';

const toastConfig = {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Reference({ reference }) {
  return (
    <div className="bottlesContainer">
      <p className="bottle-description">
        <div className="Btn-Basket">
          <button
            type="button"
            className="basket"
            onClick={() => { toast.dark('Votre article a été ajouté dans le panier', { ...toastConfig }); }}
          >
            <FontAwesomeIcon
              icon={faCartPlus}
              size="lg"
            />
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </div>
        <img className="imgbottle1" src={`${process.env.REACT_APP_API_URL}/assets/${reference.picture}`} alt={`${reference.id}`} />
        <span className="descriptionText"> Appellation :</span>
        {' '}
        <span className="appellation">{reference.appellation}</span>
        {' '}
        <p className="precision">{reference.precision}</p>
        {' '}
        <p className="reward">{reference.reward}</p>
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
    precision: PropTypes.string.isRequired,
    reward: PropTypes.string.isRequired,
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
