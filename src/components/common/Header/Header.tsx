import React from 'react';
import {
    HeaderWrapper,
    LeftWrapper,
    Logo,
    MenuRow,
    MenuWrapper,
    Wrapper
} from "./HeaderStyles";
import {useNavigate} from 'react-router-dom';
import { Container } from '../container/Container';

interface Props {
    setIsOpenMenu: (value: boolean) => void
    isOpenMenu: boolean
}

const Header = ({setIsOpenMenu, isOpenMenu}: Props) => {
    const nav = useNavigate()
    return (
        <section className='header'>
            <Container>
                <Wrapper>
                    <HeaderWrapper>
                        <LeftWrapper>
                            <Logo onClick={() => {
                                nav('/')
                                setIsOpenMenu(false)
                            }
                            } src="/assets/images/logo.svg" alt="#"/>
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
            </Container>
        </section>

    );
};

export default Header;
