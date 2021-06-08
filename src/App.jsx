import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './pages/Routes';
import Navbar from './components/Navbar';
import { LoginDataProvider } from './contexts/LoginDataContext';
import SearchBar from './components/Searchbar';
import WineList from './components/WineList';

function App() {
  return (
    <LoginDataProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes />
        </main>
        <WineList />
        <SearchBar />
      </BrowserRouter>
    </LoginDataProvider>
  );
}

export default App;
