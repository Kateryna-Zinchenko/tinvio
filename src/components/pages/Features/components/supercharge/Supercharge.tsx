import React from 'react';
import {H1, Img, Option, Options, P, Text, Title, Wrapper} from "./SuperchargeStyles";

const Supercharge = () => {
    return (
        <section className='supercharge'>
            <div>
                <H1>Supercharge your business with Tinvio</H1>
                <Wrapper>
                    <Options>
                        <Option>
                            <Title>Chats</Title>
                            <P>
                                Send messages, invoices, and payment links directly to customers (even if they’re not on
                                Tinvio)
                            </P>
                        </Option>
                        <Option>
                            <Title>Orders</Title>
                            <P>
                                Receive, manage, and track all your orders in a format designed to prevent mistakes
                            </P>
                        </Option>
                        <Option>
                            <Title>Payments</Title>
                            <P>
                                Collect payments and reconcile them against invoices, without checking bank statements
                            </P>
                        </Option>
                    </Options>
                    <Text>And more in one dashboard...</Text>
                    <Img src='/assets/images/features/supercharge-screen.png'/>
                </Wrapper>
            </div>
        </section>
    );
};

export default Supercharge;
