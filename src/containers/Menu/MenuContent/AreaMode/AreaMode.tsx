import React from "react";

import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { SettingsPage } from "./Pages/SettingPage/SettingsPage";

import { AreaModeProps } from "@api/types";

import { useAppSelector } from "@store/hooks";
import { getStringParam } from "@store/features/searchParams";

export const AreaMode: React.FC<AreaModeProps> = ({ areaId }) => {

    const { searchParams } = useAppSelector((state) => state.searchParams);
    const user = useAppSelector((state) => state.user.user);
    const status = user?.status || 'guest';
    const mode = getStringParam(searchParams, 'menu');

    return (
        <div className='menu-content-areamode'>
            {mode === 'none' || mode === 'about' ?
            <AboutPage areaId={areaId} />
            : mode === 'settings' && status === 'admin' ?
            <SettingsPage areaId={areaId} />
            : <AboutPage areaId={areaId} />
            }
        </div>
    )
}