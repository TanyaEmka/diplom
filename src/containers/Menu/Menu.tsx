import React from "react";

import './Menu.scss';

import { Line } from "../../components/Line/Line";
import { MenuOther } from "./MenuOther/MenuOther";
import { MenuHeader } from "./MenuHeader/MenuHeader";
import { MenuContent } from "./MenuContent/MenuContent";
import { MenuFooter } from "./MenuFooter/MenuFooter";

import { useAppSelector } from "../../store/hooks";

export const Menu: React.FC = () => {

    const { mode } = useAppSelector(state => state.app);

    return (
        <div className='menu box-shadow-right'>
            <MenuOther />
            <MenuHeader />
            {mode === 'MAP' ?
                <Line />
            : 
                <></>
            }
            <MenuContent />
            <MenuFooter />
        </div>
    )
}