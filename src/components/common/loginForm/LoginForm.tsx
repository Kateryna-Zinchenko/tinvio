import React, {useRef, useState} from 'react';
import
{Button, Caption, Inner, Input, InputField, Inputs, InputTitle, TextAfterButton, Title, Wrapper} from './LoginFormStyles';

export type Props = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    modalRef?: any;
    isOpen?: boolean;
    submitted?: any;
    setSubmitted?: any
};

const LoginForm = ({ modalRef, submitted, setSubmitted }: Props) => {

    const nameRef = useRef<HTMLInputElement>(null);
    const businessNameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const [emptyFields, setEmptyFields] = useState<any>([]);

    const handleValidate = () => {
        const arr = [{name: nameRef?.current?.name, value: nameRef?.current?.value},
            {name: businessNameRef?.current?.name, value: businessNameRef?.current?.value},
            {name: phoneRef?.current?.name, value: phoneRef?.current?.value}
        ];
        const newArr = arr.filter((item) => item.value === '');
        const newArr2 = newArr.map((i) => i.name);

        setEmptyFields(newArr2);

        if (newArr2.length === 0) {
            setSubmitted(true)
        }
    }

    return (
        <section className='form'>
            <Wrapper ref={modalRef} submitted={submitted}>
                <Inner>
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
                </Inner>
            </Wrapper>
        </section>
    );
};

export default LoginForm;
