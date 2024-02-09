import React from "react";

import './Menu.scss';
import exit from '../../assets/exit.svg';
import setting from '../../assets/setting.svg';

import { Line } from "../../components/Line/Line";
import { MenuHeader } from "./MenuHeader/MenuHeader";
import { MenuContent } from "./MenuContent/MenuContent";

export const Menu: React.FC = () => {
    return (
        <div className='menu'>
            <MenuHeader />
            <Line />
            <MenuContent />
            <div className='menu-footer'>
                <button>
                    <img src={setting} alt='settings' />
                </button>
                <button>
                    <img src={exit} alt='exit' />
                </button>
            </div>
        </div>
    )
}