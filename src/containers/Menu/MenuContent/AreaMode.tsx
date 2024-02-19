import React from "react";

import { Text } from "../../../components/Text/Text";

import { SubMenu } from "../../../components/SubMenu/SubMenu";
import { TreeList } from "./TreeList/TreeList";
import { ScrollBox } from "../../ScrollBox/ScrollBox";

import { useAppSelector } from "../../../store/hooks";

export const AreaMode: React.FC = () => {

    const { areaId } = useAppSelector((state) => state.app);

    return (
        <div className='menu-content-areamode'>
            <SubMenu 
                paths={[
                    {
                        name: 'Об участке',
                        url: 'about',
                    },
                    {
                        name: 'Деревья',
                        url: 'trees',
                    },
                    {
                        name: 'Настройки',
                        url: 'settings',
                    },
                ]}
            />
            {areaId ?
                <ScrollBox>
                    <TreeList areaId={areaId} />
                </ScrollBox>
                :
                <Text color='gray'>Область не определена</Text>
            }
        </div>
    )
}