import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {
    ArrowDown,
    Button,
    ChooseLanguage,
    CloseButton,
    CloseWrapper, Flag, Flags,
    Footer,
    Language, LanguageList,
    LeftWrapper,
    Links,
    LinksSocial, LinksStore,
    Logo,
    MenuWrapper,
    OpenMenuWrapper,
    Page,
    Pages, Rhombs, RhombusBottom, RhombusTop, Stick,
    Wrapper
} from "./BurgerMenuStyles";
import {Container} from '../../container/Container';
import { useToggle } from 'react-use';
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

interface Props {
    setIsOpenMenu: (value: boolean) => void
}

const BurgerMenu = ({setIsOpenMenu}: Props) => {
    const [isOpenLanguage, setIsOpenLanguage] = useToggle(false);
    const [chosenLanguage, setChosenLanguage] = useState<string>('EN')

    const nav = useNavigate();

    const onLinkClick = (value: string) => {
        setIsOpenMenu(false)
        nav(`/${value}`)
    }

    const onFlagClick = (language: string) => {
        setChosenLanguage(language)
        setIsOpenLanguage(false)
    }

    const modalRef = useOnClickOutside(() => {
        setIsOpenLanguage(false);
    });

    return (
        <section className='burger-menu'>
            <OpenMenuWrapper>
                <RhombusTop/>
                <RhombusBottom/>
                <Rhombs/>
                <Container>
                    <Wrapper>
                        <MenuWrapper>
                            <LeftWrapper>
                                <Logo onClick={() => {
                                    nav('/')
                                    setIsOpenMenu(false)
                                }
                                } src="/assets/images/logo.svg" alt="#"/>
                                <ChooseLanguage onClick={setIsOpenLanguage} ref={modalRef}>
                                    <Language>{chosenLanguage}</Language>
                                    <ArrowDown isOpenLanguage={isOpenLanguage}/>
                                </ChooseLanguage>
                                <LanguageList isOpenLanguage={isOpenLanguage}>
                                    <Flags>
                                        <Flag src='/assets/icons/flag-1.png'
                                              onClick={() => onFlagClick('EN')}
                                        />
                                        <Stick/>
                                        <Flag src='/assets/icons/flag-2.png'
                                              onClick={() => onFlagClick('ID')}
                                        />
                                        <Stick/>
                                        <Flag src='/assets/icons/flag-3.png'
                                              onClick={() => onFlagClick('TH')}
                                        />
                                        <Stick/>
                                        <Flag src='/assets/icons/flag-4.png'
                                              onClick={() => onFlagClick('VN')}
                                        />
                                    </Flags>
                                </LanguageList>
                            </LeftWrapper>
                            <CloseWrapper onClick={() => setIsOpenMenu(false)}>
                                <CloseButton/>
                            </CloseWrapper>
                        </MenuWrapper>
                    </Wrapper>
                </Container>
                <Pages>
                    <Page isActive={window.location.pathname === '/home' || window.location.pathname === '/'}
                          onClick={() => onLinkClick('home')}>Home</Page>
                    <Page isActive={window.location.pathname === '/features'}
                          onClick={() => onLinkClick('features')}>Features</Page>
                    <Page isActive={window.location.pathname === '/company'}
                          onClick={() => onLinkClick('company')}>Company</Page>
                </Pages>
                <Footer>
                    <Button>Get Started</Button>
                    <Links>
                        <LinksSocial>
                            <img src="/assets/images/linked-in.png" alt="#"/>
                            <img src="/assets/images/instagram.png" alt="#"/>
                        </LinksSocial>
                        <LinksStore>
                            <img src="/assets/images/google-play.png" alt="#"/>
                            <img src="/assets/images/app-store.png" alt="#"/>
                        </LinksStore>
                    </Links>
                </Footer>
            </OpenMenuWrapper>
        </section>
    );
};

export default BurgerMenu;
