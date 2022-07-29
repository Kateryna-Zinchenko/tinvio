import React from 'react';
import {Img, LeftWrapper, P, RightWrapper, SendWrapper, Title, Wrapper} from "./ManageOrdersStyles";

const ManageOrders = () => {
    return (
        <section className='manage-orders'>
            <Wrapper>
                <LeftWrapper>
                    <Title>Manage orders</Title>
                    <P>Yay, you’ve got a new order! Check and confirm the order in lightning speed</P>
                    <Img src='/assets/images/features/manage-orders-device.png'/>
                </LeftWrapper>
                <RightWrapper>
                    <SendWrapper>
                        <div>
                            <button></button>
                            <button></button>
                            <input type="text"/>
                        </div>
                        <Title>Send messages</Title>
                    </SendWrapper>
                    <div>
                        <div>
                            <Title>Create invoices</Title>
                            <button></button>
                        </div>
                        <div>
                            <button></button>
                            <Title>Share payment links</Title>
                        </div>
                    </div>
                </RightWrapper>
            </Wrapper>
        </section>
    );
};

export default ManageOrders;