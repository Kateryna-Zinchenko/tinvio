import React from 'react';
import {
    Button,
    H1,
    Img,
    ImgWrapper, Message, P1, P2,
    PWrapper,
    Tab1Wrapper, Tab2Wrapper,
    Text,
    TextWrapper, Tick,
    Title,
    Wrapper
} from "./SendInvoicesStyles";

const SendInvoices = () => {
    return (
        <section className='send-invoices'>
            <Wrapper>
                <TextWrapper>
                    <H1>Send invoices, save the trees</H1>
                    <Text>Send invoices digitally, and track them all the way until they’re paid. It’s easier to
                        reconcile and more organized than printouts. If they’re overdue, automatically send a friendly
                        reminder or two!
                    </Text>
                </TextWrapper>
                <ImgWrapper>
                    <Img src='/assets/images/features/send-invoices-main.png'/>
                    <Tab1Wrapper>
                        <div>
                            <Title>Send an invoice for this order</Title>
                            <PWrapper>
                                <P1>Need a template?</P1>
                                <P2>Generate Invoice</P2>
                            </PWrapper>
                        </div>
                        <Button>Send Invoice</Button>
                    </Tab1Wrapper>
                    <Tab2Wrapper>
                        <Message>Send Reminders</Message>
                        <Tick/>
                    </Tab2Wrapper>
                </ImgWrapper>
            </Wrapper>
        </section>
    );
};

export default SendInvoices;
