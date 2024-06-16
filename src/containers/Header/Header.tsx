import React from "react";

import './Header.scss';
import { ExitButton, SettingButton } from "@components/buttons";
import { MapState } from "@containers/MapState/MapState";

import { MenuButton } from "./MenuButton/MenuButton";
import { ToolBox } from "./ToolBox/ToolBox";
import { SearchBlock } from "./SearchBlock/SearchBlock";

export const Header: React.FC = () => {

    return (
        <nav className='header box-shadow-bottom'>
            <div className="header-big">
                <div className='header-big-left'>
                    <MenuButton size='small' />
                    <SearchBlock />
                </div>
                <div className='header-big-right'>
                    <MapState />
                    <ToolBox gap={28}>
                        <ExitButton size='small' />
                    </ToolBox>
                </div>
            </div>
            <div className="header-small">
                <MenuButton size='small' />
                <SearchBlock />
                <ToolBox gap={28}>
                    <ExitButton size='small' />
                </ToolBox>
            </div>
        </nav>
    )
}