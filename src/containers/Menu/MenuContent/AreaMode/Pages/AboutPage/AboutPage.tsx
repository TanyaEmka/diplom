import React, { useEffect, useState } from "react";

import './AboutPage.scss';

import { Text } from "../../../../../../components/Text/Text";
import { Button } from "../../../../../../components/Button/Button";

import { useGetPolygonTreesQuery } from "../../../../../../api/paths/treeApi";
import { useGetPolygonStatisticQuery } from "../../../../../../api/paths/statisticApi";
import { useGetPolygonQuery } from "../../../../../../api/paths/polygonApi";
import { useAppSelector } from "../../../../../../store/hooks";
import { PolygonType } from "../../../../../../api/types";
import { Document, PDFDownloadLink, Page, Text as PDFText, Font, StyleSheet } from "@react-pdf/renderer";

const PolygonDoc = (params: { name: string }) => (
    <Document>
        <Page>
            <PDFText>{params.name}</PDFText>
        </Page>
    </Document>
)

export const AboutPage: React.FC = () => {

    const areaId = useAppSelector((state) => state.app.areaId);
    const { data = { polygon: {} as PolygonType }, isLoading } = useGetPolygonQuery(areaId || -1);

    return (
        <div className='aboutpage'>
            <Text type='bold-text'>
                Число деревьев: {isLoading ? 'загрузка...' : data.polygon.points.length}
            </Text>
            <div className='pdf-download'>
                <PDFDownloadLink document={<PolygonDoc name={data.polygon.name} />}>
                    {({ blob, url, loading, error }) => (loading ? 'Скачивание...' : 'Скачать документ')}
                </PDFDownloadLink>
            </div>
        </div>
    )
}