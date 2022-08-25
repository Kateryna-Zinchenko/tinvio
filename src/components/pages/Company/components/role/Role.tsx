import React from 'react';
import {H1, ImagesWrapper, Img1, Img2, Img3, Img4, RightWrapper, Stars, Wrapper} from "./RoleStyles";
import Button from "../../../../common/button/Button";

const Role = () => {
    return (
        <section className='role'>
            <Wrapper>
                <RightWrapper>
                    <H1>
                        <Stars/>
                        Global, local, remote. Find the perfect role
                    </H1>
                    <Button bordered margin1024={'0'}>Explore Roles</Button>
                </RightWrapper>
                <div>
                    <ImagesWrapper>
                        <Img1 src='/assets/images/company/role-1.png'/>
                        <Img2 src='/assets/images/company/role-2.png'/>
                        <Img3 src='/assets/images/company/role-3.png'/>
                        <Img4 src='/assets/images/company/role-4.png'/>
                    </ImagesWrapper>
                </div>
            </Wrapper>
        </section>
    );
};

export default Role;
