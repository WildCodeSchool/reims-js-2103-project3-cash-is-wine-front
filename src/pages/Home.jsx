import React from 'react';
import logoCash from './assets/logociw.png';
import './Home.css';
import Searchbar from '../components/Searchbar';

const Home = () => (
  <>
    <header className="header">
      <img className="cashiswineImgHome" src={logoCash} alt="logo" />
      <Searchbar />
      <div className="background">
        <h1>
          {' '}
          TROUVEZ DES VINS,
          <br />
          {' '}
          À MATURITÉ ET ACCESSIBLES.
        </h1>
      </div>
    </header>
    <WineLister />
    <Searchbar />
  </>
);

export default Home;
