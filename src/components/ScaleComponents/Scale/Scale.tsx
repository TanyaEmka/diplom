import React from "react";

import './Scale.scss';
import { Line } from "../../Line/Line";

export const Scale: React.FC = () => {
    return (
        <div className='scale'>
            <div className='scale-switch'></div>
            {[0, 1, 2, 3, 4].map((element) => {
                return (
                    <Line width='66%' key={element} />
                )
            })}
        </div>
    )
}