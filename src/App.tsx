import React from 'react';
import './assets/css/index.scss';

import { Main } from './pages/Main/Main';
import { YMaps } from '@pbe/react-yandex-maps';

import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <YMaps query={{ 
          lang: 'en_RU',
          apikey: process.env.GEO_API_KEY,
        }}>      
          <Main />            
        </YMaps>
      } />
    </Routes>
  );
}

export default App;
