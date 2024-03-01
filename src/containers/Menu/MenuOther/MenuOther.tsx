import React from "react";

import './MenuOther.scss';

import { Button } from "../../../components/Button/Button";

import { setMapMode } from "../../../store/features/app";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";

export const MenuOther: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <div className='menu-other'>
            <div className='menu-other-space' ></div>
            {mode === 'AREA' ?
                <Button
                    buttonType='accent'
                    buttonLine='line'
                    onClick={() => { 
                        navigate('/');
                        dispatch(setMapMode()); 
                    }}
                    style={{
                        zIndex: 110,
                    }}
                >
                    Прекратить просмотр
                </Button>
                : <></>
            }    
        </div>
    )
}