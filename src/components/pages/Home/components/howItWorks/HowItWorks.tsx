import React from 'react';
import {
    H1,
    Inner,
    Wrapper,
    Text,
    Button,
    Tabs,
    Tab1,
    Title,
    TabText,
    Tab2,
    Tab3,
    TabText2,
    TabText3,
    ArrowChats,
    ArrowOrders, Icon1, Icon2, Icon3, StarsTab1, StarsTab2, StarsTopTab3, StarsRightTab3, RhombsLeft, RhombsRight, Rhombus
} from './HowItWorksStyles';

const HowItWorks = () => {
    return (
        <section className='how-it-works'>
                <Wrapper>
                    <Inner>
                        <Rhombus/>
                        <H1>Check out how it works</H1>
                        <Text>
                            It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments
                            across your supply chain — all within one dashboard.
                        </Text>
                        <Button>Play Video</Button>
                        <Tabs>
                            <RhombsLeft src='/assets/images/rhombs-left-why-choose.png'/>
                            <RhombsRight src='/assets/images/rhombs-right-why-choose.png'/>
                            <StarsTab1/>
                            <Tab1>
                                <Title>Chats</Title>
                                <TabText>Connect to anyone in your supply chain and exchange messages</TabText>
                            </Tab1>
                            <Icon1 src='/assets/icons/chats.png'/>
                            <ArrowChats src='/assets/icons/arrow-chats-orders.svg'/>
                            <ArrowOrders src='/assets/icons/arrow-orders-payments.svg'/>
                            <StarsTab2/>
                            <Tab2>
                                <Title>Orders</Title>
                                <TabText2>Create or confirm purchase orders with tap of a button</TabText2>
                            </Tab2>
                            <Icon2 src='/assets/icons/orders.png'/>
                            <StarsTopTab3/>
                            <StarsRightTab3/>
                            <Tab3>
                                <Title>Payments</Title>
                                <TabText3>Send invoices and reconcile payments in one dashboard</TabText3>
                            </Tab3>
                            <Icon3 src='/assets/icons/payments.png'/>
                        </Tabs>
                    </Inner>
                </Wrapper>
        </section>
    );
};

export default HowItWorks;
