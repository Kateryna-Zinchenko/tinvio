import React from 'react';
import {
    Dot,
    DotWrapper,
    H1,
    Img,
    Option,
    Options,
    OptionsWrapper1,
    OptionsWrapper2,
    P,
    Text,
    Title,
    Wrapper
} from "./DashboardStyles";

const Dashboard = () => {
    return (
        <section className='supercharge'>
            <div>
                <H1>Supercharge your business with Tinvio</H1>
                <Wrapper>
                    <Options>
                        <OptionsWrapper1>
                            <Option>
                                <Title>
                                    <DotWrapper>
                                        <Dot/>
                                    </DotWrapper>
                                    Chats
                                </Title>
                                <P>
                                    Send messages, invoices, and payment links directly to customers (even if they’re
                                    not on
                                    Tinvio)
                                </P>
                            </Option>
                            <Option>
                                <Title>
                                    <DotWrapper>
                                        <Dot/>
                                    </DotWrapper>
                                    Orders
                                </Title>
                                <P>
                                    Receive, manage, and track all your orders in a format designed to prevent mistakes
                                </P>
                            </Option>
                        </OptionsWrapper1>

                        <OptionsWrapper2>
                            <Option>
                                <Title>
                                    <DotWrapper>
                                        <Dot/>
                                    </DotWrapper>
                                    Payments
                                </Title>
                                <P>
                                    Collect payments and reconcile them against invoices, without checking bank
                                    statements
                                </P>
                            </Option>
                            <Text>
                                <DotWrapper>
                                    <Dot/>
                                </DotWrapper>
                                And more in one dashboard...
                            </Text>
                        </OptionsWrapper2>
                    </Options>
                    <Img src='/assets/images/features/supercharge-screen.png'/>
                </Wrapper>
            </div>
        </section>
    );
};

export default Dashboard;
