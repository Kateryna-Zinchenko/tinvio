import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

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
`;

export const Wrapper = styled.div`
  margin: 78px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  }

  &::before {
    position: absolute;
    content: url("/assets/icons/preview-stars.png");
    top: -34px;
    left: -18px;
  }
`;

export const TextBeforeButton = styled.div`
  width: 333px;
  margin: 16px auto 0;
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
`;

export const TextWrapper = styled.div`
  width: 111px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px auto 0;
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
`;

export const RhombsBottom = styled.div`
  background: url("/assets/icons/preview-rhombs-bottom.png") no-repeat;
  background-size: contain;
  width: 278px;
  height: 211px;
  position: absolute;
  bottom: 157px;
  left: 328px;
`;

export const BoxInner = styled.div`
  position: relative;
  width: 430px;
  height: 430px;
  transform: rotate(45deg);
`;

export const DeviceLeft = styled.img`
  width: 168px;
  height: 274px;
  position: absolute;
  top: 11px;
  left: 231px;
  @media (min-width: 768px) {
    max-width: 253px;
    left: 236px;
    top: -89px;
  }
`;

export const DeviceRight = styled.img`
  min-width: 514px;
  height: 385px;
  position: absolute;
  top: -139px;
  right: -419px;
  @media (min-width: 768px) {
    width: 879px;
  }
`;

export const BlockWrapper = styled(DeviceWidth)`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
`;
