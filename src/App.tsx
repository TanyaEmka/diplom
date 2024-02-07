import React from 'react';
import './assets/css/index.scss';
import './App.css';

import { Main } from './pages/Main/Main';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
  return (
    <YMaps query={{ 
      lang: 'en_RU',
      apikey: '8a02a3f3-5318-46db-b569-db079f86b715',
    }}>      
      <Main />            
    </YMaps>
  );
}

export default App;
