import React from 'react';
import {Button, Text, Wrapper} from './SoundsEasyStyles';

const SoundsEasy = () => {
    return (
        <section className='sounds-easy'>
            <Wrapper>
                <Text>
                    <p>Sounds easy?</p>
                    <p>Supply chain transactions don’t have to be complicated</p>
                    </Text>
                <Button>Get Started</Button>
            </Wrapper>
        </section>
    );
};

export default SoundsEasy;