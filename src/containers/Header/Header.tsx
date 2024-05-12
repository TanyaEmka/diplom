import React from "react";

import './Header.scss';
import { Label } from "@components/base";
import { ExitButton, SettingButton } from "@components/buttons";

import { MenuButton } from "./MenuButton/MenuButton";
import { ToolBox } from "./ToolBox/ToolBox";
import { SearchBlock } from "./SearchBlock/SearchBlock";

import { useAppSelector } from "@store/hooks";

export const Header: React.FC = () => {

    const map = useAppSelector((state) => state.map);
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <nav className='header box-shadow-bottom'>
            <div className='header-left'>
                <MenuButton size='small' />
                <SearchBlock />
            </div>
            <div className='header-right'>
                <ToolBox>
                    {mode === 'AREA' &&
                        <Label name='Режим просмотра области' labelColor='accent' />
                    }
                    <Label name={'Zoom: ' + map.zoom} labelColor='fill-blue' />
                    <Label name={map.center[0].toFixed(5)} labelColor='blue' />
                    <Label name={map.center[1].toFixed(5)} labelColor='blue' />
                </ToolBox>
                <ToolBox gap={28}>
                    <SettingButton size='small' />
                    <ExitButton size='small' />
                </ToolBox>
            </div>
        </nav>
    )
}