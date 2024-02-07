import React from "react";

import './MapTools.scss';
import { Navigate } from "../../components/Navigate/Navigate";
import { ScaleButton } from "../../components/ScaleComponents/ScaleButton/ScaleButton";
import { Scale } from "../../components/ScaleComponents/Scale/Scale";

export const MapTools: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    ...props
}) => {
    return (
        <div 
            className={('map-tools ' + props.className).trim()}
            {...props}
        >
            <Navigate />
            <ScaleButton type='inc' />
            <Scale />
            <ScaleButton type='dec' />
        </div>
    )
}