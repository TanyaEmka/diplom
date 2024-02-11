import React from "react";

import './BoolValue.scss';
import { Text } from "../Text/Text";
import { Checkbox } from "../Checkbox/Checkbox";

export type BoolValueType = 'text' | 'small-text';

interface BoolValueProps {
    checked: boolean,
    onChange: (e: any) => void,
    name: string,
    className?: string,
    textType?: BoolValueType,
}

export const BoolValue: React.FC<BoolValueProps> = ({
    checked,
    onChange,
    name,
    className='',
    textType='text'
}) => {

    return (
        <div className={('boolvalue ' + className + ((textType == 'small-text') ? 'boolvalue-small' : 'boolvalue-base')).trim()}>
            <Text
                color={checked ? 'base' : 'other'}
                type={textType}
                class='boolvalue-text'
            >
                {name}
            </Text>
            <Checkbox 
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}