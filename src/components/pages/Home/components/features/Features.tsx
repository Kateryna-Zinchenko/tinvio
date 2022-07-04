import React, {useState} from 'react';
import {Container} from "../../../../common/container/Container";
import {
    Title,
    Wrapper,
    Options,
    Option,
    Button,
    Dot,
    Li,
    Cursor,
    Option2,
    Option3,
    Text2, Text3, Text1, BlockWrapper1, PurpleSquare, RedSquare, DeviceLeft, DeviceRight
} from "./FeaturesStyles";

const Features = () => {
    const [isOption, setIsOption] = useState('chats');

    return (
        <section className='features'>
            <Container>
                <Wrapper>
                    <Title>
                            Smarter supply chain transactions. <span>More buddy</span>
                    </Title>
                    <Cursor/>
                    <Options>
                        <Option isOption={isOption} onClick={() => (setIsOption('chats'))}>Chats</Option>
                        <Option2 isOption={isOption} onClick={() => (setIsOption('orders'))}>Orders</Option2>
                        <Option3 isOption={isOption} onClick={() => (setIsOption('payments'))}>Payments</Option3>
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
                </Wrapper>
            </Container>
            <BlockWrapper1>
                <PurpleSquare>
                    <RedSquare/>
                </PurpleSquare>
                <DeviceLeft src='/assets/images/device-left-features.png'/>
                <DeviceRight src='/assets/images/device-left-features.png'/>
            </BlockWrapper1>
        </section>
    );
};

export default Features;
