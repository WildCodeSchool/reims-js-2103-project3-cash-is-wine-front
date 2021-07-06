import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import logoCash from './assets/logocash.png';

const Header = () => (
  <div className="container">
    <Navbar />
    <img className="cashiswineImgHome" src={logoCash} alt="logo" />
  </div>
);

export default Header;
