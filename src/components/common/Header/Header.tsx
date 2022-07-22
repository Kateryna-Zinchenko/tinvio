import React from 'react';
import {
    ArrowDown, Button,
    ChooseLanguage, Flag, Flags,
    HeaderWrapper, Language, LanguageList,
    LeftWrapper,
    Logo,
    MenuRow,
    MenuWrapper, Page, Pages, Stick,
    Wrapper
} from "./HeaderStyles";
import {useNavigate} from 'react-router-dom';
import {Container} from '../container/Container';
import { useToggle } from 'react-use';

interface Props {
    setIsOpenMenu: (value: boolean) => void
    isOpenMenu: boolean
    isScroll: boolean
}

const Header = ({setIsOpenMenu, isScroll}: Props) => {
    const [isOpenLanguage, setIsOpenLanguage] = useToggle(false);

    const nav = useNavigate();

    const onLinkClick = (value: string) => {
        setIsOpenMenu(false)
        nav(`/${value}`)
    }
    return (
        <section className='header'>
                <Wrapper>
                    <HeaderWrapper>
                        <LeftWrapper>
                            <Logo onClick={() => {
                                nav('/')
                                setIsOpenMenu(false)
                            }
                            } src="/assets/images/logo.svg" alt="#"/>
                            <ChooseLanguage onClick={setIsOpenLanguage}>
                                <Language>EN</Language>
                                <ArrowDown isOpenLanguage={isOpenLanguage}/>
                            </ChooseLanguage>
                            <LanguageList isOpenLanguage={isOpenLanguage}>
                                <Flags>
                                    <Flag src='/assets/icons/flag-1.png'/>
                                    <Stick/>
                                    <Flag src='/assets/icons/flag-2.png'/>
                                    <Stick/>
                                    <Flag src='/assets/icons/flag-3.png'/>
                                    <Stick/>
                                    <Flag src='/assets/icons/flag-4.png'/>
                                </Flags>
                            </LanguageList>
                            <Pages>
                                <Page
                                    isActive={window.location.pathname === '/home' || window.location.pathname === '/'}
                                    onClick={() => onLinkClick('home')}>Home</Page>
                                <Page isActive={window.location.pathname === '/features'}
                                      onClick={() => onLinkClick('features')}>Features</Page>
                                <Page isActive={window.location.pathname === '/company'}
                                      onClick={() => onLinkClick('company')}>Company</Page>
                            </Pages>
                            <Button isScroll={isScroll}>Get Started</Button>
                        </LeftWrapper>
                        <MenuWrapper
                            onClick={() => setIsOpenMenu(true)}
                        >
                            <MenuRow/>
                            <MenuRow/>
                            <MenuRow/>
                        </MenuWrapper>
                    </HeaderWrapper>
                </Wrapper>
        </section>

    );
};

export default Header;
