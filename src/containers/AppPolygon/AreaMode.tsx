import React from "react";

import { AppPlacemark } from "../AppPlacemark/AppPlacemark";

import { useGetPolygonTreesQuery } from "../../api/paths/treeApi";

interface AreaModeProps {
    areaId: number,
}

export const AreaMode: React.FC<AreaModeProps> = ({
    areaId,
}) => {

    const { data = { trees: [] }, isLoading } = useGetPolygonTreesQuery(areaId);

    return (
        <>
            {!isLoading ?
                data.trees.map((tree, index) => {
                    return (
                        <AppPlacemark 
                            key={index}
                            {...tree}
                            point={[tree.y, tree.x]}
                        />
                    )
                })
            : <></>
            }
        </>
    )
}