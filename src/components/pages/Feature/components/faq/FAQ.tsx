import React, {useState} from 'react';
import {
    Answer,
    Border,
    H1,
    Minus,
    MinusWrapper,
    Plus,
    PlusWrapper,
    Question,
    Questions,
    QuestionWrapper, Tab,
    Wrapper
} from "./FAQStyles";

const FAQ = () => {
    const [tabs, setTabs] = useState([
        {
            question: 'How to get started with Tinvio?',
            answer: 'You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing chats, orders, and invoices. For payments, our Customer Success team will reach out for account verification and onboarding. Once verified, you\'ll be good to go!',
            isOpen: false
        },
        {
            question: 'How to get started with Tinvio?',
            answer: 'You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing chats, orders, and invoices. For payments, our Customer Success team will reach out for account verification and onboarding. Once verified, you\'ll be good to go!',
            isOpen: false
        },
        {
            question: 'How to get started with Tinvio?',
            answer: 'You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing chats, orders, and invoices. For payments, our Customer Success team will reach out for account verification and onboarding. Once verified, you\'ll be good to go!',
            isOpen: false
        },
        {
            question: 'How to get started with Tinvio?',
            answer: 'You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing chats, orders, and invoices. For payments, our Customer Success team will reach out for account verification and onboarding. Once verified, you\'ll be good to go!',
            isOpen: false
        },
        {
            question: 'How to get started with Tinvio?',
            answer: 'You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing chats, orders, and invoices. For payments, our Customer Success team will reach out for account verification and onboarding. Once verified, you\'ll be good to go!',
            isOpen: false
        },
    ])
    const onTabClick = (tabIndex: number) => {
        const newArray = tabs.map((tab, index) => {
            if(index === tabIndex){
                return {
                    ...tab,
                    isOpen: !tabs[tabIndex].isOpen
                }
            } else {
                return tab
            }
        })
        setTabs(newArray)
    }
    return (
        <section className='faq'>
            <Wrapper>
                <H1>FAQ</H1>
                <Questions>
                    {
                        tabs.map((tab, index) => <QuestionWrapper key={index}>
                            <Tab onClick={() => onTabClick(index)} >
                                <Question>{tab.question}</Question>
                                <PlusWrapper isOpen={tab.isOpen} >
                                    <Plus/>
                                </PlusWrapper>
                                <MinusWrapper isOpen={tab.isOpen}>
                                    <Minus/>
                                </MinusWrapper>
                            </Tab>
                            <Answer isOpen={tab.isOpen} >
                                {tab.answer}
                            </Answer>
                            {
                                index === (tabs.length - 1) ? null : <Border/>
                            }
                        </QuestionWrapper>)
                    }

                </Questions>
            </Wrapper>
        </section>
    );
};

export default FAQ;
