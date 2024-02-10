import React from "react";

import './Menu.scss';

import { Line } from "../../components/Line/Line";
import { MenuHeader } from "./MenuHeader/MenuHeader";
import { MenuContent } from "./MenuContent/MenuContent";
import { MenuFooter } from "./MenuFooter/MenuFooter";

export const Menu: React.FC = () => {
    return (
        <div className='menu'>
            <MenuHeader />
            <Line />
            <MenuContent />
            <MenuFooter />
        </div>
    )
}