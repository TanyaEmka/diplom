import React from "react";

import './BoolValue.scss';
import { Text } from "../Text/Text";
import { Checkbox } from "../Checkbox/Checkbox";

interface BoolValueProps {
    checked: boolean,
    onClick: (e: any) => void,
    name: string,
    className?: string,
}

export const BoolValue: React.FC<BoolValueProps> = ({
    checked,
    onClick,
    name,
    className='',
}) => {

    return (
        <div className={('boolvalue ' + className).trim()}>
            <Text
                color={checked ? 'base' : 'other'}
                class='boolvalue-text'
            >
                {name}
            </Text>
            <Checkbox 
                checked={checked}
                onClick={onClick}
            />
        </div>
    )
}