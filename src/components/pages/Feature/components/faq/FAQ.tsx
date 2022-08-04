import React, {useState} from 'react';
import {
    Border,
    H1,
    Minus,
    MinusWrapper1,
    MinusWrapper2,
    MinusWrapper3,
    MinusWrapper4,
    MinusWrapper5,
    Plus,
    PlusWrapper1,
    PlusWrapper2, PlusWrapper3,
    PlusWrapper4,
    PlusWrapper5,
    Question, Questions,
    QuestionWrapper,
    Text1,
    Text2,
    Text3,
    Text4,
    Text5,
    Title,
    Wrapper
} from "./FAQStyles";

const FAQ = () => {
    const [question, setQuestion] = useState<string>('')
    //const [isOpen, setIsOpen] = useToggle(false)

    return (
        <section className='faq'>
            <Wrapper>
                <H1>FAQ</H1>
                <Questions>

                    <QuestionWrapper>
                        <Question onClick={() => setQuestion('How to get started with Tinvio?')}>
                            <Title>How to get started with Tinvio?</Title>
                            <PlusWrapper1 question={question}>
                                <Plus/>
                            </PlusWrapper1>
                            <MinusWrapper1 question={question}>
                                <Minus/>
                            </MinusWrapper1>
                        </Question>
                        <Text1 question={question}>
                            You can create an account on Tinvio (dashboard or mobile app) within a minute to start
                            managing
                            chats, orders, and invoices. For payments, our Customer Success team will reach out for
                            account
                            verification and onboarding. Once verified, you'll be good to go!
                        </Text1>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={() => setQuestion('How does Tinvio work?')}>
                            <Title>How does Tinvio work?</Title>
                            <PlusWrapper2 question={question}>
                                <Plus/>
                            </PlusWrapper2>
                            <MinusWrapper2 question={question}>
                                <Minus/>
                            </MinusWrapper2>
                        </Question>
                        <Text2 question={question}>
                            This dashboard is an easy all-in-one interface for you to manage chats, orders, invoices,
                            and payments with your merchants. Merchants just need to download the free Tinvio mobile
                            app to exchange messages, place orders, and make payments. It’s zero friction for them!
                        </Text2>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={() => setQuestion('How to collect payments on Tinvio?')}>
                            <Title>How to collect payments on Tinvio?</Title>
                            <PlusWrapper3 question={question}>
                                <Plus/>
                            </PlusWrapper3>
                            <MinusWrapper3 question={question}>
                                <Minus/>
                            </MinusWrapper3>
                        </Question>
                        <Text3 question={question}>
                            Once your account is verified, you'll be able to request and reconcile payments for all
                            your orders and invoices on Tinvio. Your merchants will receive notifications for each
                            payment request in their favorite channels (e.g. Tinvio app, WhatsApp), and they'll be
                            able to complete payment in a fast and flexible checkout experience. You'll receive
                            real-time updates and reports for all your payments!
                        </Text3>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={() => setQuestion('What are the supported payment methods?')}>
                            <Title>What are the supported payment methods?</Title>
                            <PlusWrapper4 question={question}>
                                <Plus/>
                            </PlusWrapper4>
                            <MinusWrapper4 question={question}>
                                <Minus/>
                            </MinusWrapper4>
                        </Question>
                        <Text4 question={question}>
                            We’re always enabling new payment methods. Our Customer Success teams will advise on the
                            available methods in your market (including transaction fees for that method). In general,
                            we support bank transfers, credit cards, and B2B BNPL options!
                        </Text4>
                        <Border/>
                    </QuestionWrapper>

                    <QuestionWrapper>
                        <Question onClick={() => setQuestion('I have more product questions! Who do I contact?')}>
                            <Title>I have more product questions! Who do I contact?</Title>
                            <PlusWrapper5 question={question}>
                                <Plus/>
                            </PlusWrapper5>
                            <MinusWrapper5 question={question}>
                                <Minus/>
                            </MinusWrapper5>
                        </Question>
                        <Text5 question={question}>
                            If you're already signed up, you can live chat with "Team Tinvio" in the dashboard or
                            mobile app. Otherwise, you can contact us at support@tinvio.com for more information!
                        </Text5>
                    </QuestionWrapper>

                </Questions>
            </Wrapper>
        </section>
    );
};

export default FAQ;
