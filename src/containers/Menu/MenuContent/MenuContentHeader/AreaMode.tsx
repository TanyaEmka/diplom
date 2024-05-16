import React from "react";

import { SubMenu } from "@components/base";
import { useAppSelector } from "@store/hooks";

export const AreaMode: React.FC = () => {

    const user = useAppSelector((state) => state.user.user);
    const status = user?.status || 'guest';

    const getPaths = () => {
        let paths = [
            { 
                name: 'Об участке', 
                query: { key: 'menu', value: 'about' }
            },
        ];
        if (status === 'admin') {
            paths.push({ 
                name: 'Настройки', 
                query: { key: 'menu', value: 'settings' }
            },);
        }
        return paths;
    }

    return (
        <SubMenu paths={getPaths()}/>
    )
}