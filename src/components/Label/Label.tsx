import React from "react";

import './Label.scss';
import { Text } from "../Text/Text";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    name: string,
}

export const Label: React.FC<LabelProps> = ({
    name,
    ...props
}) => {
    return (
        <label 
            className={('map-label ' + props.className).trim()}
            {...props}
        >
            <Text color='inherit'>{name}</Text>
        </label>
    )
}


