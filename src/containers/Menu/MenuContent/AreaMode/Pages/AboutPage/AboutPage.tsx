import React from "react";

import './AboutPage.scss';

import { Text } from "@components/base";

import { useGetPolygonQuery } from "@api/paths/polygonApi";
import { PolygonType } from "@api/types";
import { AreaModeProps } from "@api/types";

export const AboutPage: React.FC<AreaModeProps> = ({ areaId }) => {

    const { data = { polygon: {} as PolygonType }, isLoading } = useGetPolygonQuery(areaId);

    return (
        <div className='aboutpage'>
            <Text type='bold-text'>
                Число деревьев: {isLoading ? 'загрузка...' : data.polygon.points.length}
            </Text>
        </div>
    )
}