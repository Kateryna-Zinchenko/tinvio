import React from 'react';
import {DotWrapper, H1, Li, LightDot, List, LiWrapper, TabWrapper1, Wrapper, Year} from "./DoneStyles";

const Done = () => {
    return (
        <section className='done'>
            <Wrapper>
                <H1>What we’ve done</H1>
                <TabWrapper1>
                    <Year>2021</Year>
                    <List>
                        <LiWrapper>
                            <DotWrapper>
                                <LightDot/>
                            </DotWrapper>
                            <Li>
                                Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more
                            </Li>
                        </LiWrapper>
                        <LiWrapper>
                            <DotWrapper>
                                <LightDot/>
                            </DotWrapper>
                            <Li>
                                Series A funding to build embedded supply chain financing products for our users
                            </Li>
                        </LiWrapper>
                        <LiWrapper>
                            <DotWrapper>
                                <LightDot/>
                            </DotWrapper>
                            <Li>
                                Expand into new verticals and markets. Close the year with 200 team members and 4000+
                                active businesses across the region
                            </Li>
                        </LiWrapper>
                    </List>
                </TabWrapper1>
            </Wrapper>
        </section>
    );
};

export default Done;
