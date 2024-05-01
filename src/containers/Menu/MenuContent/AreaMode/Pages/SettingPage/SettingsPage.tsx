import React, { useState } from "react";

import { Button } from "../../../../../../components/Button/Button";
import { EditBox } from "./EditBox/EditBox";

import { useAppSelector, useAppDispatch } from "../../../../../../store/hooks";
import { setMapMode } from "../../../../../../store/features/app";
import { 
    useGetPolygonQuery, 
    useUpdatePolygonMutation, 
    useDeletePolygonMutation 
} from "../../../../../../api/paths/polygonApi";

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

    return (
        <>
            <EditBox points={pointArray} setPoints={setPointArray} />
            <Button
                buttonType='blue' buttonSize='small' buttonLine='line'
                style={{ width: 'fit-content' }}
                onClick={() => { 
                    if (areaId) {
                        patchPolygon({ id: areaId, attrs: {
                            points: getPointArray(),
                        }});
                    }
                }}
            >
                Сохранить изменения
            </Button>
            <Button
                buttonType='accent'
                buttonSize='small'
                buttonLine='line'
                style={{ width: 'fit-content' }}
                onClick={() => {
                    if (areaId) {
                        dispatch(setMapMode());
                        deletePolygon({ id: areaId });
                    }
                }}
            >
                Удалить полигон
            </Button>
        </>
    )
}