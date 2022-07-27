import React, {useRef, useState} from 'react';
import {
    Button, Caption,
    FormBlock,
    FormBlockInner,
    H1,
    Input,
    InputField,
    Inputs,
    InputTitle, Map, RhombsLeft, RhombsRight, TextAfterButton,
    Title,
    Wrapper,
    WrapperTrans
} from "./FormStyles";

const Form = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const businessNameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [emptyFields, setEmptyFields] = useState<any>([])

    const handleValidate = () => {
        const arr = [{name: nameRef?.current?.name, value: nameRef?.current?.value},
            {name: businessNameRef?.current?.name, value: businessNameRef?.current?.value},
            {name: phoneRef?.current?.name, value: phoneRef?.current?.value}
        ];
        const newArr = arr.filter((item) => item.value === '')
        const newArr2 = newArr.map((i) => i.name)
        setEmptyFields(newArr2)
        console.log(newArr2)
    }

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
                                    <InputField type="text" placeholder='John Appleseed'
                                                spellCheck="false"
                                                ref={nameRef}
                                                name='name'
                                                isEmpty={emptyFields.includes(nameRef?.current?.name)}
                                                onChange={() => setEmptyFields([])}
                                    />
                                    <Caption isEmpty={emptyFields.includes(nameRef?.current?.name)}>
                                        Required field
                                    </Caption>
                                </Input>
                                <Input>
                                    <InputTitle>Business Name</InputTitle>
                                    <InputField type="text" placeholder='Burgers &Boba (Singapore)'
                                                spellCheck="false"
                                                ref={businessNameRef}
                                                name='businessName'
                                                isEmpty={emptyFields.includes(businessNameRef?.current?.name)}
                                                onChange={() => setEmptyFields([])}
                                    />
                                    <Caption isEmpty={emptyFields.includes(businessNameRef?.current?.name)}>
                                        Required field
                                    </Caption>
                                </Input>
                                <Input>
                                    <InputTitle>Phone</InputTitle>
                                    <InputField type="tel" placeholder="65 9123 4567"
                                                spellCheck="false"
                                                ref={phoneRef}
                                                name='phone'
                                                isEmpty={emptyFields.includes(phoneRef?.current?.name)}
                                                onChange={() => setEmptyFields([])}
                                    />
                                    <Caption isEmpty={emptyFields.includes(phoneRef?.current?.name)}>
                                        Required field
                                    </Caption>
                                </Input>
                            </Inputs>
                            <Button onClick={handleValidate}>
                                Submit
                            </Button>
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
