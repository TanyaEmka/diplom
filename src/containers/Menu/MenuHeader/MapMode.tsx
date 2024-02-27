import React from "react";

import { Text } from "../../../components/Text/Text";

import { useGetPolygonsQuery } from "../../../api/paths/polygonApi";

export const MapMode: React.FC = () => {

    const { data = [] } = useGetPolygonsQuery();

    return (
        <>
            <Text tag='div' type='h3'>Все участки</Text>
            <Text tag='div' type='h1'>{data.length}</Text>
        </>
    )
}