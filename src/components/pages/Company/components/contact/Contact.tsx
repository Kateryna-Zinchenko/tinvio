import React from 'react';
import {Button, H1, P, Tab, Tabs, Title, Wrapper} from "./ContactStyles";

const Contact = () => {
    return (
        <section className='contact-us'>
            <Wrapper>
                <H1>Contact us</H1>
                <Tabs>
                    <Tab>
                        <Title>Contact Support</Title>
                        <P>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</P>
                        <Button>Contact Us</Button>
                    </Tab>
                    <Tab style={{background: '#363636'}}>
                        <Title>Business & Partnerships</Title>
                        <P>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</P>
                        <Button>Contact Us</Button>
                    </Tab>
                    <Tab>
                        <Title>Media Relations</Title>
                        <P>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</P>
                        <Button>Contact Us</Button>
                    </Tab>
                </Tabs>
            </Wrapper>
        </section>
    );
};

export default Contact;
