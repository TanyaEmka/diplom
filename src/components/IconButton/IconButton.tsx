import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    src: string,
    alt: string,
}

export const IconButton: React.FC<IconButtonProps> = ({
    src,
    alt,
    ...props
}) => {
    return (
        <button
            {...props}
        >
            <img src={src} alt={alt} />
        </button>
    )
}