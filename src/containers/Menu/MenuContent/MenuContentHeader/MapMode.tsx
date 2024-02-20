import React from "react";

import { Text } from "../../../../components/Text/Text";
import { ShowAllButton } from "../ShowAllButton/ShowAllButton";

import { useAppSelector } from "../../../../store/hooks";

export const MapMode: React.FC = () => {

    const { menuPolygonListVisible } = useAppSelector((state) => state.app);

    const getVisibleAreas = () => {
        return menuPolygonListVisible
            .filter((polygon) => polygon.polygonVisible === true).length;
    }

    return (
        <>
            <Text tag='div' type='h3'>Все области</Text>
            <div className='menu-content-header-tools'>
                <Text tag='div' type='small-text' color='other'>Видимые области: {getVisibleAreas()}</Text>
                <ShowAllButton />
            </div>
        </>
    )
}