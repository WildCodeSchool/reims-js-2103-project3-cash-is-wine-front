import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import logoCash from './assets/logociw.png';

const Header = () => (
  <div className="container">
    <nav className="navBar"><Navbar /></nav>
    <img className="cashiswineImgHome" src={logoCash} alt="logo" />
  </div>
);

export default Header;
