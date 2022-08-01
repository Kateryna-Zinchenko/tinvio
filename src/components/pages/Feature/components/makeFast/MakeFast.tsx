import React from 'react';
import {
    BoxWrapper,
    DeviceLeft,
    DeviceRight,
    H1,
    PurpleBox,
    RedBox,
    Rhombs, Stars,
    Text,
    TextWrapper,
    Wrapper
} from './MakeFastStyles';

const MakeFast = () => {
    return (
        <section className='make-fast'>
            <Wrapper>
                <TextWrapper>
                    <H1>Make collections fast, flexible, fun</H1>
                    <Text>Give customers a modern B2B payments experience, with more ways to pay (including credit
                        terms). Zero setup or risk for you. They’ll stay with you longer, purchase more from you,
                        and you’ll get cash in your bank so much faster!
                    </Text>
                </TextWrapper>
                <BoxWrapper>
                    <PurpleBox>
                        <RedBox/>
                    </PurpleBox>
                    <Rhombs/>
                    <Stars/>
                    <DeviceLeft src='/assets/images/features/make-fast-device-left.png'/>
                    <DeviceRight src='/assets/images/features/make-fast-device-right.png'/>
                </BoxWrapper>
            </Wrapper>
        </section>
    );
};

export default MakeFast;