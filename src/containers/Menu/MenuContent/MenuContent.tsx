import React from "react";

import './MenuContent.scss';

import { Text } from "../../../components/Text/Text";

import { MenuContentHeader } from "./MenuContentHeader/MenuContentHeader";
import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode/AreaMode";

import { useAppSelector } from "../../../store/hooks";

export const MenuContent: React.FC = () => {

    const { mode } = useAppSelector((state) => state.app);

    return (
        <div className='menu-content'>
            <MenuContentHeader />
            {mode === 'MAP' ?
                <MapMode />
            : mode === 'AREA' ?
                <AreaMode />
            :
                <Text color='gray'>Загрузка...</Text>
            }
        </div>
    )
}