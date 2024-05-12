import React from "react";

import './MenuContent.scss';

import { MenuContentHeader } from "./MenuContentHeader/MenuContentHeader";
import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode/AreaMode";
import { AddMode } from "./AddMode";

import { useAppSelector } from "@store/hooks";
import { ManyModesProps } from "@api/types";

export const MenuContent: React.FC<ManyModesProps> = ({ areaId }) => {

    const { postMode } = useAppSelector((state) => state.app);

    return (
        <div className='menu-content'>
            {postMode === 'BASE' ?
                <>
                <MenuContentHeader areaId={areaId} />
                {!areaId ?
                <MapMode />
                :
                <AreaMode areaId={areaId} />
                }
                </>
            :
            <AddMode />
            }
        </div>
    )
}