import React from 'react';
import {
    Button,
    FormBlock,
    FormBlockInner,
    H1,
    Input,
    Inputs,
    InputTitle, Map, Rhombs, TextAfterButton,
    Title,
    Wrapper,
    WrapperTrans
} from "./FormStyles";

const Form = () => {
    return (
        <section className='form'>
            <WrapperTrans>
                <Wrapper>
                    <Rhombs src='/assets/images/rhombs-form.png'/>
                    <H1>Fill up the form and we’ll get in touch within a few hours</H1>
                    <FormBlock>
                        <FormBlockInner>
                            <Title>Hi, we’re <span>Tinvio!</span> And you?</Title>
                            <Inputs>
                                <Input>
                                    <InputTitle>Name</InputTitle>
                                    <input type="text" placeholder='John Appleseed'/>
                                </Input>
                                <Input>
                                    <InputTitle>Business Name</InputTitle>
                                    <input type="text" placeholder='Burgers &Boba (Singapore)'/>
                                </Input>
                                <Input>
                                    <InputTitle>Phone</InputTitle>
                                    <input type="text" placeholder='65 9123 4567'/>
                                </Input>
                            </Inputs>
                            <Button type='submit'>Submit</Button>
                            <TextAfterButton>No spam, promise</TextAfterButton>
                        </FormBlockInner>
                    </FormBlock>
                    <Map src='/assets/images/map.png'/>
                </Wrapper>
            </WrapperTrans>
        </section>
    );
};

export default Form;
