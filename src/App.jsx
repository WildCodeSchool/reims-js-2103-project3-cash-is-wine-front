import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './pages/Routes';
import Navbar from './components/Navbar';
import { LoginDataProvider } from './contexts/LoginDataContext';
import { WineListProvider } from './contexts/WineListContext';

function App() {
  return (
    <LoginDataProvider>
      <WineListProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes />
          </main>
        </BrowserRouter>
      </WineListProvider>
    </LoginDataProvider>
  );
}

export default App;
