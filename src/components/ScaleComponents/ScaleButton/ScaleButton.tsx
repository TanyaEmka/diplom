import React from "react";

import './ScaleButton.scss';
import inc from '../../../assets/icons/scale/inc.svg';
import dec from '../../../assets/icons/scale/dec.svg';

import { useAppDispatch } from "../../../store/hooks";
import { incrementZoom, decrementZoom } from "../../../store/features/map";

export type ScaleButtonType = 'inc' | 'dec';

interface ScaleButtonProps {
    type: ScaleButtonType,
}

export const ScaleButton: React.FC<ScaleButtonProps> = ({
    type,
}) => {

    const dispatch = useAppDispatch();

    const buttonFunction = (e: any) => {
        if (type === 'inc') {
            dispatch(incrementZoom());
            return;
        }

        dispatch(decrementZoom());
    }

    return (
        <button className='scalebutton' onClick={buttonFunction}>
            {type === 'inc' ?
                <img src={inc} alt='inc' />
                :
                <img src={dec} alt='dec' />
            }
        </button>
    )
}