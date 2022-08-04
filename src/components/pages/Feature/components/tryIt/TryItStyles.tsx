import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 16px;
  margin: 133px 0 0;
  position: relative;
  
  @media (min-width: 768px) {
    margin: 143px 0 0;
  }
  @media (min-width: 1024px) {
    margin: 144px 0 0;
    padding: 0 40px;
  }
  @media (min-width: 1280px) {
    padding: 0 124px;
  }
  @media (min-width: 1920px) {
    margin: 152px 0 0;
    padding: 0 304px;
  }
`;

export const Stars = styled.div`
  background: url("/assets/icons/features/try-it-stars.png") no-repeat;
  background-size: contain;
  width: 48px;
  height: 47px;
  position: absolute;
  top: -17px;
  left: 23px;
  
  @media (min-width: 768px) {
    top: -32px;
    left: 155px;
  }
  @media (min-width: 1024px) {
    width: 65px;
    height: 66px;
    top: -31px;
    left: 228px;
  }
  @media (min-width: 1280px) {
    top: -28px;
    left: 327px;
  }
  @media (min-width: 1440px) {
    left: 408px;
  }
  @media (min-width: 1920px) {
    top: -51px;
    left: 603px;
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
  max-width: 434px;
  margin: 0 auto;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: 1024px) {
    font-size: 44px;
    line-height: 52px;
    max-width: 522px;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 59px;
    max-width: 569px;
  }
  @media (min-width: 1920px) {
    font-size: 56px;
    line-height: 69px;
    max-width: 670px;
  }
`;

export const Text = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #5C5C5C;
  padding: 16px 0 0;
  margin: 0 auto;
  max-width: 310px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    padding: 17px 0 0;
  }
  @media (min-width: 1024px) {
    max-width: 355px;
    padding: 16px 0 0;
  }
  @media (min-width: 1280px) {
    max-width: 370px;
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1920px) {
    max-width: 415px;
    font-size: 20px;
    line-height: 25px;
    padding: 5px 0 0;
  }
`;

export const Button = styled.div`
  width: 188px;
  height: 48px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #FF474D;
  border-radius: 16px;
  padding: 14px 45px;
  margin: 32px auto 0;
  cursor: pointer;
  display: block;
  &:hover {
    background: rgba(255, 71, 77, 0.8);
    transition: 0.2s;
  }
  @media (min-width: 1920px) {
    width: 220px;
    height: 56px;
    font-size: 20px;
    line-height: 25px;
    margin: 31px auto 0;
  }
`;

export const Images = styled.div`
  position: relative;
  margin: 48px auto 0;
  max-width: 375px;
  @media (min-width: 768px) {
    margin: 66px auto 0;
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

export const ImgMain = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 100% 0;
  border-radius: 44px;
  @media (min-width: 768px) {
    height: 548px;
    object-position: 56% 0;
  }
  @media (min-width: 1024px) {
    height: 548px;
    object-position: 56% 28%;
  }
  @media (min-width: 1280px) {
    height: 600px;
  }
  @media (min-width: 1440px) {
    object-position: 56% 32%;
  }
  @media (min-width: 1920px) {
    object-position: 56% 24%;
  }
`;

export const ImgMessage = styled.img`
  position: absolute;
  top: 44px;
  right: -21px;
  max-width: 189px;
  @media (min-width: 768px) {
    max-width: 221px;
    top: 69px;
    right: -18px;
  }
  @media (min-width: 1024px) {
    max-width: 265px;
    height: 136px;
    top: 65px;
    right: 12px;
  }
  @media (min-width: 1280px) {
    top: 87px;
    right: 30px;
  }
  @media (min-width: 1440px) {
    top: 86px;
    right: 54px;
  }
  @media (min-width: 1920px) {
    top: 116px;  
    right: 71px;
  }
`;

export const ImgShare = styled.img`
  position: absolute;
  bottom: -95px;
  right: -49px;
  max-width: 261px;
  @media (min-width: 768px) {
    max-width: 371px;
    bottom: unset;
    top: 7px;
    right: unset;
    left: 12px;
  }
  @media (min-width: 1024px) {
    max-width: 366px;
  }
  @media (min-width: 1280px) {
    left: 13px;
  }
  @media (min-width: 1440px) {
    top: 23px;
    left: 29px;
  }
`;
