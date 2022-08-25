import React from 'react';
import {Button, H1, Images, ImgMain, ImgMessage, ImgShare, Stars, Text, Wrapper} from "./TryItStyles";

const TryIt = () => {
    return (
        <section className='try-it'>
            <Wrapper>
                <Stars/>
                <H1>One dashboard, all your supply chain transactions</H1>
                <Text>From orders to real-time cash in your bank. Run your business like a rockstar.</Text>
                <Button>Try It for Free</Button>
                <Images>
                    <ImgMain src='/assets/images/features/try-it-main.png'/>
                    <ImgMessage src='/assets/images/features/try-it-message.png'/>
                    <ImgShare src='/assets/images/features/try-it-share.png'/>
                </Images>
            </Wrapper>
        </section>
    );
};

export default TryIt;
