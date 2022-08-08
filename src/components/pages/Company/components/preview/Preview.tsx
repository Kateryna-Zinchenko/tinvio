import React from 'react';
import {Button, H1, Img, MainImg, P, Stars, StarsTop, Text, TextWrapper, Wrapper} from "./PreviewStyles";

const Preview = () => {
    return (
        <section className='preview'>
            <Wrapper>
                <H1>
                    <StarsTop/>
                    Hi, we’re <span>Tinvio</span>!
                </H1>
                <P>We’re reimaging how merchants and suppliers transact.</P>
                <Img>
                    <Stars/>
                    <MainImg src='/assets/images/company/preview.png'/>
                </Img>
                <TextWrapper>
                    <Text>
                        <p>
                            Tinvio is built for B2B transactions. It's an app, it's a dashboard, it's a checkout link,
                            it's
                            a digital wallet, it's a credit line, it's money in (and out) of your bank, and so much
                            more.
                            Tradition meets modern in a delightful chat-led user experience. The best part? We make it
                            fast,
                            flexible, and fun.
                        </p>
                        <p>
                            Why do we do it? It's painfully frustrating for businesses to transact. Our
                            generation are minting NFTs on blockchains everyday and about to colonize Mars, but in our
                            supply chains, businesses are still exchanging cold hard cash, writing checks, and keying
                            manual
                            bank transfers. We're going to reimagine the status quo, we're going to digitize the
                            zillions of
                            these offline receivables and payables. One transaction at a time.
                        </p>
                    </Text>
                    <Button>Contact Us</Button>
                </TextWrapper>
            </Wrapper>
        </section>
    );
};

export default Preview;
