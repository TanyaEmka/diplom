import React from "react";

import { AppPlacemark } from "../AppPlacemark/AppPlacemark";

import { useGetPolygonTreesQuery } from "../../api/paths/treeApi";

interface AreaModeProps {
    areaId: number,
}

export const AreaMode: React.FC<AreaModeProps> = ({
    areaId,
}) => {

    const { data = [], isLoading } = useGetPolygonTreesQuery(areaId);

    return (
        <>
            {!isLoading ?
                data.map((tree, index) => {
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