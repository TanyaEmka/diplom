import React from "react";

import './MenuBlock.scss';

import { Text } from "../../Text/Text";
import { Line } from "../../Line/Line";

interface MenuBlockProps {
    name: string,
    selected: boolean,
    onClick: (e: any) => void,
}

export const MenuBlock: React.FC<MenuBlockProps> = ({
    name,
    selected,
    onClick
}) => {
    return (
        <div className='menublock'>
            <Text>{name}</Text>
            <Line />
        </div>
    )
}