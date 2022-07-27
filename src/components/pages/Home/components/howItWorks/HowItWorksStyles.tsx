import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -387px 0 0 0;
  height: 767px;
  background: #F7F7F7;  
  transform: skewY(-8deg);
  border-radius: 50px 0 0 50px;
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 954px;
  }
  @media (min-width: 1024px) {
    height: 649px;
  }
  @media (min-width: 1280px) {
    margin: -387px 0 0 54px;
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 1920px) {
    margin: 0 358px 0 0;
  }
`;

export const Rhombus = styled.div`
  position: absolute;
  width: 409px;
  height: 409px;
  top: 85px;
  right: -272px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%);
  border-radius: 64px;
  transform: rotate(-45deg);
  z-index: -1;
  @media (min-width: 768px) {
    top: -35px;
    right: -234px;
  }
  @media (min-width: 1280px) {
    width: 497px;
    height: 497px;
    top: -35px;
    right: -234px;  
    border-radius: 78px;
  }
`;


export const RhombsLeft = styled.div`
  background: url("/assets/images/rhombs-left-why-choose.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 200px;
  height: 151px;
  bottom: 118px;
  left: -153px;
  z-index: -1;
  @media (min-width: 768px) {
    bottom: 446px;    
    left: -86px;
    width: 297px;
    height: 225px;
    background-size: cover;
  }
  @media (min-width: 1024px) {
    bottom: -142px;
    left: -73px;
  }
  @media (min-width: 1280px) {
    bottom: -166px;
    left: -54px;
  }
  @media (min-width: 1440px) {
    bottom: -162px;
    left: 25px;
  }
  @media (min-width: 1920px) {
    bottom: -190px;
    left: 275px;
  }
`;

export const RhombsRight = styled.div`
  background: url("/assets/images/rhombs-right-why-choose.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 299px;
  height: 226px;
  bottom: -59px;
  right: -161px;
  @media (min-width: 768px) {
    bottom: 58px;
    right: -130px;
  }
  @media (min-width: 1024px) {
    width: 254px;
    height: 192px;
    bottom: 40px;
    right: -99px;
  }
  @media (min-width: 1280px) {
    bottom: 41px;
    right: -27px;
  }
  @media (min-width: 1440px) {
    bottom: 44px;
    right: 53px;
  }
  @media (min-width: 1920px) {
    bottom: 7px;
    right: 293px;
  }
`;

export const Inner = styled.div`
  transform: skewY(8deg);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 0 40px;
    flex-direction: row-reverse;
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 178px 0 0;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 170px 0 0
  }
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 0 0 358px;
  }
`;

export const H1 = styled.div`
  font-family: 'Gilroy',serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  color: #212121;
  padding: 115px 0 0 0;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 39px;
    padding: 85px 0 0;
  }
  @media (min-width: 1024px) {
    line-height: 38px;
    padding: 0;
  }
  @media (min-width: 1280px) {
    font-size: 36px;
    line-height: 44px;
    margin: -72px 0 0;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
  @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 54px;
  }
`;

export const Text = styled.div`
  width: 343px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  color: #5C5C5C;
  padding: 16px 0 0;
  @media (min-width: 768px) {
    font-size: 16px;
    width: 429px;
  }
  @media (min-width: 1024px) {
    padding: 17px 0 0;
    text-align: left;
    width: 356px;
  }
  @media (min-width: 1280px) {
    padding: 16px 0 0;
    width: 398px;
  }
  @media (min-width: 1440px) {
    width: 478px;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 24px;
    width: 574px;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 188px;
  height: 48px;
  margin: 32px auto 0;
  padding: 0 0 0 18px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #212121;
  border: none;
  border-radius: 16px;
  background-color: #fff;
  cursor: pointer;
  &::before {
    content: '';
    background: url('/assets/icons/button-play.svg') no-repeat;
    background-size: contain;
    position: absolute;
    width: 10px;
    height: 12px;
    left: 51px;
  }
  &:hover {
    background: #E0E0E1;
    transition: 0.3s;
  }
  @media (min-width: 1024px) {
    margin: 32px 0 0;
  }
  @media (min-width: 1920px) {
    width: 220px;
    height: 56px;
    font-size: 18px;
    line-height: 22px;
    &::before {
      width: 12px;
      height: 14px;
    }
  }
`;

export const PlayerWrapper = styled.div<{ videoUrl:string }>`
  position: fixed;
  top: 0;
  z-index: 8;
  background: #212121;
  opacity: 0.7;
  display: ${({videoUrl}) => (videoUrl !== '' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  cursor: pointer;
`;

export const Tabs = styled(DeviceWidth)`
  position: relative;
  margin: 49px auto 0;
  max-width: 100%;
  @media (min-width: 768px) {
    margin: 53px auto 0;
    padding: 18px 0 0 128px;
  }
  @media (min-width: 1024px) {
    margin: 0;
    padding: 21px 0 8px 444px;
  }
  @media (min-width: 1280px) {
    padding: 107px 0 8px 650px;
  }
  @media (min-width: 1440px) {
    padding: 107px 0 8px 733px;  
  }
  @media (min-width: 1920px) {
    padding: 107px 0 8px 1199px;
  }
`;

export const Tab1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 167px;
  height: 67px;
  background-color: #fff;
  border-radius: 12px;
  margin: 31px 0 0 24px;
  padding: 15px 0 0 0;
  transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);
  box-shadow: 4px 4px 13px 0 rgba(33,33,33,0.1);
  -webkit-box-shadow: 4px 4px 13px 0 rgba(33,33,33,0.1);
  -moz-box-shadow: 4px 4px 13px 0 rgba(33,33,33,0.1);
  @media (min-width: 768px) {
    border-radius: 18px;
    width: 252px;
    height: 102px;
    padding: 23px 0 0 0;
  }
  @media (min-width: 1280px) {
    width: 272px;
    height: 110px;
    border-radius: 19px;
    padding: 23px 0 0;
    margin: 31px 0 0 18px;
  }
`;

export const Tab2 = styled(Tab1)`
  margin: 40px 0 0 175px;
  width: 171px;
  height: 71px;
  @media (min-width: 768px) {
    width: 252px;
    height: 102px;
    margin: 54px 0 0 263px;
  }
  @media (min-width: 1280px) {
    width: 279px;
    height: 116px;
  }
`;

export const Tab3 = styled(Tab1)`
  margin: 24px 0 10px 12px;
  @media (min-width: 1280px) {
    width: 278px;
    height: 116px;
    margin: 24px 0 10px -7px;
  }
`;

export const StarsTab1 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-chats.png") no-repeat;
  background-size: contain;
  width: 35px;
  height: 26px;
  top: -37px;
  left: 86px;
  transform: rotate(-8deg);
  @media (min-width: 768px) {
    width: 51px;
    height: 39px;
    left: 131px;
    top: -54px;
  }
  @media (min-width: 1280px) {
    width: 55px;
    height: 42px;
    left: 140px;
    top: -57px;
  }
`;

export const StarsTab2 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-orders.png") no-repeat;
  background-size: contain;
  width: 49px;
  height: 27px;
  top: -48px;
  right: 0;
  transform: rotate(-8deg);
  @media (min-width: 768px) {
    width: 74px;
    height: 40px;
    right: 0;
    top: -66px;
  }
  @media (min-width: 1280px) {
    width: 80px;
    height: 43px;
    right: 2px;
    top: -70px;
  }
`;

export const StarsTopTab3 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-top-payments.png") no-repeat;
  background-size: contain;
  width: 32px;
  height: 23px;
  top: -42px;
  left: 46px;
  transform: rotate(-8deg);
  @media (min-width: 768px) {
    width: 47px;
    height: 33px;
    top: -60px;
    left: 46px;
  }
  @media (min-width: 1280px) {
    width: 50px;
    height: 35px;
    top: -64px;
    left: 72px;
  }
`;

export const StarsRightTab3 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-right-payments.png") no-repeat;
  background-size: contain;
  width: 31px;
  height: 36px;
  top: -22px;
  right: -36px;
  transform: rotate(-8deg);
  @media (min-width: 768px) {
    width: 45px;
    height: 54px;
    top: -35px;
    right: -45px;
  }
  @media (min-width: 1280px) {
    width: 49px;
    height: 58px;
    top: -30px;
    right: -54px;
  }
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 700;
  color: rgb(33, 33, 33);
  font-size: 14px;
  line-height: 14px;
  @media (min-width: 768px) {
    font-size: 19px;
    line-height: 24px;
  }
  @media (min-width: 1280px) {
    font-size: 21px;
    line-height: 26px;
  }
`;

export const TabText = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: rgb(92, 92, 92);
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  padding: 5px 0 0 0;
  @media (min-width: 768px) {
    font-size: 11px;
    line-height: 13px;
    width: 189px;
  }
  @media (min-width: 1280px) {
    padding: 11px 0 0;
    font-size: 12px;
    line-height: 15px;
    width: 192px;
  }
`;

export const TabText2 = styled(TabText)`
  width: 125px;
  @media (min-width: 768px) {
    width: 154px;
  }
  @media (min-width: 1280px) {
    width: 176px;
  }
`;

export const TabText3 = styled(TabText)`
  width: 120px;
  @media (min-width: 768px) {
    width: 157px;
  }
  @media (min-width: 1280px) {
    width: 176px;
  }
`;

export const ArrowChats = styled.div`
  background: url("/assets/icons/arrow-chats-orders.svg") no-repeat;
  background-size: contain;
  position: absolute;
  width: 82px;
  height: 55px;
  right: 27%;
  top: 15%;
  @media (min-width: 768px) {
    width: 125px;
    height: 82px;
    right: 31%;
    top: 24%;
  }
  @media (min-width: 1024px) {
    right: 17.5%;
    top: 24%;
  }
  @media (min-width: 1280px) {
    width: 135px;
    height: 89px;
    right: 16%;
    top: 35%;
  }
  @media (min-width: 1440px) {
    right: 19.5%;
    top: 35%;
  }
  @media (min-width: 1920px) {
    right: 15.5%;
    top: 35%;
  }
`;

export const ArrowOrders = styled.div`
  background: url("/assets/icons/arrow-orders-payments.svg") no-repeat;
  background-size: contain;
  position: absolute;
  width: 82px;
  height: 55px;
  left: 27%;
  top: 47%;
  @media (min-width: 768px) {
    width: 125px;
    height: 83px;
    left: 36%;
    top: 52%;
  }
  @media (min-width: 1024px) {
    left: 58%;
    top: 52%;
  }
  @media (min-width: 1280px) {
    width: 135px;
    height: 89px;
    left: 62%;
    top: 58%;
  }
  @media (min-width: 1440px) {
    left: 61%;
    top: 58%;
  }
  @media (min-width: 1920px) {
    left: 69.5%;
    top: 58%;
  }
`;

export const Icon1 = styled.div`
  background: url("/assets/icons/chats.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 71px;
  height: 71px;
  top: -25px;
  right: -28px;
  transform: rotate(-8deg);
  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
    top: -41px;
    right: -45px;
  }
  @media (min-width: 1280px) {
    width: 118px;
    height: 118px;
    top: -41px;
    right: -45px;
  }
  @media (min-width: 1440px) {
    width: 126px;
    height: 126px;
    top: -47px;
    right: -50px;
  }
`;
export const Icon2 = styled.div`
  background: url("/assets/icons/orders.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 71px;
  height: 71px;
  bottom: -36px;
  left: -19px;
  transform: rotate(-8deg);
  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
    bottom: -59px;
    left: -32px;
  }
  @media (min-width: 1280px) {
    width: 118px;
    height: 118px;
    bottom: -59px;
    left: -32px;
  }
  @media (min-width: 1440px) {
    width: 126px;
    height: 126px;
    bottom: -68px;
    left: -33px;
  }
`;
export const Icon3 = styled.div`
  background: url("/assets/icons/payments.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 71px;
  height: 71px;
  top: -25px;
  left: -12px;
  transform: rotate(-8deg);
  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
    top: -38px;
    left: -19px;
  }
  @media (min-width: 1280px) {
    width: 118px;
    height: 118px;
    top: -38px;
    left: -19px;
  }
  @media (min-width: 1440px) {
    width: 126px;
    height: 126px;
    top: -46px;
    left: -23px;
  }
`;



