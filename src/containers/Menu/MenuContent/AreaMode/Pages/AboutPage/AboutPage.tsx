import React, { useEffect, useState } from "react";

import './AboutPage.scss';

import { Text } from "../../../../../../components/Text/Text";

import { useGetPolygonTreesQuery } from "../../../../../../api/paths/treeApi";
import { useGetPolygonStatisticQuery } from "../../../../../../api/paths/statisticApi";
import { useAppSelector } from "../../../../../../store/hooks";
import { StatisticTreeType } from "../../../../../../api/types";
import { PieChart } from "@mui/x-charts";

export const AboutPage: React.FC = () => {

    const areaId = useAppSelector((state) => state.app.areaId);
    const { data = [], isLoading } = useGetPolygonTreesQuery(areaId || -1);
    const statisticQuery = useGetPolygonStatisticQuery(areaId || -1);

    const [trees, setTrees] = useState<Array<StatisticTreeType>>([]);

    useEffect(() => {
        if (!isLoading && statisticQuery.data) {
            setTrees(statisticQuery.data[0].trees);
        }
    }, [statisticQuery.isLoading])

    return (
        <div className='aboutpage'>
            <Text type='bold-text'>
                Число деревьев: {isLoading ? 'загрузка...' : data.length}
            </Text>
            <PieChart 
                series={[
                    {
                        data: trees.map((tree, index) => {
                            return {
                                id: index,
                                value: tree.count,
                                label: tree.wood,
                            }
                        })
                    }
                ]}
                width={300}
                height={100}
                />
            {trees.map((statistic, index) => {
                return (
                    <Text key={index}>{statistic.wood}: {statistic.count}</Text>
                )
            })}
        </div>
    )
}