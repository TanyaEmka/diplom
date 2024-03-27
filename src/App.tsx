import React, { useEffect } from 'react';
import './assets/css/index.scss';

import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { YMaps } from '@pbe/react-yandex-maps';

import { Route, Routes } from 'react-router';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { useLoginMutation } from './api/paths/userApi';
import { useNavigate } from 'react-router';

function App() {

  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.user);

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (accessToken == '') {
      navigate('/login');
    }
  }, [])

  return (
    <YMaps query={{ 
      lang: 'en_RU',
      apikey: process.env.GEO_API_KEY,
    }}>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </YMaps>
  );
}

export default App;
