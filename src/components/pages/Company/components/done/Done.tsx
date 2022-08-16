import React from 'react';
import {
    DotWrapper,
    H1,
    ImgDevice, ImgScreen, Li, Li1, LightDot, LightDot3, List, List1, LiWrapper, LiWrapper1, Tabs, TabWrapper1,
    TabWrapper2, TabWrapper3,
    TabWrapper4, TabWrapper5, Title,
    Wrapper, Year3, Year1, Year5, Li5, WrapperFor3, WrapperFor2
} from "./DoneStyles";

const Done = () => {

    return (
        <section className='done'>
            <Wrapper>
                <H1>What we’ve done</H1>
                <Tabs>
                    {/*<DoneTab*/}
                    {/*    year={'2021'}*/}
                    {/*    Li1={'Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more'}*/}
                    {/*    Li2={'Series A funding to build embedded supply chain financing products for our users'}*/}
                    {/*    Li3={'Expand into new verticals and markets. Close the year with 200 team members and 4000+ active '*/}
                    {/*        + 'businesses across the region'}*/}
                    {/*    margin={'0'}*/}
                    {/*    borderRadius={'0 32px 32px 0'}*/}
                    {/*    width1024={'500px'}*/}
                    {/*    yearFontSize768*/}
                    {/*    yearLineHeight768*/}
                    {/*    yearFontSize1920*/}
                    {/*    yearLineHeight1920*/}
                    {/*    liFontSize768*/}
                    {/*    liLineHeight768*/}
                    {/*    liFontSize1920*/}
                    {/*    liLineHeight1920*/}
                    {/*    liWrapMargin768*/}
                    {/*    listPadding768*/}
                    {/*/>*/}
                    {/*<Wrapper1>*/}
                    {/*    <TabWrapper2>*/}
                    {/*        <ImgScreen src='/assets/images/company/done-screen.png'/>*/}
                    {/*    </TabWrapper2>*/}
                    {/*    <DoneTab*/}
                    {/*        year={'2020'}*/}
                    {/*        Li1={'Seed funding led by Sequoia, GFC'}*/}
                    {/*        Li2={'Launch multi-country localization, digital invoicing and more'}*/}
                    {/*        Li3={'Adapt to Covid-19. Triple our team size to 100. Activate 1000+ new businesses'}*/}
                    {/*        dotColor*/}
                    {/*        background*/}
                    {/*        textColor={'#FFFFFF'}*/}
                    {/*        borderRadius={'32px'}*/}
                    {/*    />*/}
                    {/*</Wrapper1>*/}

                    {/*<DoneTab*/}
                    {/*    year={'Q3 2019'}*/}
                    {/*    Li1={'Our founder Ajay raises pre-seed in Europe. Moves back home to Singapore to start Tinvio'}*/}
                    {/*    Li2={'Zero to one in team, product, processes. Launch merchant mobile app'}*/}
                    {/*    Li3={'Ajay meets our COO Tedo. Expand into Indonesia and more markets'}*/}
                    {/*    borderRadius={'32px 0 0 32px'}*/}
                    {/*    width768={'376px'}*/}
                    {/*    margin768={'16px 0 0'}*/}
                    {/*/>*/}

                    <TabWrapper1>
                        <Year1>
                            2021
                        </Year1>
                        <List1>
                            <LiWrapper1>
                                <div>
                                    <DotWrapper>
                                        <LightDot/>
                                    </DotWrapper>
                                </div>
                                <Li1>
                                    Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more
                                </Li1>
                            </LiWrapper1>
                            <LiWrapper1>
                                <div>
                                    <DotWrapper>
                                        <LightDot/>
                                    </DotWrapper>
                                </div>
                                <Li1>
                                    Series A funding to build embedded supply chain financing products for our users
                                </Li1>
                            </LiWrapper1>
                            <LiWrapper1>
                                <div>
                                    <DotWrapper>
                                        <LightDot/>
                                    </DotWrapper>
                                </div>
                                <Li1>
                                    Expand into new verticals and markets. Close the year with 200 team members and
                                    4000+ active businesses across the region
                                </Li1>
                            </LiWrapper1>
                        </List1>
                    </TabWrapper1>

                    <WrapperFor3>
                        <TabWrapper2>
                            <ImgScreen src='/assets/images/company/done-screen.png'/>
                        </TabWrapper2>

                        <WrapperFor2>
                            <TabWrapper3>
                                <Year3>
                                    2020
                                </Year3>
                                <List>
                                    <LiWrapper>
                                        <div>
                                            <DotWrapper>
                                                <LightDot3/>
                                            </DotWrapper>
                                        </div>
                                        <Li>
                                            Seed funding led by Sequoia, GFC
                                        </Li>
                                    </LiWrapper>
                                    <LiWrapper>
                                        <div>
                                            <DotWrapper>
                                                <LightDot3/>
                                            </DotWrapper>
                                        </div>
                                        <Li>
                                            Launch multi-country localization, digital invoicing and more
                                        </Li>
                                    </LiWrapper>
                                    <LiWrapper>
                                        <div>
                                            <DotWrapper>
                                                <LightDot3/>
                                            </DotWrapper>
                                        </div>
                                        <Li>
                                            Adapt to Covid-19. Triple our team size to 100. Activate 1000+ new
                                            businesses
                                        </Li>
                                    </LiWrapper>
                                </List>
                            </TabWrapper3>

                            <TabWrapper4>
                                <Title>Dark mode too!</Title>
                                <ImgDevice src='/assets/images/company/done-device.png'/>
                            </TabWrapper4>
                        </WrapperFor2>

                    </WrapperFor3>

                    <TabWrapper5>
                        <Year5>
                            Q3 2019
                        </Year5>
                        <List>
                            <LiWrapper>
                                <div>
                                    <DotWrapper>
                                        <LightDot/>
                                    </DotWrapper>
                                </div>
                                <Li5>
                                    Our founder Ajay raises pre-seed in Europe. Moves back home to Singapore
                                    to start Tinvio
                                </Li5>
                            </LiWrapper>
                            <LiWrapper>
                                <div>
                                    <DotWrapper>
                                        <LightDot/>
                                    </DotWrapper>
                                </div>
                                <Li5>
                                    Zero to one in team, product, processes. Launch merchant mobile app
                                </Li5>
                            </LiWrapper>
                            <LiWrapper>
                                <div>
                                    <DotWrapper>
                                        <LightDot/>
                                    </DotWrapper>
                                </div>
                                <Li5>
                                    Ajay meets our COO Tedo. Expand into Indonesia and more markets
                                </Li5>
                            </LiWrapper>
                        </List>
                    </TabWrapper5>
                </Tabs>
            </Wrapper>
        </section>
    );
};

export default Done;
