import React from "react";

import { Text } from "@components/baseComponents";
import { Button } from "@components/buttons";
import { ShowAllButton } from "../ShowAllButton/ShowAllButton";

import { useAppSelector, useAppDispatch } from "@store/hooks";
import { addPolygonMode } from "@store/features/app";

export const MapMode: React.FC = () => {

    const { menuPolygonListVisible } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const getVisibleAreas = () => {
        return menuPolygonListVisible
            .filter((polygon) => polygon.polygonVisible === true).length;
    }

    return (
        <>
            <div className='menu-content-header-tools'>
                <Text tag='div' type='small-text' color='other'>
                    Видимые участки: {getVisibleAreas()}
                </Text>
                <ShowAllButton />
                <Button
                    buttonType='blue'
                    buttonLine='line'
                    buttonSize='small'
                    style={{ width: 'fit-content' }}
                    onClick={() => {
                        dispatch(addPolygonMode());
                    }}
                >
                    Добавить полигон
                </Button>
            </div>
        </>
    )
}