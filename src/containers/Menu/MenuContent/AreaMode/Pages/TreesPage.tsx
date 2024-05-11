import React from "react";

import { Text } from "@components/baseComponents";

import { TreeList } from "../../TreeList/TreeList";
import { ScrollBox } from "@containers/ScrollBox/ScrollBox";

import { useAppSelector } from "@store/hooks";

export const TreesPage: React.FC = () => {

    const { areaId } = useAppSelector((state) => state.app);

    return (
        <>
            {areaId ?
                <ScrollBox>
                    <TreeList areaId={areaId} />
                </ScrollBox>
            :
                <Text color='gray'>Область не определена</Text>
            }
        </>
    )
}