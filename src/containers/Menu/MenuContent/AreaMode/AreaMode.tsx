import React from "react";

import { Routes, Route } from "react-router-dom";

import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { SettingsPage } from "./Pages/SettingPage/SettingsPage";

export const AreaMode: React.FC = () => {

    return (
        <div className='menu-content-areamode'>
            <Routes>
                <Route path='/' element={<AboutPage />} />
                <Route path='area/about' element={<AboutPage />} />
                <Route path='area/settings' element={<SettingsPage />} />
            </Routes>
        </div>
    )
}