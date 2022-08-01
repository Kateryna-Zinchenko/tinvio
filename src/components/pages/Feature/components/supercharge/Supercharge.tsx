import React from 'react';
import {Button, H1, Rhombs, Text, Wrapper} from './SuperchargeStyles';

const Supercharge = () => {
    return (
        <section className='supercharge'>
            <Wrapper>
                <Text>Are you ready?</Text>
                <H1>Supercharge your business, the Tinvio way</H1>
                <Button>Get Started</Button>
                <Rhombs/>
            </Wrapper>
        </section>
    );
};

export default Supercharge;