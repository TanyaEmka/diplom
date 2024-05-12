import React from "react";

import './AboutPage.scss';

import { Text } from "@components/base";

import { useGetPolygonQuery } from "@api/paths/polygonApi";
import { useAppSelector } from "@store/hooks";
import { PolygonType } from "@api/types";

export const AboutPage: React.FC = () => {

    const areaId = useAppSelector((state) => state.app.areaId);
    const { data = { polygon: {} as PolygonType }, isLoading } = useGetPolygonQuery(areaId || -1);

    return (
        <div className='aboutpage'>
            <Text type='bold-text'>
                Число деревьев: {isLoading ? 'загрузка...' : data.polygon.points.length}
            </Text>
        </div>
    )
}