import React from 'react';
import {Container} from '../common/Header/HeaderStyles';
import {
    BlockWrapper,
    Box,
    BoxInner,
    BoxWrapper,
    Button, DeviceLeft, DeviceRight,
    Emoji,
    H1, HowItWorksInner, HowItWorksRotated, HowItWorksWrapper,
    MainBox,
    RhombsBottom,
    RhombsTop,
    TextAfterButton,
    TextBeforeButton,
    TextWrapper,
    Wrapper
} from './HomeStyles';

const Home = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <H1>Collecting payments <span>is easy</span>, right?</H1>
                    <TextBeforeButton>Manage all your supply chain transactions in one dashboard. Get paid faster,
                        reconcile quicker, grow bigger.</TextBeforeButton>
                    <Button>Get Started Now</Button>
                    <TextWrapper>
                        <TextAfterButton>It's free to try!</TextAfterButton>
                        <Emoji src='/assets/images/emoji.svg'/>
                    </TextWrapper>
                </Wrapper>
            </Container>
            <BlockWrapper>
                <BoxWrapper>
                    <MainBox>
                        <Box>
                            <BoxInner>
                                <RhombsTop/>
                                <RhombsBottom/>
                            </BoxInner>
                        </Box>
                    </MainBox>
                </BoxWrapper>
                <DeviceLeft src='/assets/images/deviceLeft.png'/>
                <DeviceRight src='/assets/images/deviceRight.png'/>
            </BlockWrapper>
            <HowItWorksWrapper>
                <HowItWorksInner>
                    <HowItWorksRotated/>
                </HowItWorksInner>
            </HowItWorksWrapper>
        </div>

    );
};
export default Home;