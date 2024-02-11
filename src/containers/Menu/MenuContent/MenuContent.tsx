import React, { useState, useEffect } from "react";

import './MenuContent.scss';
import { Text } from "../../../components/Text/Text";

import { ShowAllButton } from "./ShowAllButton/ShowAllButton";
import { PolygonList } from "./PolygonList/PolygonList";

import { useAppSelector } from "../../../store/hooks";

export const MenuContent: React.FC = () => {

    const { menuPolygonListVisible } = useAppSelector((state) => state.app);

    const getVisibleAreas = () => {
        return menuPolygonListVisible
            .filter((polygon) => polygon.polygonVisible === true).length;
    }

    return (
        <div className='menu-content'>
            <div className='menu-content-header'>
                <Text tag='div' type='h3'>Все области</Text>
                <div className='menu-content-header-tools'>
                    <Text tag='div' type='small-text' color='other'>Видимые области: {getVisibleAreas()}</Text>
                    <ShowAllButton />
                </div>
            </div>
            <div className='menu-content-list'>
                <PolygonList />
            </div>
        </div>
    )
}