import React from 'react';
import {H1, P, P2, Tab, Tab2, Tabs, Title, Title2, Wrapper} from "./ContactStyles";
import Button from "../../../../common/button/Button";

const Contact = () => {
    return (
        <section className='contact-us'>
            <Wrapper>
                <H1>Contact us</H1>
                <Tabs>
                    <Tab>
                        <Title>Contact Support</Title>
                        <P>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</P>
                        <Button bordered>Contact Us</Button>
                    </Tab>
                    <Tab2>
                        <Title2>Business & Partnerships</Title2>
                        <P2>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</P2>
                        <Button background='#FFF'>Contact Us</Button>
                    </Tab2>
                    <Tab>
                        <Title>Media Relations</Title>
                        <P>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</P>
                        <Button bordered>Contact Us</Button>
                    </Tab>
                </Tabs>
            </Wrapper>
        </section>
    );
};

export default Contact;
