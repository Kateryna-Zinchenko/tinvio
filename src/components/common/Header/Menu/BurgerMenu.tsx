import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ChooseLanguage, CloseButton, CloseWrapper, MenuWrapper, OpenMenuWrapper, Page, Pages} from "./BurgerMenuStyles";
import {ArrowDown, Language, LeftWrapper, Logo, Wrapper} from "../HeaderStyles";
import { Container } from '../../container/Container';

interface Props {
    setIsOpenMenu: (value:boolean) => void
}

const BurgerMenu = ({setIsOpenMenu}: Props) => {
    const nav = useNavigate();
    const onLinkClick = (value: string) => {
        setIsOpenMenu(false)
        nav(`/${value}`)
    }
    return (
        <section className='burger-menu'>
            <OpenMenuWrapper>
                <Container>
                    <Wrapper>
                        <MenuWrapper>
                            <LeftWrapper>
                                <Logo onClick={() => {
                                    nav('/')
                                }
                                } src="/assets/images/logo.svg" alt="#"/>
                                <ChooseLanguage>
                                    <Language>EN</Language>
                                    <ArrowDown src="/assets/images/arrowDown.svg" alt="#"/>
                                </ChooseLanguage>
                            </LeftWrapper>
                            <CloseWrapper onClick={() => setIsOpenMenu(false)}>
                                <CloseButton/>
                            </CloseWrapper>
                        </MenuWrapper>
                    </Wrapper>
                </Container>
                <Pages>
                    <Page isActive={window.location.pathname === '/Home' || window.location.pathname === '/'} onClick={() => onLinkClick('Home')}>Home</Page>
                    <Page isActive={window.location.pathname === '/Features'} onClick={() => onLinkClick('Features')}>Features</Page>
                    <Page isActive={window.location.pathname === '/Company'} onClick={() => onLinkClick('Company')}>Company</Page>
                </Pages>
            </OpenMenuWrapper>
        </section>
    );
};

export default BurgerMenu;