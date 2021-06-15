import React from 'react';
import logoCash from './assets/logociw.png';
import './Home.css';

import Searchbar from '../components/Searchbar';

const Home = () => (
  <>
    <header className="header">
      <img className="cashiswineImgHome" src={logoCash} alt="logo" />
      <Searchbar />
    </header>
  </>
);

export default Home;
