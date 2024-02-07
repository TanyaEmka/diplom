import React from "react";

import './Text.scss';

export type TextType = 'h1' | 
                    'h2' | 
                    'h3' | 
                    'text' | 
                    'bold-text' | 
                    'text-link' | 
                    'small-text';

export type TextTag = 'span' | 'div' | 'p';

export type TextColor = 'base' | 
                        'gray' | 
                        'other' | 
                        'header' | 
                        'link' |
                        'inherit';
 
interface TextProps {
    children?: React.ReactNode,
    tag?: TextTag,
    color?: TextColor,
    type?: TextType,
    class?: string,
}

export const Text: React.FC<TextProps> = (props) => {

    const { type, children, ...otherProps } = props;
    
    let tagText = otherProps.tag ? otherProps.tag : 'span';
    const Tag = tagText as keyof JSX.IntrinsicElements;

    let textClass: string = type || 'text';
    if (otherProps.class && otherProps.class !== '') {
        textClass += ' ' + otherProps.class;
    }
    textClass += (otherProps.color) ? ' ' + otherProps.color : '';
    textClass = textClass.trim();

    return (
        <Tag
            className={textClass}
        >
            {children}
        </Tag>
    )
}