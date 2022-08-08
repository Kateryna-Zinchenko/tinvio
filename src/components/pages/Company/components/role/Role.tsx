import React from 'react';
import {Button, H1, ImagesWrapper, Img1, Img2, Img3, Img4, Stars, Wrapper} from "./RoleStyles";

const Role = () => {
    return (
        <section className='role'>
            <Wrapper>
                <H1>
                    <Stars/>
                    Global, local, remote. Find the perfect role
                </H1>
                <Button>Explore Roles</Button>
                <ImagesWrapper>
                    <Img1 src='/assets/images/company/role-1.png'/>
                    <Img2 src='/assets/images/company/role-2.png'/>
                    <Img3 src='/assets/images/company/role-3.png'/>
                    <Img4 src='/assets/images/company/role-4.png'/>
                </ImagesWrapper>
            </Wrapper>
        </section>
    );
};

export default Role;
