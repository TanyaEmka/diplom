import React from "react";

import { Polygon } from "@pbe/react-yandex-maps";
import { PolygonType } from "../../api/types";

import { changePolygonEnterStatus } from "../../store/features/app";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

interface AppPolygonProps {
    polygon: PolygonType,
    onClick: (e: any) => void,
}

export const AppPolygon: React.FC<AppPolygonProps> = ({
    polygon,
    onClick,
}) => {

    const leaveStroke = 3;
    const enterStroke = 5;

    const dispatch = useAppDispatch();
    const polygonEnterStatus = useAppSelector((state) => {
        const index = state.app.menuPolygonListVisible.map((element) => element.polygonId).indexOf(polygon.id);
        if (index !== -1) {
            return state.app.menuPolygonListVisible[index].polygonEnter;
        }
        return leaveStroke;
    });

    const polygonOptions = {
        fillColor: "rgba(164, 85, 201, 0.2)",
        strokeColor: "#A455C9",
        strokeWidth: polygonEnterStatus ? enterStroke : leaveStroke,
        strokeStyle: 'solid',
    }

    const changeEnterStatus = (value: boolean) => {
        dispatch(changePolygonEnterStatus({
            polygonId: polygon.id,
            enterStatus: value
        }));
    }

    return (
        <Polygon
            options={polygonOptions}
            geometry={[polygon.points]}
            properties={{
                hintContent: polygon.name,
            }}
            onClick={onClick}
            onMouseEnter={() => { changeEnterStatus(true); }}
            onMouseLeave={() => { changeEnterStatus(false); }}
        />
    )
}