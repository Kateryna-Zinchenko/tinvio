import React from 'react';
import {Container} from "../../../../common/container/Container";
import {
    BigBoxWrapper, Box, Boxes1, Boxes2, Boxes3, BoxesWrapper,
    BoxesWrapper2, BoxImg1, BoxImg10, BoxImg2, BoxImg3, BoxImg4, BoxImg5,
    BoxImg6, BoxImg7, BoxImg8, BoxImg9, BoxInner, BoxWrapper, H1, MainBox, MiddleBox, PurpleBox,
    RedBox, Text, Wrapper
} from "./BusinessesStyles";

const Businesses = () => {
    return (
        <section className='businesses'>
            <Container>
                <Wrapper>
                    <H1>We’ll put a smile on your supply chain</H1>
                    <BoxesWrapper>
                        <Boxes1>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg1 src="/assets/images/pet-shop.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                        </Boxes1>
                        <Boxes2>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg2 src="/assets/images/nex.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg3 src="/assets/images/bbs.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                        </Boxes2>
                        <Boxes3>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg4 src="/assets/images/nayla.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg5 src="/assets/images/tk.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                        </Boxes3>
                    </BoxesWrapper>
                    <BigBoxWrapper>
                        <PurpleBox>
                            <MiddleBox>
                                <RedBox>
                                    <BoxInner>
                                        <Text>5000+<br/>happy businesses</Text>
                                        <img src='/assets/images/curve.svg'/>
                                    </BoxInner>
                                </RedBox>
                            </MiddleBox>
                        </PurpleBox>
                    </BigBoxWrapper>
                    <BoxesWrapper2>
                        <Boxes1>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg6 src="/assets/images/kho-pa-ka.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                        </Boxes1>
                        <Boxes2>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg7 src="/assets/images/gong-cha.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg8 src="/assets/images/es-tech.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                        </Boxes2>
                        <Boxes3>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg9 src="/assets/images/group-of.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                            <BoxWrapper>
                                <MainBox>
                                    <Box>
                                        <BoxImg10 src="/assets/images/burger-lobster.png" alt="#"/>
                                    </Box>
                                </MainBox>
                            </BoxWrapper>
                        </Boxes3>
                    </BoxesWrapper2>
                </Wrapper>
            </Container>
        </section>
    );
};

export default Businesses;