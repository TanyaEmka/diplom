import React, { useState } from "react";

import { Button } from "@components/buttons";
import { EditBox } from "@components/base";

import { useAppSelector, useAppDispatch } from "@store/hooks";
import { setMapMode } from "@store/features/app";
import { 
    useGetPolygonQuery, 
    useUpdatePolygonMutation, 
    useDeletePolygonMutation 
} from "@api/paths/polygonApi";

export const SettingsPage: React.FC = () => {

    const areaId = useAppSelector((state) => state.app.areaId);
    const { data } = useGetPolygonQuery(areaId || 0);
    const updatedPoints = data?.polygon.points
        .map((point) => { return({ x: point[0], y: point[1] })}) || [];

    const [pointArray, setPointArray] = useState(updatedPoints);
    const [patchPolygon] = useUpdatePolygonMutation();
    const [deletePolygon] = useDeletePolygonMutation();

    const dispatch = useAppDispatch();

    const getPointArray = () => {
        return pointArray.map((value) => [value.x, value.y]);
    }

    const saveChanges = () => {
        if (areaId) {
            patchPolygon({ 
                id: areaId, 
                attrs: {
                    points: getPointArray(), 
                }
            });
        }
    }

    const deleteData = () => {
        if (areaId) {
            dispatch(setMapMode());
            deletePolygon({ id: areaId });
        }
    }

    return (
        <>
            <EditBox points={pointArray} setPoints={setPointArray} />
            <Button
                buttonType='blue' buttonSize='small' buttonLine='line'
                onClick={saveChanges}
            >
                Сохранить изменения
            </Button>
            <Button
                buttonType='accent' buttonSize='small' buttonLine='line'
                onClick={deleteData}
            >
                Удалить полигон
            </Button>
        </>
    )
}