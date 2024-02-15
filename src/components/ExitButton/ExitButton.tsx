import React from "react";

import exit from '../../assets/icons/exit.svg';
import { IconButton } from "../IconButton/IconButton";

interface ExitButtonProps {
    size?: 'big' | 'small',
}

export const ExitButton: React.FC<ExitButtonProps> = ({
    size='big'
}) => {
    return (
        <IconButton
            size={size}
            src={exit}
            alt='Выход'
            onClick={() => {}}
        />
    )
}