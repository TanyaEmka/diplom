import React from "react";

import { Text } from "../../../../components/Text/Text";

import { SubMenu } from "../../../../components/SubMenu/SubMenu";
import { TreeList } from "../TreeList/TreeList";
import { ScrollBox } from "../../../ScrollBox/ScrollBox";

import { Routes, Route } from "react-router-dom";
import { TreesPage } from "./Pages/TreesPage";
import { AboutPage } from "./Pages/AboutPage";
import { SettingsPage } from "./Pages/SettingsPage";

import { useAppSelector } from "../../../../store/hooks";

export const AreaMode: React.FC = () => {

    const { areaId } = useAppSelector((state) => state.app);

    return (
        <div className='menu-content-areamode'>
            <Routes>
                <Route path='/' element={<SubMenu 
                    paths={[
                        { name: 'Об участке', url: 'about', },
                        { name: 'Деревья', url: 'trees', },
                        { name: 'Настройки', url: 'settings', },
                    ]}
                />}>
                    <Route index element={<AboutPage />} />
                    <Route path='area/about' element={<AboutPage />} />
                    <Route path='area/trees' element={<TreesPage />} />
                    <Route path='area/settings' element={<SettingsPage />} />
                </Route>
            </Routes>
        </div>
    )
}