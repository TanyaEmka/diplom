import React, { useState } from "react";

import { Text } from "../../../components/Text/Text";
import { Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";

interface EditMenuProps {
    ways: Array<{
        name: string,
        path: string,
    }>
}

export const EditMenu: React.FC<EditMenuProps> = ({ ways }) => {

    const navigate = useNavigate();
    const [ selected, setSelected ] = useState(-1);

    return(
        <div className='edit-menu'>
            {ways.map((way, index) => {
                return (
                    <Text
                        type='text-help-link'
                        color={selected == index ? 'link' : 'base'}
                        onClick={() => { 
                            setSelected(index);
                            navigate(way.path);
                        }}
                    >
                        {way.name}
                    </Text>
                )
            })}
        </div>
    )
}