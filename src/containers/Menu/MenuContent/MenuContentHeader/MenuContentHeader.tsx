import React from "react";

import './MenuContentHeader.scss';

import { Text } from "../../../../components/Text/Text";

import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode";

import { useAppSelector } from "../../../../store/hooks";

export const MenuContentHeader: React.FC = () => {

    const { mode, areaId } = useAppSelector((state) => state.app);

    return (
        <div className='menu-content-header'>
            {mode === 'MAP' ?
                <MapMode />
            : mode === 'AREA' && areaId ?
                <AreaMode areaId={areaId} />
            :
                <Text>Загрузка...</Text>
            }
        </div>
    )
}