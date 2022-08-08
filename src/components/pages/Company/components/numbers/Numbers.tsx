import React from 'react';
import {Amount, Caption, LeftBlock, MiddleBlock, RightBlock, Wrapper} from "./NumbersStyles";

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
                <MiddleBlock>
                    <Amount>5000<span>+</span></Amount>
                    <Caption>Businesses</Caption>
                </MiddleBlock>
                <RightBlock>
                    <Amount>$500<span>M</span></Amount>
                    <Caption>Transactions</Caption>
                </RightBlock>
            </Wrapper>
        </section>
    );
};

export default Numbers;
