import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { LoginDataProvider } from './contexts/LoginDataContext';

function App() {
  return (
    <LoginDataProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
      </BrowserRouter>
    </LoginDataProvider>
  );
}

export default App;
