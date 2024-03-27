import React, { useEffect } from 'react';
import './assets/css/index.scss';

import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Edit } from './pages/Edit/Edit';
import { YMaps } from '@pbe/react-yandex-maps';

import { Route, Routes } from 'react-router';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { useNavigate } from 'react-router';
import { updateToken } from './store/features/user';

import { cookieParser } from './api/mocks/cookie';

function App() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.user);

  useEffect(() => {
    const cookieInfo = cookieParser(document.cookie);
    if (cookieInfo && cookieInfo.access_token) {
      dispatch(updateToken({
        user: { name: cookieInfo.user_name, status: cookieInfo.user_status },
        accessToken: cookieInfo.access_token,
      }));
    }
  }, [])

  useEffect(() => {
    if (accessToken == '') {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [ accessToken ])

  return (
    <YMaps query={{ 
      lang: 'en_RU',
      apikey: process.env.GEO_API_KEY,
    }}>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </YMaps>
  );
}

export default App;
