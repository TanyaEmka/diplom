import React from "react";

import './Line.scss';

interface LineProps {
    width?: string,
}

export const Line: React.FC<LineProps> = ({
    width='100%'
}) => {
    return (
        <div className='app-line' style={{
            width: width
        }}>
        </div>
    )
}