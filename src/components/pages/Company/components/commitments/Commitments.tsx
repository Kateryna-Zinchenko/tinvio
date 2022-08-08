import React from 'react';
import {Caption, H1, Img1, Img2, Item, Items, Title, Wrapper} from "./CommitmentsStyles";

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
                    <Item>
                        <Img2 src='/assets/images/company/item-2.png'/>
                        <Title>Shut the fluff</Title>
                        <Caption>Clear and direct communication</Caption>
                    </Item>
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
