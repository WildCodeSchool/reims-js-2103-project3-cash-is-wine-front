import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import WineLister from '../components/WineLister';
import Header from './Header';

const Home = () => (
  <>
    <div className="home">
      <Header />
      <Banner />
      <WineLister />
    </div>
  </>
);

export default Home;
