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
    height: 927px;
  }
  @media (min-width: 1024px) {
    height: 649px;
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
  @media (min-width: 768px) {
    top: -35px;
    right: -234px;
  }
`;

export const WrapperRight = styled.div`
  @media (min-width: 1024px) {
    margin: -42px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WrapperLeft = styled.div`
  @media (min-width: 1024px) {
    margin: 43px 75px 0 0;
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
    bottom: 35px;
    right: -130px;
  }
  @media (min-width: 1024px) {
    width: 254px;
    height: 192px;
    bottom: 40px;
    right: -99px;
  }
`;

export const Inner = styled.div`
  position: relative;
  transform: skewY(8deg);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 0 40px;
    flex-direction: row-reverse;
  }
`;

export const H1 = styled.div`
  //width: 299px;
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
  @media (min-width: 1024px) {
    margin: 32px 0 0;
  }
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
    padding: 21px 0 8px 510px;
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
  box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
  -webkit-box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
  -moz-box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
  @media (min-width: 768px) {
    border-radius: 18px;
    width: 252px;
    height: 102px;
    padding: 23px 0 0 0;
  }
`;

export const Tab2 = styled(Tab1)`
  margin: 40px 0 0 175px;
  width: 171px;
  height: 71px;
  @media (min-width: 768px) {
    width: 252px;
    height: 102px;
    margin: 54px 0 0 259px;
  }
`;

export const Tab3 = styled(Tab1)`
  margin: 24px 0 10px 12px;
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
    right: 0px;
    top: -66px;
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
`;

export const TabText2 = styled(TabText)`
  width: 125px;
  @media (min-width: 768px) {
    width: 154px;
  }
`;

export const TabText3 = styled(TabText)`
  width: 120px;
  @media (min-width: 768px) {
    width: 157px;
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
    right: 11%;
    top: 24%;
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
    left: 64%;
    top: 52%;
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
`;



