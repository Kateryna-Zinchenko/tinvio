import React from 'react';
import {H1, ImagesWrapper, Img1, Img2, Img3, Img4, P, TextBlock, Wrapper} from "./PoweredStyles";
import Button from "../../../../common/button/Button";

const Powered = () => {
    return (
        <section className='powered'>
            <Wrapper>
                <H1>Powered by <span>Teamvio</span></H1>
                <ImagesWrapper>
                    <Img1 src='/assets/images/company/powered-1.png'/>
                    <Img2 src='/assets/images/company/powered-2.png'/>
                    <TextBlock>
                        <P>Up for a challenge? We’re always looking for the best</P>
                        <Button background={'#FFF'}>Join Us</Button>
                    </TextBlock>
                    <Img3 src='/assets/images/company/powered-3.png'/>
                    <Img4 src='/assets/images/company/powered-4.png'/>
                </ImagesWrapper>
            </Wrapper>
        </section>
    );
};

export default Powered;
