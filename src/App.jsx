import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './pages/Routes';
import Navbar from './components/Navbar';
import { LoginDataProvider } from './contexts/LoginDataContext';

function App() {
  return (
    <LoginDataProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes />
        </main>
      </BrowserRouter>
    </LoginDataProvider>
  );
}

export default App;
