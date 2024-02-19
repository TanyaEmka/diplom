import React from "react";

import { Text } from "../../../../components/Text/Text";
import { Button } from "../../../../components/Button/Button";

import { useGetPolygonTreesQuery } from "../../../../api/paths/treeApi";

interface AreaModeProps {
    areaId: number,
}

export const AreaMode: React.FC<AreaModeProps> = ({
    areaId,
}) => {

    const { data = [], isLoading } = useGetPolygonTreesQuery(areaId);

    return (
        <>
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
        </>
    )
}