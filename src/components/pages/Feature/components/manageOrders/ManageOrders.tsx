import React from 'react';
import {
    Arrow,
    Button, ButtonShare, ButtonUsdInner, ButtonUsdWrapper,
    Clip, CreateShareWrapper, CreateWrapper, File,
    Img, Input, Inputs, InputWrapper,
    LeftWrapper,
    P,
    RightWrapper,
    SendWrapper, ShareWrapper,
    Title1,
    Title2,
    Title3,
    Title4,
    Wrapper
} from "./ManageOrdersStyles";

const ManageOrders = () => {
    return (
        <section className='manage-orders'>
            <Wrapper>
                <LeftWrapper>
                    <Title1>Manage orders</Title1>
                    <P>Yay, you’ve got a new order! Check and confirm the order in lightning speed</P>
                    <Img src='/assets/images/features/manage-orders-device.png'/>
                </LeftWrapper>
                <RightWrapper>
                    <SendWrapper>
                        <Inputs>
                            <Button>
                                <Clip/>
                            </Button>
                            <Button>
                                <File/>
                            </Button>
                            <InputWrapper>
                                <Input type="text" placeholder='Type something...'/>
                                <Arrow/>
                            </InputWrapper>
                        </Inputs>
                        <Title2>Send messages</Title2>
                    </SendWrapper>
                    <CreateShareWrapper>
                        <CreateWrapper>
                            <ButtonUsdWrapper>
                                <ButtonUsdInner>
                                    <img src='/assets/images/features/$.svg'/>
                                </ButtonUsdInner>
                            </ButtonUsdWrapper>
                            <Title3>Create invoices</Title3>
                        </CreateWrapper>
                        <ShareWrapper>
                            <ButtonShare src='/assets/images/features/manage-orders-share.png'/>
                            <Title4>Share payment links</Title4>
                        </ShareWrapper>
                    </CreateShareWrapper>
                </RightWrapper>
            </Wrapper>
        </section>
    );
};

export default ManageOrders;
