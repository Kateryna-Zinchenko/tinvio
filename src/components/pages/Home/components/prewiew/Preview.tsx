import React from 'react';
import {Container} from "../../../../common/container/Container";
import {
    BlockWrapper,
    Box, BoxInner, BoxWrapper, Button, DeviceLeft, DeviceRight, Emoji, H1, MainBox,
    RhombsBottom,
    RhombsTop, RhombusBottom, RhombusTop, TextAfterButton, TextBeforeButton, TextWrapper, Wrapper
} from "./PreviewStyles";

const Preview = () => {
    return (
        <section className='preview'>
            <Container>
                {/*<RhombusTop/>*/}
                <RhombusBottom/>
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
                                <DeviceLeft src='/assets/images/deviceLeft.png'/>
                                <DeviceRight src='/assets/images/deviceRight.png'/>
                            </BoxInner>
                        </Box>
                    </MainBox>
                </BoxWrapper>
            </BlockWrapper>
        </section>
    );
};

export default Preview;

