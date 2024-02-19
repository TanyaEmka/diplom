import React from "react";

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
        </>
    )
}