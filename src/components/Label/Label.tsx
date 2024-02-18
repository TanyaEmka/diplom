import React from "react";

import './Label.scss';
import { Text } from "../Text/Text";

export type LabelColorType = 'blue' | 'accent' | 'fill-blue' | 'auto';
 
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    name: string,
    shadow?: boolean,
    labelColor?: LabelColorType,
}

export const Label: React.FC<LabelProps> = ({
    name,
    shadow=false,
    labelColor='auto',
    ...props
}) => {

    const LabelClass = 'map-label';
    const LabelShadowClass = (shadow) ? LabelClass + '-shadow' : '';
    const LabelColorClass = (labelColor !== 'auto') ? LabelClass + '-' + labelColor : '';

    return (
        <label 
            className={(LabelClass + ' ' + 
                        LabelShadowClass + ' ' + 
                        LabelColorClass + ' ' +
                        props.className).trim()}
            {...props}
        >
            <Text color='inherit'>{name}</Text>
        </label>
    )
}


