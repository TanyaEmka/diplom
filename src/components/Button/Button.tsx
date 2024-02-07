import React from "react";

import './Button.scss';
import { Text } from "../Text/Text";

type ButtonType = 'blue' | 'white' | 'accent';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string,
    buttonType?: ButtonType,
}

export const Button: React.FC<ButtonProps> = ({ 
    children='Кнопка',
    buttonType='blue', 
    ...props
}) => {

    const buttonClass = (buttonType + '-button' + ' ' + props.className).trim();

    return (
        <button 
            type='button'
            className={buttonClass}
            {...props}
        >
            <Text color='inherit'>{children}</Text>
        </button>
    );
}