import React, {useEffect, useState} from 'react';
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
import { useToggle } from 'react-use';
import useScrollPosition from "../../../hooks/useScrollPosition";
import useOnClickOutside from '../../../hooks/useOnClickOutside';

interface Props {
    setIsOpenMenu: (value: boolean) => void
    isOpenMenu: boolean
}

const Header = ({setIsOpenMenu}: Props) => {
    const [isOpenLanguage, setIsOpenLanguage] = useToggle(false);
    const [chosenLanguage, setChosenLanguage] = useState<string>('EN');
    const [isScroll, setIsScroll] = useToggle(false);

    const nav = useNavigate();

    const onLinkClick = (value: string) => {
        setIsOpenMenu(false)
        nav(`/${value}`)
    }

    const onFlagClick = (language: string) => {
        setChosenLanguage(language)
        setIsOpenLanguage(false)
    }

    const scrollPosition = useScrollPosition();

    useEffect(() => {
        setIsScroll(scrollPosition > 50);

        if (scrollPosition > 50) {
            setIsScroll(true);
        }
    }, [setIsScroll, scrollPosition]);

    const modalRef = useOnClickOutside(() => {
        setIsOpenLanguage(false);
    });

    return (
        <section className='header'>
                <Wrapper isScroll={isScroll}>
                    <HeaderWrapper>
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
