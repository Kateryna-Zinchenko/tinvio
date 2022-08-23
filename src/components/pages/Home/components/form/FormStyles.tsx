import styled from "styled-components";
import {DeviceWidth} from "../../../../../styles/global";

export const WrapperTrans = styled(DeviceWidth)`
  display: flex;
  width: 100%;
  height: 1070px;
  background: #F7F7F7;
  border-radius: 0 50px 50px 0;
  transform: skewY(8deg);
  margin: 70px 0 112px;
  @media (min-width: 1024px) {
    height: 474px;
    margin: 327px 0 311px;
  }
  @media (min-width: 1280px) {
    height: 474px;
    margin: 327px 0 311px -54px;
  }
  @media (min-width: 1920px) {
    margin: 327px 0 356px;
  }
`;

export const Wrapper = styled(DeviceWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 842px;
  background: #F7F7F7;
  margin: 340px 0 0;
  transform: skewY(-8deg);
  border-radius: 0 0 50px 0;
  @media (min-width: 1024px) {
    height: 397px;
    flex-direction: row;
    align-items: start;
    flex-wrap: wrap;
    padding: 0 40px;
    margin: 373px 0 0;
  }
  @media (min-width: 1280px) {
    padding: 24px 0 0 178px;
  }
  @media (min-width: 1440px) {
    padding: 0 0 0 178px;
  }
  @media (min-width: 1920px) {
    padding: 0 0 0 358px;
    height: 442px;
  }
`;

export const RhombsLeft = styled.div`
  background: url("/assets/images/rhombs-left-form.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 311px;
  height: 236px;
  top: -202px;
  left: -80px;
  z-index: -1;
  @media (min-width: 768px) {
    width: 245px;
    height: 185px;
    top: -150px;
    left: 16px;
  }
  @media (min-width: 1024px) {
    width: 151px;
    height: 114px;
    top: 26px;
    left: 480px;
  }
`;

export const RhombsRight = styled.div`
  background: url("/assets/images/rhombs-left-form.png") no-repeat;
  background-size: contain;
  position: absolute;
  width: 458px;
  height: 346px;
  bottom: 468px;
  right: -233px;
  z-index: -1;
  @media (min-width: 768px) {
    bottom: 450px;
    right: -140px;
  }
  @media (min-width: 1024px) {
    width: 351px;
    height: 266px;
    bottom: 38px;
    right: -194px;
  }
`;

export const H1 = styled.div`
  width: 310px;
  font-family: 'Gilroy';
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  text-align: center;
  color: #212121;
  margin: -260px 0 0;
  @media (min-width: 768px) {
    width: 477px;
    font-size: 32px;
    line-height: 39px;
    margin: -240px 0 0;
  }
  @media (min-width: 1024px) {
    width: 448px;
    line-height: 38px;
    text-align: left;
  }
  @media (min-width: 1280px) {
    width: 477px;
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: 1920px) {
    width: 580px;
    font-size: 44px;
    line-height: 54px;
  }
`;

export const FormBlock = styled.div`
  width: 375px;
  margin: 33px 0 0;
  padding: 16px;
  background: radial-gradient(95.51% 95.51% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(250, 250, 250, 0.6) 100%);
  border-radius: 36px;
  @media (min-width: 768px) {
    width: 489px;
    padding: 32px;
  }
  @media (min-width: 1024px) {
    margin: -238px 0 0 7px;
  }
  @media (min-width: 1280px) {
    margin: -238px 0 0 66px;
  }
  @media (min-width: 1440px) {
    margin: -238px 0 0 226px
  }
  @media (min-width: 1920px) {
    width: 504px;
  }
`;

export const FormBlockInner = styled.div`
  width: 343px;
  background: #FFFFFF;
  border-radius: 32px;
  @media (min-width: 768px) {
    width: 425px;
  }
  @media (min-width: 1920px) {
    width: 440px;
  }
`;
export const Title = styled.div`
  margin: 0 auto;
  padding: 40px 53px 0 56px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #212121;

  & span {
    color: #FF474D;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    width: 425px;
    padding: 48px 0 0;
    text-align: center;
  }
  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 34px;
  }
`;
export const Inputs = styled.div`
  margin: 32px auto 32px;
  width: 295px;
  @media (min-width: 768px) {
    width: 329px;
  }
  @media (min-width: 1920px) {
    width: 344px;
  }
`;

export const Input = styled.div`
  position: relative;
  margin: 0 0 16px;

  &:last-child {
    margin: 0 0 0;
  }
`;

export const InputField = styled.input<{ isEmpty:boolean }>`
  margin: 8px 0 0;
  padding: 11px 0 12px 16px;
  width: 100%;
  height: 40px;
  background: #F3F4F5;
  outline: none;
  border: ${({isEmpty}) => (isEmpty === true ? '1px solid #FF474D' : 'none')};
  border-radius: 8px;
  font-family: 'Inter' !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #212121;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #BDBDBD;
  }

  &:focus {
    border: 1px solid #D2D2D2;
  }

  @media (min-width: 1920px) {
    padding: 14px 0 15px 16px;
  }
`;

export const Caption = styled.div<{ isEmpty:boolean }>`
  display: ${({isEmpty}) => (isEmpty === true ? 'block' : 'none')};
  position: absolute;
  bottom: -19px;
  right: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #FF474D;
`;

export const InputTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #5C5C5C;
  @media (min-width: 1920px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Button = styled.button`
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  background: #FF474D;
  border: none;
  border-radius: 16px;
  padding: 14px 64px;
  margin: 48px 83px 0 80px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 71, 77, 0.8);
    transition: 0.3s;
  }
  
  @media (min-width: 768px) {
    display: block;
    margin: 32px auto 0;
  }
  @media (min-width: 1920px) {
    font-size: 20px;
    line-height: 25px;
    padding: 16px 72px;
    margin: 48px auto 0;
    border-radius: 19px;
  }
`;

export const TextAfterButton = styled.div`
  position: relative;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin: 12px 103px 0 101px;
  padding: 0 0 40px;
  color: #BDBDBD;

  &::after {
    position: absolute;
    content: url("/assets/icons/hands-emoji.png");
    width: 15px;
    height: 16px;
    top: -1px;
    right: 0;
  }

  @media (min-width: 768px) {
    margin: 14px 142px 0 144px;
  }
  @media (min-width: 1920px) {
    font-size: 16px;
    line-height: 19px;
    margin: 12px 156px 0 140px;
    padding: 0 0 48px;
    &::after {
      width: 16px;
      height: 18px;
      top: 2px;
      right: -12px;
    }
  }
`;

export const Map = styled.img`
  min-width: 559px;
  max-width: 559px;
  margin: 29px 0 0 -188px;
  @media (min-width: 768px) {
    min-width: 699px;
    max-width: 699px;
    margin: -85px 0 0 -164px;
    z-index: -1;
  }
  @media (min-width: 1024px) {
    min-width: 752px;
    max-width: 752px;
    margin: -483px 0 0 -246px;
  }
  @media (min-width: 1280px) {
    min-width: 987px;
    max-width: 987px;
    margin: -699px 0 0 -362px;
  }
  @media (min-width: 1440px) {
    margin: -674px 0 0 -338px;
  }
  @media (min-width: 1920px) {
    margin: -728px 0 0 -233px;
  }
`;






