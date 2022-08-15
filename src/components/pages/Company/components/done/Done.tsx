import React from 'react';
import {
    H1,
    ImgDevice, ImgScreen, Tabs,
    TabWrapper2,
    TabWrapper4, Title,
    Wrapper, Wrapper1
} from "./DoneStyles";
import DoneTab from "../../../../common/doneTab/DoneTab";

const Done = () => {
    return (
        <section className='done'>
            <Wrapper>
                <H1>What we’ve done</H1>
                <Tabs>
                    <DoneTab
                        year={'2021'}
                        Li1={'Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more'}
                        Li2={'Series A funding to build embedded supply chain financing products for our users'}
                        Li3={'Expand into new verticals and markets. Close the year with 200 team members and 4000+ active '
                            + 'businesses across the region'}
                        margin={'0'}
                        borderRadius={'0 32px 32px 0'}
                        width1024={'500px'}
                        yearFontSize768
                        yearLineHeight768
                        yearFontSize1920
                        yearLineHeight1920
                        liFontSize768
                        liLineHeight768
                        liFontSize1920
                        liLineHeight1920
                        liWrapMargin768
                        listPadding768
                    />
                    <Wrapper1>
                        <TabWrapper2>
                            <ImgScreen src='/assets/images/company/done-screen.png'/>
                        </TabWrapper2>
                        <DoneTab
                            year={'2020'}
                            Li1={'Seed funding led by Sequoia, GFC'}
                            Li2={'Launch multi-country localization, digital invoicing and more'}
                            Li3={'Adapt to Covid-19. Triple our team size to 100. Activate 1000+ new businesses'}
                            dotColor
                            background
                            textColor={'#FFFFFF'}
                            borderRadius={'32px'}
                        />
                    </Wrapper1>
                    <TabWrapper4>
                        <Title>Dark mode too!</Title>
                        <ImgDevice src='/assets/images/company/done-device.png'/>
                    </TabWrapper4>
                    <DoneTab
                        year={'Q3 2019'}
                        Li1={'Our founder Ajay raises pre-seed in Europe. Moves back home to Singapore to start Tinvio'}
                        Li2={'Zero to one in team, product, processes. Launch merchant mobile app'}
                        Li3={'Ajay meets our COO Tedo. Expand into Indonesia and more markets'}
                        borderRadius={'32px 0 0 32px'}
                        width768={'376px'}
                        margin768={'16px 0 0'}
                    />
                </Tabs>
            </Wrapper>
        </section>
    );
};

export default Done;
