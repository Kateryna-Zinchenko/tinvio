import React, {useEffect, useState} from 'react';
import {
    Button,
    FormBlock,
    FormBlockInner,
    H1,
    Input,
    Inputs,
    InputTitle, Map, RhombsLeft, RhombsRight, TextAfterButton,
    Title,
    Wrapper,
    WrapperTrans
} from "./FormStyles";

const Form = () => {
    const [name, setName] = useState<string>('');
    const [businessName, setBusinessName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    return (
        <section className='form'>
            <WrapperTrans>
                <Wrapper>
                    <RhombsLeft/>
                    <RhombsRight/>
                    <H1>Fill up the form and we’ll get in touch within a few hours</H1>
                    <FormBlock>
                        <FormBlockInner>
                            <Title>Hi, we’re <span>Tinvio!</span> And you?</Title>
                            <Inputs>
                                <Input>
                                    <InputTitle>Name</InputTitle>
                                    <input value={name} type="text" placeholder='John Appleseed'
                                           onChange={(e) => setName(e.target.value)}
                                           spellCheck="false"
                                    />
                                </Input>
                                <Input>
                                    <InputTitle>Business Name</InputTitle>
                                    <input value={businessName} type="text" placeholder='Burgers &Boba (Singapore)'
                                           onChange={(e) => setBusinessName(e.target.value)}
                                    />
                                </Input>
                                <Input>
                                    <InputTitle>Phone</InputTitle>
                                    <input value={phone} type="text" placeholder='65 9123 4567'
                                           onChange={(e) => setPhone(e.target.value)}
                                    />
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
