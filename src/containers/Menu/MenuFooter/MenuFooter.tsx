import React from "react";

import './MenuFooter.scss';
import { SettingButton } from "../../../components/SettingButton/SettingButton";
import { ExitButton } from "../../../components/ExitButton/ExitButton";

export const MenuFooter: React.FC = () => {
    return (
        <div className='menu-footer'>
            <SettingButton />
            <ExitButton />
        </div>
    )
}