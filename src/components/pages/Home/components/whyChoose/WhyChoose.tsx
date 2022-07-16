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
    Text,
    TextBox,
    Logo1,
    Name,
    Position,
    Quotes1,
    Caption,
    LogoText,
    Img2,
    Img3,
    Img4, Slide2, Slide3, Slide4, Logo2, Logo3, Logo4, Caption2, Caption3, Caption4, Quotes3, Quotes4, Quotes2
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
                    {/*<div>*/}
                    {/*    <Image1 slide={slide} src='/assets/images/why-choose-1.png'/>*/}
                    {/*    <Image2 slide={slide} src='/assets/images/why-choose-2.png'/>*/}
                    {/*    <Image3 slide={slide} src='/assets/images/why-choose-3.png'/>*/}
                    {/*    <Image4 slide={slide} src='/assets/images/why-choose-4.png'/>*/}
                    {/*</div>*/}
                    <Slider>
                        <Slide1 slide={slide}>
                            <Img1 src='/assets/images/why-choose-eggs.png'/>
                            <TextBox>
                                <Text>Tinvio definitely helps to reduce the time and errors in order management
                                    between customers and suppliers. It’s super easy to use and available on mobile and
                                    web, and the team are friendly and always helpful.
                                </Text>
                            </TextBox>
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
                        </Slide1>

                        <Slide2 slide={slide}>
                            <Img2 src='/assets/images/why-choose-milk.png'/>
                            <TextBox>
                                <Text>Tinvio helps our business run smoother. We can manage our customer's orders,
                                    receivables, and most importantly, trace and reconcile their payments without
                                    checking banking apps or statements.
                                </Text>
                            </TextBox>
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
                        </Slide2>

                        <Slide3 slide={slide}>
                            <Img3 src='/assets/images/why-choose-cup.png'/>
                            <TextBox>
                                <Text>With Tinvio, it's easier for my customers to make payments across various
                                    methods. Every payment is also collected in one business account where funds can be
                                    withdrawn instantly at any time.
                                </Text>
                            </TextBox>
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
                        </Slide3>

                        <Slide4 slide={slide}>
                            <Img4 src='/assets/images/why-choose-spoon.png'/>
                            <TextBox>
                                <Text>Tinvio has been a foundational partner and solution. We now have faster and more
                                    efficient communication with our clients, which makes order processing and
                                    deliveries smoother than ever before.
                                </Text>
                            </TextBox>
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
