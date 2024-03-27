import React from "react";

import exit from '../../assets/icons/exit.svg';
import { IconButton } from "../IconButton/IconButton";

import { useLogoutMutation } from "../../api/paths/userApi";
import { deleteToken } from "../../store/features/user";
import { useAppDispatch } from "../../store/hooks";

interface ExitButtonProps {
    size?: 'big' | 'small',
}

export const ExitButton: React.FC<ExitButtonProps> = ({
    size='big'
}) => {

    const dispatch = useAppDispatch();
    const [ logout ] = useLogoutMutation();

    const logoutFunction = () => {
        logout()
        .then((res) => {
            dispatch(deleteToken());
        });
    }

    return (
        <IconButton
            size={size}
            src={exit}
            alt='Выход'
            onClick={logoutFunction}
        />
    )
}