import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Page, Pages} from "./MenuListStyles";

interface Props {
    isOpenMenu: boolean,
    setIsOpenMenu: (value: boolean) => void,
}

const MenuList = ({isOpenMenu, setIsOpenMenu}: Props) => {
    const nav = useNavigate()
     const onLinkClick = (value: string) => {
         setIsOpenMenu(false)
         nav(`/${value}`)
    }
    return (
        <Pages isOpenMenu={isOpenMenu}>
            <Page isActive={window.location.pathname === '/Home' || window.location.pathname === '/'} onClick={() => onLinkClick('Home')}>Home</Page>
            <Page isActive={window.location.pathname === '/Features'} onClick={() => onLinkClick('Features')}>Features</Page>
            <Page isActive={window.location.pathname === '/Company'} onClick={() => onLinkClick('Company')}>Company</Page>
        </Pages>
    );
};

export default MenuList;

