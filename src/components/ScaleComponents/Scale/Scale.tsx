import React from "react";

import './Scale.scss';

export const Scale: React.FC = () => {
    return (
        <div className='scale'>
            <div className='scale-switch'></div>
            <div className='scale-line'></div>
            <div className='scale-line'></div>
            <div className='scale-line'></div>
            <div className='scale-line'></div>
            <div className='scale-line'></div>
        </div>
    )
}