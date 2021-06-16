import React from 'react';
import './Home.css';
import Searchbar from '../components/Searchbar';
import Navbar from '../components/Navbar';
import logoCash from './assets/logociw.png';

const Header = () => (
  <>
    <nav className="navBar">
      <img className="cashiswineImgHome" src={logoCash} alt="logo" />
      <Searchbar />
      <Navbar />
    </nav>
  </>
);

export default Header;
