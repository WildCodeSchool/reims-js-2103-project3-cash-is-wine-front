import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import WineLister from '../components/WineLister';
import Searchbar from '../components/Searchbar';
import ReferenceLister from '../components/ReferenceLister';
import Header from './Header';

const Home = () => (
  <>
    <Header />
    <Banner />
    <Searchbar />
    <WineLister />
    <ReferenceLister />
  </>
);

export default Home;
