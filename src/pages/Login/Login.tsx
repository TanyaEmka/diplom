import React, { useState } from "react";

import './Login.scss';

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";

import { useNavigate } from "react-router";
import { useLoginMutation } from "../../api/paths/userApi";
import { useAppDispatch } from "../../store/hooks";
import { updateToken } from "../../store/features/user";

export const Login: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ login ] = useLoginMutation();

    const loginFunction = (nameString: string, passwordString: string) => {
        login({
            name: nameString,
            password: passwordString
        })
        .then((res: any) => {
            if (res.status !== 400) {
                return res.data;
            } else {
                throw new Error(res.error.data.errors.join(' '));
            }
        })
        .then((data: any) => {
            dispatch(updateToken({
                user: data.user,
                accessToken: data.access_token,
            }));
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='login-page'>
            <Text type='h1'>Вход</Text>
            <form action='login-action' method='post'>
                <Input 
                    placeholder='Логин' 
                    inputType='base'
                    value={name}
                    onChange={(e: any) => {
                        setName(e.target.value);
                    }}
                />
                <Input 
                    placeholder='Пароль' 
                    inputType='password'
                    value={password}
                    onChange={(e: any) => {
                        setPassword(e.target.value);
                    }} 
                />
                <Button 
                    buttonType='blue'
                    onClick={() => { loginFunction(name, password) }}
                >
                    Войти
                </Button>
                <Text 
                    tag='div'
                    type='text-help-link'
                    color='link' 
                    onClick={() => { loginFunction('user', 'user') }}
                >
                    Продолжить без авторизации
                </Text>
            </form>
        </div>
    )
}