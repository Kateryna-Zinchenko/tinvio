import React, {useState} from 'react';
import {
    H1,
    Inner,
    Wrapper,
    Stars,
    Dots,
    Dot2,
    Dot1,
    Dot3,
    Dot4,
    RhombsBottom,
    Slider,
    Slide1,
    Img1,
    Text1,
    TextBox1,
    Logo1,
    Name,
    Position,
    Quotes1,
    Caption,
    LogoText,
    Img2,
    Img3,
    Img4,
    Slide2,
    Slide3,
    Slide4,
    Logo2,
    Logo3,
    Logo4,
    Caption2,
    Caption3,
    Caption4,
    Quotes3,
    Quotes4,
    Quotes2,
    TextBox2,
    TextBox3,
    TextBox4,
    Text2,
    Text3,
    Text4, Arrows, ArrowLeft, ArrowRight, ArrowBox
} from "./WhyChooseStyles";

const WhyChoose = () => {
    const [slide, setSlide]: any = useState('first-slide');
    return (
        <section className='why-choose'>
            <Wrapper>
                <RhombsBottom/>
                <Stars src='/assets/images/stars-why-choose.png'/>
                <Inner>
                    <H1>Why choose Tinvio?</H1>
                    <Slider>
                        <Slide1 slide={slide}>
                            <Img1 src='/assets/images/why-choose-eggs.png'/>
                            <TextBox1>
                                <Text1>Tinvio definitely helps to reduce the time and errors in order management
                                    between customers and suppliers. It’s super easy to use and available on mobile and
                                    web, and the team are friendly and always helpful.
                                </Text1>
                            </TextBox1>
                            <Caption>
                                <LogoText>
                                    <Logo1 src='/assets/images/why-choose-logo-1.png'/>
                                    <div>
                                        <Name>Fathira Dida</Name>
                                        <Position>Owner (Baker Old)</Position>
                                    </div>
                                </LogoText>
                                <Quotes1/>
                            </Caption>
                            <Arrows>
                                <ArrowBox onClick={() => setSlide('fourth-slide')}>
                                    <ArrowLeft/>
                                </ArrowBox>
                                <ArrowBox onClick={() => setSlide('second-slide')}>
                                    <ArrowRight/>
                                </ArrowBox>
                            </Arrows>
                        </Slide1>

                        <Slide2 slide={slide}>
                            <Img2 src='/assets/images/why-choose-milk.png'/>
                            <TextBox2>
                                <Text2>Tinvio helps our business run smoother. We can manage our customer's orders,
                                    receivables, and most importantly, trace and reconcile their payments without
                                    checking banking apps or statements.
                                </Text2>
                            </TextBox2>
                            <Caption2>
                                <LogoText>
                                    <Logo2 src='/assets/images/why-choose-logo-2.png'/>
                                    <div>
                                        <Name>Punnasiri Chaipatikul</Name>
                                        <Position>Business Development Manager (Phaitong Station)</Position>
                                    </div>
                                </LogoText>
                                <Quotes2/>
                            </Caption2>
                            <Arrows>
                                <ArrowBox onClick={() => setSlide('first-slide')}>
                                    <ArrowLeft/>
                                </ArrowBox>
                                <ArrowBox onClick={() => setSlide('third-slide')}>
                                    <ArrowRight/>
                                </ArrowBox>
                            </Arrows>
                        </Slide2>

                        <Slide3 slide={slide}>
                            <Img3 src='/assets/images/why-choose-cup.png'/>
                            <TextBox3>
                                <Text3>With Tinvio, it's easier for my customers to make payments across various
                                    methods. Every payment is also collected in one business account where funds can be
                                    withdrawn instantly at any time.
                                </Text3>
                            </TextBox3>
                            <Caption3>
                                <LogoText>
                                    <Logo3 src='/assets/images/why-choose-logo-3.png'/>
                                    <div>
                                        <Name>Pauline Limgenco</Name>
                                        <Position>Director (Moonleaf)</Position>
                                    </div>
                                </LogoText>
                                <Quotes3/>
                            </Caption3>
                            <Arrows>
                                <ArrowBox onClick={() => setSlide('second-slide')}>
                                    <ArrowLeft/>
                                </ArrowBox>
                                <ArrowBox onClick={() => setSlide('fourth-slide')}>
                                    <ArrowRight/>
                                </ArrowBox>
                            </Arrows>
                        </Slide3>

                        <Slide4 slide={slide}>
                            <Img4 src='/assets/images/why-choose-spoon.png'/>
                            <TextBox4>
                                <Text4>Tinvio has been a foundational partner and solution. We now have faster and more
                                    efficient communication with our clients, which makes order processing and
                                    deliveries smoother than ever before.
                                </Text4>
                            </TextBox4>
                            <Caption4>
                                <LogoText>
                                    <Logo4 src='/assets/images/why-choose-logo-4.png'/>
                                    <div>
                                        <Name>Hafidz & Indah</Name>
                                        <Position>Owners (Sejadah Grocery)</Position>
                                    </div>
                                </LogoText>
                                <Quotes4/>
                            </Caption4>
                            <Arrows>
                                <ArrowBox onClick={() => {setSlide('third-slide')}}>
                                    <ArrowLeft/>
                                </ArrowBox>
                                <ArrowBox onClick={() => setSlide('first-slide')}>
                                    <ArrowRight/>
                                </ArrowBox>
                            </Arrows>
                        </Slide4>
                    </Slider>
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
