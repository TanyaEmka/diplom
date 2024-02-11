import React, { useState } from "react";

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

    const [ strokeWidth, setStrokeWidth ] = useState(3);

    const polygonOptions = {
        fillColor: "rgba(164, 85, 201, 0.2)",
        strokeColor: "#A455C9",
        strokeWidth: strokeWidth,
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
            onMouseEnter={() => {
                setStrokeWidth(5);
            }}
            onMouseLeave={() => {
                setStrokeWidth(3);
            }}
        />
    )
}