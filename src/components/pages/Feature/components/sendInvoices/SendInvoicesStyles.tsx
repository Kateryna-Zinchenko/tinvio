import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;
  padding: 0 16px;
`;

export const TextWrapper = styled.div`
    
`;

export const H1 = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #5C5C5C;
  padding: 12px 0 0;
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 375px;
`;

export const Img = styled.img`
  width: 323px;
  height: 400px;
  object-fit: cover;
  object-position: 56% 0;
  border-radius: 44px;
  margin: 77px 0 0;
`;

export const Tab1Wrapper = styled.div`
  width: 296px;
  height: 51px;
  background: #F3F4F5;
  border-radius: 12px;
  padding: 11px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: -37px;
  right: 0;
`;

export const TabText = styled.div`
  
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  color: #212121;
`;

export const PWrapper = styled.div`
  width: fit-content;
  margin: -5px 0 0;
`;

export const P1 = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  color: #5C5C5C;
`;

export const P2 = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  color: #212121;
  padding: 0 0 0 5px;
  position: relative;
  &::after {
    content: '';
    background: url("/assets/icons/features/manage-orders-arrow-right-active.png") no-repeat;
    background-size: cover;
    width: 3px;
    height: 5px;
    position: absolute;
    bottom: 2px;
    right: -7px;
  }
`;

export const Button = styled.button`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  color: #212121;
  border: 1px solid #D2D2D2;
  border-radius: 9px;
  width: 71px;
  height: 22px;
  display: block;
`;

export const Tab2Wrapper = styled.div`
  width: 141px;
  height: 31px;
  background: #F3F4F5;
  border-radius: 8px;
  padding: 10px 11px 10px 28px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 74px;
  right: -16px;
`;

export const Message = styled.div`
  position: relative;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #212121;
  &::before {
    content: '';
    background: url("/assets/icons/features/send-invoices-bell.png") no-repeat;
    background-size: contain;
    width: 13px;
    height: 14px;
    position: absolute;
    left: -18px;
    bottom: -2px;
  }
`;

export const Tick = styled.div`
  background: url("/assets/icons/features/send-invoices-tick.png") no-repeat;
  background-size: contain;
  width: 12px;
  height: 12px;
`;
