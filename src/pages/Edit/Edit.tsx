import React from "react";

import './Edit.scss';

import { Text } from "../../components/Text/Text";
import { EditMenu } from "./EditMenu/EditMenu";

export const Edit: React.FC = () => {

    return(
        <div className='edit-page'>
            <Text tag='div' type='h2'>
                Редактирование
            </Text>
            <EditMenu 
                ways={[
                    { name: 'Области', path: 'polygons/' },
                    { name: 'Деревья', path: 'trees/' }
                ]}
            />
        </div>
    )
}