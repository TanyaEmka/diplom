import React from "react";

import { Text } from "../../../../components/Text/Text";
import { TreeLabel } from "../../../../components/TreeLabel/TreeLabel";

import { useGetPolygonTreesQuery } from "../../../../api/paths/treeApi";

interface TreeListProps {
    areaId: number,
}

export const TreeList: React.FC<TreeListProps> = ({
    areaId,
}) => {

    const { data = [], isLoading } = useGetPolygonTreesQuery(areaId);

    return (
        <>
            {!isLoading ? 
                data.map((tree, index) => {
                    return (
                        <TreeLabel 
                            key={index}
                            {...tree}
                        />
                    )
                })
            : <Text color='gray'>Загрузка...</Text>
            }
        </>
    )
}