import React from "react";

import exit from '../../assets/icons/exit.svg';
import { IconButton } from "../IconButton/IconButton";

export const ExitButton: React.FC = () => {
    return (
        <IconButton
            src={exit}
            alt='Выход'
            onClick={() => {}}
        />
    )
}