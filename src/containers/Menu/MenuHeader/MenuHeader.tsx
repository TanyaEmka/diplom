import React from "react";

import './MenuHeader.scss';
import { Text } from "../../../components/Text/Text";

import { useGetPolygonsQuery } from "../../../api/paths/polygonApi";

export const MenuHeader: React.FC = () => {

    const { data = [] } = useGetPolygonsQuery();

    return (
        <div className='menu-header'>
            <Text tag='div'>Всего областей на карте</Text>
            <Text tag='div' type='h1'>{data.length}</Text>
        </div>
    )
}