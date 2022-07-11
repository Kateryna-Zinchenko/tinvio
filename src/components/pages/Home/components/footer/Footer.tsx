import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LinksSocial,
    LinksStore,
    LinksTerms,
    Logo,
    Page,
    Pages,
    PrivacyPolicy,
    Stick,
    Terms,
    Text,
    Wrapper
} from './FooterStyles';

const Footer = () => {
    const nav = useNavigate();
    const onLinkClick = (value: string) => {
        nav(`/${value}`)
    }
    return (
        <section className='footer'>
            <Wrapper>
                <Logo src='/assets/images/logo.svg'/>
                <Pages>
                    <Page isActive={window.location.pathname === '/home' || window.location.pathname === '/'} onClick={() => onLinkClick('home')}>Home</Page>
                    <Page isActive={window.location.pathname === '/features'} onClick={() => onLinkClick('features')}>Features</Page>
                    <Page isActive={window.location.pathname === '/company'} onClick={() => onLinkClick('company')}>Company</Page>
                    <Page isActive={window.location.pathname === '/login'} onClick={() => onLinkClick('login')}>Login</Page>
                </Pages>
                <LinksSocial>
                    <a href=""><img src="/assets/images/linked-in.png" alt="#"/></a>
                    <a href=""><img src="/assets/images/instagram.png" alt="#"/></a>
                </LinksSocial>
                <LinksStore>
                    <a href=""><img src="/assets/images/google-play.png" alt="#"/></a>
                    <a href=""><img src="/assets/images/app-store.png" alt="#"/></a>
                </LinksStore>
                <div>
                    <Text>© Tinvio™ 2020. All Rights Reserved</Text>
                    <LinksTerms>
                        <PrivacyPolicy><a href="">Privacy Policy</a></PrivacyPolicy>
                        <Stick/>
                        <Terms><a href="">Terms of Service</a></Terms>
                    </LinksTerms>
                </div>
            </Wrapper>
        </section>
    );
};

export default Footer;
