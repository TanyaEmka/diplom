import React from "react";

import './Menu.scss';
import exit from '../../assets/exit.svg';
import setting from '../../assets/setting.svg';

export const Menu: React.FC = () => {
    return (
        <div className='menu'>
            <div className='menu-header'>

            </div>
            <div className='menu-line'>

            </div>
            <div className='menu-content'>

            </div>
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