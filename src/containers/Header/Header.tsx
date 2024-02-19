import React from "react";

import './Header.scss';
import { Input } from "../../components/Input/Input";
import { Label } from "../../components/Label/Label";
import { ExitButton } from "../../components/ExitButton/ExitButton";
import { SettingButton } from "../../components/SettingButton/SettingButton";

import { MenuButton } from "./MenuButton/MenuButton";
import { ToolBox } from "./ToolBox/ToolBox";

import { useAppSelector } from "../../store/hooks";

export const Header: React.FC = () => {

    const map = useAppSelector((state) => state.map);
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <nav className='header'>
            <div className='header-left'>
                <MenuButton size='small' />
                <Input inputType='search' placeholder='Поиск' />
            </div>
            <div className='header-right'>
                <ToolBox>
                    {mode === 'AREA' ?
                        <Label name='Режим просмотра области' labelColor='accent' />
                        : <></>
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