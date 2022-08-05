import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 120px 0 0;
  padding: 0 16px;

  @media (min-width: 768px) {
    margin: 140px 0 0;
  }
  @media (min-width: 1024px) {
    padding: 0 40px;
  }
  @media (min-width: 1280px) {
    padding: 0 124px;
  }
  @media (min-width: 1920px) {
    padding: 0 304px;
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {

  }
  @media (min-width: 1280px) {

  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
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

  @media (min-width: 768px) {
    min-width: 237px;
    font-size: 36px;
    line-height: 44px;
    text-align: left;
    margin: 0;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    line-height: 49px;
  }
  @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
  }
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #5C5C5C;
  padding: 12px 0 0;

  @media (min-width: 768px) {
    max-width: 447px;
    padding: 0;
    margin: 0 0 0 54px;
  }
  @media (min-width: 1024px) {
    max-width: 391px;
    padding: 3px 0 0;
  }
  @media (min-width: 1440px) {
    max-width: 571px;
    margin: 0 0 0 88px;
  }
  @media (min-width: 1920px) {
    max-width: 659px;
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 0 66px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 375px;
  margin: 77px auto 0;
  
  @media (min-width: 768px) {
    max-width: 768px;
    margin: 32px auto 0;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    margin: 40px auto 0;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: 37px auto 0;
  }
`;

export const Img = styled.img`
  width: 323px;
  height: 400px;
  object-fit: cover;
  object-position: 56% 0;
  border-radius: 44px;

  @media (min-width: 768px) {
    width: 736px;
    height: 549px;
    object-position: 100% 0;
  }
  @media (min-width: 1024px) {
    width: 944px;
    object-position: 170% 26%;
  }
  @media (min-width: 1280px) {
    width: 1032px;
    height: 600px;
  }
  @media (min-width: 1440px) {
    width: 1192px;
    object-position: 170% 9%;
  }
  @media (min-width: 1920px) {
    width: 1312px;
    object-position: 170% 11%;
  }
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

  @media (min-width: 768px) {
    width: 394px;
    height: 67px;
    padding: 15px 16px;
    top: 79px;
    right: 36px;
    border-radius: 16px;
  }
  @media (min-width: 1024px) {
    top: 44px;
    right: 44px;
  }
  @media (min-width: 1280px) {
    width: 430px;
    height: 73px;
    border-radius: 18px;
    padding: 16px 17px;
    top: 48px;
    right: 48px;
  }
  @media (min-width: 1440px) {
    top: 124px;
    right: 53px;
  }
  @media (min-width: 1920px) {
    top: 148px;
  }
`;

export const Title = styled.div`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  color: #212121;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
`;

export const PWrapper = styled.div`
  width: fit-content;
  margin: -5px 0 0;
  font-size: 9px;
  line-height: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  padding: 8px 0 0;

  @media (min-width: 768px) {
    font-size: 11px;
    line-height: 13px;
  }
  @media (min-width: 1280px) {
    font-size: 12px;
    line-height: 15px;
  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
`;

export const P1 = styled.span`
  color: #5C5C5C;
`;

export const P2 = styled.span`
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

  @media (min-width: 768px) {
    width: 95px;
    height: 30px;
    font-size: 11px;
    line-height: 14px;
    border-radius: 12px;
  }
  @media (min-width: 1280px) {
    font-size: 12px;
    line-height: 15px;
    width: 103px;
    height: 33px;
    border-radius: 13px;
  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
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

  @media (min-width: 768px) {
    width: 188px;
    height: 42px;
    border-radius: 11px;
    padding: 14px 16px 12px 35px;
    top: 193px;
    right: -9px;
  }
  @media (min-width: 1024px) {
    top: 159px;
    right: -27px;
  }
  @media (min-width: 1280px) {
    width: 205px;
    height: 45px;
    border-radius: 12px;
    padding: 14px 17px 12px 38px;
    top: 173px;
    right: -24px;
  }
  @media (min-width: 1440px) {
    top: 249px;
  }
  @media (min-width: 1920px) {
    top: 273px;
  }
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

    @media (min-width: 768px) {
      width: 17px;
      height: 19px;
      left: -26px;
    }
    @media (min-width: 1280px) {
      width: 18px;
      height: 20px;
      left: -26px;
    }
  }

  @media (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;
  }
  @media (min-width: 1280px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
`;

export const Tick = styled.div`
  background: url("/assets/icons/features/send-invoices-tick.png") no-repeat;
  background-size: contain;
  width: 12px;
  height: 12px;

  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: 1280px) {
    width: 18px;
    height: 18px;
  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
`;
