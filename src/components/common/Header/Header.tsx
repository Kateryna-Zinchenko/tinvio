import React from 'react';
import useToggle from 'react-use/lib/useToggle';
import MenuButton from '../Menu/MenuButton';
import CloseButton from "../CloseButton/CloseButton";
import MenuList from "../Menu/MenuList";
import {
    ArrowDown,
    ChooseLanguage,
    Container,
    HeaderWrapper,
    Language,
    LeftWrapper,
    Logo,
    Wrapper
} from "./HeaderStyles";
import {useNavigate} from 'react-router-dom';
interface Props {
    setIsOpenMenu: (value: boolean) => void
    isOpenMenu: boolean
}
const Header = ({setIsOpenMenu, isOpenMenu}: Props) => {
    const nav = useNavigate()
    return (
        <div>
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

                </Wrapper>
            </Container>
        </div>

    );
};

export default Header;
