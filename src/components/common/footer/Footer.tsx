import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
    FooterText,
    Links,
    LinksSocial,
    LinksStore,
    LinksTerms,
    Logo,
    Page,
    Pages,
    PrivacyPolicy,
    Stick,
    Stick2, StickLinks,
    StickLogo,
    Terms,
    Text,
    Wrapper
} from './FooterStyles';

const Footer = () => {
    const nav = useNavigate();
    const onLinkClick = (value: string) => {
        nav(`/${value}`)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    return (
        <section className='footer'>
            <Wrapper>
                <Logo src='/assets/images/logo.svg' onClick={() => onLinkClick('')}/>
                <StickLogo/>
                <Pages>
                    <Page isActive={window.location.pathname === '/home' || window.location.pathname === '/'}
                          onClick={() => onLinkClick('home')}>Home</Page>
                    <Page isActive={window.location.pathname === '/features'}
                          onClick={() => onLinkClick('features')}>Features</Page>
                    <Page isActive={window.location.pathname === '/company'}
                          onClick={() => onLinkClick('company')}>Company</Page>
                    {/*<Page isActive={window.location.pathname === '/login'}*/}
                    {/*      onClick={() => onLinkClick('login')}>Login</Page>*/}
                </Pages>
                <Links>
                    <LinksSocial>
                        <img src="/assets/images/linked-in.png" alt="#"/>
                        <img src="/assets/images/instagram.png" alt="#"/>
                    </LinksSocial>
                    <StickLinks/>
                    <LinksStore>
                        <img src="/assets/images/google-play.png" alt="#"/>
                        <img src="/assets/images/app-store.png" alt="#"/>
                    </LinksStore>
                </Links>
                <FooterText>
                    <Text>© Tinvio™ 2020. All Rights Reserved</Text>
                    <Stick2/>
                    <LinksTerms>
                        <PrivacyPolicy><a>Privacy Policy</a></PrivacyPolicy>
                        <Stick/>
                        <Terms><a>Terms of Service</a></Terms>
                    </LinksTerms>
                </FooterText>
            </Wrapper>
        </section>
    );
};

export default Footer;
