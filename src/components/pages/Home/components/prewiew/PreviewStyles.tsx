import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

export const WrapperCommon = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin: 64px 0 0;
  }
  @media (min-width: 1920px) {
    padding: 0 304px;
  }
`;

export const RhombusTop = styled.div`
  position: absolute;
  width: 249px;
  height: 249px;
  top: -260px;
  right: -153px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
  border-radius: 44px;
  transform: rotate(-45deg);
  z-index: -1;
  @media (min-width: 768px) {
    width: 328px;
    height: 328px;
    top: -280px;
    right: -156px;
    border-radius: 58px;
  }
  @media (min-width: 1024px) {
    width: 257px;
    height: 257px;
    border-radius: 45px;
    top: -216px;
    right: 575px;
  }
  @media (min-width: 1280px) {
    right: 719px;
  }
`;

export const RhombusBottom = styled.div`
  position: absolute;
  width: 301px;
  height: 301px;
  top: 62px;
  left: -150px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(218, 218, 218, 0.15) 0%, rgba(250, 250, 250, 0.15) 100%);
  border-radius: 28px;
  transform: rotate(-45deg);
  z-index: -1;
  @media (min-width: 768px) {
    width: 386px;
    height: 386px;
    top: 80px;
    left: -123px;
    border-radius: 36px;
  }
  @media (min-width: 1024px) {
    width: 344px;
    height: 344px;
    top: 348px;
    left: -70px;
  }
  @media (min-width: 1280px) {
    left: -107px;
  }
`;

export const Wrapper = styled.div`
  margin: 140px auto 0;
  padding: 0 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 126px 0 0;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin: 194px 0 0;
    padding: 0 40px;
  }
  @media (min-width: 1280px) {
    margin: 188px 0 0;
    padding: 0 124px;
  }
  @media (min-width: 1920px) {
    padding: 0 0;
  }
`;

export const H1 = styled.div`
  position: relative;
  max-width: 294px;
  margin: 0 auto;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  & span {
    color: #FF474D;
    font-weight: 700;
  }
  &::before {
    position: absolute;
    content: url("/assets/icons/preview-stars.png");
    top: -34px;
    left: -18px;
  }
  @media (min-width: 768px) {
    max-width: 333px;
    font-size: 32px;
    line-height: 39px;
    &::before {
      width: 72px;
      height: 60px;
    }
  }
  @media (min-width: 1024px) {
    max-width: 373px;
    min-width: 373px;
    font-size: 36px;
    line-height: 49px;
    text-align: left;
    margin: 0;
  }
  @media (min-width: 1280px) {
    max-width: 427px;
    min-width: 427px;
    font-size: 44px;
    line-height: 54px;
  }
  @media (min-width: 1920px) {
    max-width: 478px;
    min-width: 478px;
    font-size: 48px;
    line-height: 59px;
  }
`;

export const TextBeforeButton = styled.div`
  width: 333px;
  margin: 16px auto 32px;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #5C5C5C;
  @media (min-width: 768px) {
    width: 426px;
  }
  @media (min-width: 1024px) {
    width: 334px;
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0 0;
    text-align: left;
  }
  @media (min-width: 1280px) {
    width: 369px;
    font-size: 18px;
    line-height: 24px;
    margin: 11px 0 0;
  }
  @media (min-width: 1920px) {
    width: 415px;
    font-size: 20px;
    line-height: 26px;
    margin: 16px 0 0;
  }
`;

export const Button = styled.button`
  margin: 32px auto 0;
  padding: 14px 32px;
  font-family: 'Gilroy', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFF;
  background: #FF474D;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 71, 77, 0.8);
    transition: 0.3s;
  }
  
  @media (min-width: 1024px) {
    margin: 32px 0 0;
  }
  @media (min-width: 1920px) {
    padding: 15px 32px 16px 33px;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const TextWrapper = styled.div`
  width: 111px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px auto 0;
  @media (min-width: 1024px) {
    margin: 12px 0 0 38px;
  }
  @media (min-width: 1920px) {
    margin: 12px 0 0 48px;
    width: 124px;
  }
`;

export const TextAfterButton = styled.div`
  width: 87px;
  font-family: 'Gilroy', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #5C5C5C;
  @media (min-width: 1920px) {
    font-size: 16px;
    line-height: 19px;
    width: 100px;
  }
`;

export const Emoji = styled.img`
  width: 16px;
  height: 16px;
`;

export const BoxWrapper = styled.div`
  width: 869px;
  height: 869px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -46px 0 0 -449px;
  @media (min-width: 768px) {
    width: 999px;
    height: 999px;
    margin: 99px 0 0 -499px;
  }
  @media (min-width: 1024px) {
    position: relative;
    width: 1415px;
    height: 1473px;
    margin: -338px 0 0 -92px;
    z-index: -1;
  }
  @media (min-width: 1280px) {
    margin: -337px 0 0 -159px;
  }
  @media (min-width: 1440px) {
    margin: -337px 0 0 -63px;
  }
  @media (min-width: 1920px) {
    margin: -337px 0 0 70px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 670px;
  height: 659px;
  background: rgba(251, 36, 43, 0.6);
  border-radius: 88px;
  transform: rotate(-45deg);
  @media (min-width: 768px) {
    width: 999px;
    height: 999px;
    border-radius: 106px;
  }
  @media (min-width: 1024px) {
    width: 1032px;
    height: 1050px;
    border-radius: 137px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 615px;
  height: 615px;
  background: #FB242B;
  border-radius: 88px;
  @media (min-width: 768px) {
    width: 922px;
    height: 922px;
    border-radius: 106px;
  }
  @media (min-width: 1024px) {
    width: 965px;
    height: 965px;
    border-radius: 126px;
  }
`;


export const RhombsTop = styled.div`
  background: url("/assets/icons/preview-rhombs-top.png") no-repeat;
  background-size: contain;
  width: 163px;
  height: 124px;
  position: absolute;
  top: -171px;
  left: 207px;
  @media (min-width: 768px) {
    width: 245px;
    height: 182px;
    background-size: cover;
    left: 235px;
    top: -340px;
  }
  @media (min-width: 768px) {
    width: 193px;
    height: 146px;
    background-size: cover;
    left: -113px;
    top: 38px;
  }
  @media (min-width: 1440px) {
    left: -102px;
  }
`;

export const RhombsBottom = styled.div`
  background: url("/assets/icons/preview-rhombs-bottom.png") no-repeat;
  background-size: contain;
  width: 278px;
  height: 211px;
  position: absolute;
  bottom: 157px;
  left: 328px;
  @media (min-width: 768px) {
    width: 409px;
    height: 310px;
    background-size: cover;
    bottom: 120px;
    left: 406px;
  }
  @media (min-width: 1024px) {
    width: 329px;
    height: 249px;
    background-size: cover;
    bottom: -129px;
    left: 251px;
  }
  @media (min-width: 1280px) {
    left: 269px;
  }
  @media (min-width: 1440px) {
    left: 252px;
  }
`;

export const BoxInner = styled.div`
  position: relative;
  width: 430px;
  height: 430px;
  transform: rotate(45deg);
  @media (min-width: 1024px) {
    width: 927px;
    height: 430px;
    margin: 0 0 0 0;
  }
`;

export const DeviceLeft = styled.img`
  width: 168px;
  height: 274px;
  position: absolute;
  top: 11px;
  left: 231px;
  @media (min-width: 768px) {
    width: 260px;
    height: 426px;
    left: 244px;
    top: -89px;
  }
  @media (min-width: 1024px) {
    width: 240px;
    height: 405px;
    left: -192px;
    top: 109px;
  }
`;

export const DeviceRight = styled.img`
  min-width: 514px;
  height: 385px;
  position: absolute;
  top: -139px;
  right: -419px;
  @media (min-width: 768px) {
    min-width: 899px;
    height: 663px;
    top: -394px;
    right: -865px;
  }
  @media (min-width: 1024px) {
    min-width: 856px;
    height: 630px;
    top: -185px;
    right: 117px;
  }
`;

export const BlockWrapper = styled(DeviceWidth)`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
`;
