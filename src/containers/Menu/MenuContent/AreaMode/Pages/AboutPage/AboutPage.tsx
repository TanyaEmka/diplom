import React from "react";

import './AboutPage.scss';

import { Text } from "../../../../../../components/Text/Text";
import { Button } from "../../../../../../components/Button/Button";

import { useGetPolygonTreesQuery } from "../../../../../../api/paths/treeApi";
import { useAppSelector } from "../../../../../../store/hooks";

export const AboutPage: React.FC = () => {

    const areaId = useAppSelector((state) => state.app.areaId);
    const { data = [], isLoading } = useGetPolygonTreesQuery(areaId || -1);

    return (
        <div className='aboutpage'>
            <Text type='bold-text'>
                Число деревьев: {isLoading ? 'загрузка...' : data.length}
            </Text>
            <Button
                buttonType='blue'
                buttonLine='line'
                style={{
                    width: 'fit-content',
                }}
            >
                Перейти на страницу участка
            </Button>
        </div>
    )
}