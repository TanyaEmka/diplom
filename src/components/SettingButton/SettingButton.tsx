import React from "react";

import setting from '../../assets/icons/setting.svg';
import { IconButton } from "../IconButton/IconButton";

interface SettingButtonProps {
    size?: 'big' | 'small',
}

export const SettingButton: React.FC<SettingButtonProps> = ({
    size='big'
}) => {
    return (
        <IconButton
            size={size} 
            src={setting}
            alt='Настройки'
            onClick={() => {}}
        />
    )
}