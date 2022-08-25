import React from 'react';
import {Amount, Caption, LeftBlock, MiddleBlock, MiddleBlock2, RightBlock, Wrapper} from "./NumbersStyles";

const Numbers = () => {
    return (
        <section className='numbers'>
            <Wrapper>
                <LeftBlock>
                    <Amount>250<span>+</span></Amount>
                    <Caption>Team Members</Caption>
                </LeftBlock>
                <MiddleBlock>
                    <Amount>10<span>+</span></Amount>
                    <Caption>Nationalities</Caption>
                </MiddleBlock>
                <MiddleBlock2>
                    <Amount>5000<span>+</span></Amount>
                    <Caption>Businesses</Caption>
                </MiddleBlock2>
                <RightBlock>
                    <Amount>$500<span>M</span></Amount>
                    <Caption>Transactions</Caption>
                </RightBlock>
            </Wrapper>
        </section>
    );
};

export default Numbers;
