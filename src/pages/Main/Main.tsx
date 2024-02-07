import React, { useRef } from "react";

import './Main.scss';
import { Header } from "../../containers/Header/Header";
import { Map, Polygon } from "@pbe/react-yandex-maps";
import { MapTools } from "../../containers/MapTools/MapTools";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { changeZoom, changeState } from "../../store/features/map";

export const Main: React.FC = () => {

    const dispatch = useAppDispatch();
    const map = useRef<ymaps.Map | undefined>(undefined);
    const mapStore = useAppSelector((state) => state.map);

    const defaultState = {
        center: mapStore.center,
        zoom: mapStore.zoom
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
                                console.log(map.current.getCenter());
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
                        <Polygon
                            onClick={(e: any) => {  }}
                            geometry={[
                                [
                                [55.75, 37.8],
                                [55.8, 37.9],
                                [55.75, 38.0],
                                [55.7, 38.0],
                                [55.7, 37.8],
                                ],
                            ]}
                            options={{
                                fillColor: "rgba(164, 85, 201, 0.2)",
                                strokeColor: "#A455C9",
                                strokeWidth: 5,
                                strokeStyle: 'solid',
                            }}
                        />
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