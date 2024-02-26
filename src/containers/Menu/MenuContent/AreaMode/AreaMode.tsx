import React from "react";

import { Routes, Route } from "react-router-dom";

import { TreesPage } from "./Pages/TreesPage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { SettingsPage } from "./Pages/SettingsPage";

export const AreaMode: React.FC = () => {

    return (
        <div className='menu-content-areamode'>
            <Routes>
                <Route path='/' element={<AboutPage />} />
                <Route path='area/about' element={<AboutPage />} />
                <Route path='area/trees' element={<TreesPage />} />
                <Route path='area/settings' element={<SettingsPage />} />
            </Routes>
        </div>
    )
}