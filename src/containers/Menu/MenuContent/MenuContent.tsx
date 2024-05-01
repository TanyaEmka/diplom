import React from "react";

import './MenuContent.scss';

import { Text } from "../../../components/Text/Text";

import { MenuContentHeader } from "./MenuContentHeader/MenuContentHeader";
import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode/AreaMode";
import { AddMode } from "./AddMode";

import { useAppSelector } from "../../../store/hooks";

export const MenuContent: React.FC = () => {

    const { mode, postMode } = useAppSelector((state) => state.app);

    return (
        <div className='menu-content'>
            {postMode === 'BASE' ?
                <>
                <MenuContentHeader />
                {mode === 'MAP' ?
                    <MapMode />
                : mode === 'AREA' ?
                    <AreaMode />
                :
                    <Text color='gray'>Загрузка...</Text>
                }
                </>
            :
            <AddMode />
            }
        </div>
    )
}