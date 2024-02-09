import React, { useState } from "react";

import './MenuContent.scss';
import { Text } from "../../../components/Text/Text";
import { BoolValue } from "../../../components/BoolValue/BoolValue";

import { useGetPolygonsQuery } from "../../../api/paths/polygonApi";

export const MenuContent: React.FC = () => {

    const { data = [] } = useGetPolygonsQuery();
    const [ boolValues, setBoolValues ] = useState(Array(data.length).fill(true));

    const getVisibleAreas = () => {
        return boolValues.filter((element) => element === true).length;
    }

    return (
        <div className='menu-content'>
            <div className='menu-content-header'>
                <Text tag='div' type='h3'>Все области</Text>
                <div className='menu-content-header-tools'>
                    <Text tag='div' type='small-text' color='other'>Видимые области: {getVisibleAreas()}</Text>
                    <BoolValue
                        name='Показать все области'
                        checked={false}
                        onClick={() => {}}
                    />
                </div>
            </div>
            <div className='menu-content-list'>
                { data.map((element, index) => {
                    return (
                        <BoolValue 
                            name={element.name} 
                            checked={boolValues[index]}
                            onClick={() => {}}
                            key={index} 
                        />
                    )
                }) }
            </div>
        </div>
    )
}