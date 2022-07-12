import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowDown,
    ChooseLanguage,
    CloseButton,
    CloseWrapper,
    Language,
    LeftWrapper,
    Logo,
    MenuWrapper,
    OpenMenuWrapper,
    Page,
    Pages, Rhombs, RhombusBottom, RhombusTop,
    Wrapper
} from "./BurgerMenuStyles";
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
                <RhombusTop/>
                <RhombusBottom/>
                <Rhombs src='/assets/images/rhombs-burger-menu.png'/>
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
                    <Page isActive={window.location.pathname === '/home' || window.location.pathname === '/'} onClick={() => onLinkClick('home')}>Home</Page>
                    <Page isActive={window.location.pathname === '/features'} onClick={() => onLinkClick('features')}>Features</Page>
                    <Page isActive={window.location.pathname === '/company'} onClick={() => onLinkClick('company')}>Company</Page>
                </Pages>
            </OpenMenuWrapper>
        </section>
    );
};

export default BurgerMenu;