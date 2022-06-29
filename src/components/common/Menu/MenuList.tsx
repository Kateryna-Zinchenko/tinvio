import React from 'react';
import { useNavigate } from 'react-router-dom';
import {OpenMenuWrapper, Page, Pages} from "./MenuListStyles";

interface Props {
    setIsOpenMenu: (value: boolean) => void,
}

const MenuList = ({setIsOpenMenu}: Props) => {
    const nav = useNavigate()
     const onLinkClick = (value: string) => {
         setIsOpenMenu(false)
         nav(`/${value}`)
    }
    return (
        <OpenMenuWrapper>
            <div>
                <span>
                    <span>logo</span>
                    <span>language</span>
                </span>
                <span onClick={() =>  setIsOpenMenu(false)}>Cross</span>
            </div>
             <Pages>

                 <Page isActive={window.location.pathname === '/Home' || window.location.pathname === '/'} onClick={() => onLinkClick('Home')}>Home</Page>
                <Page isActive={window.location.pathname === '/Features'} onClick={() => onLinkClick('Features')}>Features</Page>
                <Page isActive={window.location.pathname === '/Company'} onClick={() => onLinkClick('Company')}>Company</Page>
             </Pages>
        </OpenMenuWrapper>

    );
};

export default MenuList;

