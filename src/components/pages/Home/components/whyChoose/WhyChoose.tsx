import React from 'react';
import {H1, Inner, Wrapper, Image, Stars, Dots, Dot, Dot2, RhombsBottom} from "./WhyChooseStyles";

const WhyChoose = () => {
    return (
        <section className='why-choose'>
            <Wrapper>
                <Inner>
                    <Stars src='/assets/images/stars-why-choose.png'/>
                    <H1>Why choose Tinvio?</H1>
                    <Image src='/assets/images/why-choose.png'/>
                    <Dots>
                        <Dot/>
                        <Dot2/>
                        <Dot/>
                        <Dot/>
                    </Dots>
                    {/*<RhombsBottom src='/assets/images/rhombs-bottom-why-choose.png'/>*/}
                </Inner>
            </Wrapper>
        </section>
    );
};

export default WhyChoose;
