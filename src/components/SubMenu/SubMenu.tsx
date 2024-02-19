import React, { useState } from "react";

import './SubMenu.scss';

import { MenuBlock } from "./MenuBlock/MenuBlock";

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

    const [ selectedIndex, setIndex ] = useState(0);

    return (
        <div className='sub-menu'>
            {paths.map((path, index) => {
                return (
                    <MenuBlock 
                        key={index}
                        name={path.name}
                        selected={index === selectedIndex}
                        onClick={() => { setIndex(index); }}
                    />
                )
            })}
        </div>
    )
}