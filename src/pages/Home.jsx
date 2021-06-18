import React from 'react';
import './Home.css';
import Banner from '../components/Banner';
import ReferenceLister from '../components/ReferenceLister';
import Header from './Header';

const Home = () => (
  <>
    <Header />
    <Banner />
    <ReferenceLister />
  </>
);

export default Home;
