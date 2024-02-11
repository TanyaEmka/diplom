import React, { useRef, useEffect } from "react";

import './AppMap.scss';
import { Map } from "@pbe/react-yandex-maps";
import { AppPolygon } from "../AppPolygon/AppPolygon";
import { PolygonType } from "../../api/types";

import { useGetPolygonsQuery } from "../../api/paths/polygonApi";
import { changeState } from "../../store/features/map";
import { hiddenMenu, showMenu } from "../../store/features/app";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface AppMapProps {
    width?: string,
    height?: string,
}

export const AppMap: React.FC<AppMapProps> = ({
    width='100vw',
    height='100vh',
}) => {

    const dispatch = useAppDispatch();

    const { data = [] } = useGetPolygonsQuery();

    const map = useRef<ymaps.Map | undefined>(undefined);
    const mapStore = useAppSelector((state) => state.map);
    const { menuPolygonListVisible } = useAppSelector((state) => state.app);
    const mapState = {
        center: mapStore.center,
        zoom: mapStore.zoom
    }

    useEffect(() => {
        if (map.current) {
            if (mapStore.clickEvent === 'INC ZOOM') {
                map.current.setZoom(mapStore.zoom + 1, { duration: mapStore.duration });
            } else if (mapStore.clickEvent === 'DEC ZOOM') {
                map.current.setZoom(mapStore.zoom - 1, { duration: mapStore.duration });
            } else if (mapStore.clickEvent === 'GO TO POLYGON') {
                if (mapStore.goToPolygonEventId) {
                    const index = data.map((element) => element.id).indexOf(mapStore.goToPolygonEventId);
                    if (index !== -1) {
                        goToPolygon(data[index]);
                    }
                }
            } else {
                dispatch(changeState({
                    zoom: map.current.getZoom(),
                    center: map.current.getCenter(),
                }));
            }
        }
    }, [map, mapStore.clickEvent]);

    const changeMapState = () => {
        if (map.current) {
            dispatch(changeState({
                zoom: map.current.getZoom(),
                center: map.current.getCenter(),
            }));
        }
    }

    const goToPolygon = (polygon: PolygonType) => {
        if (map.current) {
            dispatch(showMenu());
            const arrayX = polygon.points.map((element) => element[0]);
            const arrayY = polygon.points.map((element) => element[1]);
            const minX = Math.min(...arrayX);
            const maxX = Math.max(...arrayX);
            const minY = Math.min(...arrayY);
            const maxY = Math.max(...arrayY);
            map.current.setBounds([[minX, minY], [maxX, maxY]], {
                checkZoomRange: true,
                duration: mapStore.duration,
            });
        }
    }

    return (
        <div className='map'>
            <Map 
                instanceRef={map}
                onActionend={() => { changeMapState(); }}
                onClick={() => { dispatch(hiddenMenu()); }}
                state={mapState}
                width={width}
                height={height}
                className='map-inner'
                // для вывода подсказок и названий
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            >
                {data.map((polygon, index) => {
                    const visibleIndex = menuPolygonListVisible
                        .map((element) => element.polygonId).indexOf(polygon.id);
                    if (visibleIndex !== -1 && 
                        menuPolygonListVisible[visibleIndex].polygonVisible) {
                        return (
                            <AppPolygon
                                key={index}
                                polygon={polygon}
                                onClick={() => { goToPolygon(polygon); }}
                            />
                        )
                    }
                    return (
                        <></>
                    )
                })}
            </Map>
        </div>
    )
}