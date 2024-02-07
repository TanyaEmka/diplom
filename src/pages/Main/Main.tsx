import React, { useRef } from "react";

import './Main.scss';
import { Header } from "../../containers/Header/Header";
import { Map, Polygon } from "@pbe/react-yandex-maps";
import { MapTools } from "../../containers/MapTools/MapTools";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { changeState } from "../../store/features/map";

import { useGetPolygonsQuery } from "../../api/paths/polygonApi";

export const Main: React.FC = () => {

    const dispatch = useAppDispatch();
    const map = useRef<ymaps.Map | undefined>(undefined);
    const mapStore = useAppSelector((state) => state.map);

    const { data = [] } = useGetPolygonsQuery();

    const defaultState = {
        center: mapStore.center,
        zoom: mapStore.zoom
    }

    const polygonOptions = {
        fillColor: "rgba(164, 85, 201, 0.2)",
        strokeColor: "#A455C9",
        strokeWidth: 5,
        strokeStyle: 'solid',
    }

    return (
        <div className='main-page'>
            <Header />
            <div className='main-page-content'>
                <div className='map'>
                    <Map 
                        instanceRef={map}
                        onActionend={() => {
                            if (map.current) {
                                dispatch(changeState({
                                    zoom: map.current.getZoom(),
                                    center: map.current.getCenter(),
                                }));
                            }
                        }}
                        state={defaultState}
                        width={'100vw'}
                        height={'100vh'}
                        className='map-inner'
                    >
                        {data.map((polygon, index) => {
                            return (
                                <Polygon
                                    key={index}
                                    geometry={[polygon.points]}
                                    options={polygonOptions}
                                />
                            )
                        })}
                    </Map>
                </div>
                <div className='page-tools'>
                    <div className='page-tools-map'>
                        <MapTools />
                    </div>
                </div>
            </div>
        </div>
    )
}