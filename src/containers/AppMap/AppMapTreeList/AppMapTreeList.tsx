import React from "react";

import { Placemark } from "@pbe/react-yandex-maps";

import { useGetPolygonTreesQuery } from "../../../api/paths/treeApi";

interface AppMapTreeListProps {
    areaId: number,
}

export const AppMapTreeList: React.FC<AppMapTreeListProps> = ({
    areaId,
}) => {

    const { data = [], isLoading } = useGetPolygonTreesQuery(areaId);

    return (
        <>
            {!isLoading ?
                data.map((tree, index) => {
                    return (
                        <Placemark 
                            key={index}
                            geometry={[tree.x, tree.y]}
                            options={{
                                preset: 'islands#circleDotIcon',
                                iconColor: '#33845D',
                            }}
                        />
                    )
                })
            : <></>
            }
        </>
    )
}