import React from 'react';
import './assets/css/index.scss';

import { Main } from './pages/Main/Main';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
  return (
    <YMaps query={{ 
      lang: 'en_RU',
      apikey: process.env.GEO_API_KEY,
    }}>      
      <Main />            
    </YMaps>
  );
}

export default App;
