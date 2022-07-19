import React from 'react';
import {
    BlockWrapper,
    Box, BoxInner, BoxWrapper, Button, DeviceLeft, DeviceRight, Emoji, H1, MainBox,
    RhombsBottom,
    RhombsTop, RhombusBottom, RhombusTop, TextAfterButton, TextBeforeButton, TextWrapper, Wrapper, WrapperCommon
} from "./PreviewStyles";

const Preview = () => {
    return (
        <section className='preview'>
            <WrapperCommon>
                <RhombusTop/>
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
                <BlockWrapper>
                    <BoxWrapper>
                        <MainBox>
                            <Box>
                                <BoxInner>
                                    <RhombsTop/>
                                    <RhombsBottom/>
                                    <DeviceLeft src='/assets/images/device-left-preview.png'/>
                                    <DeviceRight src='/assets/images/device-right-preview.png'/>
                                </BoxInner>
                            </Box>
                        </MainBox>
                    </BoxWrapper>
                </BlockWrapper>
            </WrapperCommon>
        </section>
    );
};

export default Preview;

