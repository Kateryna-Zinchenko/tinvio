import React from 'react';
import {Button, Caption, Img, Inner, Title, Wrapper} from './loginThankYouStyles';
interface Props {
    submitted: boolean
}
const LoginThankYou = ({submitted}: Props) => {
    return (
        <Wrapper submitted={submitted}>
            <Inner>
                <Title>Thank you!</Title>
                <Img src='/assets/images/features/login-form.png'/>
                <Caption>We’ll get in touch as soon as possible</Caption>
                <Button>Close</Button>
            </Inner>
        </Wrapper>
    );
};

export default LoginThankYou;