import React, { useEffect } from "react";

import { BoolValue } from "../../../../components/BoolValue/BoolValue";

import { useGetPolygonsQuery } from "../../../../api/paths/polygonApi";
import { goToPolygon } from "../../../../store/features/map";
import { changePolygonVisible, updatePolygonList, changePolygonEnterStatus } from "../../../../store/features/app";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";

export const PolygonList: React.FC = () => {

    const dispatch = useAppDispatch();
    const { menuPolygonListVisible } = useAppSelector((state) => state.app);

    const { data = [], isLoading } = useGetPolygonsQuery();

    useEffect(() => {
        if (!isLoading) {
            dispatch(updatePolygonList({
                polygons: [...data],
            }));
        }
    }, [isLoading]);

    const changeEnterStatus = (id: number, value: boolean) => {
        dispatch(changePolygonEnterStatus({
            polygonId: id,
            enterStatus: value
        }));        
    }

    return (
        <>
            { menuPolygonListVisible.map((element, index) => {
                return (
                    <BoolValue 
                        name={element.polygonName} 
                        checked={element.polygonVisible}
                        onChange={() => {
                            dispatch(changePolygonVisible({
                                polygonId: element.polygonId,
                            }));
                        }}
                        onClick={() => { 
                            if (element.polygonVisible) {
                                dispatch(goToPolygon(element.polygonId)); 
                            }
                        }}
                        onMouseEnter={() => { changeEnterStatus(element.polygonId, true); }}
                        onMouseLeave={() => { changeEnterStatus(element.polygonId, false); }}
                        textType='text-help-link'
                        key={index} 
                    />
                )
            }) }
        </>
    )
}