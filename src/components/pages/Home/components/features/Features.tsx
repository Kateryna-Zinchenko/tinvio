import React, {useState} from 'react';
import {
    Wrapper,
    Options,
    Option,
    Button,
    Dot,
    Li,
    Option2,
    Option3,
    Text2,
    Text3,
    Text1,
    BlockWrapper1,
    PurpleSquare,
    RedSquare,
    DeviceLeft1,
    DeviceRight1,
    Stars,
    RhombsBottom,
    RhombsTop,
    Rhombus,
    H1,
    WrapperCommon,
    DeviceLeft2,
    DeviceRight2,
    DeviceLeft3,
    DeviceRight3
} from "./FeaturesStyles";

const Features = () => {
    const [isOption, setIsOption] = useState('chats');
    const [isText, setIsText] = useState('More buddy');

    return (
        <section className='features'>
            <WrapperCommon>
                <Wrapper>
                    <Rhombus/>
                    <H1>
                        Smarter supply chain transactions. <span>{isText}</span>
                    </H1>

                    <Options>
                        <Option isOption={isOption} onClick={() => {
                            setIsOption('chats')
                            setIsText('More buddy')
                        }
                        }>Chats</Option>
                        <Option2 isOption={isOption} onClick={() => {
                            setIsOption('orders')
                            setIsText('More speedy')
                        }
                        }>Orders</Option2>
                        <Option3 isOption={isOption} onClick={() => {
                            setIsOption('payments')
                            setIsText('More money')
                        }
                        }>Payments</Option3>
                    </Options>
                    <Text1 isOption={isOption}>
                        <Li>
                            <Dot/>
                            <li>Create chats with any business (even if they’re not on Tinvio)</li>
                        </Li>
                        <Li>
                            <Dot/>
                            <li>Fully integrated with your favorite chat apps</li>
                        </Li>
                        <Li>
                            <Dot/>
                            <li>Real-time messages and alerts</li>
                        </Li>
                    </Text1>
                    <Text2 isOption={isOption}>
                        <Li>
                            <Dot/>
                            <li>Create or confirm purchase orders at lightning speed</li>
                        </Li>
                        <Li>
                            <Dot/>
                            <li>Manage inventory details and availability in real-time</li>
                        </Li>
                        <Li>
                            <Dot/>
                            <li>24/7 order insights and data reports</li>
                        </Li>
                    </Text2>
                    <Text3 isOption={isOption}>
                        <Li>
                            <Dot/>
                            <li>Send invoices and easily track them until they’re paid</li>
                        </Li>
                        <Li>
                            <Dot/>
                            <li>Real-time payments settlement and reconciliation</li>
                        </Li>
                        <Li>
                            <Dot/>
                            <li>Safe, secure, and compliant</li>
                        </Li>
                    </Text3>
                    <Button>More Features</Button>
                    <RhombsTop/>
                </Wrapper>
                <BlockWrapper1>
                    <Stars/>
                    <PurpleSquare>
                        <RedSquare/>
                    </PurpleSquare>
                    <RhombsBottom/>
                    <DeviceLeft1 isOption={isOption} src='/assets/images/device-left-chats-features.png'/>
                    <DeviceRight1 isOption={isOption} src='/assets/images/device-right-chats-features.png'/>
                    <DeviceLeft2 isOption={isOption} src='/assets/images/device-left-orders-features.png'/>
                    <DeviceRight2 isOption={isOption} src='/assets/images/device-right-orders-features.png'/>
                    <DeviceLeft3 isOption={isOption} src='/assets/images/device-left-payments-features.png'/>
                    <DeviceRight3 isOption={isOption} src='/assets/images/device-right-payments-features.png'/>
                </BlockWrapper1>
            </WrapperCommon>
        </section>
    );
};

export default Features;
