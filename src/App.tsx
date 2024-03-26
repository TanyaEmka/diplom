import React, { useEffect } from 'react';
import './assets/css/index.scss';

import { Main } from './pages/Main/Main';
import { YMaps } from '@pbe/react-yandex-maps';

import { Route, Routes } from 'react-router';

import { useLoginMutation } from './api/paths/userApi';

function App() {

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    const user = login({
      name: 'user',
      password: 'user',
    });
  }, [])

  return (
    <YMaps query={{ 
      lang: 'en_RU',
      apikey: process.env.GEO_API_KEY,
    }}>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/login" element={
          <span>Login</span>
        } />
      </Routes>
    </YMaps>
  );
}

export default App;
