import React from "react";

import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { SettingsPage } from "./Pages/SettingPage/SettingsPage";
import { AreaModeProps } from "@api/types";

export const AreaMode: React.FC<AreaModeProps> = ({ areaId }) => {

    return (
        <div className='menu-content-areamode'>
            <Routes>
                <Route path='/' element={<AboutPage areaId={areaId} />} />
                <Route path='area/about' element={<AboutPage areaId={areaId} />} />
                <Route path='area/settings' element={<SettingsPage areaId={areaId} />} />
            </Routes>
        </div>
    )
}