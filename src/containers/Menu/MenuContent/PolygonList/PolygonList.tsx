import React, { useEffect } from "react";

import { BoolValue } from "../../../../components/BoolValue/BoolValue";

import { useGetPolygonsQuery } from "../../../../api/paths/polygonApi";
import { changePolygonVisible, updatePolygonList } from "../../../../store/features/app";
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

    return (
        <>
            { menuPolygonListVisible.map((element, index) => {
                return (
                    <BoolValue 
                        name={element.polygonName} 
                        checked={element.polygonvisible}
                        onChange={() => {
                            dispatch(changePolygonVisible({
                                polygonId: element.polygonId,
                            }));
                        }}
                        key={index} 
                    />
                )
            }) }
        </>
    )
}