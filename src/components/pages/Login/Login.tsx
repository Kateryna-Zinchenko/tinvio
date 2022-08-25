import React, {useState} from 'react';
import LoginForm from "../../common/loginForm/LoginForm";
import LoginThankYou from "../Feature/components/loginThankYou/loginThankYou";
import {LoginFormWrapper} from "../Feature/FeatureStyles";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useToggle } from 'react-use';

const Login = () => {
    const [isOpen, setIsOpen] = useToggle(true);

    const [submitted, setSubmitted] = useState<boolean>(false);

    const modalRef = useOnClickOutside(() => {
        setIsOpen(false);
    });

    return (
        <main className='login'>
            <LoginFormWrapper isOpen={isOpen}>
                <LoginForm isOpen={isOpen} modalRef={modalRef} submitted={submitted} setSubmitted={setSubmitted}/>
                <LoginThankYou submitted={submitted}/>
            </LoginFormWrapper>
        </main>
    );
};

export default Login;
