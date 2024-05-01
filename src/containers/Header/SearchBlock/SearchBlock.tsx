import React, { useEffect, useState } from "react";
import './SearchBlock.scss';

import { Input } from "../../../components/Input/Input";
import { Text } from "../../../components/Text/Text";

import { useAppDispatch } from "../../../store/hooks";
import { goToPolygon } from "../../../store/features/map";
import { useGetSearchPolygonsMutation } from "../../../api/paths/polygonApi";
import { PolygonType } from "../../../api/types";

export const SearchBlock: React.FC = () => {

    const [getSearch, { data = { polygon: {} as PolygonType } }] = useGetSearchPolygonsMutation();
    const [value, setValue] = useState('');

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="search-block">
            <Input 
                inputType='search' 
                placeholder='Поиск' 
                value={value}
                onChange={(e) => { 
                    setValue(e.target.value) 
                    getSearch({ queryStr: e.target.value.toString() });
                }}
            />
            {value !== '' &&
            <div className="search-block-results box-shadow-bottom">
                <Text
                    color='gray'
                    type='small-text'
                >
                    Результаты поиска
                </Text>
                {data?.polygon && 
                <Text
                    color='base'
                    type='text-help-link'
                    onClick={() => {
                        dispatch(goToPolygon(data.polygon.id))
                    }}
                >
                    {data.polygon.name}
                </Text>
                }
            </div>
            }
        </div>
    )
}