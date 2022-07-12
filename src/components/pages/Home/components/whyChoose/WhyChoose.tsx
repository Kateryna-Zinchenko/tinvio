import React, {useState} from 'react';
import {
    H1,
    Inner,
    Wrapper,
    Image1,
    Stars,
    Dots,
    Dot2,
    Dot1,
    Dot3,
    Dot4,
    Image2,
    Image3,
    Image4,
    RhombsBottom
} from "./WhyChooseStyles";

const WhyChoose = () => {
    const [slide, setSlide]: any = useState('first-slide')
    return (
        <section className='why-choose'>
            <Wrapper>
                <RhombsBottom src='/assets/images/rhombs-bottom-why-choose.png'/>
                <Stars src='/assets/images/stars-why-choose.png'/>
                <Inner>
                    <H1>Why choose Tinvio?</H1>
                    <div>
                        <Image1 slide={slide} src='/assets/images/why-choose-1.png'/>
                        <Image2 slide={slide} src='/assets/images/why-choose-2.png'/>
                        <Image3 slide={slide} src='/assets/images/why-choose-3.png'/>
                        <Image4 slide={slide} src='/assets/images/why-choose-4.png'/>
                    </div>
                    <Dots>
                        <Dot1 slide={slide} onClick={() => setSlide('first-slide')}/>
                        <Dot2 slide={slide} onClick={() => setSlide('second-slide')}/>
                        <Dot3 slide={slide} onClick={() => setSlide('third-slide')}/>
                        <Dot4 slide={slide} onClick={() => setSlide('fourth-slide')}/>
                    </Dots>
                </Inner>
            </Wrapper>
        </section>
    );
};

export default WhyChoose;
