import React, { useRef, useEffect } from "react";

import './Main.scss';
import { Header } from "../../containers/Header/Header";
import { Map, Polygon } from "@pbe/react-yandex-maps";
import { MapTools } from "../../containers/MapTools/MapTools";
import { Menu } from "../../containers/Menu/Menu";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { changeState } from "../../store/features/map";
import { showMenu, hiddenMenu } from "../../store/features/app";

import { useGetPolygonsQuery } from "../../api/paths/polygonApi";

export const Main: React.FC = () => {

    const dispatch = useAppDispatch();
    const map = useRef<ymaps.Map | undefined>(undefined);
    const mapStore = useAppSelector((state) => state.map);
    const appStore = useAppSelector((state) => state.app);

    const { data = [] } = useGetPolygonsQuery();

    const mapState = {
        center: mapStore.center,
        zoom: mapStore.zoom
    }

    const polygonOptions = {
        fillColor: "rgba(164, 85, 201, 0.2)",
        strokeColor: "#A455C9",
        strokeWidth: 5,
        strokeStyle: 'solid',
    }

    useEffect(() => {
        if (map.current) {
            if (mapStore.clickEvent === 'INC ZOOM') {
                map.current.setZoom(mapStore.zoom + 1, { duration: 500 });
            } else if (mapStore.clickEvent === 'DEC ZOOM') {
                map.current.setZoom(mapStore.zoom - 1, { duration: 500 });
            } else {
                dispatch(changeState({
                    zoom: map.current.getZoom(),
                    center: map.current.getCenter(),
                }));
            }
        }
    }, [map, mapStore.clickEvent]);

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
                        onClick={() => {
                            dispatch(hiddenMenu());
                        }}
                        state={mapState}
                        width={'100vw'}
                        height={'100vh'}
                        className='map-inner'
                        // для вывода подсказок и названий
                        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                    >
                        {data.map((polygon, index) => {
                            return (
                                <Polygon
                                    key={index}
                                    geometry={[polygon.points]}
                                    options={polygonOptions}
                                    properties={{
                                        hintContent: polygon.name,
                                    }}
                                    onDblClick={(e: any) => {
                                        if (map.current) {
                                            const arrayX = polygon.points.map((element) => element[0]);
                                            const arrayY = polygon.points.map((element) => element[1]);
                                            const minX = Math.min(...arrayX);
                                            const maxX = Math.max(...arrayX);
                                            const minY = Math.min(...arrayY);
                                            const maxY = Math.max(...arrayY);
                                            const oldZoom = map.current.getZoom();
                                            map.current.setBounds([[minX, minY], [maxX, maxY]], {
                                                checkZoomRange: true,
                                                duration: 500,
                                            }).then(() => {
                                                const newZoom = map.current?.getZoom();
                                                if (newZoom !== oldZoom) {
                                                    dispatch(showMenu());
                                                }
                                            });
                                        }
                                    }}
                                />
                            )
                        })}
                    </Map>
                </div>
                <div className='page-tools'>
                    <div className='page-tools-menu' style={{
                        visibility: appStore.menuVisible ? 'visible' : 'hidden',
                    }}>
                        <Menu />
                    </div>
                    <div className='page-tools-map'>
                        <MapTools />
                    </div>
                </div>
            </div>
        </div>
    )
}