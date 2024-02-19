import React from "react";

import './MenuOther.scss';

import { Button } from "../../../components/Button/Button";
import { OtherButton } from "../../../components/OtherButton/OtherButton";

import { setMapMode } from "../../../store/features/app";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export const MenuOther: React.FC = () => {

    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <div className='menu-other'>
            <OtherButton />
            <div className='menu-other-space' ></div>
            {mode === 'AREA' ?
                <Button
                    buttonType='accent'
                    buttonLine='line'
                    onClick={() => { dispatch(setMapMode()); }}
                >
                    Прекратить просмотр
                </Button>
                : <></>
            }    
        </div>
    )
}