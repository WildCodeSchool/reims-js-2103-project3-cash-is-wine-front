import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { LoginDataProvider } from './contexts/LoginDataContext';
import { WineListProvider } from './contexts/WineListContext';
import SearchBar from './components/Searchbar';
import WineLister from './components/WineLister';

function App() {
  return (
    <LoginDataProvider>
      <WineListProvider>
        <BrowserRouter>
          <Navbar />
          <Header />
          <SearchBar />
          <WineLister />
        </BrowserRouter>
      </WineListProvider>
    </LoginDataProvider>
  );
}

export default App;
