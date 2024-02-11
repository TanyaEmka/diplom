import React from "react";

import { Polygon } from "@pbe/react-yandex-maps";
import { PolygonType } from "../../api/types";

interface AppPolygonProps {
    polygon: PolygonType,
    onClick: (e: any) => void,
    strokeStyle?: string,
}

export const AppPolygon: React.FC<AppPolygonProps> = ({
    polygon,
    onClick,
    strokeStyle='solid',
}) => {

    const polygonOptions = {
        fillColor: "rgba(164, 85, 201, 0.2)",
        strokeColor: "#A455C9",
        strokeWidth: 5,
        strokeStyle: strokeStyle,
    }

    return (
        <Polygon
            options={polygonOptions}
            className='app-polygon'
            geometry={[polygon.points]}
            properties={{
                hintContent: polygon.name,
            }}
            onClick={onClick}
        />
    )
}