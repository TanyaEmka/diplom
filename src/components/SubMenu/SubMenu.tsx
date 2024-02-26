import React, { useState } from "react";

import './SubMenu.scss';

import { MenuBlock } from "./MenuBlock/MenuBlock";
import { useNavigate } from "react-router-dom";

type SubMenuElement = {
    name: string,
    url: string,
}

interface SubMenuProps {
    paths: Array<SubMenuElement>,
}

export const SubMenu: React.FC<SubMenuProps> = ({
    paths,
}) => {

    const navigate = useNavigate();
    const [ selectedIndex, setIndex ] = useState(0);

    const onClick = (index: number, url: string) => {
        setIndex(index);
        navigate(url);
    }

    return (
        <div className='sub-menu'>
            {paths.map((path, index) => {
                return (
                    <MenuBlock 
                        key={index}
                        name={path.name}
                        selected={index === selectedIndex}
                        onClick={() => { onClick(index, path.url); }}
                    />
                )
            })}
        </div>
    )
}