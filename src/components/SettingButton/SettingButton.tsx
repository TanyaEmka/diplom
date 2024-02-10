import React from "react";

import setting from '../../assets/icons/setting.svg';
import { IconButton } from "../IconButton/IconButton";

export const SettingButton: React.FC = () => {
    return (
        <IconButton
            src={setting}
            alt='Настройки'
            onClick={() => {}}
        />
    )
}