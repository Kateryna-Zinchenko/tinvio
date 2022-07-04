import React from 'react';
import {H1, Inner, Wrapper, Image} from "./WhyChooseStyles";

const WhyChoose = () => {
    return (
        <div>
            <Wrapper>
                <Inner>
                    <H1>Why choose Tinvio?</H1>
                    <Image src='/assets/images/why-choose.png'/>
                </Inner>
            </Wrapper>
        </div>
    );
};

export default WhyChoose;
