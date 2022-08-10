import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 143px 0 0;

  @media (min-width: 1920px) {
    margin: 152px 0 0;
  }
`;

export const StarsTop = styled.div`
  background: url("/assets/icons/company/preview-stars-top.png") no-repeat;
  background-size: contain;
  width: 89px;
  height: 63px;
  position: absolute;
  top: -23px;
  left: -55px;

  @media (min-width: 768px) {
    top: -28px;
    left: -70px;
  }
  @media (min-width: 1024px) {
    left: -63px;
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
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  text-align: center;
  color: #212121;
  position: relative;
  width: fit-content;
  margin: 0 auto;

  & span {
    color: #FF474D;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
  }
  @media (min-width: 1280px) {
    font-size: 56px;
    line-height: 69px;
  }
  @media (min-width: 1920px) {
    font-size: 60px;
    line-height: 74px;
  }
`;

export const P = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #5C5C5C;
  padding: 17px 0 0;
  
  @media (min-width: 1920px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const FlexWrapper = styled.div`
  @media (min-width: 1024px) {
    //display: flex;
    //flex-direction: row-reverse;
    //align-items: center;
  }
  @media (min-width: 1280px) {

  }
  @media (min-width: 1440px) {

  }
`;

export const Img = styled.div`
  position: absolute;
  width: fit-content;
  top: -502px;
  margin: 0 auto;
  right: 0;
  left: 0;

  @media (min-width: 768px) {
    top: -802px;
  }
  @media (min-width: 1024px) {
    margin: 0;
    top: -51px;
    right: -276px;
    left: unset;
  }
  @media (min-width: 1280px) {
    top: -64px;
    right: -159px;
  }
  @media (min-width: 1440px) {
    top: -53px;
    right: -222px;
  }
  @media (min-width: 1440px) {
    top: -54px;
    right: -192px;
  }
`;

export const MainImg = styled.img`
  width: 286px;

  @media (min-width: 768px) {
    width: 462px;
  }
  @media (min-width: 1024px) {
    width: 402px;
  }
  @media (min-width: 1280px) {
    width: 390px;
  }
  @media (min-width: 1440px) {
    width: 324px;
  }
  @media (min-width: 1920px) {
    width: 331px;
  }
`;

export const Stars = styled.div`
  background: url("/assets/icons/company/preview-stars.png") no-repeat;
  background-size: contain;
  width: 147px;
  height: 141px;
  position: absolute;
  top: 171px;
  right: -50px;
  z-index: -1;

  @media (min-width: 768px) {
    width: 257px;
    height: 247px;
    top: 86px;
    right: -93px;
  }
  @media (min-width: 1024px) {
    width: 196px;
    height: 189px;
    top: 101px;
    right: -76px;
  }
  @media (min-width: 1280px) {
    width: 190px;
    height: 183px;
    top: 95px;
    right: -70px;
  }
  @media (min-width: 1440px) {
    width: 155px;
    height: 150px;
    top: 80px;
    right: -55px;
  }
  @media (min-width: 1920px) {
    width: 161px;
    height: 156px;
    top: 83px;
    right: -61px;
  }
`;

export const TextWrapper = styled.div`
  background: #F7F7F7;
  border-radius: 0 32px 32px 0;
  margin: 540px 0 0;
  padding: 48px 40px;
  position: relative;

  @media (min-width: 768px) {
    margin: 840px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 89px 0 0;
    width: 634px;
    padding: 60px 40px;
  }
  @media (min-width: 1280px) {
    margin: 104px 0 0;
    width: 927px;
    padding: 60px 124px;
  }
  @media (min-width: 1440px) {
    margin: 93px 0 0;
    width: 1040px;
    padding: 60px 124px;
  }
  @media (min-width: 1920px) {
    width: 1364px;
    padding: 60px 304px;
    
  }
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #5C5C5C;

  & p {
    padding: 23px 0 0;

    @media (min-width: 1024px) {
      width: 430px;
    }
    @media (min-width: 1280px) {
      width: 492px;
    }
    @media (min-width: 1440px) {
      width: 736px;
    }
    @media (min-width: 1920px) {
      width: 824px;
      font-size: 18px;
      line-height: 24px;
    }
  }

  & p:first-child {
    padding: 0;
  }
`;

export const Button = styled.button`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  display: block;
  width: 188px;
  height: 48px;
  border: none;
  background: #FFFFFF;
  border-radius: 16px;
  margin: 32px auto 0;
  padding: 14px 42px 14px 63px;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #E0E0E1;
  }

  &::before {
    content: '';
    background: url("/assets/icons/company/preview-chat.png") no-repeat;
    background-size: contain;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 17px;
    left: 41px;
    
    @media (min-width: 1920px) {
      width: 16px;
      height: 16px;
      top: 20px;
      left: 47px;
    }
  }

  @media (min-width: 1024px) {
    margin: 32px 0 0;
  }
  @media (min-width: 1920px) {
    width: 210px;
    height: 56px;
    font-size: 18px;
    line-height: 22px;
    padding: 17px 46px 17px 71px;
  }
`;
