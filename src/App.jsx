import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './pages/Routes';
import { LoginDataProvider } from './contexts/LoginDataContext';
import { ReferenceListProvider } from './contexts/ReferenceListContext';
import { WinaryProvider } from './contexts/WinaryContext';
import { SearchBarProvider } from './contexts/SearchBarContext';

function App() {
  return (
    <LoginDataProvider>
      <SearchBarProvider>
        <ReferenceListProvider>
          <WinaryProvider>
            <BrowserRouter>
              <main>
                <Routes />
              </main>
            </BrowserRouter>
          </WinaryProvider>
        </ReferenceListProvider>
      </SearchBarProvider>
    </LoginDataProvider>
  );
}

export default App;
