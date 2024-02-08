import React from "react";

import './Header.scss';
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Text/Text";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { changeMenuVisible } from "../../store/features/app";

import menu from '../../assets/icons/header/menu.svg';

export const Header: React.FC = () => {

    const map = useAppSelector((state) => state.map);
    const dispatch = useAppDispatch();

    return (
        <nav className='header'>
            <div className='header-left'>
                <button onClick={() => { dispatch(changeMenuVisible()); }}>
                    <img src={menu} alt='menu' />
                </button>
                <Input inputType='search' placeholder='Поиск' />
            </div>
            <div className='header-map-info'>
                <Text color='other'>Zoom: {map.zoom}, {map.center[0].toFixed(5)}, {map.center[1].toFixed(5)}</Text>
            </div>
        </nav>
    )
}