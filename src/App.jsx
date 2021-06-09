import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './pages/Routes';
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
          <main>
            <Routes />
          </main>
          <SearchBar />
          <WineLister />
        </BrowserRouter>
      </WineListProvider>
    </LoginDataProvider>
  );
}

export default App;
