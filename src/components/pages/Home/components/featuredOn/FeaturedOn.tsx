import React from 'react';
import {Border, H1, Icon1, Icon2, Icon3, Icon4, Icons, RhombsTop, Wrapper} from "./FeaturedOnStyles";

const FeaturedOn = () => {
    return (
        <div>
            <Wrapper>
                {/*<RhombsTop src='/assets/images/rhombs-top-featured-on.png'/>*/}
                <H1>Featured On</H1>
                <Border/>
                <Icons>
                    <Icon1 src='/assets/images/tech-crunch.png'/>
                    <Icon2 src='/assets/images/tech-in-asia.png'/>
                    <Icon3 src='/assets/images/pymnts.png'/>
                    <Icon4 src='/assets/images/venture-beat.png'/>
                </Icons>
            </Wrapper>
        </div>
    );
};

export default FeaturedOn;
