import React from 'react';
import {Caption, H1, Img1, Img2, Item, Item2, Items, Title, Title2, Wrapper} from "./CommitmentsStyles";

const CommitmentsStyles = () => {
    return (
        <section className='commitments'>
            <Wrapper>
                <H1>Our Core Commitments</H1>
                <Items>
                    <Item>
                        <Img1 src='/assets/images/company/item-1.png'/>
                        <Title>Every pixel matters</Title>
                        <Caption>Biased towards perfection</Caption>
                    </Item>
                    <Item2>
                        <Img2 src='/assets/images/company/item-2.png'/>
                        <Title2>Shut the fluff</Title2>
                        <Caption>Clear and direct communication</Caption>
                    </Item2>
                    <Item>
                        <Img1 src='/assets/images/company/item-3.png'/>
                        <Title>Break things fast</Title>
                        <Caption>Ownership with ruthless agility</Caption>
                    </Item>
                </Items>
            </Wrapper>
        </section>
    );
};

export default CommitmentsStyles;
