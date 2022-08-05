import React, {useRef, useState} from 'react';
import {Div} from "./LoginStyles";


const Login = () => {

    // const nameRef = useRef<HTMLInputElement>(null);
    // const businessNameRef = useRef<HTMLInputElement>(null);
    // const phoneRef = useRef<HTMLInputElement>(null);
    // const [emptyFields, setEmptyFields] = useState<any>([])
    //
    // const handleValidate = () => {
    //     const arr = [{name: nameRef?.current?.name, value: nameRef?.current?.value},
    //         {name: businessNameRef?.current?.name, value: businessNameRef?.current?.value},
    //         {name: phoneRef?.current?.name, value: phoneRef?.current?.value}
    //     ];
    //     const newArr = arr.filter((item) => item.value === '')
    //     const newArr2 = newArr.map((i) => i.name)
    //     setEmptyFields(newArr2)
    // }

    return (
        <section className='form'>
            <Div>
                hello
            </Div>
        </section>
    );
};

export default Login;
