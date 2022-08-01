import React from 'react';
import {BoxInner, BoxWrapper, DeviceLeft, DeviceRight, H1, MainBox, Rhombs, Text, TextWrapper, Wrapper } from './GetSmarterStyles';

const GetSmarter = () => {
    return (
        <section className='get-smarter'>
            <Wrapper>
                <TextWrapper>
                    <H1>Get smarter about all the little details</H1>
                    <Text>Monitor your transaction activity on one dashboard. Generate customized order, invoice,
                        and payments reports. Prevent fraud, improve operations, and grow grow grow!
                    </Text>
                </TextWrapper>
                <BoxWrapper>
                    <MainBox>
                        <BoxInner/>
                    </MainBox>
                    <Rhombs/>
                    <DeviceLeft src='/assets/images/features/get-smarter-device-left.png'/>
                    <DeviceRight src='/assets/images/features/get-smarter-device-right.png'/>
                </BoxWrapper>
            </Wrapper>
        </section>
    );
};

export default GetSmarter;