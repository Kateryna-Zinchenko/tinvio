import React from 'react';
import {Border, H1, Minus, MinusWrapper, Plus, PlusWrapper, Question, QuestionsWrapper, Text, Title, Wrapper} from "./FAQStyles";

const FAQ = () => {
    return (
        <section className='faq'>
            <Wrapper>
                <H1>FAQ</H1>
                <QuestionsWrapper>
                    <Question>
                        <Title>How to get started with Tinvio?</Title>
                        <PlusWrapper>
                            <Plus/>
                        </PlusWrapper>
                        <MinusWrapper>
                            <Minus/>
                        </MinusWrapper>
                    </Question>
                    <Border/>
                    <Text></Text>
                </QuestionsWrapper>
            </Wrapper>
        </section>
    );
};

export default FAQ;