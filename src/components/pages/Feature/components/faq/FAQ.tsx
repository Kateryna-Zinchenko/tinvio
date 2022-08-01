import React from 'react';
import {useToggle} from 'react-use';
import {
    Border, BorderLast,
    H1,
    Minus,
    MinusWrapper,
    Plus,
    PlusWrapper,
    Question, Questions,
    QuestionWrapper,
    Text,
    Title,
    Wrapper
} from "./FAQStyles";

const FAQ = () => {
    const [isOpen, setIsOpen] = useToggle(false)



    return (
        <section className='faq'>
            <Wrapper>
                <H1>FAQ</H1>
                <Questions>

                    <QuestionWrapper>
                        <Question onClick={setIsOpen}>
                            <Title>How to get started with Tinvio?</Title>
                            <PlusWrapper isOpen={isOpen}>
                                <Plus/>
                            </PlusWrapper>
                            <MinusWrapper isOpen={isOpen}>
                                <Minus/>
                            </MinusWrapper>
                        </Question>
                        <Text isOpen={isOpen}>
                            You can create an account on Tinvio (dashboard or mobile app) within a minute to start
                            managing
                            chats, orders, and invoices. For payments, our Customer Success team will reach out for
                            account
                            verification and onboarding. Once verified, you'll be good to go!
                        </Text>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={setIsOpen}>
                            <Title>How does Tinvio work?</Title>
                            <PlusWrapper isOpen={isOpen}>
                                <Plus/>
                            </PlusWrapper>
                            <MinusWrapper isOpen={isOpen}>
                                <Minus/>
                            </MinusWrapper>
                        </Question>
                        <Text isOpen={isOpen}>
                            This dashboard is an easy all-in-one interface for you to manage chats, orders, invoices,
                            and payments with your merchants. Merchants just need to download the free Tinvio mobile
                            app to exchange messages, place orders, and make payments. It’s zero friction for them!
                        </Text>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={setIsOpen}>
                            <Title>How to collect payments on Tinvio?</Title>
                            <PlusWrapper isOpen={isOpen}>
                                <Plus/>
                            </PlusWrapper>
                            <MinusWrapper isOpen={isOpen}>
                                <Minus/>
                            </MinusWrapper>
                        </Question>
                        <Text isOpen={isOpen}>
                            Once your account is verified, you'll be able to request and reconcile payments for all
                            your orders and invoices on Tinvio. Your merchants will receive notifications for each
                            payment request in their favorite channels (e.g. Tinvio app, WhatsApp), and they'll be
                            able to complete payment in a fast and flexible checkout experience. You'll receive
                            real-time updates and reports for all your payments!
                        </Text>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={setIsOpen}>
                            <Title>What are the supported payment methods?</Title>
                            <PlusWrapper isOpen={isOpen}>
                                <Plus/>
                            </PlusWrapper>
                            <MinusWrapper isOpen={isOpen}>
                                <Minus/>
                            </MinusWrapper>
                        </Question>
                        <Text isOpen={isOpen}>
                            We’re always enabling new payment methods. Our Customer Success teams will advise on the
                            available methods in your market (including transaction fees for that method). In general,
                            we support bank transfers, credit cards, and B2B BNPL options!
                        </Text>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={setIsOpen}>
                            <Title>I have more product questions! Who do I contact?</Title>
                            <PlusWrapper isOpen={isOpen}>
                                <Plus/>
                            </PlusWrapper>
                            <MinusWrapper isOpen={isOpen}>
                                <Minus/>
                            </MinusWrapper>
                        </Question>
                        <Text isOpen={isOpen}>
                            If you're already signed up, you can live chat with "Team Tinvio" in the dashboard or
                            mobile app. Otherwise, you can contact us at support@tinvio.com for more information!
                        </Text>
                        <BorderLast/>
                    </QuestionWrapper>

                </Questions>
            </Wrapper>
        </section>
    );
};

export default FAQ;
