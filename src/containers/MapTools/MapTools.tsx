import React from "react";

import './MapTools.scss';
import { Navigate } from "../../components/Navigate/Navigate";
import { ScaleButton } from "../../components/ScaleComponents/ScaleButton/ScaleButton";

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
            <ScaleButton type='dec' />
        </div>
    )
}