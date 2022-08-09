import React from 'react';
import {
    DotWrapper,
    H1,
    ImgDevice, ImgScreen,
    Li,
    LightDot,
    List,
    LiWrapper,
    TabWrapper1,
    TabWrapper2,
    TabWrapper4, Title,
    Wrapper,
    Year
} from "./DoneStyles";

const Done = () => {
    return (
        <section className='done'>
            <Wrapper>
                <H1>What we’ve done</H1>
                <TabWrapper1>
                    <Year>2021</Year>
                    <List>
                        <LiWrapper>
                            <div>
                                <DotWrapper>
                                    <LightDot/>
                                </DotWrapper>
                            </div>
                            <Li>
                                Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more
                            </Li>
                        </LiWrapper>
                        <LiWrapper>
                            <div>
                                <DotWrapper>
                                    <LightDot/>
                                </DotWrapper>
                            </div>
                            <Li>
                                Series A funding to build embedded supply chain financing products for our users
                            </Li>
                        </LiWrapper>
                        <LiWrapper>
                            <div>
                                <DotWrapper>
                                    <LightDot/>
                                </DotWrapper>
                            </div>
                            <Li>
                                Expand into new verticals and markets. Close the year with 200 team members and 4000+
                                active businesses across the region
                            </Li>
                        </LiWrapper>
                    </List>
                </TabWrapper1>
                <TabWrapper2>
                    <ImgScreen src='/assets/images/company/done-screen.png'/>
                </TabWrapper2>
                <TabWrapper4>
                    <Title>Dark mode too!</Title>
                    <ImgDevice src='/assets/images/company/done-device.png'/>
                </TabWrapper4>
            </Wrapper>
        </section>
    );
};

export default Done;
