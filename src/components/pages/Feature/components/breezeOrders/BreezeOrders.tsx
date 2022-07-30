import React from 'react';
import {
    ArrowCenter, ArrowLeft,
    ArrowRight,
    Box,
    BoxInner,
    BoxWrapper, Button, ConfirmOrder,
    ContentBox,
    H1, ImgMan,
    ImgWoman, InnerBox, MainBox, Price, StarsWoman,
    Tab1,
    Tab2,
    Text,
    TextWrapper, Title,
    Wrapper
} from "./BreezeOrdersStyles";

const BreezeOrders = () => {
    return (
        <section className='breeze-orders'>
            <Wrapper>
                <TextWrapper>
                    <H1>Breeze through orders without the stress</H1>
                    <Text>Your customers will love that they can browse item catalogs and check availability before
                        placing orders. You’ll receive orders in beautifully formatted lists. Confirm or amend them in
                        a few taps, even when on-the-go!</Text>
                </TextWrapper>
                <BoxWrapper>
                    <Box>
                        <BoxInner>
                            <ContentBox>
                                <div>
                                    <Tab1 src='/assets/images/features/breeze-orders-tab1.png'/>
                                    <Tab2 src='/assets/images/features/breeze-orders-tab2.png'/>
                                    <ImgWoman src='/assets/images/features/breeze-orders-woman.png'/>
                                    <ImgMan src='/assets/images/features/breeze-orders-man.png'/>
                                    <ConfirmOrder>
                                        <MainBox>
                                            <InnerBox>
                                                <Title>Total Amount</Title>
                                                <Price>$ 1340.00</Price>
                                            </InnerBox>
                                            <Button>Confirm Order (9 Items)</Button>
                                        </MainBox>
                                    </ConfirmOrder>
                                </div>
                                <ArrowRight src='/assets/images/features/breeze-orders-arrow-r.png'/>
                                <ArrowCenter src='/assets/images/features/breeze-orders-arrow-c.png'/>
                                <ArrowLeft src='/assets/images/features/breeze-orders-arrow-l.png'/>
                                <StarsWoman/>
                            </ContentBox>
                        </BoxInner>
                    </Box>
                </BoxWrapper>
            </Wrapper>
        </section>
    );
};

export default BreezeOrders;
