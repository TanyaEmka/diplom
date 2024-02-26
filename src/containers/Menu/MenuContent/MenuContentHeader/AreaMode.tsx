import React from "react";

import { SubMenu } from "../../../../components/SubMenu/SubMenu";

export const AreaMode: React.FC = () => {
    return (
        <SubMenu 
            paths={[
                { name: 'Об участке', url: 'area/about', },
                { name: 'Деревья', url: 'area/trees', },
                { name: 'Настройки', url: 'area/settings', },
            ]}
        />
    )
}