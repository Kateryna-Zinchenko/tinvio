import React from 'react';
import {H1, ImagesWrapper, Img1, Img2, Img3, Img4, Wrapper} from './RunItStyles';

const RunIt = () => {
    return (
        <section className='run-it'>
            <Wrapper>
                <H1>It’s your business. Run it like a rockstar.</H1>
                <ImagesWrapper>
                    <Img1 src='/assets/images/features/run-it-man-laptop.png'/>
                    <Img2 src='/assets/images/features/run-it-man-kitchen.png'/>
                    <Img3 src='/assets/images/features/run-it-man-smartphone.png'/>
                    <Img4 src='/assets/images/features/run-it-woman.png'/>
                </ImagesWrapper>
            </Wrapper>
        </section>
    );
};

export default RunIt;