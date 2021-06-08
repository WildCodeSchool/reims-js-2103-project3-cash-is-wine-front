import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { LoginDataProvider } from './contexts/LoginDataContext';
import SearchBar from './components/Searchbar';
import WineList from './components/WineList';

function App() {
  return (
    <LoginDataProvider>
      <BrowserRouter>
        <Navbar />
        <Header />
        <WineList />
        <SearchBar />
      </BrowserRouter>
    </LoginDataProvider>
  );
}

export default App;
