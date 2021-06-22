import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './pages/Routes';
import { LoginDataProvider } from './contexts/LoginDataContext';
import { WineListProvider } from './contexts/WineListContext';
import { SearchBarProvider } from './contexts/SearchBarContext';

function App() {
  return (
    <LoginDataProvider>
      <SearchBarProvider>
        <WineListProvider>
          <BrowserRouter>
            <main>
              <Routes />
            </main>
          </BrowserRouter>
        </WineListProvider>
      </SearchBarProvider>
    </LoginDataProvider>
  );
}

export default App;
