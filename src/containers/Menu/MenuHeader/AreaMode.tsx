import React from "react";

import { Text } from "../../../components/Text/Text";

import { useGetPolygonQuery } from "../../../api/paths/polygonApi";

interface AreaModeProps {
    areaId: number,
}

export const AreaMode: React.FC<AreaModeProps> = ({
    areaId,
}) => {

    const { data } = useGetPolygonQuery(areaId);

    return (
        <>
            <Text tag='div' type='h3'>{data?.name || 'Загрузка...'}</Text>
        </>
    )
}