import React from 'react';
import {FormBlock, H1, Text, Title, Wrapper, WrapperTrans} from "./FormStyles";

const Form = () => {
    return (
        <section className='form'>
            <WrapperTrans>
                <Wrapper>
                    <H1>Fill up the form and we’ll get in touch within a few hours</H1>
                    <FormBlock>
                        <Text>Hi, we’re Tinvio! And you?</Text>
                        <div>
                            <Title>Name</Title>
                            <input type="text"/>
                        </div>
                        <div>
                            <Title>Name</Title>
                            <input type="text"/>
                        </div>
                        <div>
                            <Title>Name</Title>
                            <input type="text"/>
                        </div>
                        <button type='submit'>Submit</button>
                    </FormBlock>
                </Wrapper>
            </WrapperTrans>
        </section>
    );
};

export default Form;
