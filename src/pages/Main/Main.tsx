import React from "react";

import './Main.scss';
import { Header } from "../../containers/Header/Header";
import { AppMap } from "../../containers/AppMap/AppMap";
import { MapTools } from "../../containers/MapTools/MapTools";
import { Menu } from "../../containers/Menu/Menu";

import { useAppSelector } from "../../store/hooks";

export const Main: React.FC = () => {

    const appStore = useAppSelector((state) => state.app);

    return (
        <div className='main-page'>
            <AppMap />
            <div className='main-page-content'>
                <Header />
                <div className={'main-page-content-menu main-page-content-menu-' + (appStore.menuVisible ? 'show' : 'hidden')}>
                    <Menu />
                </div>
                <div className='page-tools'>
                    <div className='page-tools-map'>
                        <MapTools />
                    </div>
                </div>
            </div>
        </div>
    )
}