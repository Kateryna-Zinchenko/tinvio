import React from 'react';
import {
    H1, LoginFormWrapper, Map, RhombsLeft, RhombsRight,
    Wrapper,
    WrapperTrans
} from "./FormStyles";
import LoginForm from "../../../../common/loginForm/LoginForm";

const Form = () => {

    return (
        <section className='form'>
            <WrapperTrans>
                <Wrapper>
                    <RhombsLeft/>
                    <RhombsRight/>
                    <H1>Fill up the form and we’ll get in touch within a few hours</H1>
                    <LoginFormWrapper>
                        <LoginForm/>
                    </LoginFormWrapper>
                    <Map src='/assets/images/map.png'/>
                </Wrapper>
            </WrapperTrans>
        </section>
    );
};

export default Form;
