import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import {useToggle} from 'react-use';
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
    ArrowOrders,
    Icon1,
    Icon2,
    Icon3,
    StarsTab1,
    StarsTab2,
    StarsTopTab3,
    StarsRightTab3,
    RhombsLeft,
    RhombsRight,
    Rhombus, TextWrapper, PlayerWrapper, DarkBackground
} from './HowItWorksStyles';

const HowItWorks = () => {
    const VIDEO_URL = 'https://www.youtube.com/watch?v=uXnLyUZYkVw'
    const [isOpen, setOpen] = useToggle(false)

    return (
        <section className='how-it-works'>
            <PlayerWrapper isOpen={isOpen} onClick={() => {
                setOpen(false)
            }}>
                <ReactPlayer
                    url={VIDEO_URL}
                    controls={true}
                    playing={true}
                    muted={true}
                />
            </PlayerWrapper>
            <DarkBackground isOpen={isOpen}/>
            <Wrapper>
                <Inner>
                    <Rhombus/>
                    <TextWrapper>
                        <H1>Check out how it works</H1>
                        <Text>
                            It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments
                            across your supply chain — all within one dashboard.
                        </Text>
                        <Button isOpen={isOpen} onClick={() => setOpen()}>Play Video</Button>
                    </TextWrapper>

                    <div>
                        <Tabs>

                            <Tab1>
                                <StarsTab1/>
                                <Title>Chats</Title>
                                <TabText>Connect to anyone in your supply chain and exchange messages</TabText>
                                <Icon1/>
                            </Tab1>

                            <ArrowChats/>
                            <ArrowOrders/>

                            <Tab2>
                                <StarsTab2/>
                                <Title>Orders</Title>
                                <TabText2>Create or confirm purchase orders with tap of a button</TabText2>
                                <Icon2/>
                            </Tab2>

                            <Tab3>
                                <StarsTopTab3/>
                                <StarsRightTab3/>
                                <Title>Payments</Title>
                                <TabText3>Send invoices and reconcile payments in one dashboard</TabText3>
                                <Icon3/>
                            </Tab3>

                        </Tabs>
                    </div>
                    <RhombsLeft/>
                    <RhombsRight/>
                </Inner>
            </Wrapper>
        </section>
    );
};

export default HowItWorks;
