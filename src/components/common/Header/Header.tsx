import React from 'react';
import useToggle from 'react-use/lib/useToggle';
import MenuButton from '../Menu/MenuButton';
import CloseButton from "../CloseButton/CloseButton";
import MenuList from "../Menu/MenuList";
import {ArrowDown, ChooseLanguage, Container, HeaderWrapper, Language, LeftWrapper, Logo, Wrapper} from "./HeaderStyles";
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);
    const nav = useNavigate()
    return (
        <Container>
            <Wrapper>
                <HeaderWrapper>
                    <LeftWrapper>
                        <Logo onClick={() => {
                            nav('/')
                            setIsOpenMenu(false)
                        }
                        } src="/assets/images/logo.svg" alt="#"/>
                        <ChooseLanguage isOpenMenu={isOpenMenu}>
                            <Language>EN</Language>
                            <ArrowDown src="/assets/images/arrowDown.svg" alt="#"/>
                        </ChooseLanguage>
                    </LeftWrapper>
                    <div>
                        <MenuButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                        <CloseButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                    </div>
                </HeaderWrapper>

                <MenuList setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
            </Wrapper>
        </Container>
    );
};

export default Header;