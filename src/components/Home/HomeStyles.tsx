import styled from "styled-components";

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
    content: url("assets/icons/stars.png");
    top: -34px;
    left: -18px;
  }
`;

export const TextBeforeButton = styled.div`
  max-width: 333px;
  margin: 16px auto 0;
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #5C5C5C;
`;

export const Button = styled.button`
  margin: 32px auto 0;
  padding: 14px 32px;
  font-family: 'Gilroy',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFF;
  background: #FF474D;
  border: none;
  border-radius: 16px;
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
  font-family: 'Gilroy',serif;
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
  overflow: hidden;
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
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 615px;
  height: 615px;
  background: #FB242B;
  border-radius: 88px;
`;

export const RhombsTop = styled.div`
  background: url("/assets/icons/rhombsTop.png") no-repeat;
  background-size: contain;
  width: 163px;
  height: 124px;
  position: absolute;
  top: -236px;
  left: 163px;
`;

export const RhombsBottom = styled.div`
  background: url("/assets/icons/rhombsBottom.png") no-repeat;
  background-size: contain;
  width: 278px;
  height: 211px;
  position: absolute;
  top: 7px;
  left: 263px;
`;

export const BoxInner = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform: rotate(45deg);
`;

export const DeviceLeft = styled.img`
  width: 161px;
  position: absolute;
  top: 245px;
  left: 5px;
`;

export const DeviceRight = styled.img`
  width: 518px;
  position: absolute;
  top: 80px;
  left: 101px;
`;

export const BlockWrapper = styled.div`
  position: relative;
  width: 869px;
  height: 869px;
  z-index: -1;
`;

export const HowItWorksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 1000px;
  margin: -430px 0 0 -66px;
`;

export const HowItWorksInner = styled.div`
  position: relative;
  width: 869px;
  height: 869px;
  background-color: #F7F7F7;
  border-radius: 88px;
`;

export const HowItWorksRotated = styled.div`
  position: absolute;
  width: 2000px;
  height: 875px;
  //margin: -377px 0 0 0;
  background-color: #F7F7F7;
  transform: rotate(-8deg);
  top: -142px;
  left: 126px;
`;








