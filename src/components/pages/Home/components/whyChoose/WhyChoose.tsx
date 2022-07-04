import React from 'react';
import {H1, Inner, Wrapper, Image, Stars} from "./WhyChooseStyles";

const WhyChoose = () => {
    return (
        <div>
            <Wrapper>
                <Inner>
                    <Stars src='/assets/images/stars-why-choose.png'/>
                    <H1>Why choose Tinvio?</H1>
                    <Image src='/assets/images/why-choose.png'/>
                </Inner>
            </Wrapper>
        </div>
    );
};

export default WhyChoose;
