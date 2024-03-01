import React from "react";

import { Placemark } from "@pbe/react-yandex-maps";

interface AppPlacemarkProps {
    id: number,
    name: string,
    wood: string,
    point: [number, number],
}

export const AppPlacemark: React.FC<AppPlacemarkProps> = ({
    name, wood,
    point,
}) => {
    return (
        <Placemark
            geometry={point}
            options={{
                preset: 'islands#circleDotIcon',
                iconColor: '#A455C9',
            }}
            properties={{
                hintContent: [name, wood].join(', '),
            }}
        />
    )
}