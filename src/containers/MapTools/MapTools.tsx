import React from "react";

import './MapTools.scss';
import { 
    Navigate, 
    ScaleButton, 
    Scale 
} from "@components/onMapComponents";

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