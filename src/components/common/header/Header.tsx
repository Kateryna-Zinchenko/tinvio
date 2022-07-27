import React, {useState} from 'react';
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

interface Props {
    setIsOpenMenu: (value: boolean) => void
    isOpenMenu: boolean
}

const Header = ({setIsOpenMenu}: Props) => {
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
                            <Button>Get Started</Button>
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
