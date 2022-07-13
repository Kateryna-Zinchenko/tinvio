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
`;

export const Rhombus = styled.div`
  position: absolute;
  width: 409px;
  height: 409px;
  top: 85px;
  right: -312px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 64px;
  transform: rotate(-45deg);
`;

export const RhombsLeft = styled.img`
  position: absolute;
  width: 200px;
  top: -30px;
  left: -115px;
`;

export const RhombsRight = styled.img`
  position: absolute;
  width: 299px;
  bottom: -166px;
  right: -178px;
`;

export const Inner = styled.div`
  position: relative;
  transform: skewY(8deg);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Button = styled.button`
  position: relative;
  width: 188px;
  height: 48px;
  margin: 32px 0 0;
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
`;

export const Tabs = styled(DeviceWidth)`
  position: relative;
  margin: 49px auto 0;
  max-width: 100%;
  @media (min-width: 768px) {
    margin: 53px 0 0;
  }
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 167px;
  height: 67px;
  background-color: #fff;
  border-radius: 12px;
  padding: 15px 0 0 0;
  transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);
  box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
  -webkit-box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
  -moz-box-shadow: 4px 4px 13px 0px rgba(33,33,33,0.1);
`;

export const StarsTab1 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-chats.png") no-repeat;
  width: 35px;
  height: 26px;
  margin: 0 0 0 133px;
`;

export const StarsTab2 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-orders.png") no-repeat;
  width: 49px;
  height: 27px;
  margin: 0 0 0 309px;
`;

export const StarsTopTab3 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-top-payments.png") no-repeat;
  width: 32px;
  height: 23px;
  margin: -32px 0 0 76px;
`;

export const StarsRightTab3 = styled.div`
  position: absolute;
  background: url("/assets/icons/stars-right-payments.png") no-repeat;
  width: 31px;
  height: 36px;
  margin: 11px 0 0 190px;
`;

export const Tab1 = styled(Tab)`
  margin: 31px 0 0 33px;
`;

export const Tab2 = styled(Tab)`
  margin: 34px 0 0 181px;
  width: 171px;
  height: 71px;
`;

export const Tab3 = styled(Tab)`
  margin: 13px 0 10px 17px;
`;


export const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 700;
  color: rgb(33, 33, 33);
  font-size: 14px;
  line-height: 14px;
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
`;

export const TabText2 = styled(TabText)`
  width: 125px;
`;

export const TabText3 = styled(TabText)`
  width: 120px;
`;

export const ArrowChats = styled.img`
  position: absolute;
  width: 82px;
  height: 55px;
  left: 199px;
  top: 68px;
`;

export const ArrowOrders = styled(ArrowChats)`
  left: 107px;
  top: 149px;
`;

export const Icon1 = styled.img`
  position: absolute;
  width: 71px;
  height: 71px;
  margin: -84px 0 0 159px;
`;
export const Icon2 = styled(Icon1)`
  margin: -44px 0 0 155px
`;
export const Icon3 = styled(Icon1)`
  margin: -112px 0 0 8px;
`;



