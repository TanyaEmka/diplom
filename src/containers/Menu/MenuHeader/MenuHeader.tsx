import React from "react";

import './MenuHeader.scss';

import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode";

import { useAppSelector } from "../../../store/hooks";

export const MenuHeader: React.FC = () => {

    const { mode, areaId } = useAppSelector((state) => state.app);

    return (
        <div className='menu-header'>
            { mode === 'MAP' ?
                <MapMode /> :
            mode === 'AREA' && areaId ?
                <AreaMode areaId={areaId} />
            : <></>
            }
        </div>
    )
}