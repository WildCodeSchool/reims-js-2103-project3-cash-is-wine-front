import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import WineLister from '../components/WineLister';
import Header from './Header';

const Home = () => (
  <>
    <Header />
    <Banner />
    <WineLister />
  </>
);

export default Home;
