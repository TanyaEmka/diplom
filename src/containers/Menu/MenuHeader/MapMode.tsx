import React from "react";

import { Text } from "../../../components/Text/Text";

import { useGetPolygonsQuery } from "../../../api/paths/polygonApi";

export const MapMode: React.FC = () => {

    const { data = [] } = useGetPolygonsQuery();

    return (
        <>
            <Text tag='div'>Всего областей на карте</Text>
            <Text tag='div' type='h1'>{data.length}</Text>
        </>
    )
}